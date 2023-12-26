const OneCard20 = ({
  data,
  setShowBets,
  setPlaceBetValue,
  lowExposure,
  highExposure,
  zeroIndexTwoRunnersEx,
  evenExposure,
}) => {
  return (
    <div className="casino-table">
      <div className="casino-table-full-box">
        <div className="onecard20oddbox onecard20player">
          <div className="casino-odds text-center">
            {data[0]?.runners[0]?.back[0]?.price}
          </div>
          {/*   <!-- key0 >> runner0 >> back >> price --> */}
          <div
            onClick={() => {
              setShowBets(true);
              setPlaceBetValue({});
              setPlaceBetValue({
                price: data[0]?.runners[0]?.back[0]?.price,
                side: 0,
                selectionId: data[0]?.runners[0]?.id,
                btype: data[0]?.btype,
                eventTypeId: data[0]?.eventTypeId,
                betDelay: data[0]?.betDelay,
                marketId: data[0]?.id,
                back: true,
                name: data[0]?.runners[0]?.name,
                isWeak: data[0]?.isWeak,
                maxLiabilityPerMarket:data[0]?.maxLiabilityPerMarket,
                isBettable:data[0]?.isBettable,
                maxLiabilityPerBet:data[0]?.maxLiabilityPerBet
              });
            }}
            className={`casino-odds-box back casino-odds-box-theme ${
              data[0]?.status === "OPEN" &&
              data[0]?.runners[0]?.status === "OPEN"
                ? ""
                : " suspended-box"
            }`}
          >
            {/* <!-- key0 >> status --> */}
            <span className="casino-odds">Player</span>
          </div>
          <div className="casino-nation-book text-center">
            <span
              className={`${
                lowExposure && lowExposure[0]?.pnl < 0
                  ? "text-danger"
                  : "text-success"
              }`}
            >
              {lowExposure ? lowExposure[0]?.pnl : null}
            </span>
          </div>
        </div>
        <div className="onecard20oddbox onecard20tie">
          <div className="casino-odds text-center">
            {" "}
            {data[0]?.runners[1]?.back[0]?.price}
          </div>
          {/*    <!-- key0 >> runner2 >> back >> price --> */}
          <div
            onClick={() => {
              setShowBets(true);
              setPlaceBetValue({});
              setPlaceBetValue({
                price: data[0]?.runners[1]?.back[0]?.price,
                side: 0,
                selectionId: data[0]?.runners[1]?.id,
                btype: data[0]?.btype,
                eventTypeId: data[0]?.eventTypeId,
                betDelay: data[0]?.betDelay,
                marketId: data[0]?.id,
                back: true,
                name: data[0]?.runners[1]?.name,
                isWeak: data[0]?.isWeak,
                maxLiabilityPerMarket:data[0]?.maxLiabilityPerMarket,
                isBettable:data[0]?.isBettable,
                maxLiabilityPerBet:data[0]?.maxLiabilityPerBet
              });
            }}
            className={`casino-odds-box back casino-odds-box-theme ${
              data[0]?.status === "OPEN" &&
              data[0]?.runners[1]?.status === "OPEN"
                ? ""
                : " suspended-box"
            }`}
          >
            {/* <!-- key0 >> status --> */}
            <span className="casino-odds">Tie</span>
          </div>
          <div className="casino-nation-book text-center">
            <span
              className={`${
                highExposure && highExposure[0]?.pnl < 0
                  ? "text-danger"
                  : "text-success"
              }`}
            >
              {highExposure ? highExposure[0]?.pnl : null}
            </span>
          </div>
        </div>
        <div className="onecard20oddbox onecard20dealer">
          <div className="casino-odds text-center">
            {" "}
            {data[0]?.runners[2]?.back[0]?.price}
          </div>
          {/*  <!-- key0 >> runner1 >> back >> price --> */}
          <div
            onClick={() => {
              setShowBets(true);
              setPlaceBetValue({});
              setPlaceBetValue({
                price: data[0]?.runners[2]?.back[0]?.price,
                side: 0,
                selectionId: data[0]?.runners[2]?.id,
                btype: data[0]?.btype,
                eventTypeId: data[0]?.eventTypeId,
                betDelay: data[0]?.betDelay,
                marketId: data[0]?.id,
                back: true,
                name: data[0]?.runners[2]?.name,
                isWeak: data[0]?.isWeak,
                maxLiabilityPerMarket:data[0]?.maxLiabilityPerMarket,
                isBettable:data[0]?.isBettable,
                maxLiabilityPerBet:data[0]?.maxLiabilityPerBet
              });
            }}
            className={`casino-odds-box back casino-odds-box-theme ${
              data[0]?.status === "OPEN" &&
              data[0]?.runners[2]?.status === "OPEN"
                ? ""
                : " suspended-box"
            }`}
          >
            {/*  <!-- key0 >> status --> */}
            <span className="casino-odds">Dealer</span>
          </div>
          <div className="casino-nation-book text-center">
            <span
              className={`${
                zeroIndexTwoRunnersEx && zeroIndexTwoRunnersEx[0]?.pnl < 0
                  ? "text-danger"
                  : "text-success"
              }`}
            >
              {zeroIndexTwoRunnersEx ? zeroIndexTwoRunnersEx[0]?.pnl : null}
            </span>
          </div>
        </div>
        <div className="onecard20oddbox onecard20pair">
          <div className="casino-odds text-center">
            {data[1]?.runners[0]?.back[0]?.price}
          </div>
          {/*     <!-- key1 >> runner0 >> back >> price --> */}
          <div
            onClick={() => {
              setShowBets(true);
              setPlaceBetValue({});
              setPlaceBetValue({
                price: data[1]?.runners[0]?.back[0]?.price,
                side: 0,
                selectionId: data[1]?.runners[0]?.id,
                btype: data[1]?.btype,
                eventTypeId: data[1]?.eventTypeId,
                betDelay: data[1]?.betDelay,
                marketId: data[1]?.id,
                back: true,
                name: data[1]?.runners[0]?.name,
                isWeak: data[1]?.isWeak,  maxLiabilityPerMarket:data[1]?.maxLiabilityPerMarket,
                isBettable:data[1]?.isBettable,
                maxLiabilityPerBet:data[1]?.maxLiabilityPerBet
              });
            }}
            className={`casino-odds-box back casino-odds-box-theme ${
              data[1]?.status === "OPEN" &&
              data[1]?.runners[0]?.status === "OPEN"
                ? ""
                : " suspended-box"
            }`}
          >
            {/*    <!-- key1 >> status --> */}
            <span className="casino-odds">Pair</span>
          </div>
          <div className="casino-nation-book text-center">
            <span
              className={`${
                evenExposure && evenExposure[0]?.pnl < 0
                  ? "text-danger"
                  : "text-success"
              }`}
            >
              {evenExposure ? evenExposure[0]?.pnl : null}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneCard20;
