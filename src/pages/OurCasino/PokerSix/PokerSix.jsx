const PokerSix = ({
  data,
  setShowBets,
  setPlaceBetValue,
  lowExposure,
  zeroIndexThreeExp,
  zeroIndexFourExp,
  zeroIndexFiveRunnersEx,
  highExposure,
  zeroIndexTwoExp,
}) => {
  return (
    <div className="casino-table">
      <ul className="mb-1 nav nav-pills" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            type="button"
            id="uncontrolled-tab-example-tab-hands"
            role="tab"
            data-rr-ui-event-key="hands"
            aria-controls="uncontrolled-tab-example-tabpane-hands"
            aria-selected="true"
            className="nav-link active"
          >
            Hands
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div
          role="tabpanel"
          id="uncontrolled-tab-example-tabpane-hands"
          aria-labelledby="uncontrolled-tab-example-tab-hands"
          className="fade hands tab-pane active show"
        >
          <div className="row row5">
            <div className="col-md-6">
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
                  });
                }}
                className={`casino-odds-box back ${
                  data[0]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                {/*    <!-- result0 >> status  --> */}
                <div className="casino-nation-name">Player 1</div>
                <div>
                  <span className="casino-odds">
                    {" "}
                    {data[0]?.runners[0]?.back[0]?.price}
                  </span>
                  {/*     <!-- result0 >> runner0 >> back0  --> */}
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
              </div>
            </div>
            <div className="col-md-6">
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
                  });
                }}
                className={`casino-odds-box back ${
                  data[0]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                {/*    <!-- result0 >> status  --> */}
                <div className="casino-nation-name">Player 2</div>
                <div>
                  <span className="casino-odds">
                    {" "}
                    {data[0]?.runners[1]?.back[0]?.price}
                  </span>
                  {/*     <!-- result0 >> runner0 >> back0  --> */}
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
              </div>
            </div>
            <div className="col-md-6">
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
                  });
                }}
                className={`casino-odds-box back ${
                  data[0]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                {/*    <!-- result0 >> status  --> */}
                <div className="casino-nation-name">Player 3</div>
                <div>
                  <span className="casino-odds">
                    {" "}
                    {data[0]?.runners[2]?.back[0]?.price}
                  </span>
                  {/*     <!-- result0 >> runner0 >> back0  --> */}
                  <div className="casino-nation-book text-center">
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
              </div>
            </div>
            <div className="col-md-6">
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
                  });
                }}
                className={`casino-odds-box back ${
                  data[0]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                {/*    <!-- result0 >> status  --> */}
                <div className="casino-nation-name">Player 4</div>
                <div>
                  <span className="casino-odds">
                    {" "}
                    {data[0]?.runners[3]?.back[0]?.price}
                  </span>
                  {/*     <!-- result0 >> runner0 >> back0  --> */}
                  <div className="casino-nation-book text-center">
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
              </div>
            </div>
            <div className="col-md-6">
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[0]?.runners[4]?.back[0]?.price,
                    side: 0,
                    selectionId: data[0]?.runners[4]?.id,
                    btype: data[0]?.btype,
                    eventTypeId: data[0]?.eventTypeId,
                    betDelay: data[0]?.betDelay,
                    marketId: data[0]?.id,
                    back: true,
                    name: data[0]?.runners[4]?.name,
                    isWeak: data[0]?.isWeak,
                  });
                }}
                className={`casino-odds-box back ${
                  data[0]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                {/*    <!-- result0 >> status  --> */}
                <div className="casino-nation-name">Player 5</div>
                <div>
                  <span className="casino-odds">
                    {" "}
                    {data[0]?.runners[4]?.back[0]?.price}
                  </span>
                  {/*     <!-- result0 >> runner0 >> back0  --> */}
                  <div className="casino-nation-book text-center">
                    <span
                      className={`${
                        zeroIndexFourExp && zeroIndexFourExp[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      {zeroIndexFourExp ? zeroIndexFourExp[0]?.pnl : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[0]?.runners[5]?.back[0]?.price,
                    side: 0,
                    selectionId: data[0]?.runners[5]?.id,
                    btype: data[0]?.btype,
                    eventTypeId: data[0]?.eventTypeId,
                    betDelay: data[0]?.betDelay,
                    marketId: data[0]?.id,
                    back: true,
                    name: data[0]?.runners[5]?.name,
                    isWeak: data[0]?.isWeak,
                  });
                }}
                className={`casino-odds-box back ${
                  data[0]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                {/*    <!-- result0 >> status  --> */}
                <div className="casino-nation-name">Player 6</div>
                <div>
                  <span className="casino-odds">
                    {" "}
                    {data[0]?.runners[5]?.back[0]?.price}
                  </span>
                  {/*     <!-- result0 >> runner0 >> back0  --> */}
                  <div className="casino-nation-book text-center">
                    <span
                      className={`${
                        zeroIndexFiveRunnersEx &&
                        zeroIndexFiveRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      {zeroIndexFiveRunnersEx
                        ? zeroIndexFiveRunnersEx[0]?.pnl
                        : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokerSix;
