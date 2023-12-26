const Lucky7 = ({
  data,
  setShowBets,
  setPlaceBetValue,
  seven,
  lowExposure,
  highExposure,
  evenExposure,
  oddExposure,
  redExposure,
  blackExposure,
  four56Exposure,
  pnlBySelection,
  A,
  two,
  three,
  a23Exposure,
  four,
  five,
  six,
  eight,
  nine,
  ten,
  eight910Exposure,
  jqkExposure,
  j,
  q,
  k,
}) => {
  return (
    <>
      <div className="casino-table">
        <div className="casino-table-full-box">
          <div className="lucky7low">
            <div className="casino-odds text-center">
              {data[0]?.runners[0]?.back[0]?.price}
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
              className={`${
                data[0]?.status === "OPEN" &&
                data[0]?.runners[0]?.status === "ACTIVE"
                  ? "casino-odds-box back casino-odds-box-theme"
                  : "casino-odds-box back casino-odds-box-theme suspended-box"
              }`}
            >
              {/* <!-- suspended-box --> */}
              <span className="casino-odds">Low Card</span>
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
          <div className="lucky7">
            <img src={seven} />
          </div>

          <div className="lucky7high">
            <div className="casino-odds text-center">
              {data[0]?.runners[1]?.back[0]?.price}
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
              className={`${
                data[0]?.status === "OPEN" &&
                data[0]?.runners[1]?.status === "ACTIVE"
                  ? "casino-odds-box back casino-odds-box-theme"
                  : "casino-odds-box back casino-odds-box-theme suspended-box"
              }`}
            >
              {/* <!-- suspended-box --> */}
              <span className="casino-odds">High Card</span>
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
        </div>
        {/* 
                <!-- winner  market end -->

                <!-- even odd  market start --> */}

        <div className="casino-table-box mt-3">
          <div className="casino-table-left-box">
            <div className="lucky7odds">
              <div className="casino-odds text-center">
                {data[1]?.runners[0]?.back[0]?.price}
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
                    maxLiabilityPerMarket:data[1]?.maxLiabilityPerMarket,
                    isBettable:data[1]?.isBettable,
                    maxLiabilityPerBet:data[1]?.maxLiabilityPerBet
                  });
                }}
                className={`${
                  data[1]?.status === "OPEN" &&
                  data[1]?.runners[0]?.status === "ACTIVE"
                    ? "casino-odds-box back casino-odds-box-theme"
                    : "casino-odds-box back casino-odds-box-theme suspended-box"
                }`}
              >
                {/* <!-- suspended-box --> */}

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
            <div className="lucky7odds">
              <div className="casino-odds text-center">
                {data[1]?.runners[1]?.back[0]?.price}
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
                    maxLiabilityPerMarket:data[1]?.maxLiabilityPerMarket,
                    isBettable:data[1]?.isBettable,
                    maxLiabilityPerBet:data[1]?.maxLiabilityPerBet
                  });
                }}
                className={`${
                  data[1]?.status === "OPEN" &&
                  data[1]?.runners[1]?.status === "ACTIVE"
                    ? "casino-odds-box back casino-odds-box-theme"
                    : "casino-odds-box back casino-odds-box-theme suspended-box"
                }`}
              >
                {/* <!-- suspended-box --> */}
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

          {/* <!-- even odd  market end --> */}

          {/* <!-- color  market start --> */}
          <div className="casino-table-right-box">
            <div className="lucky7odds">
              <div className="casino-odds text-center">
                {data[2]?.runners[0]?.back[0]?.price}
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
                    maxLiabilityPerMarket:data[2]?.maxLiabilityPerMarket,
                    isBettable:data[2]?.isBettable,
                    maxLiabilityPerBet:data[2]?.maxLiabilityPerBet
                  });
                }}
                className={`${
                  data[2]?.status === "OPEN" &&
                  data[2]?.runners[0]?.status === "ACTIVE"
                    ? "casino-odds-box back casino-odds-box-theme"
                    : "casino-odds-box back casino-odds-box-theme suspended-box"
                }`}
              >
                {/* <!-- suspended-box --> */}
                <span className="casino-odds">
                  <span className="card-icon ms-1">
                    <span className="card-red"></span>
                  </span>
                  <span className="card-icon ms-1">
                    <span className="card-red"></span>
                  </span>
                </span>
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
            <div className="lucky7odds">
              <div className="casino-odds text-center">
                {data[2]?.runners[1]?.back[0]?.price}
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
                    maxLiabilityPerMarket:data[2]?.maxLiabilityPerMarket,
                    isBettable:data[2]?.isBettable,
                    maxLiabilityPerBet:data[2]?.maxLiabilityPerBet
                  });
                }}
                className={`${
                  data[2]?.status === "OPEN" &&
                  data[2]?.runners[1]?.status === "ACTIVE"
                    ? "casino-odds-box back casino-odds-box-theme"
                    : "casino-odds-box back casino-odds-box-theme suspended-box"
                }`}
              >
                {/* <!-- suspended-box --> */}
                <span className="casino-odds">
                  <span className="card-icon ms-1">
                    <span className="card-black"></span>
                  </span>
                  <span className="card-icon ms-1">
                    <span className="card-black"></span>
                  </span>
                </span>
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
        </div>

        {/* <!-- color  market end -->

                <!-- range  market start --> */}

        <div className="casino-table-box mt-3">
          <div className="lucky7cards">
            <div className="casino-odds w-100 text-center">
              {data[3]?.runners[0]?.back[0]?.price}
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
                  maxLiabilityPerMarket:data[3]?.maxLiabilityPerMarket,
                  isBettable:data[3]?.isBettable,
                  maxLiabilityPerBet:data[3]?.maxLiabilityPerBet
                });
              }}
              className={`${
                data[3]?.status === "OPEN" &&
                data[3]?.runners[0]?.status === "ACTIVE"
                  ? "card-odd-box-container"
                  : "card-odd-box-container suspended-box"
              }`}
            >
              {/* <!-- suspended-box --> */}
              <div className="card-odd-box">
                <div className="">
                  <img src={A} />
                </div>
              </div>
              <div className="card-odd-box">
                <div className="">
                  <img src={two} />
                </div>
              </div>
              <div className="card-odd-box">
                <div className="">
                  <img src={three} />
                </div>
              </div>
            </div>
            <div className="casino-nation-book text-center  w-100">
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
          <div className="lucky7cards">
            <div className="casino-odds w-100 text-center">
              {data[3]?.runners[1]?.back[0]?.price}
            </div>
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
                  maxLiabilityPerMarket:data[3]?.maxLiabilityPerMarket,
                  isBettable:data[3]?.isBettable,
                  maxLiabilityPerBet:data[3]?.maxLiabilityPerBet
                });
              }}
              className={`${
                data[3]?.status === "OPEN" &&
                data[3]?.runners[1]?.status === "ACTIVE"
                  ? "card-odd-box-container"
                  : "card-odd-box-container suspended-box"
              }`}
            >
              {/* <!-- suspended-box --> */}
              <div className="card-odd-box">
                <div className="">
                  <img src={four} />
                </div>
              </div>
              <div className="card-odd-box">
                <div className="">
                  <img src={five} />
                </div>
              </div>
              <div className="card-odd-box">
                <div className="">
                  <img src={six} />
                </div>
              </div>
            </div>
            <div className="casino-nation-book text-center  w-100">
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
          <div className="lucky7cards">
            <div className="casino-odds w-100 text-center">
              {data[3]?.runners[2]?.back[0]?.price}
            </div>
            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[3]?.runners[2]?.back[0]?.price,
                  side: 0,
                  selectionId: data[3]?.runners[2]?.id,
                  btype: data[3]?.btype,
                  eventTypeId: data[3]?.eventTypeId,
                  betDelay: data[3]?.betDelay,
                  marketId: data[3]?.id,
                  back: true,
                  name: data[3]?.runners[2]?.name,
                  isWeak: data[3]?.isWeak,
                  maxLiabilityPerMarket:data[3]?.maxLiabilityPerMarket,
                  isBettable:data[3]?.isBettable,
                  maxLiabilityPerBet:data[3]?.maxLiabilityPerBet
                });
              }}
              className={`${
                data[3]?.status === "OPEN" &&
                data[3]?.runners[2]?.status === "ACTIVE"
                  ? "card-odd-box-container"
                  : "card-odd-box-container suspended-box"
              }`}
            >
              {/* <!-- suspended-box --> */}
              <div className="card-odd-box">
                <div className="">
                  <img src={eight} />
                </div>
              </div>
              <div className="card-odd-box">
                <div className="">
                  <img src={nine} />
                </div>
              </div>
              <div className="card-odd-box">
                <div className="">
                  <img src={ten} />
                </div>
              </div>
            </div>
            <div className="casino-nation-book text-center  w-100">
              <span
                className={`${
                  eight910Exposure && eight910Exposure[0]?.pnl < 0
                    ? "text-danger"
                    : "text-success"
                }`}
              >
                {eight910Exposure ? eight910Exposure[0]?.pnl : null}
              </span>
            </div>
          </div>
          <div className="lucky7cards">
            <div className="casino-odds w-100 text-center">
              {data[3]?.runners[3]?.back[0]?.price}
            </div>
            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[3]?.runners[3]?.back[0]?.price,
                  side: 0,
                  selectionId: data[3]?.runners[3]?.id,
                  btype: data[3]?.btype,
                  eventTypeId: data[3]?.eventTypeId,
                  betDelay: data[3]?.betDelay,
                  marketId: data[3]?.id,
                  back: true,
                  name: data[3]?.runners[3]?.name,
                  isWeak: data[3]?.isWeak,
                  maxLiabilityPerMarket:data[3]?.maxLiabilityPerMarket,
                  isBettable:data[3]?.isBettable,
                  maxLiabilityPerBet:data[3]?.maxLiabilityPerBet
                });
              }}
              className={`${
                data[3]?.status === "OPEN" &&
                data[3]?.runners[3]?.status === "ACTIVE"
                  ? "card-odd-box-container"
                  : "card-odd-box-container suspended-box"
              }`}
            >
              {/* <!-- suspended-box --> */}
              <div className="card-odd-box">
                <div className="">
                  <img src={j} />
                </div>
              </div>
              <div className="card-odd-box">
                <div className="">
                  <img src={q} />
                </div>
              </div>
              <div className="card-odd-box">
                <div className="">
                  <img src={k} />
                </div>
              </div>
            </div>
            <div className="casino-nation-book text-center  w-100">
              <span
                className={`${
                  jqkExposure && jqkExposure[0]?.pnl < 0
                    ? "text-danger"
                    : "text-success"
                }`}
              >
                {jqkExposure ? jqkExposure[0]?.pnl : null}
              </span>
            </div>
          </div>
        </div>
        {/* 
                <!-- range  market end -->




                <!-- card  market start --> */}

        <div className="casino-table-full-box lucky7acards mt-3">
          <div className="casino-odds w-100 text-center">
            {data[4]?.runners[0]?.back[0]?.price}
          </div>
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
                      maxLiabilityPerMarket:data[4]?.maxLiabilityPerMarket,
                      isBettable:data[4]?.isBettable,
                      maxLiabilityPerBet:data[4]?.maxLiabilityPerBet
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

export default Lucky7;
