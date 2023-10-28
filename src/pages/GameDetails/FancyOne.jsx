import { useEffect, useState } from "react";

const FancyOne = ({ fancy1 }) => {

  const [previousData, setPreviousData] = useState(fancy1);
  const [changedPrices, setChangedPrices] = useState({});
  useEffect(() => {
    const newChangedPrices = {};
   if(fancy1.length > 0){
    fancy1.forEach((item, index) => {
      item.runners.forEach((runner, runnerIndex) => {
        const previousRunner = previousData[index]?.runners[runnerIndex];
        runner.back.forEach((backItem, backIndex) => {
          const previousBackItem = previousRunner?.back[backIndex];
          if (backItem.price !== previousBackItem?.price) {
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
    setPreviousData(fancy1);
   }
  }, [fancy1, previousData]);
  return (
    <>
    <div className="game-market market-6">
      <div className="market-title">
        <span>{fancy1[0]?.tabGroupName}</span>
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
          {fancy1?.map((odd) => {
            return (
              <div key={odd.id} className="col-md-6">
                <div
                  className={`${
                    odd?.status === "OPEN"
                      ? "fancy-market "
                      : "fancy-market suspended-row"
                  }`}
                  data-title={`${
                    odd?.status === "OPEN" ? "ACTIVATE" : "SUSPENDED"
                  }`}
                >
                  <div className="market-row">
                    <div className="market-nation-detail">
                      <span className="market-nation-name">
                        {odd?.name}
                      </span>
                    </div>

                    {odd?.runners.map((runner) =>
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

                    {odd?.runners?.map((runner) =>
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
                          Min: {odd?.minLiabilityPerBet}
                        </span>
                        <span className="w-100 d-block">
                          Max: {odd?.maxLiabilityPerMarket}
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

export default FancyOne;
