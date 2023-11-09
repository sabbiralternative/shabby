const InstantTeenPatti = ({
    data,
    setPlaceBetValue,
    setShowBets,
    lowExposure,
    highExposure,
}) => {
  return (
    <div className="casino-table">
      <div className="casino-table-box">
        <div className="casino-table-left-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail">Player A</div>
            <div className="casino-odds-box back">Back</div>
            <div className="casino-odds-box lay">Lay</div>
          </div>
          <div className="casino-table-body">
            <div className={`casino-table-row ${
                  data[0]?.status === "OPEN" ? "" : "suspended-row"
                }`}>
              {/* <!-- key0 status, suspended-row here instead of suspended-box --> */}
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Main</div>
                <div className="casino-nation-book">
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
                {/*  <!-- exposure rate here --> */}
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
                });
              }}
              className="casino-odds-box back">
                <span className="casino-odds">{data[0]?.runners[0]?.back[0]?.price}</span>
              </div>


              {/*  <!-- key0 >> runner0 >> back >> price --> */}
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
                    });
                  }}
              className="casino-odds-box lay">
                <span className="casino-odds">{data[0]?.runners[0]?.lay[0]?.price}</span>
              </div>


              {/*  <!-- key0 >> runner0 >> lay >> price --> */}
            </div>
          </div>
        </div>
        <div className="casino-table-box-divider"></div>
        <div className="casino-table-right-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail">Player B</div>
            <div className="casino-odds-box back">Back</div>
            <div className="casino-odds-box lay">Lay</div>
          </div>
          <div className="casino-table-body">
          <div className={`casino-table-row ${
                  data[0]?.status === "OPEN" ? "" : "suspended-row"
                }`}>
              {/* <!-- key0 status, suspended-row here instead of suspended-box --> */}
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Main</div>
                <div className="casino-nation-book">
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
                {/*    <!-- exposure rate here --> */}
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
                    });
                  }}
              className="casino-odds-box back">
                <span className="casino-odds">{data[0]?.runners[1]?.back[0]?.price}</span>
              </div>
              {/*     <!-- key0 >> runner1 >> back >> price --> */}
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
                    });
                  }}
              className="casino-odds-box lay">
                <span className="casino-odds">{data[0]?.runners[1]?.lay[0]?.price}</span>
              </div>
              {/*  <!-- key0 >> runner1 >> lay >> price --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantTeenPatti;
