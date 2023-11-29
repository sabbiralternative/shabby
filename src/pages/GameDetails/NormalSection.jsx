import { useEffect, useState } from "react";
import UseState from "../../hooks/UseState";
import { config } from "../../utils/config";

const NormalSection = ({ normal, setShowBets, exposer, setTotalSize }) => {
  const token = localStorage.getItem("token");
  const [previousData, setPreviousData] = useState(normal);
  const [changedPrices, setChangedPrices] = useState({});
  const { setPlaceBetValue } = UseState();
  const laderApi = config?.result?.endpoint?.ladder;
  const [showLadder, setShowLadder] = useState(false);
  const [ladderData, setLadderData] = useState([]);
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  const handleLadder = (marketId) => {
    setShowLadder(!showLadder);
    fetch(`${laderApi}/${marketId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLadderData(data.result);
        }
      });
  };
  useEffect(() => {
    const newChangedPrices = {};
    if (normal?.length > 0) {
      normal?.forEach((item, index) => {
        item?.runners?.forEach((runner, runnerIndex) => {
          const previousRunner = previousData[index]?.runners[runnerIndex];
          runner?.back?.forEach((backItem, backIndex) => {
            const previousBackItem = previousRunner?.back[backIndex];

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
            const previousLayItem = previousRunner?.lay[layIndex];
            if (layItem?.price !== previousLayItem?.price) {
              newChangedPrices[`lay-${runner.id}-${layIndex}`] = true;
              setChangedPrices({ ...newChangedPrices });
              setTimeout(() => {
                newChangedPrices[`lay-${runner?.id}-${layIndex}`] = false;
                setChangedPrices({ ...newChangedPrices });
              }, 300);
            }
          });
        });
      });
      setPreviousData(normal);
    }
  }, [normal, previousData]);

  return (
    <>
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

      <div className="game-market market-6">
        <div className="market-title">
          <span>{normal[0]?.tabGroupName}</span>
        </div>
        <div className="row row10">
          <div className="col-md-6">
            <div className="market-header">
              <div className="market-nation-detail"></div>
              <div className="market-odd-box lay">
                <b>No</b>
              </div>
              <div className="market-odd-box back">
                <b>Yes</b>
              </div>
              <div className="fancy-min-max-box"></div>
            </div>
          </div>
          <div className="col-md-6 d-none d-xl-block">
            <div className="market-header">
              <div className="market-nation-detail"></div>
              <div className="market-odd-box lay">
                <b>No</b>
              </div>
              <div className="market-odd-box back">
                <b>Yes</b>
              </div>
              <div className="fancy-min-max-box"></div>
            </div>
          </div>
        </div>
        <div className="market-body" data-title="OPEN">
          <div className="row row10">
            {normal?.map((fancyGame) => {
              const pnl = pnlBySelection?.filter(
                (pnl) => pnl?.MarketId === fancyGame?.id
              );

              return (
                <div key={fancyGame.id} className="col-md-6">
                  <div
                    className={`${
                      fancyGame?.status === "OPEN"
                        ? "fancy-market "
                        : "fancy-market suspended-row"
                    }`}
                    data-title={`${
                      fancyGame?.status === "OPEN" ? "ACTIVATE" : "SUSPENDED"
                    }`}
                  >
                    <div className="market-row">
                      <div className="market-nation-detail">
                        <span className="market-nation-name">
                          {fancyGame?.name}
                        </span>
                        {pnl?.map(({ pnl, MarketId }, i) => {
                          return (
                            <span
                              onClick={() => handleLadder(MarketId)}
                              key={i}
                              className={`market-book float-end  ${
                                pnl > 0 ? "text-success" : "text-danger"
                              }`}
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              {pnl}
                            </span>
                          );
                        })}
                      </div>

                      {fancyGame?.runners.map((runner) =>
                        runner.lay.map((lay, i) => {
                          const handlePlaceLayBet = () => {
                            setTotalSize('')
                            setShowBets(true);
                            setPlaceBetValue({});
                            setPlaceBetValue({
                              price: lay?.line,
                              side: 1,
                              selectionId: runner?.id,
                              btype: fancyGame?.btype,
                              eventTypeId: fancyGame?.eventTypeId,
                              maxLiabilityPerBet: fancyGame?.maxLiabilityPerBet,
                              minLiabilityPerBet: fancyGame?.minLiabilityPerBet,
                              betDelay: fancyGame?.betDelay,
                              marketId: fancyGame?.id,
                              lay: true,
                              name: runner?.name,
                              isWeak: fancyGame?.isWeak,
                            });
                          };

                          return (
                            <div
                              onClick={handlePlaceLayBet}
                              key={i}
                              className={`market-odd-box lay ${
                                changedPrices[`lay-${runner.id}-${i}`]
                                  ? "blink"
                                  : ""
                              }`}
                            >
                              <span className="market-odd">{lay.line}</span>
                              <span className="market-volume">{lay.price}</span>
                            </div>
                          );
                        })
                      )}

                      {fancyGame?.runners?.map((runner) =>
                        runner.back.map((back, i) => {
     
                          const handlePlaceBackBets = () => {
                            setTotalSize('')
                            setShowBets(true);
                            setPlaceBetValue({});
                            setPlaceBetValue({
                              price: back?.line,
                              side: 0,
                              selectionId: runner?.id,
                              btype: fancyGame?.btype,
                              eventTypeId: fancyGame?.eventTypeId,
                              maxLiabilityPerBet: fancyGame?.maxLiabilityPerBet,
                              minLiabilityPerBet: fancyGame?.minLiabilityPerBet,
                              betDelay: fancyGame?.betDelay,
                              marketId: fancyGame?.id,
                              back: true,
                              name: runner?.name,
                              isWeak: fancyGame?.isWeak,
                            });
                          };
                          return (
                            <div
                              onClick={handlePlaceBackBets}
                              key={i}
                              className={`market-odd-box back ${
                                changedPrices[`back-${runner.id}-${i}`]
                                  ? "blink"
                                  : ""
                              }`}
                            >
                              <span className="market-odd">{back.line}</span>
                              <span className="market-volume">
                                {back.price}
                              </span>
                            </div>
                          );
                        })
                      )}

                      <div className="fancy-min-max-box">
                        <div className="fancy-min-max">
                          <span className="w-100 d-block">
                            Min: {fancyGame?.minLiabilityPerBet}
                          </span>
                          <span className="w-100 d-block">
                            Max: {fancyGame?.maxLiabilityPerBet}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NormalSection;
