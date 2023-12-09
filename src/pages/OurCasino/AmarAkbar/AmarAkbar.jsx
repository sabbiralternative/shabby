const AmarAkbar = ({
  data,
  setShowBets,
  setPlaceBetValue,
  zeroIndexTwoRunnersEx,
  lowExposure,
  highExposure,
  evenExposure,
  oddExposure,
  redExposure,
  blackExposure,
  four56Exposure,
  pnlBySelection,
  a23Exposure,
}) => {
  return (
    <>
      <div className="casino-table">
        <div className="casino-table-box">
          {/*       <!-- key 0 , winner market start --> */}

          <div className="casino-odd-box-container">
            <div className="casino-nation-name">
              A. Amar
              <div className="casino-nation-book d-md-none"></div>
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
              className={`casino-odds-box back  ${
                data[0]?.status === "OPEN" &&
                data[0]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[0]?.runners[0]?.back[0]?.price}
              </span>
              {/*  <!-- suspended-box >> key0 >> status:  key0 >> runner0 >> back >> price --> */}
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
              className={`casino-odds-box lay  ${
                data[0]?.status === "OPEN" &&
                data[0]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[0]?.runners[0]?.lay[0]?.price}
              </span>
              {/*   <!-- suspended-box >> key0 >> status :  key0 >> runner0 >> lay >> price --> */}
            </div>
            <div className="casino-nation-book text-center d-none d-md-block w-100">
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

          <div className="casino-odd-box-container">
            <div className="casino-nation-name">
              B. Akbar
              <div className="casino-nation-book d-md-none"></div>
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
              className={`casino-odds-box back  ${
                data[0]?.status === "OPEN" &&
                data[0]?.runners[1]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[0]?.runners[1]?.back[0]?.price}
              </span>
              {/*   <!-- suspended-box >> key0 >> status :  key0 >> runner1 >> back >> price --> */}
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
              className={`casino-odds-box lay  ${
                data[0]?.status === "OPEN" &&
                data[0]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[0]?.runners[1]?.lay[0]?.price}
              </span>
              {/*   <!-- suspended-box >> key0 >> status :  key0 >> runner1 >> lay >> price --> */}
            </div>
            <div className="casino-nation-book text-center d-none d-md-block w-100">
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
          <div className="casino-odd-box-container">
            <div className="casino-nation-name">
              C. Anthony
              <div className="casino-nation-book d-md-none"></div>
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
                });
              }}
              className={`casino-odds-box back  ${
                data[0]?.status === "OPEN" &&
                data[0]?.runners[2]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[0]?.runners[2]?.back[0]?.price}
              </span>
              {/*   <!-- suspended-box >> key0 >> status :  key0 >> runner2 >> back >> price --> */}
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
                });
              }}
              className={`casino-odds-box lay  ${
                data[0]?.status === "OPEN" &&
                data[0]?.runners[2]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[0]?.runners[2]?.lay[0]?.price}
              </span>
              {/*  <!-- suspended-box >> key0 >> status :  key0 >> runner2  >> lay >> price --> */}
            </div>
            <div className="casino-nation-book text-center d-none d-md-block w-100">
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
        </div>

        {/* <!-- key 0 , winner market end -->

          <!-- key 1 , even odd market start --> */}

        <div className="casino-table-box mt-3">
          <div className="casino-table-left-box">
            <div className="aaa-odd-box">
              <div className="casino-odds text-center">
                {" "}
                {data[1]?.runners[0]?.back[0]?.price}
              </div>
              {/* <!--   key1 >> runner0 >> back >> price --> */}
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
                className={`casino-odds-box back casino-odds-box-theme  ${
                  data[1]?.status === "OPEN" &&
                  data[1]?.runners[0]?.status === "ACTIVE"
                    ? ""
                    : "suspended-box"
                }`}
              >
                {/* <!-- suspended-box  key1 >> status --> */}
                <span className="casino-odds">Even</span>
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
            <div className="aaa-odd-box">
              <div className="casino-odds text-center">
                {data[1]?.runners[1]?.back[0]?.price}
              </div>
              {/*  <!--   key1 >> runner1 >> back >> price --> */}
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
                className={`casino-odds-box back casino-odds-box-theme ${
                  data[1]?.status === "OPEN" &&
                  data[1]?.runners[1]?.status === "ACTIVE"
                    ? ""
                    : "suspended-box"
                }`}
              >
                {/* <!-- suspended-box  key1 >> status --> */}
                <span className="casino-odds">Odd</span>
              </div>
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
          {/* <!-- key 1 , even odd market end -->

            <!-- key 2 , color market start --> */}

          <div className="casino-table-center-box">
            <div className="aaa-odd-box">
              <div className="casino-odds text-center">
                {data[2]?.runners[0]?.back[0]?.price}
              </div>
              {/* <!--  key2 >> runner0 >> back >> price --> */}
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
                className={`casino-odds-box back casino-odds-box-theme ${
                  data[2]?.status === "OPEN" &&
                  data[2]?.runners[0]?.status === "ACTIVE"
                    ? ""
                    : "suspended-box"
                }`}
              >
                {/*    <!-- suspended-box  key2 >> status --> */}
                <div className="casino-odds">
                  <span className="card-icon ms-1">
                    <span className="card-red"></span>
                  </span>
                  <span className="card-icon ms-1">
                    <span className="card-red"></span>
                  </span>
                </div>
              </div>
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
            <div className="aaa-odd-box">
              <div className="casino-odds text-center">
                {data[2]?.runners[1]?.back[0]?.price}
              </div>
              {/* <!-- key2 >> runner1 >> back >> price  --> */}
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
                className={`casino-odds-box back casino-odds-box-theme ${
                  data[2]?.status === "OPEN" &&
                  data[2]?.runners[1]?.status === "ACTIVE"
                    ? ""
                    : "suspended-box"
                }`}
              >
                {/* <!-- suspended-box  key2 >> status --> */}
                <div className="casino-odds">
                  <span className="card-icon ms-1">
                    <span className="card-black"></span>
                  </span>
                  <span className="card-icon ms-1">
                    <span className="card-black"></span>
                  </span>
                </div>
              </div>
              <div className="casino-nation-book text-center">
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
          </div>

          {/*  <!-- key 2 , color market end -->

            <!-- key 3 , over under market start --> */}

          <div className="casino-table-right-box">
            <div className="aaa-odd-box">
              <div className="casino-odds text-center">
                {data[3]?.runners[0]?.back[0]?.price}
              </div>
              {/* <!-- suspended-box key3 >> status :  key3 >> runner0 >> back >> price.  --> */}
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
                className={`casino-odds-box back casino-odds-box-theme ${
                  data[3]?.status === "OPEN" &&
                  data[3]?.runners[0]?.status === "ACTIVE"
                    ? ""
                    : "suspended-box"
                }`}
              >
                <span className="casino-odds">Under 7</span>
              </div>
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
            <div className="aaa-odd-box">
              <div className="casino-odds text-center">
                {data[3]?.runners[1]?.back[0]?.price}
              </div>
              {/* <!-- suspended-box key3  >> status:  key3 >> runner1 >> back >> price.  --> */}
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[3]?.runners[1]?.back[0]?.price,
                    side: 0,
                    selectionId: data[3]?.runners[1]?.id,
                    btype: data[3]?.btype,
                    eventTypeId: data[3]?.eventTypeId,
                    betDelay: data[3]?.betDelay,
                    marketId: data[3]?.id,
                    back: true,
                    name: data[3]?.runners[1]?.name,
                    isWeak: data[3]?.isWeak,
                  });
                }}
                className={`casino-odds-box back casino-odds-box-theme ${
                  data[3]?.status === "OPEN" &&
                  data[3]?.runners[1]?.status === "ACTIVE"
                    ? ""
                    : "suspended-box"
                }`}
              >
                <span className="casino-odds">Over 7</span>
              </div>
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    four56Exposure && four56Exposure[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {four56Exposure ? four56Exposure[0]?.pnl : null}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- key 3 , over under market end -->

          <!-- key 4 , card market start --> */}

        <div className="casino-table-full-box aaacards mt-3">
          <h4 className="w-100 text-center mb-2">
            <b> {data[4]?.runners[0]?.back[0]?.price}</b>
          </h4>
          {/*  <!-- key4 >> runner0 >> back >> price --> */}
          {data[4]?.runners?.map((runner, i) => {
            const pnl = pnlBySelection?.filter(
              (pnl) => pnl?.RunnerId === runner?.id
            );

            return (
              <div key={i} className="card-odd-box">
                <div
                  onClick={() => {
                    setShowBets(true);
                    setPlaceBetValue({});
                    setPlaceBetValue({
                      price: runner?.back[0]?.price,
                      side: 0,
                      selectionId: runner?.id,
                      btype: data[4]?.btype,
                      eventTypeId: data[4]?.eventTypeId,
                      betDelay: data[4]?.betDelay,
                      marketId: data[4]?.id,
                      back: true,
                      name: runner?.name,
                      isWeak: data[4]?.isWeak,
                    });
                  }}
                  className={`${
                    data[4]?.status === "OPEN" && runner?.status === "ACTIVE"
                      ? ""
                      : "suspended-box"
                  }`}
                >
                  {/* <!-- suspended-box --> */}
                  <img src={`/cards/${runner?.name}.png`} />
                </div>

                {pnl && (
                  <div className="market-nation-book text-center  w-100">
                    {pnl?.map(({ pnl }, i) => {
                      return (
                        <span
                          key={i}
                          className={`${
                            pnl > 0 ? "text-success" : "text-danger"
                          }`}
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          {pnl}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AmarAkbar;
