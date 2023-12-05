const VMTeenPatti = ({
  data,
  setPlaceBetValue,
  setShowBets,
  lowExposure,
  highExposure,
  evenExposure,
  redExposure,
  a23Exposure,
  oddExposure,
}) => {
  return (
    <div className="casino-table">
      <div className="casino-table-box">
        <div className="casino-table-left-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail">Player A</div>
          </div>
          <div className="casino-table-body">
            <div className="casino-table-row">
              <div className="casino-odds-box">Winner</div>
              <div className="casino-odds-box">Top 9</div>
              <div className="casino-odds-box">M Baccarat A</div>
            </div>
            <div className="casino-table-row">
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
                  data[0]?.status === "OPEN" ? "" : "suspended-box"
                }`}
              >
                {/* <!-- key0 status--> */}
                <span className="casino-odds">
                  {data[0]?.runners[0]?.back[0]?.price}
                </span>
                {/* <!-- key0 >> runner0 >>back--> */}
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
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[2]?.runners[0]?.back[0]?.price,
                    side: 0,
                    selectionId: data[2]?.runners[0]?.id,
                    btype: data[2]?.btype,
                    eventTypeId: data[2]?.eventTypeId,
                    betDelay: data[2]?.betDelay,
                    marketId: data[2]?.id,
                    back: true,
                    name: data[2]?.runners[0]?.name,
                    isWeak: data[2]?.isWeak,
                  });
                }}
                className={`casino-odds-box back ${
                  data[2]?.status === "OPEN" ? "" : "suspended-box"
                }`}
              >
                {/* <!-- key0 status--> */}
                <span className="casino-odds">
                  {data[2]?.runners[0]?.back[0]?.price}
                </span>
                {/* <!-- key0 >> runner0 >>back--> */}
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
              </div>
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
                  });
                }}
                className={`casino-odds-box back ${
                  data[1]?.status === "OPEN" ? "" : "suspended-box"
                }`}
              >
                {/* <!-- key0 status--> */}
                <span className="casino-odds">
                  {data[1]?.runners[0]?.back[0]?.price}
                </span>
                {/* <!-- key0 >> runner0 >>back--> */}
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
        </div>
        <div className="casino-table-box-divider"></div>
        <div className="casino-table-right-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail">Player B</div>
          </div>
          <div className="casino-table-body">
            <div className="casino-table-row">
              <div className="casino-odds-box">Winner</div>
              <div className="casino-odds-box">Top 9</div>
              <div className="casino-odds-box">M Baccarat B</div>
            </div>
            <div className="casino-table-row">
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
                  data[0]?.status === "OPEN" ? "" : "suspended-box"
                }`}
              >
                {/* <!-- key0 status--> */}
                <span className="casino-odds">
                  {data[0]?.runners[1]?.back[0]?.price}
                </span>
                {/* <!-- key0 >> runner0 >>back--> */}
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
                  });
                }}
                className={`casino-odds-box back ${
                  data[3]?.status === "OPEN" ? "" : "suspended-box"
                }`}
              >
                {/* <!-- key0 status--> */}
                <span className="casino-odds">
                  {data[3]?.runners[0]?.back[0]?.price}
                </span>
                {/* <!-- key0 >> runner0 >>back--> */}
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
              </div>
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
                  });
                }}
                className={`casino-odds-box back ${
                  data[1]?.status === "OPEN" ? "" : "suspended-box"
                }`}
              >
                {/* <!-- key0 status--> */}
                <span className="casino-odds">
                  {data[1]?.runners[0]?.back[0]?.price}
                </span>
                {/* <!-- key0 >> runner0 >>back--> */}
                <div className="casino-nation-book text-center">
                  <span
                    className={`${
                      oddExposure && oddExposure[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {oddExposure ? oddExposure[0]?.pnl : null}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VMTeenPatti;
