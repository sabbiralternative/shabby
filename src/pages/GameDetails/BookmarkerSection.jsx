import { useEffect, useState } from "react";

const BookmarkerSection = ({ bookmarker,exposer }) => {
  const [previousData, setPreviousData] = useState(bookmarker);
  const [changedPrices, setChangedPrices] = useState({});
  const obj = exposer?.pnlBySelection;
  const pnlBySelection = Object.values(obj);
  useEffect(() => {
    const newChangedPrices = {};
    bookmarker.forEach((item, index) => {
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
    setPreviousData(bookmarker);
  }, [bookmarker, previousData]);
  return (
    <>
      {bookmarker.map((bookmark) => {
        return (
          <div key={bookmark.id} className="game-market market-4">
            <div className="market-title">
              <span>{bookmark?.name.toUpperCase()}</span>
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
              {bookmark.runners.map((runner) => {
                const pnl = pnlBySelection?.filter(
                  (pnl) => pnl?.RunnerId === runner?.id
                );
                return (
                  <div
                    key={runner.id}
                    className={`${
                      runner.status === "OPEN"
                        ? "market-row"
                        : " market-row suspended-row"
                    }`}
                    data-title={`${
                      runner.status === "OPEN" ? "ACTIVATE" : "SUSPENDED"
                    }`}
                  >
                    <div className="market-nation-detail">
                      <span className="market-nation-name">{runner.name} </span>
                      <div className="market-nation-book">
                        {pnl?.map(({ pnl }, i) => {
                          return (
                            <span
                              key={i}
                              className={`market-book ${
                                pnl > 0 ? "text-success" : "text-danger"
                              }`}
                            >
                              {pnl}
                            </span>
                          );
                        })}
                      </div>
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
                              i === 0 ? "back" : ""
                            } ${i === 1 ? "back1" : ""} ${
                              i === 2 ? "back2" : ""
                            }
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

                    {runner.lay.map((lay, i) => {
                      return (
                        <div
                          key={i}
                          className={`market-odd-box ${i === 0 ? "lay" : ""} ${
                            i === 1 ? "lay1" : ""
                          } ${i === 2 ? "lay2" : ""}
                      ${changedPrices[`lay-${runner.id}-${i}`] ? "blink" : ""}
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

export default BookmarkerSection;
