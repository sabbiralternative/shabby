import { useEffect, useState } from "react";

const NormalSection = ({ normal }) => {
  const [previousData, setPreviousData] = useState(normal);
  const [changedPrices, setChangedPrices] = useState({});

  useEffect(() => {
    const newChangedPrices = {};
   if(normal?.length > 0){
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
                    </div>

                    {fancyGame?.runners.map((runner) =>
                      runner.lay.map((lay, i) => {
                        return (
                          <div
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
                        return (
                          <div
                            key={i}
                            className={`market-odd-box back ${
                              changedPrices[`back-${runner.id}-${i}`]
                                ? "blink"
                                : ""
                            }`}
                          >
                            <span className="market-odd">{back.line}</span>
                            <span className="market-volume">{back.price}</span>
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
                          Max: {fancyGame?.maxLiabilityPerMarket}
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
