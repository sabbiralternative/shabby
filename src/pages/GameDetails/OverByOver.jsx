import { useEffect, useState } from "react";
import { config } from "../../utils/config";
import UseState from "../../hooks/UseState";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";

const OverByOver = ({ overByOver, setShowBets, exposer, setTotalSize }) => {
  const [previousData, setPreviousData] = useState(overByOver);
  const [changedPrices, setChangedPrices] = useState({});
  const laderApi = config?.result?.endpoint?.ladder;
  const [showLadder, setShowLadder] = useState(false);
  const [ladderData, setLadderData] = useState([]);
  const token = localStorage.getItem("token");
  const { setPlaceBetValue } = UseState();

  /* Exposer */
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }
/* Ladder api */
  const handleLadder = (marketId) => {
    const generatedToken = UseTokenGenerator();
    const encryptedData = UseEncryptData(generatedToken);
    setShowLadder(!showLadder);
    fetch(`${laderApi}/${marketId}`, {
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
    if (overByOver.length > 0) {
      overByOver.forEach((item, index) => {
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
            const previousLayItem = previousRunner?.lay[layIndex];
            if (layItem.price !== previousLayItem?.price) {
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
      setPreviousData(overByOver);
    }
  }, [overByOver, previousData]);
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

     {overByOver?.length > 0 && (
       <div className="game-market market-6">
       <div className="market-title">
         <span>{overByOver[0]?.tabGroupName}</span>
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
           {overByOver?.map((over) => {
             const pnl = pnlBySelection?.filter(
               (pnl) => pnl?.MarketId === over?.id
             );
             return (
               <div key={over.id} className="col-md-6">
                 <div
                   className={`${
                     over?.status === "OPEN"
                       ? "fancy-market "
                       : "fancy-market suspended-row"
                   }`}
                   data-title={`${
                     over?.status === "OPEN" ? "ACTIVATE" : "SUSPENDED"
                   }`}
                 >
                   <div className="market-row">
                     <div className="market-nation-detail">
                       <span className="market-nation-name">{over?.name}</span>
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

                     {over?.runners.map((runner) =>
                       runner.lay.map((lay, i) => {
                         const handlePlaceLayBet = () => {
                           setTotalSize("");
                           setShowBets(true);
                           setPlaceBetValue({});
                           setPlaceBetValue({
                             price: lay?.line,
                             side: 1,
                             selectionId: runner?.id,
                             btype: over?.btype,
                             eventTypeId: over?.eventTypeId,
                             betDelay: over?.betDelay,
                             maxLiabilityPerBet: over?.maxLiabilityPerBet,
                             minLiabilityPerBet: over?.minLiabilityPerBet,
                             marketId: over?.id,
                             lay: true,
                             selectedBetName:runner?.name,
                             isWeak: over?.isWeak,
                             maxLiabilityPerMarket:over?.maxLiabilityPerMarket,
                             isBettable:over?.isBettable
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

                     {over?.runners?.map((runner) =>
                       runner.back.map((back, i) => {
                         const handlePlaceBackBets = () => {
                           setTotalSize("");
                           setShowBets(true);
                           setPlaceBetValue({});
                           setPlaceBetValue({
                             price: back?.line,
                             side: 0,
                             selectionId: runner?.id,
                             btype: over?.btype,
                             eventTypeId: over?.eventTypeId,
                             betDelay: over?.betDelay,
                             marketId: over?.id,
                             maxLiabilityPerBet: over?.maxLiabilityPerBet,
                             minLiabilityPerBet: over?.minLiabilityPerBet,
                             back: true,
                             selectedBetName:runner?.name,
                             isWeak: over?.isWeak,
                             isBettable:over?.isBettable,
                             maxLiabilityPerMarket:over?.maxLiabilityPerMarket,
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
                           Min: {over?.minLiabilityPerBet}
                         </span>
                         <span className="w-100 d-block">
                           Max: {over?.maxLiabilityPerBet}
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
     )}
    </>
  );
};

export default OverByOver;
