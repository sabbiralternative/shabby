const PokerOneDay = ({
  data,
  setShowBets,
  setPlaceBetValue,
  lowExposure,
  highExposure,
  evenExposure,
  redExposure,
  a23Exposure,
  fourIndexZeroRunnersEx,
}) => {
  return (
    <div className="casino-table">
      <div className="casino-table-box">
        <div className="casino-table-left-box">
          <div className="casino-table-body">
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Player A</div>
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
                {/*   <!-- exposure afrer placing bet--> */}
              </div>
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
                    maxLiabilityPerMarket: data[0]?.maxLiabilityPerMarket,
                    isBettable: data[0]?.isBettable,
                    maxLiabilityPerBet: data[0]?.maxLiabilityPerBet,
                  });
                }}
                className={`casino-odds-box back ${
                  data[0]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                {/*     <!-- suspended-box  key0  >> status  --> */}
                <span className="casino-odds">
                  {data[0]?.runners[0]?.back[0]?.price}
                </span>
              </div>

              {/*   <!-- result0 >> runners0 >> back0 >>price   --> */}
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[0]?.runners[0]?.lay[0]?.price,
                    side: 1,
                    selectionId: data[0]?.runners[0]?.id,
                    btype: data[0]?.btype,
                    eventTypeId: data[0]?.eventTypeId,
                    betDelay: data[0]?.betDelay,
                    marketId: data[0]?.id,
                    lay: true,
                    name: data[0]?.runners[0]?.name,
                    isWeak: data[0]?.isWeak,
                    maxLiabilityPerMarket: data[0]?.maxLiabilityPerMarket,
                    isBettable: data[0]?.isBettable,
                    maxLiabilityPerBet: data[0]?.maxLiabilityPerBet,
                  });
                }}
                className={`casino-odds-box lay ${
                  data[0]?.status === "OPEN" ? "" : " suspended-box"
                } `}
              >
                {/*  <!-- suspended-box  key0  >> status  --> */}
                <span className="casino-odds">
                  {data[0]?.runners[0]?.lay[0]?.price}
                </span>
              </div>
              {/*     <!-- result0 >> runners0 >> lay0 >>price   --> */}
            </div>
          </div>
        </div>
        <div className="casino-table-box-divider"></div>
        <div className="casino-table-right-box">
          <div className="casino-table-body">
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Player B</div>
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
                {/*   <!-- exposure afrer placing bet--> */}
              </div>
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
                    maxLiabilityPerMarket: data[0]?.maxLiabilityPerMarket,
                    isBettable: data[0]?.isBettable,
                    maxLiabilityPerBet: data[0]?.maxLiabilityPerBet,
                  });
                }}
                className={`casino-odds-box back ${
                  data[0]?.status === "OPEN" ? "" : " suspended-box"
                } `}
              >
                {/*   <!-- suspended-box  key0  >> status  --> */}
                <span className="casino-odds">
                  {data[0]?.runners[1]?.back[0]?.price}
                </span>
              </div>
              {/*  <!-- result0 >> runners1 >> back0 >>price   --> */}
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[0]?.runners[1]?.lay[0]?.price,
                    side: 1,
                    selectionId: data[0]?.runners[1]?.id,
                    btype: data[0]?.btype,
                    eventTypeId: data[0]?.eventTypeId,
                    betDelay: data[0]?.betDelay,
                    marketId: data[0]?.id,
                    lay: true,
                    name: data[0]?.runners[1]?.name,
                    isWeak: data[0]?.isWeak,
                    maxLiabilityPerMarket: data[0]?.maxLiabilityPerMarket,
                    isBettable: data[0]?.isBettable,
                    maxLiabilityPerBet: data[0]?.maxLiabilityPerBet,
                  });
                }}
                className={`casino-odds-box lay ${
                  data[0]?.status === "OPEN" ? "" : " suspended-box"
                } `}
              >
                {/* <!-- suspended-box  key0  >> status  --> */}
                <span className="casino-odds">
                  {data[0]?.runners[1]?.lay[0]?.price}
                </span>
              </div>
              {/*   <!-- result0 >> runners1 >> lay0 >>price   --> */}
            </div>
          </div>
        </div>
      </div>
      <div className="poker1day-other-odds">
        <div className="casino-table-left-box">
          <div className="w-100 d-xl-none mobile-nation-name">Player A</div>

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
                isWeak: data[1]?.isWeak,
                maxLiabilityPerMarket: data[1]?.maxLiabilityPerMarket,
                isBettable: data[1]?.isBettable,
                maxLiabilityPerBet: data[1]?.maxLiabilityPerBet,
              });
            }}
            className={`casino-odds-box back casino-odds-box-theme ${
              data[1]?.status === "OPEN" ? "" : " suspended-box"
            } `}
          >
            {/*   <!-- result1 >> status  --> */}
            <span className="casino-odds">2 Cards Bonus</span>
            {data[1]?.runners[0]?.back[0]?.price}
            {/*    <!-- result1 >> runners0 >> back0 >>price   --> */}

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
            {/*   <!-- exposure after place bet--> */}
          </div>

          <div
            onClick={() => {
              setShowBets(true);
              setPlaceBetValue({});
              setPlaceBetValue({
                price: data[2]?.runners[0]?.back[0]?.price,
                side: 0,
                selectionId: data[2]?.runners[0]?.id,
                btype: data[1]?.btype,
                eventTypeId: data[2]?.eventTypeId,
                betDelay: data[2]?.betDelay,
                marketId: data[2]?.id,
                back: true,
                name: data[2]?.runners[0]?.name,
                isWeak: data[2]?.isWeak,
                maxLiabilityPerMarket: data[2]?.maxLiabilityPerMarket,
                isBettable: data[2]?.isBettable,
                maxLiabilityPerBet: data[2]?.maxLiabilityPerBet,
              });
            }}
            className={`casino-odds-box back ${
              data[2]?.status === "OPEN" ? "" : " suspended-box"
            } 
`}
          >
            {/*       <!-- result2 >> status  --> */}
            <span className="casino-odds">7 Cards Bonus</span>
            {data[2]?.runners[0]?.back[0]?.price}
            {/*    <!-- result2 >> runners0 >> back0 >>price   --> */}
            <div className="casino-nation-book text-center">
              <span
                className={`${
                  redExposure && redExposure[0]?.pnl < 0
                    ? "text-danger"
                    : "text-success"
                }`}
              >
                {redExposure ? redExposure[0]?.pnl : null}
              </span>
            </div>
            {/*      <!-- exposure after place bet--> */}
          </div>
        </div>
        <div className="casino-table-box-divider"></div>
        <div className="casino-table-right-box">
          <div className="w-100 d-xl-none mobile-nation-name">Player B</div>
          <div
            onClick={() => {
              setShowBets(true);
              setPlaceBetValue({});
              setPlaceBetValue({
                price: data[3]?.runners[0]?.back[0]?.price,
                side: 0,
                selectionId: data[3]?.runners[0]?.id,
                btype: data[3]?.btype,
                eventTypeId: data[3]?.eventTypeId,
                betDelay: data[3]?.betDelay,
                marketId: data[3]?.id,
                back: true,
                name: data[3]?.runners[0]?.name,
                isWeak: data[3]?.isWeak,
                maxLiabilityPerMarket: data[3]?.maxLiabilityPerMarket,
                isBettable: data[3]?.isBettable,
                maxLiabilityPerBet: data[3]?.maxLiabilityPerBet,
              });
            }}
            className={`casino-odds-box back ${
              data[3]?.status === "OPEN" ? "" : " suspended-box"
            } `}
          >
            {/*    <!-- result3 >> status  --> */}
            <span className="casino-odds">2 Cards Bonus</span>
            {data[3]?.runners[0]?.back[0]?.price}
            {/*  <!-- result3 >> runners0 >> back0 >>price   --> */}
            <div className="casino-nation-book text-center">
              <span
                className={`${
                  a23Exposure && a23Exposure[0]?.pnl < 0
                    ? "text-danger"
                    : "text-success"
                }`}
              >
                {a23Exposure ? a23Exposure[0]?.pnl : null}
              </span>
            </div>
            {/*   <!-- exposure after place bet--> */}
          </div>
          <div
            onClick={() => {
              setShowBets(true);
              setPlaceBetValue({});
              setPlaceBetValue({
                price: data[4]?.runners[0]?.back[0]?.price,
                side: 0,
                selectionId: data[4]?.runners[0]?.id,
                btype: data[4]?.btype,
                eventTypeId: data[4]?.eventTypeId,
                betDelay: data[4]?.betDelay,
                marketId: data[4]?.id,
                back: true,
                name: data[4]?.runners[0]?.name,
                isWeak: data[4]?.isWeak,
                maxLiabilityPerMarket: data[4]?.maxLiabilityPerMarket,
                isBettable: data[4]?.isBettable,
                maxLiabilityPerBet: data[4]?.maxLiabilityPerBet,
              });
            }}
            className={`casino-odds-box back ${
              data[4]?.status === "OPEN" ? "" : " suspended-box"
            } `}
          >
            {/*    <!-- result4 >> status  --> */}
            <span className="casino-odds">7 Cards Bonus</span>
            {/*   <!-- result4 >> runners0 >> back0 >>price   --> */}
            {data[4]?.runners[0]?.back[0]?.price}
            <div className="casino-nation-book text-center">
              <span
                className={`${
                  fourIndexZeroRunnersEx && fourIndexZeroRunnersEx[0]?.pnl < 0
                    ? "text-danger"
                    : "text-success"
                }`}
              >
                {fourIndexZeroRunnersEx ? fourIndexZeroRunnersEx[0]?.pnl : null}
              </span>
            </div>
            {/*   <!-- exposure after place bet--> */}
          </div>
        </div>
      </div>
      <div className="casino-remark mt-1"></div>
    </div>
  );
};

export default PokerOneDay;
