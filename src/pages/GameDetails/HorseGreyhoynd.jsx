import { useEffect, useState } from "react";
import UseState from "../../hooks/UseState";

const HorseGreyhound = ({ data, exposer, setShowBets, setTotalSize }) => {
  const [previousData, setPreviousData] = useState(data);
  const [changedPrices, setChangedPrices] = useState({});
  const { setPlaceBetValue, placeBetValue } = UseState();
  const [timeDiff, setTimeDiff] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    if (!data?.[0]?.openDate) return;

    const targetDateStr = data[0].openDate;
    const [date, time] = targetDateStr.split(" ");
    const [day, month, year] = date.split("/");
    const [hour, minute, second] = time.split(":");

    const targetDate = new Date(year, month - 1, day, hour, minute, second);

    const initialTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        const currentDate = new Date();
        const diffInMs = targetDate - currentDate;

        if (diffInMs <= 0) {
          clearInterval(interval);
          setTimeDiff({ day: 0, hour: 0, minute: 0, second: 0 });
          return;
        }

        const day = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const hour = Math.floor(
          (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minute = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
        const second = Math.floor((diffInMs % (1000 * 60)) / 1000);

        setTimeDiff({ day, hour, minute, second });
      }, 1000);

      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(initialTimeout);
  }, []);

  /* exposer */
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  useEffect(() => {
    const newChangedPrices = {};
    data?.forEach((item, index) => {
      item?.runners?.forEach((runner, runnerIndex) => {
        if (placeBetValue?.selectionId) {
          if (placeBetValue?.selectionId === runner?.id) {
            if (item?.status !== "OPEN") {
              setShowBets(false);
              setPlaceBetValue({});
            }
          }
        }
        const previousRunner = previousData[index]?.runners[runnerIndex];
        runner?.ex?.availableToBack?.forEach((backItem, backIndex) => {
          const previousBackItem =
            previousRunner?.ex?.availableToBack?.[backIndex];

          if (backItem?.price !== previousBackItem?.price) {
            newChangedPrices[`back-${runner?.id}-${backIndex}`] = true;
            setChangedPrices({ ...newChangedPrices });
            setTimeout(() => {
              newChangedPrices[`back-${runner?.id}-${backIndex}`] = false;

              setChangedPrices({ ...newChangedPrices });
            }, 300);
          }
        });
        runner?.ex?.availableToLay?.forEach((layItem, layIndex) => {
          const previousLayItem =
            previousRunner?.ex?.availableToLay?.[layIndex];
          if (layItem?.price !== previousLayItem?.price) {
            newChangedPrices[`lay-${runner?.id}-${layIndex}`] = true;
            setChangedPrices({ ...newChangedPrices });
            setTimeout(() => {
              newChangedPrices[`lay-${runner?.id}-${layIndex}`] = false;
              setChangedPrices({ ...newChangedPrices });
            }, 300);
          }
        });
      });
    });
    setPreviousData(data);
  }, [data, previousData]);

  const handlePlaceBet = (game, runner, price, type) => {
    if (game?.status !== "OPEN") {
      return;
    }
    const updatedPnl = [];
    game?.runners?.forEach((runner) => {
      const pnl = pnlBySelection?.find(
        (p) => p?.RunnerId === runner?.selectionId
      );
      if (pnl) {
        updatedPnl.push(pnl?.pnl);
      }
    });

    setTotalSize("");
    setShowBets(true);
    setPlaceBetValue({});
    setPlaceBetValue({
      price: price,
      side: 0,
      selectionId: runner?.id,
      btype: game?.btype,
      eventTypeId: game?.eventTypeId,
      betDelay: game?.betDelay,
      marketId: game?.id,
      back: type === "back",
      lay: type === "lay",
      name: game.runners.map((runner) => runner.horse_name),
      runnerId: game.runners.map((runner) => runner.id),
      selectedBetName: runner?.horse_name,
      pnl: updatedPnl,
      isWeak: game?.isWeak,
      maxLiabilityPerMarket: game?.maxLiabilityPerMarket,
      isBettable: game?.isBettable,
      maxLiabilityPerBet: game?.maxLiabilityPerBet,
    });
  };

  return (
    <div className="center-container" style={{ width: "100%" }}>
      <div className="detail-page-container">
        <div className="horse-banner">
          <img
            src="https://g1ver.sprintstaticdata.com/v42/static/front/img/10.png"
            className="img-fluid"
          />
          <div className="horse-banner-detail">
            <div className="text-success">OPEN</div>
            {timeDiff?.day ||
            timeDiff?.hour ||
            timeDiff?.minute ||
            timeDiff?.second ? (
              <div className="horse-timer">
                <span style={{ display: "flex", gap: "5px" }}>
                  {timeDiff?.day > 0 && (
                    <span>
                      {timeDiff?.day} <small>Day</small>
                    </span>
                  )}
                  {timeDiff?.hour > 0 && (
                    <span>
                      {timeDiff?.hour} <small>Hour</small>
                    </span>
                  )}
                  {timeDiff?.minute > 0 && (
                    <span>
                      {timeDiff?.minute} <small>Minutes</small>
                    </span>
                  )}
                  {timeDiff?.hour === 0 && timeDiff?.minute < 60 && (
                    <span>
                      {timeDiff?.second} <small>Seconds</small>
                    </span>
                  )}
                </span>
                <span>Remaining</span>
              </div>
            ) : null}

            <div className="time-detail">
              <p>{data?.[0]?.eventName}</p>
              <h5>
                <span>{data?.[0]?.openDate}</span>
                <span>| {data?.[0]?.raceType}</span>
              </h5>
            </div>
          </div>
        </div>
        <ul className="nav nav-tabs d-xl-none menu-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab">
              Odds
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab">
              Matched Bet (0)
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <i className="fas fa-tv"></i>
            </a>
          </li>
        </ul>
        {data?.map((game) => {
          return (
            <div key={game?.id} className="game-market market-12">
              <div className="market-title">
                <span>{game?.btype}</span>
              </div>
              <div className="market-header">
                <div className="market-nation-detail">
                  <span className="market-nation-name">
                    Max: {game?.maxLiabilityPerBet}
                  </span>
                </div>
                <div className="market-odd-box no-border d-none d-md-flex"></div>
                <div className="market-odd-box no-border d-none d-md-flex"></div>
                <div className="market-odd-box back">
                  <b>Back</b>
                </div>
                <div className="market-odd-box lay">
                  <b>Lay</b>
                </div>
                <div className="market-odd-box d-none d-md-flex"></div>
                <div className="market-odd-box no-border d-none d-md-flex"></div>
              </div>

              <div className="market-body" data-title="OPEN">
                {/* Desktop */}
                {game?.runners?.map((runner, idx) => {
                  return (
                    <div
                      key={runner?.id}
                      className={`${
                        game?.status === "OPEN"
                          ? "market-row"
                          : " market-row suspended-row"
                      }`}
                      data-title={`${
                        game?.status === "OPEN" ? "ACTIVATE" : "SUSPENDED"
                      }`}
                    >
                      <div className="market-nation-detail">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox-runner-0"
                            id="checkbox-runner-0"
                            value='{"mid":7737765680340,"sid":513570,"tno":0}'
                          />
                          <label className="form-check-label">
                            <div>
                              {idx + 1}
                              <br />({idx + 1})
                            </div>
                            <div>
                              <img src={runner?.image_id} />
                            </div>
                            <div>
                              <span className="market-nation-name">
                                <span>{runner?.horse_name}</span>
                                <span className="d-md-none horse-detail-arrow ms-1">
                                  <i className="fas fa-angle-down"></i>
                                </span>
                              </span>
                              <div className="jockey-detail d-none d-md-flex">
                                {runner?.jocky && (
                                  <span className="jockey-detail-box">
                                    <b>Jockey:</b>
                                    <span>{runner?.jocky}</span>
                                  </span>
                                )}
                                {runner?.trainer && (
                                  <span className="jockey-detail-box">
                                    <b>Trainer:</b>
                                    <span>{runner?.trainer}</span>
                                  </span>
                                )}
                                {runner?.age && (
                                  <span className="jockey-detail-box">
                                    <b>Age:</b>
                                    <span>{runner?.age}</span>
                                  </span>
                                )}
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div
                        onClick={() =>
                          handlePlaceBet(
                            game,
                            runner,
                            runner?.back?.[2]?.price,
                            "back"
                          )
                        }
                        className={`market-odd-box back2 d-none d-md-flex ${
                          changedPrices[`back-${runner?.id}-${idx}`]
                            ? "blink"
                            : ""
                        }`}
                      >
                        <span className="market-odd">
                          {runner?.back?.[2]?.price}
                        </span>
                        <span className="market-volume">
                          {runner?.back?.[2]?.size}
                        </span>
                      </div>
                      <div
                        onClick={() =>
                          handlePlaceBet(
                            game,
                            runner,
                            runner?.back?.[1]?.price,
                            "back"
                          )
                        }
                        className={`market-odd-box back1 d-none d-md-flex ${
                          changedPrices[`back-${runner?.id}-${idx}`]
                            ? "blink"
                            : ""
                        }`}
                      >
                        <span className="market-odd">
                          {" "}
                          {runner?.back?.[1]?.price}
                        </span>
                        <span className="market-volume">
                          {" "}
                          {runner?.back?.[1]?.size}
                        </span>
                      </div>
                      <div
                        onClick={() =>
                          handlePlaceBet(
                            game,
                            runner,
                            runner?.back?.[0]?.price,
                            "back"
                          )
                        }
                        className={`market-odd-box back ${
                          changedPrices[`back-${runner?.id}-${idx}`]
                            ? "blink"
                            : ""
                        }`}
                      >
                        <span className="market-odd">
                          {" "}
                          {runner?.back?.[0]?.price}
                        </span>
                        <span className="market-volume">
                          {" "}
                          {runner?.back?.[0]?.size}
                        </span>
                      </div>
                      <div
                        onClick={() =>
                          handlePlaceBet(
                            game,
                            runner,
                            runner?.lay?.[0]?.price,
                            "lay"
                          )
                        }
                        className={`market-odd-box lay ${
                          changedPrices[`lay-${runner.id}-${idx}`]
                            ? "blink"
                            : ""
                        }`}
                      >
                        <span className="market-odd">
                          {" "}
                          {runner?.lay?.[0]?.price}
                        </span>
                        <span className="market-volume">
                          {" "}
                          {runner?.lay?.[0]?.size}
                        </span>
                      </div>
                      <div
                        onClick={() =>
                          handlePlaceBet(
                            game,
                            runner,
                            runner?.lay?.[1]?.price,
                            "lay"
                          )
                        }
                        className={`market-odd-box lay1 d-none d-md-flex ${
                          changedPrices[`lay-${runner.id}-${idx}`]
                            ? "blink"
                            : ""
                        }`}
                      >
                        <span className="market-odd">
                          {" "}
                          {runner?.lay?.[1]?.price}
                        </span>
                        <span className="market-volume">
                          {" "}
                          {runner?.lay?.[1]?.size}
                        </span>
                      </div>
                      <div
                        onClick={() =>
                          handlePlaceBet(
                            game,
                            runner,
                            runner?.lay?.[2]?.price,
                            "lay"
                          )
                        }
                        className={`market-odd-box lay1 d-none d-md-flex ${
                          changedPrices[`lay-${runner.id}-${idx}`]
                            ? "blink"
                            : ""
                        }`}
                      >
                        <span className="market-odd">
                          {" "}
                          {runner?.lay?.[2]?.price}
                        </span>
                        <span className="market-volume">
                          {" "}
                          {runner?.lay?.[2]?.size}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorseGreyhound;
