const Card32A = ({
  data,
  setPlaceBetValue,
  setShowBets,
  lowExposure,
  highExposure,
  zeroIndexTwoExp,
  zeroIndexThreeExp,
}) => {
  return (
    <div className="casino-table">
      <div className="casino-table-box">
        <div className="casino-table-left-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail"></div>
            <div className="casino-odds-box back">Back</div>
            <div className="casino-odds-box lay">Lay</div>
          </div>
          <div className="casino-table-body">
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Player 8</div>
                <div className="casino-nation-book text-success">
                  {" "}
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
                className={`casino-odds-box back ${
                  data[0]?.status === "OPEN" &&
                  data[0]?.runners[0]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                <span className="casino-odds">
                  {" "}
                  {data[0]?.runners[0]?.back[0]?.price}{" "}
                </span>
                {/*         <!-- suspended-box key0 > >status :  key0 >> runner0 >> back >> price --> */}
              </div>

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
                    maxLiabilityPerMarket:data[0]?.maxLiabilityPerMarket,
                    isBettable:data[0]?.isBettable,
                    maxLiabilityPerBet:data[0]?.maxLiabilityPerBet
                  });
                }}
                className={`casino-odds-box lay ${
                  data[0]?.status === "OPEN" &&
                  data[0]?.runners[0]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                <span className="casino-odds">
                  {data[0]?.runners[0]?.lay[0]?.price}
                </span>
                {/*     <!-- suspended-box :  key0 >> runner0 >> lay >> price --> */}
              </div>
            </div>
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Player 9</div>

                <div className="casino-nation-book text-success">
                  {" "}
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
                className={`casino-odds-box back ${
                  data[0]?.status === "OPEN" &&
                  data[0]?.runners[1]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                <span className="casino-odds">
                  {" "}
                  {data[0]?.runners[1]?.back[0]?.price}{" "}
                </span>
                {/*         <!-- suspended-box key0 > >status :  key0 >> runner0 >> back >> price --> */}
              </div>

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
                    maxLiabilityPerMarket:data[0]?.maxLiabilityPerMarket,
                    isBettable:data[0]?.isBettable,
                    maxLiabilityPerBet:data[0]?.maxLiabilityPerBet
                  });
                }}
                className={`casino-odds-box lay ${
                  data[0]?.status === "OPEN" &&
                  data[0]?.runners[1]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                <span className="casino-odds">
                  {data[0]?.runners[1]?.lay[0]?.price}
                </span>
                {/*     <!-- suspended-box :  key0 >> runner0 >> lay >> price --> */}
              </div>
            </div>
          </div>
        </div>
        <div className="casino-table-box-divider"></div>
        <div className="casino-table-right-box">
          <div className="casino-table-header d-none d-md-flex">
            <div className="casino-nation-detail"></div>
            <div className="casino-odds-box back">Back</div>
            <div className="casino-odds-box lay">Lay</div>
          </div>
          <div className="casino-table-body">
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Player 10</div>
                <div className="casino-nation-book text-success">
                  <span
                    className={`${
                      zeroIndexTwoExp && zeroIndexTwoExp[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {zeroIndexTwoExp ? zeroIndexTwoExp[0]?.pnl : null}
                  </span>
                </div>
              </div>
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
                className={`casino-odds-box back ${
                  data[0]?.status === "OPEN" &&
                  data[0]?.runners[2]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                <span className="casino-odds">
                  {" "}
                  {data[0]?.runners[2]?.back[0]?.price}{" "}
                </span>
                {/*         <!-- suspended-box key0 > >status :  key0 >> runner0 >> back >> price --> */}
              </div>

              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[0]?.runners[2]?.lay[0]?.price,
                    side: 1,
                    selectionId: data[0]?.runners[2]?.id,
                    btype: data[0]?.btype,
                    eventTypeId: data[0]?.eventTypeId,
                    betDelay: data[0]?.betDelay,
                    marketId: data[0]?.id,
                    lay: true,
                    name: data[0]?.runners[2]?.name,
                    isWeak: data[0]?.isWeak,
                    maxLiabilityPerMarket:data[0]?.maxLiabilityPerMarket,
                    isBettable:data[0]?.isBettable,
                    maxLiabilityPerBet:data[0]?.maxLiabilityPerBet
                  });
                }}
                className={`casino-odds-box lay ${
                  data[0]?.status === "OPEN" &&
                  data[0]?.runners[2]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                <span className="casino-odds">
                  {data[0]?.runners[2]?.lay[0]?.price}
                </span>
                {/*     <!-- suspended-box :  key0 >> runner0 >> lay >> price --> */}
              </div>
            </div>
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Player 11</div>
                <div className="casino-nation-book text-success">
                  <span
                    className={`${
                      zeroIndexThreeExp && zeroIndexThreeExp[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {zeroIndexThreeExp ? zeroIndexThreeExp[0]?.pnl : null}
                  </span>
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[0]?.runners[3]?.back[0]?.price,
                    side: 0,
                    selectionId: data[0]?.runners[3]?.id,
                    btype: data[0]?.btype,
                    eventTypeId: data[0]?.eventTypeId,
                    betDelay: data[0]?.betDelay,
                    marketId: data[0]?.id,
                    back: true,
                    name: data[0]?.runners[3]?.name,
                    isWeak: data[0]?.isWeak,
                    maxLiabilityPerMarket:data[0]?.maxLiabilityPerMarket,
                    isBettable:data[0]?.isBettable,
                    maxLiabilityPerBet:data[0]?.maxLiabilityPerBet
                  });
                }}
                className={`casino-odds-box back ${
                  data[0]?.status === "OPEN" &&
                  data[0]?.runners[3]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                <span className="casino-odds">
                  {" "}
                  {data[0]?.runners[3]?.back[0]?.price}{" "}
                </span>
                {/*         <!-- suspended-box key0 > >status :  key0 >> runner0 >> back >> price --> */}
              </div>

              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[0]?.runners[3]?.lay[0]?.price,
                    side: 1,
                    selectionId: data[0]?.runners[3]?.id,
                    btype: data[0]?.btype,
                    eventTypeId: data[0]?.eventTypeId,
                    betDelay: data[0]?.betDelay,
                    marketId: data[0]?.id,
                    lay: true,
                    name: data[0]?.runners[3]?.name,
                    isWeak: data[0]?.isWeak,
                    maxLiabilityPerMarket:data[0]?.maxLiabilityPerMarket,
                    isBettable:data[0]?.isBettable,
                    maxLiabilityPerBet:data[0]?.maxLiabilityPerBet
                  });
                }}
                className={`casino-odds-box lay ${
                  data[0]?.status === "OPEN" &&
                  data[0]?.runners[3]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                <span className="casino-odds">
                  {data[0]?.runners[3]?.lay[0]?.price}
                </span>
                {/*     <!-- suspended-box :  key0 >> runner0 >> lay >> price --> */}
              </div>
              {/* <!-- result0 >> runners3 >> lay >> price  --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card32A;
