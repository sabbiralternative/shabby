import { useEffect, useState } from "react";
import UseState from "../../hooks/UseState";

import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import { API, settings } from "../../utils";
import { useNavigate, useParams } from "react-router-dom";
import handleCashoutPlaceBet from "../../utils/handleCashoutPlaceBet";
import { isGameSuspended } from "../../utils/isGameSuspended";
import SpeedCashOut from "../../components/Modal/SpeedCashOut";

const BookmarkerSection = ({
  bookmarker,
  exposer,
  setShowBets,
  setTotalSize,
  booksValue,
  totalSize,
}) => {
  const [speedCashOut, setSpeedCashOut] = useState(null);
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [teamProfit, setTeamProfit] = useState([]);
  const token = localStorage.getItem("token");
  const [showLadder, setShowLadder] = useState(false);
  const [ladderData, setLadderData] = useState([]);
  const [previousData, setPreviousData] = useState(bookmarker);
  const [changedPrices, setChangedPrices] = useState({});
  const { setPlaceBetValue, placeBetValue } = UseState();

  /* exposer */
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  /* Ladder api */
  const handleLader = (marketId) => {
    /* Random token */
    const generatedToken = UseTokenGenerator();
    /* Encrypt post data */
    const encryptedData = UseEncryptData(generatedToken);
    setShowLadder(!showLadder);
    fetch(`${API.ladder}/${marketId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(encryptedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLadderData(data.result);
        }
      });
  };
  /* Blink color */
  useEffect(() => {
    const newChangedPrices = {};
    bookmarker?.forEach((item, index) => {
      item?.runners?.forEach((runner, runnerIndex) => {
        if (placeBetValue?.selectionId) {
          if (placeBetValue?.selectionId === runner?.id) {
            if (runner?.status !== "OPEN") {
              setShowBets(false);
              setPlaceBetValue({});
            }
          }
        }
        const previousRunner = previousData?.[index]?.runners[runnerIndex];
        runner?.back?.forEach((backItem, backIndex) => {
          const previousBackItem = previousRunner?.back?.[backIndex];

          if (backItem?.price !== previousBackItem?.price) {
            newChangedPrices[`back-${runner?.id}-${backIndex}`] = true;
            setChangedPrices({ ...newChangedPrices });
            setTimeout(() => {
              newChangedPrices[`back-${runner?.id}-${backIndex}`] = false;

              setChangedPrices({ ...newChangedPrices });
            }, 300);
          }
        });
        runner?.lay?.forEach((layItem, layIndex) => {
          const previousLayItem = previousRunner?.lay?.[layIndex];
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
    setPreviousData(bookmarker);
  }, [bookmarker, previousData]);

  const computeExposureAndStake = (
    exposureA,
    exposureB,
    runner1,
    runner2,
    gameId,
  ) => {
    let runner,
      largerExposure,
      layValue,
      oppositeLayValue,
      lowerExposure,
      speedCashOut;

    const pnlArr = [exposureA, exposureB];
    const isOnePositiveExposure = onlyOnePositive(pnlArr);

    if (exposureA > exposureB) {
      // Team A has a larger exposure.
      runner = runner1;
      largerExposure = exposureA;
      layValue = 1 + Number(runner1?.lay?.[0]?.price) / 100;
      oppositeLayValue = 1 + Number(runner2?.lay?.[0]?.price) / 100;
      lowerExposure = exposureB;
    } else {
      // Team B has a larger exposure.
      runner = runner2;
      largerExposure = exposureB;
      layValue = 1 + Number(runner2?.lay?.[0]?.price) / 100;
      oppositeLayValue = 1 + Number(runner1?.lay?.[0]?.price) / 100;
      lowerExposure = exposureA;
    }

    if (exposureA > 0 && exposureB > 0) {
      const difference = Math.abs(exposureA - exposureB);
      if (difference <= 10) {
        speedCashOut = true;
      }
    }

    // Compute the absolute value of the lower exposure.
    let absLowerExposure = Math.abs(lowerExposure);

    // Compute the liability for the team with the initially larger exposure.
    let liability = absLowerExposure * (layValue - 1);

    // Compute the new exposure of the team with the initially larger exposure.
    let newExposure = largerExposure - liability;

    // Compute the profit using the new exposure and the lay odds of the opposite team.
    let profit = newExposure / layValue;

    // Calculate the new stake value for the opposite team by adding profit to the absolute value of its exposure.
    let newStakeValue = absLowerExposure + profit;

    // Return the results.
    return {
      runner,
      newExposure,
      profit,
      newStakeValue,
      oppositeLayValue,
      gameId,
      isOnePositiveExposure,
      exposureA,
      exposureB,
      runner1,
      runner2,
      speedCashOut,
    };
  };
  function onlyOnePositive(arr) {
    let positiveCount = arr?.filter((num) => num > 0).length;
    return positiveCount === 1;
  }
  useEffect(() => {
    let results = [];
    if (
      bookmarker?.length > 0 &&
      exposer?.pnlBySelection &&
      Object.keys(exposer?.pnlBySelection)?.length > 0
    ) {
      bookmarker.forEach((game) => {
        const runners = game?.runners || [];
        if (runners?.length === 2) {
          const runner1 = runners[0];
          const runner2 = runners[1];

          const runner1back = runner1?.back?.[0]?.price;
          const runner1Lay = runner1?.lay?.[0]?.price;
          const runner2back = runner2?.back?.[0]?.price;
          const runner2Lay = runner2?.lay?.[0]?.price;

          const pnl1 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner1?.id,
          )?.pnl;
          const pnl2 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner2?.id,
          )?.pnl;

          if (
            pnl1 &&
            pnl2 &&
            runner1 &&
            runner2 &&
            runner1back &&
            runner1Lay &&
            runner2back &&
            runner2Lay
          ) {
            const result = computeExposureAndStake(
              pnl1,
              pnl2,
              runner1,
              runner2,
              game?.id,
            );
            results.push(result);
          }
        }
      });
      setTeamProfit(results);
    } else {
      setTeamProfit([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookmarker, eventId, exposer]);

  return (
    <>
      {speedCashOut && (
        <SpeedCashOut
          speedCashOut={speedCashOut}
          setSpeedCashOut={setSpeedCashOut}
        />
      )}
      {showLadder && (
        <>
          <div className="fade modal-backdrop show"></div>
          <div
            role="dialog"
            aria-modal="true"
            className="fade modal show"
            tabIndex="-1"
            style={{
              display: "block",
            }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-title h4">Run Amount</div>
                  <button
                    onClick={() => setShowLadder(!showLadder)}
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Run</th>
                          <th className="text-end">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ladderData?.map(({ exposure, start, end }, i) => {
                          return (
                            <tr key={i}>
                              <td>
                                {start}-{end}
                              </td>
                              <td
                                className={`text-end ${
                                  exposure > 0 ? "text-success" : "text-danger"
                                }`}
                              >
                                {exposure}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {bookmarker?.map((bookmark) => {
        const teamProfitForGame = teamProfit?.find(
          (profit) =>
            profit?.gameId === bookmark?.id && profit?.isOnePositiveExposure,
        );
        const speedCashOut = teamProfit?.find(
          (profit) => profit?.gameId === bookmark?.id && profit?.speedCashOut,
        );
        return (
          <div key={bookmark?.id} className="game-market market-4">
            <div className="market-title">
              <span style={{ display: "flex", alignItems: "center" }}>
                {bookmark?.name.toUpperCase()}
              </span>
              {settings.cashout &&
                bookmark?.runners?.length !== 3 &&
                !speedCashOut && (
                  <button
                    onClick={() =>
                      handleCashoutPlaceBet(
                        bookmark,
                        "lay",
                        setTotalSize,
                        setShowBets,
                        setPlaceBetValue,
                        pnlBySelection,
                        token,
                        navigate,
                        teamProfitForGame,
                      )
                    }
                    style={{
                      cursor: `${
                        !teamProfitForGame ||
                        isGameSuspended(bookmark) ||
                        teamProfitForGame?.profit === 0
                          ? "not-allowed"
                          : "pointer"
                      }`,
                      opacity: `${
                        !teamProfitForGame ||
                        isGameSuspended(bookmark) ||
                        teamProfitForGame?.profit === 0
                          ? "0.6"
                          : "1"
                      }`,
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "none",
                      minWidth: "130px",
                    }}
                    disabled={
                      !teamProfitForGame ||
                      isGameSuspended(bookmark) ||
                      teamProfitForGame?.profit === 0
                    }
                    type="button"
                    className={` ${
                      teamProfitForGame?.profit > 0
                        ? "btn-success"
                        : teamProfitForGame?.profit < 0
                          ? "btn-danger"
                          : "cash-out-theme-bg"
                    }`}
                  >
                    <div>Cashout</div>

                    {teamProfitForGame?.profit !== 0 && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "start",
                          justifyContent: "flex-start",
                          marginLeft: "2px",
                        }}
                      >
                        <span
                          style={{
                            marginLeft: "2px",
                          }}
                        >
                          :
                        </span>
                        <span
                          style={{
                            marginLeft: "2px",
                          }}
                        >
                          ₹{" "}
                        </span>
                        <span style={{ overflow: "visible" }}>
                          {" "}
                          {teamProfitForGame?.profit?.toFixed(2)}
                        </span>
                      </div>
                    )}
                  </button>
                )}
              {settings.cashout &&
                bookmark?.runners?.length !== 3 &&
                speedCashOut && (
                  <button
                    style={{
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "none",
                      minWidth: "130px",
                      backgroundColor: "#82371b",
                      color: "white",
                    }}
                    onClick={() =>
                      setSpeedCashOut({
                        ...speedCashOut,
                        market_name: bookmark?.name,
                        event_name: bookmark?.eventName,
                      })
                    }
                    disabled={isGameSuspended(bookmark)}
                    type="button"
                  >
                    <div>Speed Cashout</div>
                  </button>
                )}
            </div>
            <div className="market-header">
              <div className="market-nation-detail">
                <span className="market-nation-name">
                  Max: {bookmark?.maxLiabilityPerBet}
                </span>
              </div>
              <div className="market-odd-box no-border d-none d-md-block"></div>
              <div className="market-odd-box no-border d-none d-md-block"></div>
              <div className="market-odd-box back">
                <b>Back</b>
              </div>
              <div className="market-odd-box lay">
                <b>Lay</b>
              </div>
              <div className="market-odd-box"></div>
              <div className="market-odd-box no-border"></div>
            </div>

            <div
              className={`market-body ${
                bookmark?.status !== "OPEN" ? "suspended-row" : " "
              }`}
              data-title={`${bookmark?.status !== "OPEN" ? "SUSPENDED" : ""}`}
            >
              {bookmark?.runners?.map((runner) => {
                const pnl = pnlBySelection?.filter(
                  (pnl) => pnl?.RunnerId === runner?.id,
                );
                const oddValues = booksValue?.filter(
                  (val) => val?.id === runner?.id,
                );
                return (
                  <div
                    key={runner?.id}
                    className={`${
                      runner?.status === "OPEN"
                        ? "market-row"
                        : " market-row suspended-row"
                    }`}
                    data-title={`${
                      runner?.status === "OPEN" ? "ACTIVATE" : "SUSPENDED"
                    }`}
                  >
                    <div className="market-nation-detail">
                      <span className="market-nation-name">
                        {runner?.name}{" "}
                      </span>
                      <div className="market-nation-book">
                        {pnl?.map(({ pnl, MarketId }, i) => {
                          return (
                            <span
                              onClick={() => handleLader(MarketId)}
                              key={i}
                              className={`market-book ${
                                pnl > 0 ? "text-success" : "text-danger"
                              }`}
                              style={{ cursor: "pointer" }}
                            >
                              {pnl}
                            </span>
                          );
                        })}
                        {oddValues?.map(({ updatedExposure, id }) => {
                          return (
                            <span
                              key={id}
                              className={`market-live-book d-none d-xl-block  ${
                                updatedExposure > 0
                                  ? "text-success"
                                  : "text-danger"
                              }`}
                            >
                              {totalSize != 0 && updatedExposure}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    {runner?.back?.length === 1 && (
                      <>
                        <div className={`market-odd-box back2`}>
                          <span className="market-odd">-</span>
                        </div>

                        <div className={`market-odd-box back1`}>
                          <span className="market-odd">-</span>
                        </div>
                      </>
                    )}
                    {runner?.back
                      ?.slice()
                      ?.reverse()
                      ?.map((back, i) => {
                        const handlePlaceBackBet = () => {
                          if (
                            bookmark?.status !== "OPEN" ||
                            runner?.status !== "OPEN"
                          ) {
                            return;
                          }
                          const updatedPnl = [];
                          bookmark?.runners?.forEach((rnr) => {
                            const pnl = pnlBySelection?.find(
                              (p) => p?.RunnerId === rnr?.id,
                            );
                            if (pnl) {
                              updatedPnl.push({
                                exposure: pnl?.pnl,
                                id: pnl?.RunnerId,
                                isBettingOnThisRunner: rnr?.id === runner?.id,
                                name: rnr?.name,
                                updatedExposure: pnl?.pnl,
                              });
                            } else {
                              updatedPnl.push({
                                exposure: 0,
                                id: rnr?.id,
                                isBettingOnThisRunner: rnr?.id === runner?.id,
                                name: rnr?.name,
                              });
                            }
                          });
                          setTotalSize("");
                          setShowBets(true);
                          setPlaceBetValue({});
                          setPlaceBetValue({
                            price: back?.price,
                            side: 0,
                            selectionId: runner?.id,
                            btype: bookmark?.btype,
                            eventTypeId: bookmark?.eventTypeId,
                            betDelay: bookmark?.betDelay,
                            exposure: updatedPnl,
                            selectedBetName: runner?.name,
                            marketId: bookmark?.id,
                            back: true,
                            name: bookmark.runners.map((runner) => runner.name),
                            runnerId: bookmark.runners.map(
                              (runner) => runner.id,
                            ),
                            isWeak: bookmark?.isWeak,
                            maxLiabilityPerMarket:
                              bookmark?.maxLiabilityPerMarket,
                            isBettable: bookmark?.isBettable,
                            maxLiabilityPerBet: bookmark?.maxLiabilityPerBet,
                          });
                        };
                        return (
                          <div
                            onClick={handlePlaceBackBet}
                            key={i}
                            className={`market-odd-box
                            ${
                              i === 0 && runner?.back?.length !== 1
                                ? "back2"
                                : ""
                            } 
                            ${runner?.back?.length === 1 ? "back" : ""} 
                             ${i === 1 ? "back1" : ""} ${i === 2 ? "back" : ""}
                        ${
                          changedPrices[`back-${runner?.id}-${i}`]
                            ? "blink"
                            : ""
                        }
                        `}
                          >
                            {back?.price || back?.size ? (
                              <>
                                <span className="market-odd">
                                  {back?.price}
                                </span>
                                <span className="market-volume">
                                  {back?.size}
                                </span>
                              </>
                            ) : (
                              <span className="market-odd">-</span>
                            )}
                          </div>
                        );
                      })}

                    {runner?.lay?.map((lay, i) => {
                      const handlePlaceLayBets = () => {
                        if (
                          bookmark?.status !== "OPEN" ||
                          runner?.status !== "OPEN"
                        ) {
                          return;
                        }
                        const updatedPnl = [];
                        bookmark?.runners?.forEach((rnr) => {
                          const pnl = pnlBySelection?.find(
                            (p) => p?.RunnerId === rnr?.id,
                          );
                          if (pnl) {
                            updatedPnl.push({
                              exposure: pnl?.pnl,
                              id: pnl?.RunnerId,
                              isBettingOnThisRunner: rnr?.id === runner?.id,
                              name: rnr?.name,
                              updatedExposure: pnl?.pnl,
                            });
                          } else {
                            updatedPnl.push({
                              exposure: 0,
                              id: rnr?.id,
                              isBettingOnThisRunner: rnr?.id === runner?.id,
                              name: rnr?.name,
                            });
                          }
                        });
                        setTotalSize("");
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: lay?.price,
                          side: 1,
                          runnerId: bookmark.runners.map((runner) => runner.id),
                          selectionId: runner?.id,
                          btype: bookmark?.btype,
                          eventTypeId: bookmark?.eventTypeId,
                          betDelay: bookmark?.betDelay,
                          marketId: bookmark?.id,
                          exposure: updatedPnl,
                          lay: true,
                          name: bookmark.runners.map((runner) => runner.name),
                          selectedBetName: runner?.name,
                          isWeak: bookmark?.isWeak,
                          maxLiabilityPerMarket:
                            bookmark?.maxLiabilityPerMarket,
                          isBettable: bookmark?.isBettable,
                          maxLiabilityPerBet: bookmark?.maxLiabilityPerBet,
                        });
                      };
                      return (
                        <div
                          onClick={handlePlaceLayBets}
                          key={i}
                          className={`market-odd-box ${i === 0 ? "lay" : ""} ${
                            i === 1 ? "lay1" : ""
                          } ${i === 2 ? "lay2" : ""}
                      ${changedPrices[`lay-${runner?.id}-${i}`] ? "blink" : ""}
                      `}
                        >
                          {lay?.price || lay?.size ? (
                            <>
                              <span className="market-odd">{lay?.price}</span>
                              <span className="market-volume">{lay?.size}</span>
                            </>
                          ) : (
                            <span className="market-odd">-</span>
                          )}
                        </div>
                      );
                    })}

                    {runner?.lay?.length === 1 && (
                      <>
                        <div className={`market-odd-box lay1`}>
                          <span className="market-odd">-</span>
                        </div>

                        <div className={`market-odd-box lay2`}>
                          <span className="market-odd">-</span>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BookmarkerSection;
