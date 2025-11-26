import { FaSpinner } from "react-icons/fa";

const MobilePlaceBet = ({
  // betDelay,
  showBets,
  setShowBets,
  placeBetValue,
  loader,
  handleDecreasePrice,
  setPrice,
  price,
  handleIncreasePrice,
  totalSize,
  setTotalSize,
  handleOrderBets,
  profit,
  buttonValues,
  SetButtonValue,
  buttonValue,
  predictOdds,
  setIsCashOut,
}) => {
  const handleButtonValue = (value) => {
    setIsCashOut(false);
    const buttonValue = Number(value);
    const prevStake = totalSize === null ? null : Number(totalSize);

    if (prevStake === null) {
      setTotalSize(buttonValue);
    }
    if (prevStake >= 0) {
      setTotalSize(buttonValue + prevStake);
    }
  };
  return (
    <>
      {showBets && window.innerWidth < 1200 && placeBetValue && (
        <>
          <div className="fade modal-backdrop show"></div>
          <div
            role="dialog"
            aria-modal="true"
            className="fade modal show"
            tabIndex="-1"
            style={{
              paddingRight: "17px",
              display: "block",
            }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-title h4">Place Bet</div>
                  <button
                    onClick={() => setShowBets(false)}
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div
                    className={`place-bet-modal  ${
                      placeBetValue?.back ? "back" : ""
                    } ${placeBetValue?.lay ? "lay" : ""}`}
                  >
                    {loader && (
                      <div id="loader-section">
                        <div id="load-inner">
                          <span style={{ position: "relative" }}>
                            <FaSpinner size={25} />
                            {/* <span
                              style={{
                                position: "absolute",
                                right: "9px",
                                top: "4px",
                              }}
                            >
                              {betDelay > 0 && betDelay}
                            </span> */}
                          </span>
                          <span style={{ fontWeight: "500" }}>
                            Your bet is being processed...
                          </span>
                          <span
                            style={{ fontWeight: "500" }}
                            className="font-semibold"
                          >
                            Please Wait...
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="row align-items-end">
                      <div className="col-6">
                        <b>{placeBetValue?.selectedBetName}</b>
                      </div>
                      <div className="col-6">
                        <div className="float-end" style={{ display: "flex" }}>
                          {!placeBetValue?.isWeak && (
                            <button
                              onClick={handleDecreasePrice}
                              className="stakeactionminus btn"
                            >
                              <span className="fa fa-minus"></span>
                            </button>
                          )}

                          <input
                            onChange={(e) => {
                              setPrice(e.target.value);

                              setIsCashOut(false);
                            }}
                            type="text"
                            className="stakeinput"
                            disabled=""
                            value={price}
                          />
                          {!placeBetValue?.isWeak && (
                            <button
                              onClick={handleIncreasePrice}
                              className="stakeactionminus btn"
                            >
                              <span className="fa fa-plus"></span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-4">
                        <input
                          onChange={(e) => {
                            setTotalSize(e.target.value);
                            setIsCashOut(false);
                          }}
                          type="number"
                          className="stakeinput w-100"
                          value={totalSize}
                        />
                      </div>
                      <div onClick={handleOrderBets} className="col-4 d-grid">
                        <button className="btn btn-primary btn-block">
                          Submit
                        </button>
                      </div>
                      <div className="col-4 text-center pt-2">
                        <span>
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
                        </span>
                      </div>
                    </div>
                    <div className="place-bet-buttons mt-2">
                      {buttonValues?.map((buttonVal, i) => {
                        return (
                          <button
                            key={i}
                            onClick={() => handleButtonValue(buttonVal?.value)}
                            className="btn btn-place-bet"
                          >
                            {buttonVal?.value}
                          </button>
                        );
                      })}
                    </div>
                    <div
                      onClick={() => {
                        setShowBets(!showBets);
                        SetButtonValue(!buttonValue);
                      }}
                      className="mt-3 d-flex justify-content-between align-items-center"
                    >
                      {/* <button className="btn btn-info">Edit</button> */}
                    </div>

                    {placeBetValue?.btype === "MATCH_ODDS" ||
                    placeBetValue?.btype === "BOOKMAKER" ||
                    placeBetValue?.btype === "BOOKMAKER2" ? (
                      <>
                        {predictOdds?.map((predictOdd, i) => {
                          return (
                            <div key={i} className="row mt-2">
                              <div className="col-4">
                                <span>{predictOdd?.name}</span>
                              </div>

                              <div className="col-4 text-center">
                                {predictOdd?.exposure > 0 && (
                                  <span
                                    className={`${
                                      predictOdd?.exposure &&
                                      predictOdd?.exposure > 0
                                        ? "text-success"
                                        : "text-danger"
                                    }`}
                                  >
                                    {predictOdd?.exposure !== 0 &&
                                      predictOdd?.exposure}
                                  </span>
                                )}
                              </div>

                              <div className="col-4 text-end">
                                <span
                                  className={`${
                                    predictOdd?.updateExposure &&
                                    predictOdd?.updateExposure > 0
                                      ? "text-success"
                                      : "text-danger"
                                  }`}
                                >
                                  {predictOdd?.updateExposure}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    ) : null}

                    {placeBetValue?.btype === "FANCY" && (
                      <p>
                        Range: {placeBetValue?.minLiabilityPerBet} to{" "}
                        {placeBetValue?.maxLiabilityPerBet}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobilePlaceBet;
