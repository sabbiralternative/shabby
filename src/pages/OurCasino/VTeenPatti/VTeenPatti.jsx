const VTeenPatti = ({  data,
    setPlaceBetValue,
    setShowBets,
    lowExposure,
    highExposure,
    evenExposure,
    redExposure,
    a23Exposure,
    four56Exposure,
    fourIndexZeroRunnersEx,
    fourIndexOneRunnersEx,
    fiveIndexZeroRunnersEx,
    fiveIndexOneRunnersEx,
    sixIndexOneRunnersEx,
    sixIndexZeroRunnersEx,}) => {
    return (
        <div className="casino-table">
        <div className="casino-table-box">
          <div className="casino-table-left-box">
            <div className="casino-table-header">
              <div className="casino-nation-detail">Player A</div>
            </div>
            <div className="casino-table-body">
              <div className="casino-table-row">
                <div className="casino-odds-box">Player A</div>
                <div className="casino-odds-box">3 Baccarat A</div>
                <div className="casino-odds-box">Total A</div>
                <div className="casino-odds-box">Pair Plus A</div>
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
                    data[3]?.status === "OPEN" ? "" : " suspended-box"
                  }`}
                >
                  {/*   <!-- key3 status--> */}
                  <span className="casino-odds">
                    {" "}
                    {data[3]?.runners[0]?.back[0]?.price}
                  </span>
                  {/*    <!-- key3 >> runner0 >>back--> */}
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
                  className={`casino-odds-box back ${
                    data[4]?.status === "OPEN" ? "" : " suspended-box"
                  }`}
                >
                  {/*  <!-- key4 status--> */}
                  <span className="casino-odds">
                    {data[4]?.runners[0]?.back[0]?.price}
                  </span>
                  {/*  <!-- key4 >> runner0 >>back--> */}
                  <div className="casino-nation-book text-center">
                    <span
                      className={`${
                        fourIndexZeroRunnersEx &&
                        fourIndexZeroRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      {fourIndexZeroRunnersEx
                        ? fourIndexZeroRunnersEx[0]?.pnl
                        : null}
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
                  {/*   <!-- key1 status--> */}
                  <span className="casino-odds">
                    {" "}
                    {data[1]?.runners[0]?.back[0]?.price}
                  </span>
                  {/*  <!-- key1 >> runner0 >>back--> */}
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
          <div className="teenpatti20-other-oods d-md-none">
            <div className="casino-table-left-box">
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
                className={`casino-odds-box back ${
                  data[5]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                {/*  <!-- key5 status --> */}
                <div>
                  <img src="static/front/img/icons/spade.png" />
                  <img src="static/front/img/icons/club.png" />
                </div>
                <div>
                  <span className="casino-odds">
                    {" "}
                    {data[5]?.runners[0]?.back[0]?.price}
                  </span>
                  {/* <!-- key5 >> runner0 >> back >> price --> */}
                  <div className="casino-nation-book">
                    <span
                      className={`${
                        fiveIndexZeroRunnersEx &&
                        fiveIndexZeroRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      {fiveIndexZeroRunnersEx
                        ? fiveIndexZeroRunnersEx[0]?.pnl
                        : null}
                    </span>
                  </div>
                </div>
              </div>
  
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
                className={`casino-odds-box back ${
                  data[5]?.status === "OPEN" ? "" : " suspended-box"
                } `}
              >
                {/*  <!-- key5 status --> */}
                <div>
                  <img src="static/front/img/icons/heart.png" />
                  <img src="static/front/img/icons/diamond.png" />
                </div>
                <div>
                  <span className="casino-odds">
                    {" "}
                    {data[5]?.runners[1]?.back[0]?.price}
                  </span>
                  {/*  <!-- key5 >> runner1 >> back >> price --> */}
                  <div className="casino-nation-book">
                    <span
                      className={`${
                        fiveIndexOneRunnersEx && fiveIndexOneRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      {fiveIndexOneRunnersEx
                        ? fiveIndexOneRunnersEx[0]?.pnl
                        : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="casino-table-right-box">
            <div className="casino-table-header">
              <div className="casino-nation-detail">Player B</div>
            </div>
            <div className="casino-table-body">
              <div className="casino-table-row">
                <div className="casino-odds-box">Player B</div>
                <div className="casino-odds-box">3 Baccarat B</div>
                <div className="casino-odds-box">Total B</div>
                <div className="casino-odds-box">Pair Plus B</div>
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
                  {/*   <!-- key0 status--> */}
                  <span className="casino-odds">
                    {" "}
                    {data[0]?.runners[1]?.back[0]?.price}
                  </span>
                  {/* <!-- key0 >> runner1 >>back--> */}
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
                  className={`casino-odds-box back ${
                    data[3]?.status === "OPEN" ? "" : " suspended-box"
                  }`}
                >
                  {/* <!-- key3 status--> */}
                  <span className="casino-odds">
                    {" "}
                    {data[3]?.runners[1]?.back[0]?.price}
                  </span>
                  {/*  <!-- key3 >> runner1 >>back--> */}
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
                  className={`casino-odds-box back ${
                    data[4]?.status === "OPEN" ? "" : " suspended-box"
                  }`}
                >
                  {/*       <!-- key4 status--> */}
                  <span className="casino-odds">
                    {" "}
                    {data[4]?.runners[1]?.back[0]?.price}
                  </span>
                  {/*  <!-- key4 >> runner1 >>back--> */}
                  <div className="casino-nation-book text-center">
                    <span
                      className={`${
                        fourIndexOneRunnersEx && fourIndexOneRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      {fourIndexOneRunnersEx
                        ? fourIndexOneRunnersEx[0]?.pnl
                        : null}
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
                      btype: data[1]?.btype,
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
                  {/*   <!-- key2 status--> */}
                  <span className="casino-odds">
                    {data[2]?.runners[0]?.back[0]?.price}
                  </span>
                  {/* <!-- key2 >> runner0 >>back--> */}
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
              </div>
            </div>
          </div>
          <div className="teenpatti20-other-oods d-md-none">
            <div className="casino-table-right-box">
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[6]?.runners[0]?.back[0]?.price,
                    side: 0,
                    selectionId: data[6]?.runners[0]?.id,
                    btype: data[6]?.btype,
                    eventTypeId: data[6]?.eventTypeId,
                    betDelay: data[6]?.betDelay,
                    marketId: data[6]?.id,
                    back: true,
                    name: data[6]?.runners[0]?.name,
                    isWeak: data[6]?.isWeak,
                  });
                }}
                className={`casino-odds-box back ${
                  data[6]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                {/*  <!-- key6 status --> */}
                <div>
                  <img src="static/front/img/icons/spade.png" />
                  <img src="static/front/img/icons/club.png" />
                </div>
                <div>
                  <span className="casino-odds">
                    {" "}
                    {data[6]?.runners[0]?.back[0]?.price}
                  </span>
                  {/*   <!-- key6 >> runner0 >> back >> price --> */}
                  <div className="casino-nation-book">
                    <span
                      className={`${
                        sixIndexZeroRunnersEx && sixIndexZeroRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      {sixIndexZeroRunnersEx
                        ? sixIndexZeroRunnersEx[0]?.pnl
                        : null}
                    </span>
                  </div>
                </div>
              </div>
  
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[6]?.runners[1]?.back[0]?.price,
                    side: 0,
                    selectionId: data[6]?.runners[1]?.id,
                    btype: data[6]?.btype,
                    eventTypeId: data[6]?.eventTypeId,
                    betDelay: data[6]?.betDelay,
                    marketId: data[6]?.id,
                    back: true,
                    name: data[6]?.runners[1]?.name,
                    isWeak: data[6]?.isWeak,
                  });
                }}
                className={`casino-odds-box back ${
                  data[6]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                {/*    <!-- key6 status --> */}
                <div>
                  <img src="static/front/img/icons/heart.png" />
                  <img src="static/front/img/icons/diamond.png" />
                </div>
                <div>
                  <span className="casino-odds">
                    {data[6]?.runners[1]?.back[0]?.price}
                  </span>
                  {/*  <!-- key6 >> runner1 >> back >> price --> */}
                  <div className="casino-nation-book">
                    <span
                      className={`${
                        sixIndexOneRunnersEx && sixIndexOneRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      {sixIndexOneRunnersEx ? sixIndexOneRunnersEx[0]?.pnl : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="teenpatti20-other-oods d-none d-md-flex">
          <div className="casino-table-left-box">
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
              className={`casino-odds-box back ${
                data[5]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*  <!-- key5 status --> */}
              <div>
              <img src="/spade.png" />
              <img src="/club.png" />
              </div>
              <div>
                <span className="casino-odds">
                  {" "}
                  {data[5]?.runners[0]?.back[0]?.price}
                </span>
                {/* <!-- key5 >> runner0 >> back >> price --> */}
                <div className="casino-nation-book">
                  <span
                    className={`${
                      fiveIndexZeroRunnersEx && fiveIndexZeroRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {fiveIndexZeroRunnersEx
                      ? fiveIndexZeroRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
            </div>
  
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
              className={`casino-odds-box back ${
                data[5]?.status === "OPEN" ? "" : " suspended-box"
              } `}
            >
              {/*  <!-- key5 status --> */}
              <div>
              <img src="/diamond.png" />
              <img src="/heart.png" />
              </div>
              <div>
                <span className="casino-odds">
                  {" "}
                  {data[5]?.runners[1]?.back[0]?.price}
                </span>
                {/*  <!-- key5 >> runner1 >> back >> price --> */}
                <div className="casino-nation-book">
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
          <div className="casino-table-right-box">
            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[6]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[6]?.runners[0]?.id,
                  btype: data[6]?.btype,
                  eventTypeId: data[6]?.eventTypeId,
                  betDelay: data[6]?.betDelay,
                  marketId: data[6]?.id,
                  back: true,
                  name: data[6]?.runners[0]?.name,
                  isWeak: data[6]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[6]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*  <!-- key6 status --> */}
              <div>
              <img src="/spade.png" />
              <img src="/club.png" />
              </div>
              <div>
                <span className="casino-odds">
                  {" "}
                  {data[6]?.runners[0]?.back[0]?.price}
                </span>
                {/*   <!-- key6 >> runner0 >> back >> price --> */}
                <div className="casino-nation-book">
                  <span
                    className={`${
                      sixIndexZeroRunnersEx && sixIndexZeroRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {sixIndexZeroRunnersEx ? sixIndexZeroRunnersEx[0]?.pnl : null}
                  </span>
                </div>
              </div>
            </div>
  
            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[6]?.runners[1]?.back[0]?.price,
                  side: 0,
                  selectionId: data[6]?.runners[1]?.id,
                  btype: data[6]?.btype,
                  eventTypeId: data[6]?.eventTypeId,
                  betDelay: data[6]?.betDelay,
                  marketId: data[6]?.id,
                  back: true,
                  name: data[6]?.runners[1]?.name,
                  isWeak: data[6]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[6]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- key6 status --> */}
              <div>
              <img src="/diamond.png" />
              <img src="/heart.png" />
              </div>
              <div>
                <span className="casino-odds">
                  {data[6]?.runners[1]?.back[0]?.price}
                </span>
                {/*  <!-- key6 >> runner1 >> back >> price --> */}
                <div className="casino-nation-book">
                  <span
                    className={`${
                      sixIndexOneRunnersEx && sixIndexOneRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {sixIndexOneRunnersEx ? sixIndexOneRunnersEx[0]?.pnl : null}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default VTeenPatti;