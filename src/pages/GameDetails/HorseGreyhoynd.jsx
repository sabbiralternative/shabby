import { useEffect, useState } from "react";
import UseState from "../../hooks/UseState";

const HorseGreyhound = ({ data, exposer, setShowBets, setTotalSize }) => {
  const [previousData, setPreviousData] = useState(data);
  const [changedPrices, setChangedPrices] = useState({});
  const { setPlaceBetValue, placeBetValue } = UseState();

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
          if (placeBetValue?.selectionId === runner?.selectionId) {
            if (runner?.status !== "ACTIVE") {
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
            newChangedPrices[`back-${runner?.selectionId}-${backIndex}`] = true;
            setChangedPrices({ ...newChangedPrices });
            setTimeout(() => {
              newChangedPrices[
                `back-${runner?.selectionId}-${backIndex}`
              ] = false;

              setChangedPrices({ ...newChangedPrices });
            }, 300);
          }
        });
        runner?.ex?.availableToLay?.forEach((layItem, layIndex) => {
          const previousLayItem =
            previousRunner?.ex?.availableToLay?.[layIndex];
          if (layItem?.price !== previousLayItem?.price) {
            newChangedPrices[`lay-${runner?.selectionId}-${layIndex}`] = true;
            setChangedPrices({ ...newChangedPrices });
            setTimeout(() => {
              newChangedPrices[
                `lay-${runner?.selectionId}-${layIndex}`
              ] = false;
              setChangedPrices({ ...newChangedPrices });
            }, 300);
          }
        });
      });
    });
    setPreviousData(data);
  }, [data, previousData]);

  console.log(data);

  return (
    <>
      {data?.map((item) => {
        return (
          <div key={item.id} className={`game-market market-4`}>
            {/* <div className="market-title">
              <span style={{ display: "flex", alignItems: "center" }}>
                {item?.name?.toUpperCase()}
              </span>
            </div> */}

            <div className="market-header">
              <div className="market-nation-detail">
                {/* <span className="market-nation-name">
                  Max: {item?.maxLiabilityPerBet}
                </span> */}
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
                item?.status !== "OPEN" ? "suspended-row" : " "
              }`}
              data-title={`${item?.status !== "OPEN" ? "SUSPENDED" : ""}`}
            >
              {item?.runners?.map((runner) => {
                return (
                  <div
                    key={runner?.selectionId}
                    className={`${
                      runner?.status === "ACTIVE"
                        ? "market-row"
                        : " market-row suspended-row"
                    }`}
                    data-title={`${
                      runner?.status === "ACTIVE" ? "ACTIVATE" : "SUSPENDED"
                    }`}
                  >
                    <div
                      className={`
                               market-nation-detail
                          `}
                    >
                      <span className="market-nation-name">
                        {runner?.name}{" "}
                      </span>
                      <div className="market-nation-book"></div>
                    </div>

                    {runner?.ex?.availableToBack?.length === 1 && (
                      <>
                        <div className={`market-odd-box back2`}>
                          <span className="market-odd">-</span>
                        </div>

                        <div className={`market-odd-box back1`}>
                          <span className="market-odd">-</span>
                        </div>
                      </>
                    )}

                    {runner?.ex?.availableToBack
                      ?.slice()
                      ?.reverse()
                      ?.map((back, i) => {
                        const handlePlaceBackBet = () => {
                          if (runner?.status !== "ACTIVE") {
                            return;
                          }
                          const updatedPnl = [];
                          item?.runners?.forEach((runner) => {
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
                            price: back?.price,
                            side: 0,
                            selectionId: runner?.selectionId,
                            btype: item?.btype,
                            eventTypeId: item?.eventTypeId,
                            betDelay: item?.betDelay,
                            marketId: item?.id,
                            back: true,
                            name: item.runners.map((runner) => runner.name),
                            runnerId: item.runners.map(
                              (runner) => runner.selectionId
                            ),
                            selectedBetName: runner?.name,
                            pnl: updatedPnl,
                            isWeak: item?.isWeak,
                            maxLiabilityPerMarket: item?.maxLiabilityPerMarket,
                            isBettable: item?.isBettable,
                            maxLiabilityPerBet: item?.maxLiabilityPerBet,
                          });
                        };

                        return (
                          <div
                            onClick={handlePlaceBackBet}
                            key={i}
                            className={`market-odd-box ${
                              i === 0 &&
                              runner?.ex?.availableToBack?.length !== 1
                                ? "back2"
                                : ""
                            } ${i === 1 ? "back1" : ""} ${
                              i === 2 && runner ? "back" : ""
                            }
                            ${
                              runner?.ex?.availableToBack?.length === 1 &&
                              i === 0
                                ? "back"
                                : ""
                            }
                            
                            ${
                              changedPrices[`back-${runner?.selectionId}-${i}`]
                                ? "blink"
                                : ""
                            } `}
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

                    {runner?.ex?.availableToLay?.map((lay, i) => {
                      const handlePlaceLayBets = () => {
                        if (runner?.status !== "ACTIVE") {
                          return;
                        }
                        const updatedPnl = [];
                        item?.runners?.forEach((runner) => {
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
                          price: lay?.price,
                          side: 1,
                          selectionId: runner?.id,
                          btype: item?.btype,
                          eventTypeId: item?.marketId,
                          betDelay: item?.betDelay,
                          marketId: item?.id,
                          pnl: updatedPnl,
                          lay: true,
                          selectedBetName: runner?.name,
                          name: item.runners.map((runner) => runner.name),
                          runnerId: item.runners.map((runner) => runner.id),
                          isWeak: item?.isWeak,
                          maxLiabilityPerMarket: item?.maxLiabilityPerMarket,
                          isBettable: item?.isBettable,
                          maxLiabilityPerBet: item?.maxLiabilityPerBet,
                        });
                      };
                      return (
                        <div
                          onClick={handlePlaceLayBets}
                          key={i}
                          className={`market-odd-box ${i === 0 ? "lay" : ""} ${
                            i === 1 ? "lay1" : ""
                          } ${i === 2 ? "lay2" : ""} ${
                            changedPrices[`lay-${runner.selectionId}-${i}`]
                              ? "blink"
                              : ""
                          } `}
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

                    {runner?.ex?.availableToLay?.length === 1 && (
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

export default HorseGreyhound;
