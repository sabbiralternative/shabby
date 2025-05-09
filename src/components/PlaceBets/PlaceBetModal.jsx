import { useEffect, useState } from "react";
// import UseState from "../../hooks/UseState";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import { API } from "../../utils";
import UseBalance from "../../hooks/UseBalance";

const PlaceBetModal = ({
  // showBets,
  placeBetValue,
  setShowBets,
  refetchCurrentBets,
  refetchExposure,
  setSuccessMessage,
  setErrorMessage,
}) => {
  const [, refetchBalance] = UseBalance();
  /* price state */
  const [price, setPrice] = useState("");
  /* total size state */
  const [totalSize, setTotalSize] = useState("");
  /* profit state */
  const [profit, setProfit] = useState("");
  /* get button value from locale storage */
  const buttonValues = JSON.parse(localStorage.getItem("buttonValue"));
  /* Get button value state from context */
  // const { buttonValue, SetButtonValue } = UseState();
  /* loading state */
  const [loader, setLoader] = useState(false);

  /* token */
  const token = localStorage.getItem("token");

  /* Set price in price state from placeBet value*/
  useEffect(() => {
    setPrice(placeBetValue?.price);
  }, [placeBetValue]);

  /* Profit */
  useEffect(() => {
    if (
      price &&
      totalSize &&
      placeBetValue?.back &&
      placeBetValue?.btype !== "FANCY"
    ) {
      const multiply = price * totalSize;
      setProfit(multiply - totalSize);
    }
  }, [price, totalSize, placeBetValue?.back, placeBetValue?.btype]);

  /* Handle bets */
  const handleOrderBets = () => {
    /* random token  */
    const generatedToken = UseTokenGenerator();
    /* encrypted data */
    const encryptedData = UseEncryptData([
      {
        betDelay: placeBetValue?.betDelay,
        btype: placeBetValue?.btype,
        eventTypeId: placeBetValue?.eventTypeId,
        marketId: placeBetValue?.marketId,
        price: price ? price : placeBetValue?.price,
        selectionId: placeBetValue?.selectionId,
        side: placeBetValue?.side,
        totalSize: totalSize,
        token: generatedToken,
        maxLiabilityPerMarket: placeBetValue?.maxLiabilityPerMarket,
        isBettable: placeBetValue?.isBettable,
        maxLiabilityPerBet: placeBetValue?.maxLiabilityPerBet,
      },
    ]);

    setLoader(true);
    fetch(API.order, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(encryptedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          /* refetch exposure and current bets after successfully placed bet */
          refetchExposure();
          refetchCurrentBets();
          refetchBalance();
          setLoader(false);
          setShowBets(false);
          /* set notification */
          setSuccessMessage("Bet Place Successfully !");
        } else {
          /* setError message */
          setErrorMessage(data?.error?.status[0]?.description);
          setLoader(false);
          setShowBets(false);
          // refetchExposure();
          // refetchCurrentBets();
        }
      });
  };

  /* Increase price bets */
  const handleIncreasePrice = () => {
    if (price == 1000 || placeBetValue?.isWeak === true) {
      return;
    } else if (price > 1.0 && price < 2) {
      setPrice((parseFloat(price) + 0.01).toFixed(2));
    } else if (price > 1.99 && price < 3) {
      setPrice((parseFloat(price) + 0.02).toFixed(2));
    } else if (price > 2.99 && price < 4) {
      setPrice((parseFloat(price) + 0.05).toFixed(2));
    } else if (price > 3.99 && price < 6) {
      setPrice((parseFloat(price) + 0.1).toFixed(1));
    } else if (price > 5.99 && price < 10) {
      setPrice((parseFloat(price) + 0.2).toFixed(1));
    } else if (price > 9.99 && price < 20) {
      setPrice((parseFloat(price) + 0.5).toFixed(1));
    } else {
      setPrice(parseFloat(price) + 1);
    }
  };

  /* Decrease price bets */
  const handleDecreasePrice = () => {
    if (price < 1.02 || placeBetValue?.isWeak === true) {
      return;
    } else if (price < 2) {
      setPrice((parseFloat(price) - 0.01).toFixed(2));
    } else if (price > 1.99 && price < 3) {
      setPrice((parseFloat(price) - 0.02).toFixed(2));
    } else if (price > 2.99 && price < 4) {
      setPrice((parseFloat(price) - 0.05).toFixed(2));
    } else if (price > 3.99 && price < 6) {
      setPrice((parseFloat(price) - 0.1).toFixed(1));
    } else if (price > 5.99 && price < 10) {
      setPrice((parseFloat(price) - 0.2).toFixed(1));
    } else if (price > 9.99 && price < 20) {
      setPrice((parseFloat(price) - 0.5).toFixed(1));
    } else {
      setPrice(parseFloat(price) - 1);
    }
  };
  return (
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
                    <b>{placeBetValue?.name}</b>
                  </div>
                  <div className="col-6">
                    <div className="float-end">
                      {placeBetValue?.btype !== "CASINO" && (
                        <button
                          onClick={handleDecreasePrice}
                          className="stakeactionminus btn"
                        >
                          <span className="fa fa-minus"></span>
                        </button>
                      )}

                      <input
                        onChange={(e) => setPrice(e.target.value)}
                        type="text"
                        className="stakeinput"
                        disabled=""
                        value={price}
                      />
                      {placeBetValue?.btype !== "CASINO" && (
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
                      {" "}
                      {price &&
                      totalSize &&
                      placeBetValue?.back &&
                      placeBetValue?.btype !== "FANCY"
                        ? profit
                        : null}
                      {price &&
                      totalSize &&
                      placeBetValue?.lay &&
                      placeBetValue?.btype !== "FANCY"
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
                {/* <div
                  onClick={() => {
                    setShowBets(!showBets);
                    SetButtonValue(!buttonValue);
                  }}
                  className="mt-3 d-flex justify-content-between align-items-center"
                >
                  <button className="btn btn-info">Edit</button>
                </div> */}
                {/* <div className="row mt-2">
                  <div className="col-4">
                    <span>Lazio</span>
                  </div>
                  <div className="col-4 text-center">
                    <span className="text-success"> 99</span>
                  </div>
                  <div className="col-4 text-end">
                    <span className="text-success">376</span>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-4">
                    <span>{placeBetValue?.name}</span>
                  </div>
                  <div className="col-4 text-center">
                    <span className="text-danger">-100</span>
                  </div>
                  <div className="col-4 text-end">
                    <span className="text-danger">-200</span>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-4">
                    <span>The Draw</span>
                  </div>
                  <div className="col-4 text-center">
                    <span className="text-danger">-100</span>
                  </div>
                  <div className="col-4 text-end">
                    <span className="text-danger">-200</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceBetModal;
