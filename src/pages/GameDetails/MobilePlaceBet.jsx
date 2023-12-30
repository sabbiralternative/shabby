import { useEffect } from "react";

const MobilePlaceBet = ({
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
  oddStake,
  oddStakeLay1,
  oddStakeLay2,
}) => {
  const updateElementClass = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      if (parseFloat(element.innerText) > 0) {
        element.removeAttribute("class");
        element.classList.add("text-success");
      } else {
        element.removeAttribute("class");
        element.classList.add("text-danger");
      }
    }
  };

  useEffect(() => {
    updateElementClass("oddOne");
    updateElementClass("oddTwo");
    updateElementClass("oddThree");
  }, [oddStake, oddStakeLay1, oddStakeLay2]);

  return (
    <>
      {showBets && window.innerWidth < 1200 && (
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
                          <i className="fa fa-spinner fa-spin"></i>
                        </div>
                      </div>
                    )}
                    <div className="row align-items-end">
                      <div className="col-6">
                        <b>{placeBetValue?.selectedBetName}</b>
                      </div>
                      <div className="col-6">
                        <div className="float-end">
                          <button
                            onClick={handleDecreasePrice}
                            className="stakeactionminus btn"
                          >
                            <span className="fa fa-minus"></span>
                          </button>
                          <input
                            onChange={(e) => setPrice(e.target.value)}
                            type="text"
                            className="stakeinput"
                            disabled=""
                            value={price}
                          />
                          <button
                            onClick={handleIncreasePrice}
                            className="stakeactionminus btn"
                          >
                            <span className="fa fa-plus"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-4">
                        <input
                          onChange={(e) => setTotalSize(e.target.value)}
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
                        const handleButtonValue = (val) => {
                          setTotalSize(val.value);
                        };
                        return (
                          <button
                            key={i}
                            onClick={() => handleButtonValue(buttonVal)}
                            className="btn btn-place-bet"
                          >
                            {buttonVal?.label}
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
                      <button className="btn btn-info">Edit</button>
                    </div>

                    {placeBetValue?.btype === "MATCH_ODDS" ||
                    placeBetValue?.btype === "BOOKMAKER" ||
                    placeBetValue?.btype === "BOOKMAKER2" ? (
                      <>
                        <div className="row mt-2">
                          <div className="col-4">
                            <span>{placeBetValue?.name[0]}</span>
                          </div>

                          <div className="col-4 text-center">
                            {placeBetValue?.pnl?.length > 0 && (
                              <span
                                className={`${
                                  placeBetValue?.pnl &&
                                  placeBetValue?.pnl[0] > 0
                                    ? "text-success"
                                    : "text-danger"
                                }`}
                              >
                                {placeBetValue?.pnl[0]}
                              </span>
                            )}
                          </div>

                          <div className="col-4 text-end">
                            <span id="oddOne">
                              {oddStake !== 0 &&
                                totalSize?.length > 0 &&
                                placeBetValue?.selectedBetName ===
                                  placeBetValue?.name[0] &&
                                oddStake}
                              {oddStake !== 0 &&
                                totalSize?.length > 0 &&
                                placeBetValue?.selectedBetName !==
                                  placeBetValue?.name[0] &&
                                oddStakeLay1}
                            </span>
                          </div>
                        </div>

                        <div className="row mt-2">
                          <div className="col-4">
                            <span>
                              {placeBetValue?.name?.length > 0
                                ? placeBetValue?.name[1]
                                : null}
                            </span>
                          </div>

                          <div className="col-4 text-center">
                            {placeBetValue?.pnl?.length > 1 && (
                              <span
                                className={`${
                                  placeBetValue?.pnl &&
                                  placeBetValue?.pnl[1] > 0
                                    ? "text-success"
                                    : "text-danger"
                                }`}
                              >
                                {placeBetValue?.pnl[1]}
                              </span>
                            )}
                          </div>

                          <div className="col-4 text-end">
                            <span id="oddTwo">
                              {placeBetValue?.back &&
                                oddStake !== 0 &&
                                totalSize?.length > 0 &&
                                placeBetValue?.selectedBetName ===
                                  placeBetValue?.name[1] &&
                                oddStake}

                              {placeBetValue?.back &&
                                oddStake !== 0 &&
                                totalSize?.length > 0 &&
                                placeBetValue?.selectedBetName !==
                                  placeBetValue?.name[1] &&
                                oddStakeLay1}

                              {placeBetValue?.lay &&
                                oddStake !== 0 &&
                                totalSize?.length > 0 &&
                                placeBetValue?.selectedBetName ===
                                  placeBetValue?.name[1] &&
                                oddStake}

                              {placeBetValue?.lay &&
                                oddStake !== 0 &&
                                totalSize?.length > 0 &&
                                placeBetValue?.selectedBetName !==
                                  placeBetValue?.name[1] &&
                                oddStakeLay1}
                            </span>
                          </div>
                        </div>

                        {placeBetValue?.name?.length > 2 && (
                          <div className="row mt-2">
                            <div className="col-4">
                              <span>
                                {placeBetValue?.name?.length > 2
                                  ? placeBetValue?.name[2]
                                  : null}
                              </span>
                            </div>

                            <div className="col-4 text-center">
                              {placeBetValue?.pnl?.length > 0 && (
                                <span
                                  className={`${
                                    placeBetValue?.pnl &&
                                    placeBetValue?.pnl[2] > 0
                                      ? "text-success"
                                      : "text-danger"
                                  }`}
                                >
                                  {placeBetValue?.pnl[2]}
                                </span>
                              )}
                            </div>

                            <div className="col-4 text-end">
                              <span id="oddThree">
                                {placeBetValue?.back &&
                                  oddStake !== 0 &&
                                  totalSize?.length > 0 &&
                                  placeBetValue?.selectedBetName ===
                                    placeBetValue?.name[1] &&
                                  oddStake}

                                {placeBetValue?.back &&
                                  oddStake !== 0 &&
                                  totalSize?.length > 0 &&
                                  placeBetValue?.selectedBetName !==
                                    placeBetValue?.name[1] &&
                                  oddStakeLay2}

                                {placeBetValue?.lay &&
                                  oddStake !== 0 &&
                                  totalSize?.length > 0 &&
                                  placeBetValue?.selectedBetName ===
                                    placeBetValue?.name[1] &&
                                  oddStake}

                                {placeBetValue?.lay &&
                                  oddStake !== 0 &&
                                  totalSize?.length > 0 &&
                                  placeBetValue?.selectedBetName !==
                                    placeBetValue?.name[1] &&
                                  oddStakeLay2}
                              </span>
                            </div>
                          </div>
                        )}
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
