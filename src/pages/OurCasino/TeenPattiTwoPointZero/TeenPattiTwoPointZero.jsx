const TeenPattiTwoPointZero = ({
  data,
  setPlaceBetValue,
  setShowBets,
  lowExposure,
  evenExposure,
  oddExposure,
  highExposure,
  redExposure,
  blackExposure,
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
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Main</div>
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
                {/*    <!-- exposure --> */}
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
                className={`casino-odds-box back ${
                  data[0]?.status === "OPEN" ? "" : " suspended-box"
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
                  });
                }}
                className={`casino-odds-box lay ${
                  data[0]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                <span className="casino-odds">
                  {data[0]?.runners[0]?.lay[0]?.price}
                </span>
                {/*     <!-- suspended-box :  key0 >> runner0 >> lay >> price --> */}
              </div>
              {/*   <!-- result0 >> runners0 >> lay  >> price --> */}
            </div>

            <div className="casino-table-row under-over-row">
              <div className="uo-box">
                <div className="casino-nation-detail">
                  <div className="casino-nation-name">Under 21</div>
                  <div className="casino-nation-book text-danger">
                    {" "}
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
                    data[1]?.status === "OPEN" ? "" : " suspended-box"
                  } `}
                >
                  {/* <!-- suspended-box key1 > >status :  key1 >> runner0 >> back >> price --> */}
                  <span className="casino-odds">
                    {data[1]?.runners[0]?.back[0]?.price}
                  </span>
                </div>

                {/*  <!-- result1 >> runners0>> back >> price --> */}
              </div>
              <div className="uo-box">
                <div className="casino-nation-detail">
                  <div className="casino-nation-name">Over 22</div>

                  <div className="casino-nation-book text-danger">
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
                <div
                  onClick={() => {
                    setShowBets(true);
                    setPlaceBetValue({});
                    setPlaceBetValue({
                      price: data[1]?.runners[1]?.back[0]?.price,
                      side: 0,
                      selectionId: data[1]?.runners[1]?.id,
                      btype: data[1]?.btype,
                      eventTypeId: data[1]?.eventTypeId,
                      betDelay: data[1]?.betDelay,
                      marketId: data[1]?.id,
                      back: true,
                      name: data[1]?.runners[1]?.name,
                      isWeak: data[1]?.isWeak,
                    });
                  }}
                  className={`casino-odds-box back ${
                    data[1]?.status === "OPEN" ? "" : " suspended-box"
                  } `}
                >
                  {/* <!-- suspended-box key1 > >status :  key1 >> runner0 >> back >> price --> */}
                  <span className="casino-odds">
                    {data[1]?.runners[1]?.back[0]?.price}
                  </span>
                </div>
                {/*  <!-- result1 >> runners1>> back >> price --> */}
              </div>
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
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Main</div>

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
                {/*   <!-- exposure --> */}
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
                className={`casino-odds-box back ${
                  data[0]?.status === "OPEN" ? "" : " suspended-box"
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
                  });
                }}
                className={`casino-odds-box lay ${
                  data[0]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                <span className="casino-odds">
                  {data[0]?.runners[1]?.lay[0]?.price}
                </span>
                {/*     <!-- suspended-box :  key0 >> runner0 >> lay >> price --> */}
              </div>
            </div>
            <div className="casino-table-row under-over-row">
              <div className="uo-box">
                <div className="casino-nation-detail">
                  <div className="casino-nation-name">Under 21</div>

                  <div className="casino-nation-book text-danger">
                    {" "}
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
                    data[2]?.status === "OPEN" ? "" : " suspended-box"
                  }`}
                >
                  <span className="casino-odds">
                    {" "}
                    {data[2]?.runners[0]?.back[0]?.price}{" "}
                  </span>
                  {/*         <!-- suspended-box key0 > >status :  key0 >> runner0 >> back >> price --> */}
                </div>
                {/*  <!-- result2 >> runners0>> back >> price --> */}
              </div>
              <div className="uo-box">
                <div className="casino-nation-detail">
                  <div className="casino-nation-name">Over 22</div>
                  <div className="casino-nation-book text-danger">
                    {" "}
                    <span
                      className={`${
                        blackExposure && blackExposure[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      {blackExposure ? blackExposure[0]?.pnl : null}
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setShowBets(true);
                    setPlaceBetValue({});
                    setPlaceBetValue({
                      price: data[2]?.runners[1]?.back[0]?.price,
                      side: 0,
                      selectionId: data[2]?.runners[1]?.id,
                      btype: data[2]?.btype,
                      eventTypeId: data[2]?.eventTypeId,
                      betDelay: data[2]?.betDelay,
                      marketId: data[2]?.id,
                      back: true,
                      name: data[2]?.runners[1]?.name,
                      isWeak: data[2]?.isWeak,
                    });
                  }}
                  className={`casino-odds-box back ${
                    data[2]?.status === "OPEN" ? "" : " suspended-box"
                  }`}
                >
                  <span className="casino-odds">
                    {" "}
                    {data[2]?.runners[1]?.back[0]?.price}{" "}
                  </span>
                  {/*         <!-- suspended-box key0 > >status :  key0 >> runner0 >> back >> price --> */}
                </div>
                {/*    <!-- result2 >> runners1>> back >> price --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeenPattiTwoPointZero;
