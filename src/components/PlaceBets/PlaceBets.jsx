import { useEffect, useState } from "react";
import UseState from "../../hooks/UseState";
import { config } from "../../utils/config";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";

const PlaceBets = ({
  showBets,
  placeBetValue,
  setShowBets,
  refetchCurrentBets,
  refetchExposure,
  setSuccessMessage,
  setErrorMessage,
}) => {
    /* price state */
  const [price, setPrice] = useState("");
    /* total size state */
  const [totalSize, setTotalSize] = useState("");
   /* profit state */
  const [profit, setProfit] = useState("");
    /* get button value from locale storage */
  const buttonValues = JSON.parse(localStorage.getItem("buttonValue"));
    /* Get button value state from context */
  const { buttonValue, SetButtonValue } = UseState();

  /* loading state */
  const [loader, setLoader] = useState(false);
  const orderApi = config?.result?.endpoint?.order;
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
        maxLiabilityPerBet:placeBetValue?.maxLiabilityPerBet
      },
    ]);
    setLoader(true);
    fetch(orderApi, {
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
       
          setLoader(false);
          setShowBets(false);
                  /* set notification */
          setSuccessMessage("Bet Place Successfully !");
        } else {
               /* setError message */
          setErrorMessage(data?.error?.status[0]?.description);
          setLoader(false);
          setShowBets(false);
          refetchExposure();
          refetchCurrentBets();
      
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
              <span>{placeBetValue?.name}</span>
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
              placeBetValue?.btype !== "FANCY"
                ? profit
                : null}
              {price &&
              totalSize &&
              placeBetValue?.lay &&
              placeBetValue?.btype !== "FANCY"
                ? totalSize
                : null}
              {price && totalSize && placeBetValue?.btype == "FANCY" ? 0 : null}
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
    </>
  );
};

export default PlaceBets;
