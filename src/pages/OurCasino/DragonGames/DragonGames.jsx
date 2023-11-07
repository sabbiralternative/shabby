const DragonGames = ({
  data,
  setShowBets,
  setPlaceBetValue,
  lowExposure,
  highExposure,
  zeroIndexTwoRunnersEx,
  evenExposure,
  fiveIndexOneRunnersEx,
  fiveIndexZeroRunnersEx,
  fourIndexZeroRunnersEx,
  fourIndexOneRunnersEx,
  redExposure,
  blackExposure,
  four56Exposure,
  pnlBySelection,
  a23Exposure,
}) => {
  return (
    <div className="casino-table">
      <div className="casino-table-full-box">
        <div className="dt20-odd-box dt20dragon">
          <div className="casino-odds text-center">
            {" "}
            {data[0]?.runners[0]?.back[0]?.price}
          </div>
          {/*  <!--  key0 >> runner0 >> back >> price --> */}
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
            className={`casino-odds-box back casino-odds-box-theme  ${
              data[0]?.status === "OPEN" &&
              data[0]?.runners[0]?.status === "ACTIVE"
                ? ""
                : " suspended-box"
            }`}
          >
            {/* <!-- suspended-box  key0  >> status  --> */}
            <span className="casino-odds">Dragon</span>
          </div>
          <div className="casino-nation-book text-center ">
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
        <div className="dt20-odd-box dt20tie">
          <div className="casino-odds text-center">
            {" "}
            {data[0]?.runners[1]?.back[0]?.price}
          </div>
          {/* <!--  key0 >> runner2 >> back >> price --> */}
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
            className={`casino-odds-box back casino-odds-box-theme ${
              data[0]?.status === "OPEN" &&
              data[0]?.runners[1]?.status === "ACTIVE"
                ? ""
                : " suspended-box"
            }`}
          >
            {/*   <!-- suspended-box  key0  >> status  --> */}
            <span className="casino-odds">Tie</span>
            <div className="casino-nation-book text-center ">
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
        <div className="dt20-odd-box dt20tiger">
          <div className="casino-odds text-center">
            {data[0]?.runners[2]?.back[0]?.price}
          </div>
          {/* <!--  key0 >> runner1 >> back >> price --> */}
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
            className={`casino-odds-box back casino-odds-box-theme ${
              data[0]?.status === "OPEN" &&
              data[0]?.runners[2]?.status === "ACTIVE"
                ? ""
                : " suspended-box"
            }`}
          >
            {/*  <!-- suspended-box  key0  >> status  --> */}
            <span className="casino-odds">Tiger</span>
            <div className="casino-nation-book text-center ">
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

        <div className="dt20-odd-box dt20pair">
          <div className="casino-odds text-center">
            {data[1]?.runners[0]?.back[0]?.price}
          </div>
          {/*   <!--  key1 >> runner0 >> back >> price --> */}
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
            className={`casino-odds-box back casino-odds-box-theme ${
              data[1]?.status === "OPEN" &&
              data[1]?.runners[0]?.status === "ACTIVE"
                ? ""
                : " suspended-box"
            }`}
          >
            {/*   <!-- suspended-box   key1  >> status --> */}
            <span className="casino-odds">Pair</span>
            <div className="casino-nation-book text-center ">
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

      <div className="casino-table-box mt-3">
        <div className="casino-table-left-box">
          <h4 className="w-100 text-center mb-2">
            <b>DRAGON</b>
          </h4>
          <div className="dt20-odd-box dt20odds">
            <div className="casino-odds text-center">
              {data[2]?.runners[0]?.back[0]?.price}
            </div>
            {/*  <!--  key2 >> runner0 >> back >> price --> */}
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
                  : " suspended-box"
              }`}
            >
              {/* <!-- suspended-box   key2  >> status  --> */}
              <span className="casino-odds">Even</span>
              <div className="casino-nation-book text-center ">
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
          </div>
          <div className="dt20-odd-box dt20odds">
            <div className="casino-odds text-center">
              {data[2]?.runners[1]?.back[0]?.price}
            </div>
            {/* <!--  key2 >> runner1 >> back >> price --> */}
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
                  : " suspended-box"
              }`}
            >
              {/*  <!-- suspended-box  key2  >> status  --> */}
              <span className="casino-odds">Odd</span>
              <div className="casino-nation-book text-center ">
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

          <div className="dt20-odd-box dt20odds">
            <div className="casino-odds text-center">
              {data[4]?.runners[0]?.back[0]?.price}
            </div>
            {/*  <!--  key4  >> runner0 >> back >> price --> */}
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
                });
              }}
              className={`casino-odds-box back casino-odds-box-theme ${
                data[4]?.status === "OPEN" &&
                data[4]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}
            >
              {/*   <!-- suspended-box  key4  >> status --> */}
              <div className="casino-odds">
                <span className="card-icon ms-1">
                  <span className="card-red"></span>
                </span>
                <span className="card-icon ms-1">
                  <span className="card-red"></span>
                </span>
              </div>
            </div>
            <div className="casino-nation-book text-center ">
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
          </div>

          <div className="dt20-odd-box dt20odds">
            <div className="casino-odds text-center">
              {data[4]?.runners[1]?.back[0]?.price}
            </div>
            {/* <!--  key4  >> runner1 >> back >> price --> */}
            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[4]?.runners[1]?.back[0]?.price,
                  side: 0,
                  selectionId: data[4]?.runners[1]?.id,
                  btype: data[4]?.btype,
                  eventTypeId: data[4]?.eventTypeId,
                  betDelay: data[4]?.betDelay,
                  marketId: data[4]?.id,
                  back: true,
                  name: data[4]?.runners[1]?.name,
                  isWeak: data[4]?.isWeak,
                });
              }}
              className={`casino-odds-box back casino-odds-box-theme ${
                data[4]?.status === "OPEN" &&
                data[4]?.runners[1]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}
            >
              {/*  <!-- suspended-box  key4  >> status  --> */}
              <div className="casino-odds">
                <span className="card-icon ms-1">
                  <span className="card-black"></span>
                </span>
                <span className="card-icon ms-1">
                  <span className="card-black"></span>
                </span>
              </div>
            </div>
            <div className="casino-nation-book text-center ">
              <span
                className={`${
                  fourIndexOneRunnersEx && fourIndexOneRunnersEx[0]?.pnl < 0
                    ? "text-danger"
                    : "text-success"
                }`}
              >
                {fourIndexOneRunnersEx ? fourIndexOneRunnersEx[0]?.pnl : null}
              </span>
            </div>
          </div>
        </div>
        <div className="casino-table-right-box">
          <h4 className="w-100 text-center mb-2">
            <b>TIGER</b>
          </h4>
          <div className="dt20-odd-box dt20odds">
            <div className="casino-odds text-center">
              {data[3]?.runners[0]?.back[0]?.price}
            </div>
            {/*   <!--  key3  >> runner0 >> back >> price --> */}
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
                  : " suspended-box"
              }`}
            >
              {/*  <!-- suspended-box     key3  >> status  --> */}
              <span className="casino-odds">Even</span>
              <div className="casino-nation-book text-center ">
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
          </div>
          <div className="dt20-odd-box dt20odds">
            <div className="casino-odds text-center">
              {data[3]?.runners[1]?.back[0]?.price}
            </div>
            {/*  <!--  key3  >> runner1 >> back >> price --> */}
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
                data[4]?.status === "OPEN" &&
                data[4]?.runners[1]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}
            >
              {/*     <!-- suspended-box       key3  >> status  --> */}
              <span className="casino-odds">Odd</span>
              <div className="casino-nation-book text-center ">
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

          <div className="dt20-odd-box dt20odds">
            <div className="casino-odds text-center">
              {data[5]?.runners[0]?.back[0]?.price}
            </div>
            {/*    <!--  key5  >> runner0 >> back >> price --> */}
            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[5]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[5]?.runners[0]?.id,
                  btype: data[5]?.btype,
                  eventTypeId: data[5]?.eventTypeId,
                  betDelay: data[5]?.betDelay,
                  marketId: data[5]?.id,
                  back: true,
                  name: data[5]?.runners[0]?.name,
                  isWeak: data[5]?.isWeak,
                });
              }}
              className={`casino-odds-box back casino-odds-box-theme ${
                data[5]?.status === "OPEN" &&
                data[5]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}
            >
              {/*  <!-- suspended-box  key5  >> status  --> */}
              <div className="casino-odds">
                <span className="card-icon ms-1">
                  <span className="card-red"></span>
                </span>
                <span className="card-icon ms-1">
                  <span className="card-red"></span>
                </span>
              </div>
            </div>
            <div className="casino-nation-book text-center ">
              <span
                className={`${
                  fiveIndexZeroRunnersEx && fiveIndexZeroRunnersEx[0]?.pnl < 0
                    ? "text-danger"
                    : "text-success"
                }`}
              >
                {fiveIndexZeroRunnersEx ? fiveIndexZeroRunnersEx[0]?.pnl : null}
              </span>
            </div>
          </div>
          <div className="dt20-odd-box dt20odds">
            <div className="casino-odds text-center">
              {data[5]?.runners[1]?.back[0]?.price}
            </div>
            {/* <!--  key5  >> runner0 >> back >> price --> */}
            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[5]?.runners[1]?.back[0]?.price,
                  side: 0,
                  selectionId: data[5]?.runners[1]?.id,
                  btype: data[5]?.btype,
                  eventTypeId: data[5]?.eventTypeId,
                  betDelay: data[5]?.betDelay,
                  marketId: data[5]?.id,
                  back: true,
                  name: data[5]?.runners[1]?.name,
                  isWeak: data[5]?.isWeak,
                });
              }}
              className={`casino-odds-box back casino-odds-box-theme  ${
                data[5]?.status === "OPEN" &&
                data[5]?.runners[1]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}
            >
              {/*  <!-- suspended-box key5  >> status   --> */}
              <div className="casino-odds">
                <span className="card-icon ms-1">
                  <span className="card-black"></span>
                </span>
                <span className="card-icon ms-1">
                  <span className="card-black"></span>
                </span>
              </div>
            </div>
            <div className="casino-nation-book text-center ">
              <span
                className={`${
                  fiveIndexOneRunnersEx && fiveIndexOneRunnersEx[0]?.pnl < 0
                    ? "text-danger"
                    : "text-success"
                }`}
              >
                {fiveIndexOneRunnersEx ? fiveIndexOneRunnersEx[0]?.pnl : null}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="casino-table-box mt-3">
        <div className="casino-table-left-box">
          <div className="dt20cards">
            <h4 className="w-100 text-center mb-2">
              <b>DRAGON 12</b>
            </h4>
            {/*  <!--  key6  >> runner0 >> back >> price --> */}

            {data[6]?.runners?.map((runner, i) => {
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
                        btype: data[6]?.btype,
                        eventTypeId: data[6]?.eventTypeId,
                        betDelay: data[6]?.betDelay,
                        marketId: data[6]?.id,
                        back: true,
                        name: runner?.name,
                        isWeak: data[6]?.isWeak,
                      });
                    }}
                  >
                    <div
                      className={`${
                        data[6]?.status === "OPEN" &&
                        runner?.status === "ACTIVE"
                          ? ""
                          : "suspended-box"
                      }`}
                    >
                      {/*  <!-- suspended-box  key6  >> status --> */}
                      <img
                        src={`/cards/${runner?.name}.${
                          runner?.name !== "1" ? "png" : "jpg"
                        }`}
                      />
                      {/*  <!--  key6  >> runner0 >> id --> */}
                    </div>
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
        <div className="casino-table-right-box">
          <div className="dt20cards">
            <h4 className="w-100 text-center mb-2">
              <b>TIGER 12</b>
            </h4>
            {/* <!--  key7  >> runner0 >> back >> price --> */}

            {data[7]?.runners?.map((runner, i) => {
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
                        btype: data[7]?.btype,
                        eventTypeId: data[7]?.eventTypeId,
                        betDelay: data[7]?.betDelay,
                        marketId: data[7]?.id,
                        back: true,
                        name: runner?.name,
                        isWeak: data[7]?.isWeak,
                      });
                    }}
                  >
                    <div
                      className={`${
                        data[7]?.status === "OPEN" &&
                        runner?.status === "ACTIVE"
                          ? ""
                          : "suspended-box"
                      }`}
                    >
                      {/*  <!-- suspended-box  key6  >> status --> */}
                      <img
                        src={`/cards/${runner?.name}.${
                          runner?.name !== "1" ? "png" : "jpg"
                        }`}
                      />
                      {/*  <!--  key6  >> runner0 >> id --> */}
                    </div>
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
      </div>
    </div>
  );
};

export default DragonGames;
