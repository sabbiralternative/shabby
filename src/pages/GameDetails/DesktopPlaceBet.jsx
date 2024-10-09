const DesktopPlaceBet = ({
  showBets,
  placeBetValue,
  loader,
  setPrice,
  price,
  handleDecreasePrice,
  handleIncreasePrice,
  setTotalSize,
  totalSize,
  profit,
  buttonValue,
  SetButtonValue,
  buttonValues,
  setShowBets,
  handleOrderBets,
}) => {
  return (
    <>
      {showBets && window.innerWidth > 1199 && placeBetValue && (
        <div className="sidebar-box place-bet-container">
          <div className="sidebar-title">
            <h4>Place Bet</h4>
          </div>
          <div
            className={`place-bet-box position-relative ${
              placeBetValue?.back ? "back" : ""
            } ${placeBetValue?.lay ? "lay" : ""}`}
          >
            {loader && (
              <div id="loader-section">
                <div id="load-inner">
                  <i className="fa fa-spinner fa-spin"></i>
                </div>
              </div>
            )}
            <div className="place-bet-box-header">
              <div className="place-bet-for">(Bet for)</div>
              <div className="place-bet-odds">Odds</div>
              <div className="place-bet-stake">Stake</div>
              <div className="place-bet-profit">Profit</div>
            </div>
            <div className="place-bet-box-body">
              <div className="place-bet-for">
                <span>{placeBetValue?.selectedBetName}</span>
              </div>
              <div className="place-bet-odds">
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  className="form-control"
                  disabled=""
                  value={price}
                />
                <div className="spinner-buttons input-group-btn btn-group-vertical">
                  <button onClick={handleIncreasePrice} className="btn-default">
                    <i className="fa fa-angle-up"></i>
                  </button>
                  <button onClick={handleDecreasePrice} className="btn-default">
                    <i className="fa fa-angle-down"></i>
                  </button>
                </div>
              </div>
              <div className="place-bet-stake">
                <input
                  onChange={(e) => setTotalSize(e.target.value)}
                  type="number"
                  className="form-control"
                  value={totalSize}
                />
              </div>
              <div className="place-bet-profit">
                {price &&
                totalSize &&
                placeBetValue?.back &&
                (placeBetValue?.btype === "MATCH_ODDS" ||
                  placeBetValue?.btype === "BOOKMAKER" ||
                  placeBetValue?.btype === "BOOKMAKER2")
                  ? profit
                  : null}
                {price &&
                totalSize &&
                placeBetValue?.lay &&
                (placeBetValue?.btype === "MATCH_ODDS" ||
                  placeBetValue?.btype === "BOOKMAKER" ||
                  placeBetValue?.btype === "BOOKMAKER2")
                  ? totalSize
                  : null}
                {price && totalSize && placeBetValue?.btype == "FANCY"
                  ? 0
                  : null}
              </div>
            </div>
            <div className="place-bet-buttons">
              {buttonValues?.map((buttonVal) => {
                const handleButtonValue = (val) => {
                  setTotalSize(val.value);
                };
                return (
                  <>
                    <button
                      onClick={() => handleButtonValue(buttonVal)}
                      className="btn btn-place-bet"
                    >
                      {buttonVal?.label}
                    </button>
                  </>
                );
              })}
            </div>
            <div className="place-bet-action-buttons">
              <div onClick={() => SetButtonValue(!buttonValue)}>
                <button className="btn btn-info">Edit</button>
              </div>
              <div>
                <button
                  onClick={() => setShowBets(!showBets)}
                  className="btn btn-danger me-1"
                >
                  Reset
                </button>
                <button
                  onClick={handleOrderBets}
                  className="btn btn-success"
                  disabled=""
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DesktopPlaceBet;
