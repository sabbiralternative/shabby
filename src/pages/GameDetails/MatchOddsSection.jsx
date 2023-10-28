import { useEffect, useState } from "react";

const MatchOddsSection = ({ match_odds }) => {
  const [previousData, setPreviousData] = useState(match_odds);
  const [changedPrices, setChangedPrices] = useState({});

  useEffect(() => {
    const newChangedPrices = {};
    match_odds.forEach((item, index) => {
      item.runners.forEach((runner, runnerIndex) => {
        const previousRunner = previousData[index].runners[runnerIndex];
        runner.back.forEach((backItem, backIndex) => {
          const previousBackItem = previousRunner.back[backIndex];

          if (backItem.price !== previousBackItem.price) {
            newChangedPrices[`back-${runner.id}-${backIndex}`] = true;
            setChangedPrices({ ...newChangedPrices });
            setTimeout(() => {
              newChangedPrices[`back-${runner.id}-${backIndex}`] = false;

              setChangedPrices({ ...newChangedPrices });
            }, 300);
          }
        });
        runner.lay.forEach((layItem, layIndex) => {
          const previousLayItem = previousRunner.lay[layIndex];
          if (layItem.price !== previousLayItem.price) {
            newChangedPrices[`lay-${runner.id}-${layIndex}`] = true;
            setChangedPrices({ ...newChangedPrices });
            setTimeout(() => {
              newChangedPrices[`lay-${runner.id}-${layIndex}`] = false;
              setChangedPrices({ ...newChangedPrices });
            }, 300);
          }
        });
      });
    });
    setPreviousData(match_odds);
  }, [match_odds, previousData]);

  return (
    <>
      {match_odds?.map((item) => {
        return (
          <div key={item.id} className={`game-market market-4`}>
            <div className="market-title">
              <span>{item?.name.toUpperCase()}</span>
            </div>

            <div className="market-header">
              <div className="market-nation-detail">
                <span className="market-nation-name">
                  Max: {item?.maxLiabilityPerBet}
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

            <div className="market-body">
              {item?.runners?.map((runner) => {
                return (
                  <div
                    key={runner?.id}
                    className={`${
                      runner?.status === "OPEN" || runner?.status === "ACTIVE"
                        ? "market-row"
                        : " market-row suspended-row"
                    }`}
                    data-title={`${
                      runner?.status === "OPEN" || runner?.status === "ACTIVE"
                        ? "ACTIVATE"
                        : "SUSPENDED"
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

                    {runner.back.length === 1 && (
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
                        return (
                          <div
                            key={i}
                            className={`market-odd-box ${
                              i === 0 && runner.back.length !== 1 ? "back2" : ""
                            } ${i === 1 ? "back1" : ""} ${
                              i === 2 && runner ? "back" : ""
                            }
                            ${runner.back.length === 1 && i === 0 ? "back" : ""}
                            
                            ${
                              changedPrices[`back-${runner?.id}-${i}`]
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

                    {runner?.lay?.map((lay, i) => {
                      return (
                        <div
                          key={i}
                          className={`market-odd-box ${i === 0 ? "lay" : ""} ${
                            i === 1 ? "lay1" : ""
                          } ${i === 2 ? "lay2" : ""} ${
                            changedPrices[`lay-${runner.id}-${i}`]
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

                    {runner.lay.length === 1 && (
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

export default MatchOddsSection;
