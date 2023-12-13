import { useEffect, useState } from "react";
import UseState from "../../hooks/UseState";
import { config } from "../../utils/config";
import useTokenGenerator from "../../hooks/UseTokenGenerator";

const BookmarkerSection = ({
  bookmarker,
  exposer,
  setShowBets,
  setTotalSize,
}) => {
  const token = localStorage.getItem("token");
  const laderApi = config?.result?.endpoint?.ladder;
  const [showLadder, setShowLadder] = useState(false);
  const [ladderData, setLadderData] = useState([]);
  const [previousData, setPreviousData] = useState(bookmarker);
  const [changedPrices, setChangedPrices] = useState({});
  const { setPlaceBetValue } = UseState();
  const generatedToken  = useTokenGenerator();
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  const updatedPnl = [];

  bookmarker?.forEach((item) => {
    item?.runners?.forEach((runner) => {
      const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
      if (pnl) {
        updatedPnl.push(pnl?.pnl);
      }
    });
  });

  const handleLader = (marketId) => {
    setShowLadder(!showLadder);
    fetch(`${laderApi}/${marketId}`, {
      method:"POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body:JSON.stringify({
        token:generatedToken
      })
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
                        const handlePlaceBackBet = () => {
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
                            pnl: updatedPnl,
                            oppositionName: bookmark.runners.map(
                              (runner) => runner.name
                            ),
                            marketId: bookmark?.id,
                            back: true,
                            name: runner?.name,
                            isWeak: bookmark?.isWeak,
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

                    {runner.lay.map((lay, i) => {
                      const handlePlaceLayBets = () => {
                        setTotalSize("");
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: lay?.price,
                          side: 1,
                          selectionId: runner?.id,
                          btype: bookmark?.btype,
                          eventTypeId: bookmark?.eventTypeId,
                          betDelay: bookmark?.betDelay,
                          marketId: bookmark?.id,
                          pnl: updatedPnl,
                          oppositionName: bookmark.runners.map(
                            (runner) => runner.name
                          ),
                          lay: true,
                          name: runner?.name,
                          isWeak: bookmark?.isWeak,
                        });
                      };
                      return (
                        <div
                          onClick={handlePlaceLayBets}
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
