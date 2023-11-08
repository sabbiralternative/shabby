const DTL20 = ({
  data,
  setPlaceBetValue,
  oddExposure,
  setShowBets,
  lowExposure,
  highExposure,
  zeroIndexTwoRunnersEx,
  evenExposure,
  blackExposure,
  redExposure,
  a23Exposure,
  four56Exposure,
  fourIndexZeroRunnersEx,
  fourIndexOneRunnersEx,
  fiveIndexZeroRunnersEx,
  fiveIndexOneRunnersEx,
  sevenIndexZeroRunnersEx,
  eightIndexZeroRunnersEx,
  nineIndexZeroRunnersEx,
  sevenIndexOneRunnersEx,
  eightIndexOneRunnersEx,
  nineIndexOneRunnersEx,
  sevenIndexTwoRunnersEx,
  // pnlBySelection,
  sixIndexOneRunnersEx,
  sixIndexZeroRunnersEx,
  eightIndexTwoRunnersEx,
  nineIndexTwoRunnersEx,
  sevenIndexThreeRunnersEx,
  eightIndexThreeRunnersEx,
  nineIndexThreeRunnersEx,
  sevenIndexFourRunnersEx,
sevenIndexFiveRunnersEx,
sevenIndexSixRunnersEx,
sevenIndexSevenRunnersEx,
sevenIndexEightRunnersEx,
sevenIndexNineRunnersEx,
sevenIndexTenRunnersEx,
sevenIndexElevenRunnersEx,
sevenIndexTwelveRunnersEx,
eightIndexFourRunnersEx,
eightIndexFiveRunnersEx,
eightIndexSixRunnersEx,
eightIndexSevenRunnersEx,
eightIndexEightRunnersEx,
eightIndexNineRunnersEx,
eightIndexTenRunnersEx,
eightIndexElevenRunnersEx,
eightIndexTwelveRunnersEx,
nineIndexFourRunnersEx,
nineIndexFiveRunnersEx,
nineIndexSixRunnersEx,
nineIndexSevenRunnersEx,
nineIndexEightRunnersEx,
nineIndexNineRunnersEx,
nineIndexTenRunnersEx,
nineIndexElevenRunnersEx,
nineIndexTwelveRunnersEx
}) => {
  return (
    <div className="casino-table">
      <div className="casino-table-box d-none d-md-flex">
        <div className="casino-table-left-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail"></div>
            <div className="casino-odds-box back">Dragon</div>
            <div className="casino-odds-box back">Tiger</div>
            <div className="casino-odds-box back">Lion</div>
          </div>
          <div className="casino-table-body">
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Winner</div>
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
                data[0]?.status === "OPEN" &&
                data[0]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}>
                {/* <!-- key0 status--> */}
                <span className="casino-odds">{data[0]?.runners[0]?.back[0]?.price}</span>
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
                data[0]?.status === "OPEN" &&
                data[0]?.runners[1]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}>
                {/*   <!-- key0 status--> */}
                <span className="casino-odds"> {data[0]?.runners[1]?.back[0]?.price}</span>
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
                data[1]?.status === "OPEN" &&
                data[1]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}>
                {/*  <!-- key0 status--> */}
                <span className="casino-odds">  {data[0]?.runners[2]?.back[0]?.price}</span>
                {/*  <!-- key0 >> runner2 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                  className={`${
                    zeroIndexTwoRunnersEx &&   zeroIndexTwoRunnersEx[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {  zeroIndexTwoRunnersEx ?   zeroIndexTwoRunnersEx[0]?.pnl : null}
                </span>
                </div>
              </div>

              
            </div>
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">
                  Black
                  <span className="card-icon ms-1">
                    <span className="card-black"></span>
                  </span>
                  <span className="card-icon ms-1">
                    <span className="card-black"></span>
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
                  data[1]?.status === "OPEN" &&
                  data[1]?.runners[0]?.status === "ACTIVE"
                    ? ""
                    : "suspended-box"
                }`}>
                {/*   <!-- key1 status--> */}
                <span className="casino-odds"> {data[1]?.runners[0]?.back[0]?.price}</span>
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
                  data[2]?.status === "OPEN" &&
                  data[2]?.runners[0]?.status === "ACTIVE"
                    ? ""
                    : "suspended-box"
                }`}>
                {/*   <!-- key2 status--> */}
                <span className="casino-odds">{data[2]?.runners[0]?.back[0]?.price}</span>
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
                  data[3]?.status === "OPEN" &&
                  data[3]?.runners[0]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}>
                {/*   <!-- key3 status--> */}
                <span className="casino-odds">  {data[3]?.runners[0]?.back[0]?.price}</span>
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
            </div>
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">
                  Red
                  <span className="card-icon ms-1">
                    <span className="card-red"></span>
                  </span>
                  <span className="card-icon ms-1">
                    <span className="card-red"></span>
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
              data[1]?.status === "OPEN" &&
              data[1]?.runners[0]?.status === "ACTIVE"
                ? ""
                : " suspended-box"
            }`}>
                {/*  <!-- key1 status--> */}
                <span className="casino-odds"> {data[1]?.runners[0]?.back[0]?.price}</span>
                {/*  <!-- key1 >> runner1 >>back--> */}
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
              <div
              
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[2]?.runners[1]?.back[0]?.price,
                  side: 0,
                  selectionId: data[2]?.runners[1]?.id,
                  btype: data[1]?.btype,
                  eventTypeId: data[2]?.eventTypeId,
                  betDelay: data[2]?.betDelay,
                  marketId: data[2]?.id,
                  back: true,
                  name: data[2]?.runners[1]?.name,
                  isWeak: data[2]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                  data[2]?.status === "OPEN" &&
                  data[2]?.runners[1]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}>
                {/*  <!-- key2 status--> */}
                <span className="casino-odds">{data[2]?.runners[1]?.back[0]?.price}</span>
                {/*  <!-- key2 >> runner1 >>back--> */}
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
                data[3]?.status === "OPEN" &&
                data[3]?.runners[1]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/* <!-- key3 status--> */}
                <span className="casino-odds"> {data[3]?.runners[1]?.back[0]?.price}</span>
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
            </div>
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Odd</div>
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
                  data[4]?.status === "OPEN" &&
                  data[4]?.runners[0]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}>
                {/*  <!-- key4 status--> */}
                <span className="casino-odds">{data[4]?.runners[0]?.back[0]?.price}</span>
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
                data[5]?.status === "OPEN" &&
                data[5]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/* <!-- key5 status--> */}
                <span className="casino-odds">      {data[5]?.runners[0]?.back[0]?.price}</span>
                {/*  <!-- key5 >> runner0 >>back--> */}
                <div className="casino-nation-book text-center">
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
                data[6]?.status === "OPEN" &&
                data[6]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*    <!-- key6 status--> */}
                <span className="casino-odds">  {data[6]?.runners[0]?.back[0]?.price}</span>
                {/*  <!-- key6 >> runner0 >>back--> */}
                <div className="casino-nation-book text-center">
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
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Even</div>
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
                data[4]?.status === "OPEN" &&
                data[4]?.runners[1]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*       <!-- key4 status--> */}
                <span className="casino-odds"> {data[4]?.runners[1]?.back[0]?.price}</span>
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
                data[5]?.status === "OPEN" &&
                data[5]?.runners[1]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              } `}>
                {/*  <!-- key5 status--> */}
                <span className="casino-odds">{data[5]?.runners[1]?.back[0]?.price}</span>
                {/* <!-- key5 >> runner1 >>back--> */}
                <div className="casino-nation-book text-center">
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
                data[6]?.status === "OPEN" &&
                data[6]?.runners[1]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*    <!-- key6 status--> */}
                <span className="casino-odds">{data[6]?.runners[1]?.back[0]?.price}</span>
                {/*    <!-- key6 >> runner1 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      sixIndexOneRunnersEx && sixIndexOneRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {sixIndexOneRunnersEx
                      ? sixIndexOneRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
            </div>
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">
                  <img src="/cards/A.png" />
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[7]?.runners[0]?.back[0]?.price,
                    side: 0,
                    selectionId: data[7]?.runners[0]?.id,
                    btype: data[7]?.btype,
                    eventTypeId: data[7]?.eventTypeId,
                    betDelay: data[7]?.betDelay,
                    marketId: data[7]?.id,
                    back: true,
                    name: data[7]?.runners[0]?.name,
                    isWeak: data[7]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[7]?.status === "OPEN" &&
                data[7]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key7 status--> */}
                <span className="casino-odds">{data[7]?.runners[0]?.back[0]?.price}</span>
                {/*  <!-- key7 >> runner0 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      sevenIndexZeroRunnersEx && sevenIndexZeroRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {sevenIndexZeroRunnersEx
                      ? sevenIndexZeroRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>

              
   
              <div 
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[8]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[8]?.runners[0]?.id,
                  btype: data[8]?.btype,
                  eventTypeId: data[8]?.eventTypeId,
                  betDelay: data[8]?.betDelay,
                  marketId: data[8]?.id,
                  back: true,
                  name: data[8]?.runners[0]?.name,
                  isWeak: data[8]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[8]?.status === "OPEN" &&
                data[8]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*  <!-- key8 status--> */}
                <span className="casino-odds">{data[8]?.runners[0]?.back[0]?.price}</span>
                {/*   <!-- key8 >> runner0 >>back--> */}
                <div className="casino-nation-book text-center"> <span
                    className={`${
                      eightIndexZeroRunnersEx && eightIndexZeroRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {eightIndexZeroRunnersEx
                      ? eightIndexZeroRunnersEx[0]?.pnl
                      : null}
                  </span></div>
              </div>

              <div
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[9]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[9]?.runners[0]?.id,
                  btype: data[9]?.btype,
                  eventTypeId: data[9]?.eventTypeId,
                  betDelay: data[9]?.betDelay,
                  marketId: data[9]?.id,
                  back: true,
                  name: data[9]?.runners[0]?.name,
                  isWeak: data[9]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[9]?.status === "OPEN" &&
                data[9]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key9 status--> */}
                <span className="casino-odds">{data[9]?.runners[0]?.back[0]?.price}</span>
                {/*   <!-- key9 >> runner0 >>back--> */}
                <div className="casino-nation-book text-center"><span
                    className={`${
                      nineIndexZeroRunnersEx && nineIndexZeroRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {nineIndexZeroRunnersEx
                      ? nineIndexZeroRunnersEx[0]?.pnl
                      : null}
                  </span></div>
              </div>
            </div>

            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">
                  <img src={`/cards/2.png`} />
                </div>
              </div>
              <div
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[7]?.runners[1]?.back[0]?.price,
                  side: 0,
                  selectionId: data[7]?.runners[1]?.id,
                  btype: data[7]?.btype,
                  eventTypeId: data[7]?.eventTypeId,
                  betDelay: data[7]?.betDelay,
                  marketId: data[7]?.id,
                  back: true,
                  name: data[7]?.runners[1]?.name,
                  isWeak: data[7]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[7]?.status === "OPEN" &&
                data[7]?.runners[1]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key7 status--> */}
                <span className="casino-odds">{data[7]?.runners[1]?.back[0]?.price}</span>
                {/*  <!-- key7 >> runner1 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      sevenIndexOneRunnersEx && sevenIndexOneRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {sevenIndexOneRunnersEx
                      ? sevenIndexOneRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[8]?.runners[1]?.back[0]?.price,
                  side: 0,
                  selectionId: data[8]?.runners[1]?.id,
                  btype: data[8]?.btype,
                  eventTypeId: data[8]?.eventTypeId,
                  betDelay: data[8]?.betDelay,
                  marketId: data[8]?.id,
                  back: true,
                  name: data[8]?.runners[1]?.name,
                  isWeak: data[8]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[8]?.status === "OPEN" &&
                data[8]?.runners[1]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*  <!-- key8 status--> */}
                <span className="casino-odds">{data[8]?.runners[1]?.back[0]?.price}</span>
                {/*  <!-- key8 >> runner1 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      eightIndexOneRunnersEx &&  eightIndexOneRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { eightIndexOneRunnersEx
                      ?  eightIndexOneRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div 
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[9]?.runners[1]?.back[0]?.price,
                  side: 0,
                  selectionId: data[9]?.runners[1]?.id,
                  btype: data[9]?.btype,
                  eventTypeId: data[9]?.eventTypeId,
                  betDelay: data[9]?.betDelay,
                  marketId: data[9]?.id,
                  back: true,
                  name: data[9]?.runners[1]?.name,
                  isWeak: data[9]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[9]?.status === "OPEN" &&
                data[9]?.runners[1]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*  <!-- key9 status--> */}
                <span className="casino-odds">{data[9]?.runners[1]?.back[0]?.price}</span>
                {/*  <!-- key9 >> runner1 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      nineIndexOneRunnersEx &&  nineIndexOneRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { nineIndexOneRunnersEx
                      ?  nineIndexOneRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
            </div>
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">
                  <img src="/cards/3.png" />
                </div>
              </div>
              <div
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[7]?.runners[2]?.back[0]?.price,
                  side: 0,
                  selectionId: data[7]?.runners[2]?.id,
                  btype: data[7]?.btype,
                  eventTypeId: data[7]?.eventTypeId,
                  betDelay: data[7]?.betDelay,
                  marketId: data[7]?.id,
                  back: true,
                  name: data[7]?.runners[2]?.name,
                  isWeak: data[7]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[7]?.status === "OPEN" &&
                data[7]?.runners[2]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*  <!-- key7 status--> */}
                <span className="casino-odds"> {data[7]?.runners[2]?.back[0]?.price}  </span>
                {/*   <!-- key7 >> runner2 >>back--> */}
                <div className="casino-nation-book text-center"> <span
                    className={`${
                      sevenIndexTwoRunnersEx &&  sevenIndexTwoRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { sevenIndexTwoRunnersEx
                      ?  sevenIndexTwoRunnersEx[0]?.pnl
                      : null}
                  </span></div>
              </div>
              <div 
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[8]?.runners[2]?.back[0]?.price,
                  side: 0,
                  selectionId: data[8]?.runners[2]?.id,
                  btype: data[8]?.btype,
                  eventTypeId: data[8]?.eventTypeId,
                  betDelay: data[8]?.betDelay,
                  marketId: data[8]?.id,
                  back: true,
                  name: data[8]?.runners[2]?.name,
                  isWeak: data[8]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[8]?.status === "OPEN" &&
                data[8]?.runners[2]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*    <!-- key8 status--> */}
                <span className="casino-odds">{data[8]?.runners[2]?.back[0]?.price} </span>
                {/* <!-- key8 >> runner2 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      eightIndexTwoRunnersEx &&  eightIndexTwoRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { eightIndexTwoRunnersEx
                      ?  eightIndexTwoRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[9]?.runners[2]?.back[0]?.price,
                  side: 0,
                  selectionId: data[9]?.runners[2]?.id,
                  btype: data[9]?.btype,
                  eventTypeId: data[9]?.eventTypeId,
                  betDelay: data[9]?.betDelay,
                  marketId: data[9]?.id,
                  back: true,
                  name: data[9]?.runners[2]?.name,
                  isWeak: data[9]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[9]?.status === "OPEN" &&
                data[9]?.runners[2]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key9 status--> */}
                <span className="casino-odds">{data[9]?.runners[2]?.back[0]?.price}</span>
                {/*   <!-- key9 >> runner2 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      nineIndexTwoRunnersEx &&  nineIndexTwoRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { nineIndexTwoRunnersEx
                      ?  nineIndexTwoRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
            </div>
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">
                  <img src="/cards/4.png" />
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[7]?.runners[3]?.back[0]?.price,
                    side: 0,
                    selectionId: data[7]?.runners[3]?.id,
                    btype: data[7]?.btype,
                    eventTypeId: data[7]?.eventTypeId,
                    betDelay: data[7]?.betDelay,
                    marketId: data[7]?.id,
                    back: true,
                    name: data[7]?.runners[3]?.name,
                    isWeak: data[7]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[7]?.status === "OPEN" &&
                data[7]?.runners[3]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key7 status--> */}
                <span className="casino-odds">{data[7]?.runners[3]?.back[0]?.price}</span>
                {/*    <!-- key7 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      sevenIndexThreeRunnersEx &&  sevenIndexThreeRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { sevenIndexThreeRunnersEx
                      ?  sevenIndexThreeRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[8]?.runners[3]?.back[0]?.price,
                    side: 0,
                    selectionId: data[8]?.runners[3]?.id,
                    btype: data[8]?.btype,
                    eventTypeId: data[8]?.eventTypeId,
                    betDelay: data[8]?.betDelay,
                    marketId: data[8]?.id,
                    back: true,
                    name: data[8]?.runners[3]?.name,
                    isWeak: data[8]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[8]?.status === "OPEN" &&
                data[8]?.runners[3]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key8 status--> */}
                <span className="casino-odds">{data[8]?.runners[3]?.back[0]?.price}</span>
                {/*   <!-- key8 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      eightIndexThreeRunnersEx &&  eightIndexThreeRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { eightIndexThreeRunnersEx
                      ?  eightIndexThreeRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[9]?.runners[3]?.back[0]?.price,
                  side: 0,
                  selectionId: data[9]?.runners[3]?.id,
                  btype: data[9]?.btype,
                  eventTypeId: data[9]?.eventTypeId,
                  betDelay: data[9]?.betDelay,
                  marketId: data[9]?.id,
                  back: true,
                  name: data[9]?.runners[3]?.name,
                  isWeak: data[9]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[9]?.status === "OPEN" &&
                data[9]?.runners[3]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key9 status--> */}
                <span className="casino-odds">{data[9]?.runners[3]?.back[0]?.price}</span>
                {/*  <!-- key9 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      nineIndexThreeRunnersEx &&  nineIndexThreeRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { nineIndexThreeRunnersEx
                      ?  nineIndexThreeRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right box */}
        <div className="casino-table-right-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail"></div>
            <div className="casino-odds-box back">Dragon</div>
            <div className="casino-odds-box back">Tiger</div>
            <div className="casino-odds-box back">Lion</div>
          </div>
          <div className="casino-table-body">


{/* data[7] data[8] data[9] 4index */}
           <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">
                  <img src="/cards/5.png" />
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[7]?.runners[4]?.back[0]?.price,
                    side: 0,
                    selectionId: data[7]?.runners[4]?.id,
                    btype: data[7]?.btype,
                    eventTypeId: data[7]?.eventTypeId,
                    betDelay: data[7]?.betDelay,
                    marketId: data[7]?.id,
                    back: true,
                    name: data[7]?.runners[4]?.name,
                    isWeak: data[7]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[7]?.status === "OPEN" &&
                data[7]?.runners[4]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key7 status--> */}
                <span className="casino-odds">{data[7]?.runners[4]?.back[0]?.price}</span>
                {/*    <!-- key7 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      sevenIndexFourRunnersEx &&  sevenIndexFourRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { sevenIndexFourRunnersEx
                      ?  sevenIndexFourRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[8]?.runners[4]?.back[0]?.price,
                    side: 0,
                    selectionId: data[8]?.runners[4]?.id,
                    btype: data[8]?.btype,
                    eventTypeId: data[8]?.eventTypeId,
                    betDelay: data[8]?.betDelay,
                    marketId: data[8]?.id,
                    back: true,
                    name: data[8]?.runners[4]?.name,
                    isWeak: data[8]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[8]?.status === "OPEN" &&
                data[8]?.runners[4]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key8 status--> */}
                <span className="casino-odds">{data[8]?.runners[4]?.back[0]?.price}</span>
                {/*   <!-- key8 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      eightIndexFourRunnersEx &&  eightIndexFourRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { eightIndexFourRunnersEx
                      ?  eightIndexFourRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[9]?.runners[4]?.back[0]?.price,
                  side: 0,
                  selectionId: data[9]?.runners[4]?.id,
                  btype: data[9]?.btype,
                  eventTypeId: data[9]?.eventTypeId,
                  betDelay: data[9]?.betDelay,
                  marketId: data[9]?.id,
                  back: true,
                  name: data[9]?.runners[4]?.name,
                  isWeak: data[9]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[9]?.status === "OPEN" &&
                data[9]?.runners[4]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key9 status--> */}
                <span className="casino-odds">{data[9]?.runners[4]?.back[0]?.price}</span>
                {/*  <!-- key9 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      nineIndexFourRunnersEx &&  nineIndexFourRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { nineIndexFourRunnersEx
                      ?  nineIndexFourRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
            </div>

{/* data[7] data[8] data[9] 5index */}
<div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">
                  <img src="/cards/6.png" />
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[7]?.runners[5]?.back[0]?.price,
                    side: 0,
                    selectionId: data[7]?.runners[5]?.id,
                    btype: data[7]?.btype,
                    eventTypeId: data[7]?.eventTypeId,
                    betDelay: data[7]?.betDelay,
                    marketId: data[7]?.id,
                    back: true,
                    name: data[7]?.runners[5]?.name,
                    isWeak: data[7]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[7]?.status === "OPEN" &&
                data[7]?.runners[5]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key7 status--> */}
                <span className="casino-odds">{data[7]?.runners[5]?.back[0]?.price}</span>
                {/*    <!-- key7 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      sevenIndexFiveRunnersEx &&  sevenIndexFiveRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { sevenIndexFiveRunnersEx
                      ?  sevenIndexFiveRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[8]?.runners[5]?.back[0]?.price,
                    side: 0,
                    selectionId: data[8]?.runners[5]?.id,
                    btype: data[8]?.btype,
                    eventTypeId: data[8]?.eventTypeId,
                    betDelay: data[8]?.betDelay,
                    marketId: data[8]?.id,
                    back: true,
                    name: data[8]?.runners[5]?.name,
                    isWeak: data[8]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[8]?.status === "OPEN" &&
                data[8]?.runners[5]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key8 status--> */}
                <span className="casino-odds">{data[8]?.runners[5]?.back[0]?.price}</span>
                {/*   <!-- key8 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      eightIndexFiveRunnersEx &&  eightIndexFiveRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { eightIndexFiveRunnersEx
                      ?  eightIndexFiveRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[9]?.runners[5]?.back[0]?.price,
                  side: 0,
                  selectionId: data[9]?.runners[6]?.id,
                  btype: data[9]?.btype,
                  eventTypeId: data[9]?.eventTypeId,
                  betDelay: data[9]?.betDelay,
                  marketId: data[9]?.id,
                  back: true,
                  name: data[9]?.runners[6]?.name,
                  isWeak: data[9]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[9]?.status === "OPEN" &&
                data[9]?.runners[5]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key9 status--> */}
                <span className="casino-odds">{data[9]?.runners[5]?.back[0]?.price}</span>
                {/*  <!-- key9 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      nineIndexFiveRunnersEx &&  nineIndexFiveRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { nineIndexFiveRunnersEx
                      ?  nineIndexFiveRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
            </div>
            {/* data[7] data[8] data[9] 6index */}
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">
                  <img src="/cards/7.png" />
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[7]?.runners[6]?.back[0]?.price,
                    side: 0,
                    selectionId: data[7]?.runners[6]?.id,
                    btype: data[7]?.btype,
                    eventTypeId: data[7]?.eventTypeId,
                    betDelay: data[7]?.betDelay,
                    marketId: data[7]?.id,
                    back: true,
                    name: data[7]?.runners[6]?.name,
                    isWeak: data[7]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[7]?.status === "OPEN" &&
                data[7]?.runners[6]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key7 status--> */}
                <span className="casino-odds">{data[7]?.runners[6]?.back[0]?.price}</span>
                {/*    <!-- key7 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      sevenIndexSixRunnersEx &&  sevenIndexSixRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { sevenIndexSixRunnersEx
                      ?  sevenIndexSixRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[8]?.runners[6]?.back[0]?.price,
                    side: 0,
                    selectionId: data[8]?.runners[6]?.id,
                    btype: data[8]?.btype,
                    eventTypeId: data[8]?.eventTypeId,
                    betDelay: data[8]?.betDelay,
                    marketId: data[8]?.id,
                    back: true,
                    name: data[8]?.runners[6]?.name,
                    isWeak: data[8]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[8]?.status === "OPEN" &&
                data[8]?.runners[6]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key8 status--> */}
                <span className="casino-odds">{data[8]?.runners[6]?.back[0]?.price}</span>
                {/*   <!-- key8 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      eightIndexSixRunnersEx &&  eightIndexSixRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { eightIndexSixRunnersEx
                      ?  eightIndexSixRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[9]?.runners[6]?.back[0]?.price,
                  side: 0,
                  selectionId: data[9]?.runners[6]?.id,
                  btype: data[9]?.btype,
                  eventTypeId: data[9]?.eventTypeId,
                  betDelay: data[9]?.betDelay,
                  marketId: data[9]?.id,
                  back: true,
                  name: data[9]?.runners[6]?.name,
                  isWeak: data[9]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[9]?.status === "OPEN" &&
                data[9]?.runners[6]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key9 status--> */}
                <span className="casino-odds">{data[9]?.runners[6]?.back[0]?.price}</span>
                {/*  <!-- key9 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      nineIndexSixRunnersEx &&  nineIndexSixRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { nineIndexSixRunnersEx
                      ?  nineIndexSixRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
            </div>

              {/* data[7] data[8] data[9] 7-index */}
              <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">
                  <img src="/cards/8.png" />
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[7]?.runners[7]?.back[0]?.price,
                    side: 0,
                    selectionId: data[7]?.runners[7]?.id,
                    btype: data[7]?.btype,
                    eventTypeId: data[7]?.eventTypeId,
                    betDelay: data[7]?.betDelay,
                    marketId: data[7]?.id,
                    back: true,
                    name: data[7]?.runners[7]?.name,
                    isWeak: data[7]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[7]?.status === "OPEN" &&
                data[7]?.runners[7]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key7 status--> */}
                <span className="casino-odds">{data[7]?.runners[7]?.back[0]?.price}</span>
                {/*    <!-- key7 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      sevenIndexSevenRunnersEx &&  sevenIndexSevenRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { sevenIndexSevenRunnersEx
                      ?  sevenIndexSevenRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[8]?.runners[7]?.back[0]?.price,
                    side: 0,
                    selectionId: data[8]?.runners[7]?.id,
                    btype: data[8]?.btype,
                    eventTypeId: data[8]?.eventTypeId,
                    betDelay: data[8]?.betDelay,
                    marketId: data[8]?.id,
                    back: true,
                    name: data[8]?.runners[7]?.name,
                    isWeak: data[8]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[8]?.status === "OPEN" &&
                data[8]?.runners[7]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key8 status--> */}
                <span className="casino-odds">{data[8]?.runners[7]?.back[0]?.price}</span>
                {/*   <!-- key8 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      eightIndexSevenRunnersEx &&  eightIndexSevenRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { eightIndexSevenRunnersEx
                      ?  eightIndexSevenRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[9]?.runners[7]?.back[0]?.price,
                  side: 0,
                  selectionId: data[9]?.runners[7]?.id,
                  btype: data[9]?.btype,
                  eventTypeId: data[9]?.eventTypeId,
                  betDelay: data[9]?.betDelay,
                  marketId: data[9]?.id,
                  back: true,
                  name: data[9]?.runners[7]?.name,
                  isWeak: data[9]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[9]?.status === "OPEN" &&
                data[9]?.runners[7]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key9 status--> */}
                <span className="casino-odds">{data[9]?.runners[7]?.back[0]?.price}</span>
                {/*  <!-- key9 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      nineIndexSevenRunnersEx &&  nineIndexSevenRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { nineIndexSevenRunnersEx
                      ?  nineIndexSevenRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
            </div>
 {/* data[7] data[8] data[9] 8-index */}
 <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">
                  <img src="/cards/9.png" />
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[7]?.runners[8]?.back[0]?.price,
                    side: 0,
                    selectionId: data[7]?.runners[8]?.id,
                    btype: data[7]?.btype,
                    eventTypeId: data[7]?.eventTypeId,
                    betDelay: data[7]?.betDelay,
                    marketId: data[7]?.id,
                    back: true,
                    name: data[7]?.runners[8]?.name,
                    isWeak: data[7]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[7]?.status === "OPEN" &&
                data[7]?.runners[8]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key7 status--> */}
                <span className="casino-odds">{data[7]?.runners[8]?.back[0]?.price}</span>
                {/*    <!-- key7 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      sevenIndexEightRunnersEx &&  sevenIndexEightRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { sevenIndexEightRunnersEx
                      ?  sevenIndexEightRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[8]?.runners[8]?.back[0]?.price,
                    side: 0,
                    selectionId: data[8]?.runners[8]?.id,
                    btype: data[8]?.btype,
                    eventTypeId: data[8]?.eventTypeId,
                    betDelay: data[8]?.betDelay,
                    marketId: data[8]?.id,
                    back: true,
                    name: data[8]?.runners[8]?.name,
                    isWeak: data[8]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[8]?.status === "OPEN" &&
                data[8]?.runners[8]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key8 status--> */}
                <span className="casino-odds">{data[8]?.runners[8]?.back[0]?.price}</span>
                {/*   <!-- key8 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      eightIndexEightRunnersEx &&  eightIndexEightRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { eightIndexEightRunnersEx
                      ?  eightIndexEightRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[9]?.runners[8]?.back[0]?.price,
                  side: 0,
                  selectionId: data[9]?.runners[8]?.id,
                  btype: data[9]?.btype,
                  eventTypeId: data[9]?.eventTypeId,
                  betDelay: data[9]?.betDelay,
                  marketId: data[9]?.id,
                  back: true,
                  name: data[9]?.runners[8]?.name,
                  isWeak: data[9]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[9]?.status === "OPEN" &&
                data[9]?.runners[8]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key9 status--> */}
                <span className="casino-odds">{data[9]?.runners[8]?.back[0]?.price}</span>
                {/*  <!-- key9 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      nineIndexEightRunnersEx &&   nineIndexEightRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {  nineIndexEightRunnersEx
                      ?   nineIndexEightRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
            </div>
             {/* data[7] data[8] data[9] 9-index */}
             <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">
                  <img src="/cards/10.png" />
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[7]?.runners[9]?.back[0]?.price,
                    side: 0,
                    selectionId: data[7]?.runners[9]?.id,
                    btype: data[7]?.btype,
                    eventTypeId: data[7]?.eventTypeId,
                    betDelay: data[7]?.betDelay,
                    marketId: data[7]?.id,
                    back: true,
                    name: data[7]?.runners[9]?.name,
                    isWeak: data[7]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[7]?.status === "OPEN" &&
                data[7]?.runners[9]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key7 status--> */}
                <span className="casino-odds">{data[7]?.runners[9]?.back[0]?.price}</span>
                {/*    <!-- key7 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      sevenIndexNineRunnersEx &&  sevenIndexNineRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { sevenIndexNineRunnersEx
                      ?  sevenIndexNineRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[8]?.runners[9]?.back[0]?.price,
                    side: 0,
                    selectionId: data[8]?.runners[9]?.id,
                    btype: data[8]?.btype,
                    eventTypeId: data[8]?.eventTypeId,
                    betDelay: data[8]?.betDelay,
                    marketId: data[8]?.id,
                    back: true,
                    name: data[8]?.runners[9]?.name,
                    isWeak: data[8]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[8]?.status === "OPEN" &&
                data[8]?.runners[9]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key8 status--> */}
                <span className="casino-odds">{data[8]?.runners[9]?.back[0]?.price}</span>
                {/*   <!-- key8 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      eightIndexNineRunnersEx &&  eightIndexNineRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { eightIndexNineRunnersEx
                      ?  eightIndexNineRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[9]?.runners[9]?.back[0]?.price,
                  side: 0,
                  selectionId: data[9]?.runners[9]?.id,
                  btype: data[9]?.btype,
                  eventTypeId: data[9]?.eventTypeId,
                  betDelay: data[9]?.betDelay,
                  marketId: data[9]?.id,
                  back: true,
                  name: data[9]?.runners[9]?.name,
                  isWeak: data[9]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[9]?.status === "OPEN" &&
                data[9]?.runners[9]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key9 status--> */}
                <span className="casino-odds">{data[9]?.runners[9]?.back[0]?.price}</span>
                {/*  <!-- key9 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      nineIndexNineRunnersEx &&  nineIndexNineRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { nineIndexNineRunnersEx
                      ?  nineIndexNineRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
            </div>
             {/* data[7] data[8] data[9] 10-index */}
             <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">
                  <img src="/cards/J.png" />
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[7]?.runners[10]?.back[0]?.price,
                    side: 0,
                    selectionId: data[7]?.runners[10]?.id,
                    btype: data[7]?.btype,
                    eventTypeId: data[7]?.eventTypeId,
                    betDelay: data[7]?.betDelay,
                    marketId: data[7]?.id,
                    back: true,
                    name: data[7]?.runners[10]?.name,
                    isWeak: data[7]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[7]?.status === "OPEN" &&
                data[7]?.runners[10]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key7 status--> */}
                <span className="casino-odds">{data[7]?.runners[10]?.back[0]?.price}</span>
                {/*    <!-- key7 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      sevenIndexTenRunnersEx &&  sevenIndexTenRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { sevenIndexTenRunnersEx
                      ?  sevenIndexTenRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[8]?.runners[10]?.back[0]?.price,
                    side: 0,
                    selectionId: data[8]?.runners[10]?.id,
                    btype: data[8]?.btype,
                    eventTypeId: data[8]?.eventTypeId,
                    betDelay: data[8]?.betDelay,
                    marketId: data[8]?.id,
                    back: true,
                    name: data[8]?.runners[10]?.name,
                    isWeak: data[8]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[8]?.status === "OPEN" &&
                data[8]?.runners[10]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key8 status--> */}
                <span className="casino-odds">{data[8]?.runners[10]?.back[0]?.price}</span>
                {/*   <!-- key8 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      eightIndexTenRunnersEx &&  eightIndexTenRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { eightIndexTenRunnersEx
                      ?  eightIndexTenRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[9]?.runners[10]?.back[0]?.price,
                  side: 0,
                  selectionId: data[9]?.runners[10]?.id,
                  btype: data[9]?.btype,
                  eventTypeId: data[9]?.eventTypeId,
                  betDelay: data[9]?.betDelay,
                  marketId: data[9]?.id,
                  back: true,
                  name: data[9]?.runners[10]?.name,
                  isWeak: data[9]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[9]?.status === "OPEN" &&
                data[9]?.runners[10]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key9 status--> */}
                <span className="casino-odds">{data[9]?.runners[10]?.back[0]?.price}</span>
                {/*  <!-- key9 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      nineIndexTenRunnersEx &&  nineIndexTenRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { nineIndexTenRunnersEx
                      ?  nineIndexTenRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
            </div>
             {/* data[7] data[8] data[9] 11-index */}
             <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">
                  <img src="/cards/Q.png" />
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[7]?.runners[11]?.back[0]?.price,
                    side: 0,
                    selectionId: data[7]?.runners[11]?.id,
                    btype: data[7]?.btype,
                    eventTypeId: data[7]?.eventTypeId,
                    betDelay: data[7]?.betDelay,
                    marketId: data[7]?.id,
                    back: true,
                    name: data[7]?.runners[11]?.name,
                    isWeak: data[7]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[7]?.status === "OPEN" &&
                data[7]?.runners[11]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key7 status--> */}
                <span className="casino-odds">{data[7]?.runners[11]?.back[0]?.price}</span>
                {/*    <!-- key7 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      sevenIndexElevenRunnersEx &&   sevenIndexElevenRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {  sevenIndexElevenRunnersEx
                      ?   sevenIndexElevenRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[8]?.runners[11]?.back[0]?.price,
                    side: 0,
                    selectionId: data[8]?.runners[11]?.id,
                    btype: data[8]?.btype,
                    eventTypeId: data[8]?.eventTypeId,
                    betDelay: data[8]?.betDelay,
                    marketId: data[8]?.id,
                    back: true,
                    name: data[8]?.runners[11]?.name,
                    isWeak: data[8]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[8]?.status === "OPEN" &&
                data[8]?.runners[11]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key8 status--> */}
                <span className="casino-odds">{data[8]?.runners[11]?.back[0]?.price}</span>
                {/*   <!-- key8 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      eightIndexElevenRunnersEx &&  eightIndexElevenRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { eightIndexElevenRunnersEx
                      ?  eightIndexElevenRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[9]?.runners[11]?.back[0]?.price,
                  side: 0,
                  selectionId: data[9]?.runners[11]?.id,
                  btype: data[9]?.btype,
                  eventTypeId: data[9]?.eventTypeId,
                  betDelay: data[9]?.betDelay,
                  marketId: data[9]?.id,
                  back: true,
                  name: data[9]?.runners[11]?.name,
                  isWeak: data[9]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[9]?.status === "OPEN" &&
                data[9]?.runners[11]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key9 status--> */}
                <span className="casino-odds">{data[9]?.runners[11]?.back[0]?.price}</span>
                {/*  <!-- key9 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      nineIndexElevenRunnersEx &&  nineIndexElevenRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { nineIndexElevenRunnersEx
                      ?  nineIndexElevenRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
            </div>
              {/* data[7] data[8] data[9] 12-index */}
              <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">
                  <img src="/cards/K.png" />
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[7]?.runners[12]?.back[0]?.price,
                    side: 0,
                    selectionId: data[7]?.runners[12]?.id,
                    btype: data[7]?.btype,
                    eventTypeId: data[7]?.eventTypeId,
                    betDelay: data[7]?.betDelay,
                    marketId: data[7]?.id,
                    back: true,
                    name: data[7]?.runners[12]?.name,
                    isWeak: data[7]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[7]?.status === "OPEN" &&
                data[7]?.runners[12]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key7 status--> */}
                <span className="casino-odds">{data[7]?.runners[12]?.back[0]?.price}</span>
                {/*    <!-- key7 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      sevenIndexTwelveRunnersEx &&   sevenIndexTwelveRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {  sevenIndexTwelveRunnersEx
                      ?   sevenIndexTwelveRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[8]?.runners[12]?.back[0]?.price,
                    side: 0,
                    selectionId: data[8]?.runners[12]?.id,
                    btype: data[8]?.btype,
                    eventTypeId: data[8]?.eventTypeId,
                    betDelay: data[8]?.betDelay,
                    marketId: data[8]?.id,
                    back: true,
                    name: data[8]?.runners[12]?.name,
                    isWeak: data[8]?.isWeak,
                  });
                }}
              className={`casino-odds-box back ${
                data[8]?.status === "OPEN" &&
                data[8]?.runners[12]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key8 status--> */}
                <span className="casino-odds">{data[8]?.runners[12]?.back[0]?.price}</span>
                {/*   <!-- key8 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      eightIndexTwelveRunnersEx &&  eightIndexTwelveRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { eightIndexTwelveRunnersEx
                      ?  eightIndexTwelveRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
              <div
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[9]?.runners[12]?.back[0]?.price,
                  side: 0,
                  selectionId: data[9]?.runners[12]?.id,
                  btype: data[9]?.btype,
                  eventTypeId: data[9]?.eventTypeId,
                  betDelay: data[9]?.betDelay,
                  marketId: data[9]?.id,
                  back: true,
                  name: data[9]?.runners[12]?.name,
                  isWeak: data[9]?.isWeak,
                });
              }}
              className={`casino-odds-box back ${
                data[9]?.status === "OPEN" &&
                data[9]?.runners[12]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*   <!-- key9 status--> */}
                <span className="casino-odds">{data[9]?.runners[12]?.back[0]?.price}</span>
                {/*  <!-- key9 >> runner3 >>back--> */}
                <div className="casino-nation-book text-center">
                <span
                    className={`${
                      nineIndexTwelveRunnersEx &&  nineIndexTwelveRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    { nineIndexTwelveRunnersEx
                      ?  nineIndexTwelveRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>







































































      <ul className="d-xl-none nav nav-pills" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            type="button"
            id="uncontrolled-tab-example-tab-0"
            role="tab"
            data-rr-ui-event-key="0"
            aria-controls="uncontrolled-tab-example-tabpane-0"
            aria-selected="true"
            className="nav-link active"
          >
            Dragon
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            type="button"
            id="uncontrolled-tab-example-tab-1"
            role="tab"
            data-rr-ui-event-key="1"
            aria-controls="uncontrolled-tab-example-tabpane-1"
            aria-selected="false"
            tabIndex="-1"
            className="nav-link"
          >
            Tiger
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            type="button"
            id="uncontrolled-tab-example-tab-2"
            role="tab"
            data-rr-ui-event-key="2"
            aria-controls="uncontrolled-tab-example-tabpane-2"
            aria-selected="false"
            tabIndex="-1"
            className="nav-link"
          >
            Lion
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div
          role="tabpanel"
          id="uncontrolled-tab-example-tabpane-0"
          aria-labelledby="uncontrolled-tab-example-tab-0"
          className="fade d-xl-none tab-pane active show"
        >
          <div className="casino-table-box">
            <div className="casino-table-left-box">
              <div className="casino-table-body">
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">Winner</div>
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
                  data[0]?.status === "OPEN" &&
                  data[0]?.runners[0]?.status === "ACTIVE"
                    ? ""
                    : "suspended-box"
                }`}>
                  {/* <!-- key0 status--> */}
                  <span className="casino-odds">{data[0]?.runners[0]?.back[0]?.price}</span>
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
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      Black
                      <span className="card-icon ms-1">
                        <span className="card-black"></span>
                      </span>
                      <span className="card-icon ms-1">
                        <span className="card-black"></span>
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
                    data[1]?.status === "OPEN" &&
                    data[1]?.runners[0]?.status === "ACTIVE"
                      ? ""
                      : "suspended-box"
                  }`}>
                  {/*   <!-- key1 status--> */}
                  <span className="casino-odds"> {data[1]?.runners[0]?.back[0]?.price}</span>
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
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      Red
                      <span className="card-icon ms-1">
                        <span className="card-red"></span>
                      </span>
                      <span className="card-icon ms-1">
                        <span className="card-red"></span>
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
                    data[1]?.status === "OPEN" &&
                    data[1]?.runners[1]?.status === "ACTIVE"
                      ? ""
                      : "suspended-box"
                  }`}>
                  {/*   <!-- key1 status--> */}
                  <span className="casino-odds"> {data[1]?.runners[1]?.back[0]?.price}</span>
                  {/*  <!-- key1 >> runner0 >>back--> */}
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
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">Odd</div>
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
                    data[2]?.status === "OPEN" &&
                    data[2]?.runners[0]?.status === "ACTIVE"
                      ? ""
                      : "suspended-box"
                  }`}>
                  {/*   <!-- key2 status--> */}
                  <span className="casino-odds">{data[2]?.runners[0]?.back[0]?.price}</span>
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
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">Even</div>
                  </div>
                  <div
                
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[2]?.runners[1]?.back[0]?.price,
                    side: 0,
                    selectionId: data[2]?.runners[1]?.id,
                    btype: data[1]?.btype,
                    eventTypeId: data[2]?.eventTypeId,
                    betDelay: data[2]?.betDelay,
                    marketId: data[2]?.id,
                    back: true,
                    name: data[2]?.runners[1]?.name,
                    isWeak: data[2]?.isWeak,
                  });
                }}
                className={`casino-odds-box back ${
                    data[2]?.status === "OPEN" &&
                    data[2]?.runners[1]?.status === "ACTIVE"
                      ? ""
                      : " suspended-box"
                  }`}>
                  {/*  <!-- key2 status--> */}
                  <span className="casino-odds">{data[2]?.runners[1]?.back[0]?.price}</span>
                  {/*  <!-- key2 >> runner1 >>back--> */}
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
                {/* Key 7 */}
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="/cards/A.png" />
                    </div>
                  </div>
                  <div
                  onClick={() => {
                    setShowBets(true);
                    setPlaceBetValue({});
                    setPlaceBetValue({
                      price: data[7]?.runners[0]?.back[0]?.price,
                      side: 0,
                      selectionId: data[7]?.runners[0]?.id,
                      btype: data[7]?.btype,
                      eventTypeId: data[7]?.eventTypeId,
                      betDelay: data[7]?.betDelay,
                      marketId: data[7]?.id,
                      back: true,
                      name: data[7]?.runners[0]?.name,
                      isWeak: data[7]?.isWeak,
                    });
                  }}
                className={`casino-odds-box back ${
                  data[7]?.status === "OPEN" &&
                  data[7]?.runners[0]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}>
                  {/*   <!-- key7 status--> */}
                  <span className="casino-odds">{data[7]?.runners[0]?.back[0]?.price}</span>
                  {/*  <!-- key7 >> runner0 >>back--> */}
                  <div className="casino-nation-book text-center">
                  <span
                      className={`${
                        sevenIndexZeroRunnersEx && sevenIndexZeroRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      {sevenIndexZeroRunnersEx
                        ? sevenIndexZeroRunnersEx[0]?.pnl
                        : null}
                    </span>
                  </div>
                </div>
  
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="/cards/2.png" />
                    </div>
                  </div>
                  <div
                 onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[7]?.runners[1]?.back[0]?.price,
                    side: 0,
                    selectionId: data[7]?.runners[1]?.id,
                    btype: data[7]?.btype,
                    eventTypeId: data[7]?.eventTypeId,
                    betDelay: data[7]?.betDelay,
                    marketId: data[7]?.id,
                    back: true,
                    name: data[7]?.runners[1]?.name,
                    isWeak: data[7]?.isWeak,
                  });
                }}
                className={`casino-odds-box back ${
                  data[7]?.status === "OPEN" &&
                  data[7]?.runners[1]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}>
                  {/*   <!-- key7 status--> */}
                  <span className="casino-odds">{data[7]?.runners[1]?.back[0]?.price}</span>
                  {/*  <!-- key7 >> runner1 >>back--> */}
                  <div className="casino-nation-book text-center">
                  <span
                      className={`${
                        sevenIndexOneRunnersEx && sevenIndexOneRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      {sevenIndexOneRunnersEx
                        ? sevenIndexOneRunnersEx[0]?.pnl
                        : null}
                    </span>
                  </div>
                </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="/cards/3.png" />
                    </div>
                  </div>
                  <div
                 onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[7]?.runners[2]?.back[0]?.price,
                    side: 0,
                    selectionId: data[7]?.runners[2]?.id,
                    btype: data[7]?.btype,
                    eventTypeId: data[7]?.eventTypeId,
                    betDelay: data[7]?.betDelay,
                    marketId: data[7]?.id,
                    back: true,
                    name: data[7]?.runners[2]?.name,
                    isWeak: data[7]?.isWeak,
                  });
                }}
                className={`casino-odds-box back ${
                  data[7]?.status === "OPEN" &&
                  data[7]?.runners[2]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}>
                  {/*  <!-- key7 status--> */}
                  <span className="casino-odds"> {data[7]?.runners[2]?.back[0]?.price}  </span>
                  {/*   <!-- key7 >> runner2 >>back--> */}
                  <div className="casino-nation-book text-center"> <span
                      className={`${
                        sevenIndexTwoRunnersEx &&  sevenIndexTwoRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      { sevenIndexTwoRunnersEx
                        ?  sevenIndexTwoRunnersEx[0]?.pnl
                        : null}
                    </span></div>
                </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="/cards/4.png" />
                    </div>
                  </div>
                  <div
                  onClick={() => {
                    setShowBets(true);
                    setPlaceBetValue({});
                    setPlaceBetValue({
                      price: data[7]?.runners[3]?.back[0]?.price,
                      side: 0,
                      selectionId: data[7]?.runners[3]?.id,
                      btype: data[7]?.btype,
                      eventTypeId: data[7]?.eventTypeId,
                      betDelay: data[7]?.betDelay,
                      marketId: data[7]?.id,
                      back: true,
                      name: data[7]?.runners[3]?.name,
                      isWeak: data[7]?.isWeak,
                    });
                  }}
                className={`casino-odds-box back ${
                  data[7]?.status === "OPEN" &&
                  data[7]?.runners[3]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}>
                  {/*   <!-- key7 status--> */}
                  <span className="casino-odds">{data[7]?.runners[3]?.back[0]?.price}</span>
                  {/*    <!-- key7 >> runner3 >>back--> */}
                  <div className="casino-nation-book text-center">
                  <span
                      className={`${
                        sevenIndexThreeRunnersEx &&  sevenIndexThreeRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      { sevenIndexThreeRunnersEx
                        ?  sevenIndexThreeRunnersEx[0]?.pnl
                        : null}
                    </span>
                  </div>
                </div>
                </div>
              </div>
            </div>



            <div className="casino-table-right-box">
              {/* Key 7 */}
              <div className="casino-table-body">
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="/cards/5.png" />
                    </div>
                  </div>
                  <div
                  onClick={() => {
                    setShowBets(true);
                    setPlaceBetValue({});
                    setPlaceBetValue({
                      price: data[7]?.runners[4]?.back[0]?.price,
                      side: 0,
                      selectionId: data[7]?.runners[4]?.id,
                      btype: data[7]?.btype,
                      eventTypeId: data[7]?.eventTypeId,
                      betDelay: data[7]?.betDelay,
                      marketId: data[7]?.id,
                      back: true,
                      name: data[7]?.runners[4]?.name,
                      isWeak: data[7]?.isWeak,
                    });
                  }}
                className={`casino-odds-box back ${
                  data[7]?.status === "OPEN" &&
                  data[7]?.runners[4]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}>
                  {/*   <!-- key7 status--> */}
                  <span className="casino-odds">{data[7]?.runners[4]?.back[0]?.price}</span>
                  {/*    <!-- key7 >> runner3 >>back--> */}
                  <div className="casino-nation-book text-center">
                  <span
                      className={`${
                        sevenIndexFourRunnersEx &&  sevenIndexFourRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      { sevenIndexFourRunnersEx
                        ?  sevenIndexFourRunnersEx[0]?.pnl
                        : null}
                    </span>
                  </div>
                </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="/cards/6.png" />
                    </div>
                  </div>
                  <div
                  onClick={() => {
                    setShowBets(true);
                    setPlaceBetValue({});
                    setPlaceBetValue({
                      price: data[7]?.runners[5]?.back[0]?.price,
                      side: 0,
                      selectionId: data[7]?.runners[5]?.id,
                      btype: data[7]?.btype,
                      eventTypeId: data[7]?.eventTypeId,
                      betDelay: data[7]?.betDelay,
                      marketId: data[7]?.id,
                      back: true,
                      name: data[7]?.runners[5]?.name,
                      isWeak: data[7]?.isWeak,
                    });
                  }}
                className={`casino-odds-box back ${
                  data[7]?.status === "OPEN" &&
                  data[7]?.runners[5]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}>
                  {/*   <!-- key7 status--> */}
                  <span className="casino-odds">{data[7]?.runners[5]?.back[0]?.price}</span>
                  {/*    <!-- key7 >> runner3 >>back--> */}
                  <div className="casino-nation-book text-center">
                  <span
                      className={`${
                        sevenIndexFiveRunnersEx &&  sevenIndexFiveRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      { sevenIndexFiveRunnersEx
                        ?  sevenIndexFiveRunnersEx[0]?.pnl
                        : null}
                    </span>
                  </div>
                </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="/cards/7.png" />
                    </div>
                  </div>
                  <div
                  onClick={() => {
                    setShowBets(true);
                    setPlaceBetValue({});
                    setPlaceBetValue({
                      price: data[7]?.runners[6]?.back[0]?.price,
                      side: 0,
                      selectionId: data[7]?.runners[6]?.id,
                      btype: data[7]?.btype,
                      eventTypeId: data[7]?.eventTypeId,
                      betDelay: data[7]?.betDelay,
                      marketId: data[7]?.id,
                      back: true,
                      name: data[7]?.runners[6]?.name,
                      isWeak: data[7]?.isWeak,
                    });
                  }}
                className={`casino-odds-box back ${
                  data[7]?.status === "OPEN" &&
                  data[7]?.runners[6]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}>
                  {/*   <!-- key7 status--> */}
                  <span className="casino-odds">{data[7]?.runners[6]?.back[0]?.price}</span>
                  {/*    <!-- key7 >> runner3 >>back--> */}
                  <div className="casino-nation-book text-center">
                  <span
                      className={`${
                        sevenIndexSixRunnersEx &&  sevenIndexSixRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      { sevenIndexSixRunnersEx
                        ?  sevenIndexSixRunnersEx[0]?.pnl
                        : null}
                    </span>
                  </div>
                </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="/cards/8.png" />
                    </div>
                  </div>
                  <div
                  onClick={() => {
                    setShowBets(true);
                    setPlaceBetValue({});
                    setPlaceBetValue({
                      price: data[7]?.runners[7]?.back[0]?.price,
                      side: 0,
                      selectionId: data[7]?.runners[7]?.id,
                      btype: data[7]?.btype,
                      eventTypeId: data[7]?.eventTypeId,
                      betDelay: data[7]?.betDelay,
                      marketId: data[7]?.id,
                      back: true,
                      name: data[7]?.runners[7]?.name,
                      isWeak: data[7]?.isWeak,
                    });
                  }}
                className={`casino-odds-box back ${
                  data[7]?.status === "OPEN" &&
                  data[7]?.runners[7]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}>
                  {/*   <!-- key7 status--> */}
                  <span className="casino-odds">{data[7]?.runners[7]?.back[0]?.price}</span>
                  {/*    <!-- key7 >> runner3 >>back--> */}
                  <div className="casino-nation-book text-center">
                  <span
                      className={`${
                        sevenIndexSevenRunnersEx &&  sevenIndexSevenRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      { sevenIndexSevenRunnersEx
                        ?  sevenIndexSevenRunnersEx[0]?.pnl
                        : null}
                    </span>
                  </div>
                </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="/cards/9.png" />
                    </div>
                  </div>
                  <div
                  onClick={() => {
                    setShowBets(true);
                    setPlaceBetValue({});
                    setPlaceBetValue({
                      price: data[7]?.runners[8]?.back[0]?.price,
                      side: 0,
                      selectionId: data[7]?.runners[8]?.id,
                      btype: data[7]?.btype,
                      eventTypeId: data[7]?.eventTypeId,
                      betDelay: data[7]?.betDelay,
                      marketId: data[7]?.id,
                      back: true,
                      name: data[7]?.runners[8]?.name,
                      isWeak: data[7]?.isWeak,
                    });
                  }}
                className={`casino-odds-box back ${
                  data[7]?.status === "OPEN" &&
                  data[7]?.runners[8]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}>
                  {/*   <!-- key7 status--> */}
                  <span className="casino-odds">{data[7]?.runners[8]?.back[0]?.price}</span>
                  {/*    <!-- key7 >> runner3 >>back--> */}
                  <div className="casino-nation-book text-center">
                  <span
                      className={`${
                        sevenIndexEightRunnersEx &&  sevenIndexEightRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      { sevenIndexEightRunnersEx
                        ?  sevenIndexEightRunnersEx[0]?.pnl
                        : null}
                    </span>
                  </div>
                </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="/cards/10.png" />
                    </div>
                  </div>
                  <div
                  onClick={() => {
                    setShowBets(true);
                    setPlaceBetValue({});
                    setPlaceBetValue({
                      price: data[7]?.runners[9]?.back[0]?.price,
                      side: 0,
                      selectionId: data[7]?.runners[9]?.id,
                      btype: data[7]?.btype,
                      eventTypeId: data[7]?.eventTypeId,
                      betDelay: data[7]?.betDelay,
                      marketId: data[7]?.id,
                      back: true,
                      name: data[7]?.runners[9]?.name,
                      isWeak: data[7]?.isWeak,
                    });
                  }}
                className={`casino-odds-box back ${
                  data[7]?.status === "OPEN" &&
                  data[7]?.runners[9]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}>
                  {/*   <!-- key7 status--> */}
                  <span className="casino-odds">{data[7]?.runners[9]?.back[0]?.price}</span>
                  {/*    <!-- key7 >> runner3 >>back--> */}
                  <div className="casino-nation-book text-center">
                  <span
                      className={`${
                        sevenIndexNineRunnersEx &&  sevenIndexNineRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      { sevenIndexNineRunnersEx
                        ?  sevenIndexNineRunnersEx[0]?.pnl
                        : null}
                    </span>
                  </div>
                </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="/cards/J.png" />
                    </div>
                  </div>
                  <div
                  onClick={() => {
                    setShowBets(true);
                    setPlaceBetValue({});
                    setPlaceBetValue({
                      price: data[7]?.runners[10]?.back[0]?.price,
                      side: 0,
                      selectionId: data[7]?.runners[10]?.id,
                      btype: data[7]?.btype,
                      eventTypeId: data[7]?.eventTypeId,
                      betDelay: data[7]?.betDelay,
                      marketId: data[7]?.id,
                      back: true,
                      name: data[7]?.runners[10]?.name,
                      isWeak: data[7]?.isWeak,
                    });
                  }}
                className={`casino-odds-box back ${
                  data[7]?.status === "OPEN" &&
                  data[7]?.runners[10]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}>
                  {/*   <!-- key7 status--> */}
                  <span className="casino-odds">{data[7]?.runners[10]?.back[0]?.price}</span>
                  {/*    <!-- key7 >> runner3 >>back--> */}
                  <div className="casino-nation-book text-center">
                  <span
                      className={`${
                        sevenIndexTenRunnersEx &&  sevenIndexTenRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      { sevenIndexTenRunnersEx
                        ?  sevenIndexTenRunnersEx[0]?.pnl
                        : null}
                    </span>
                  </div>
                </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="/cards/Q.png" />
                    </div>
                  </div>
                  <div
                  onClick={() => {
                    setShowBets(true);
                    setPlaceBetValue({});
                    setPlaceBetValue({
                      price: data[7]?.runners[11]?.back[0]?.price,
                      side: 0,
                      selectionId: data[7]?.runners[11]?.id,
                      btype: data[7]?.btype,
                      eventTypeId: data[7]?.eventTypeId,
                      betDelay: data[7]?.betDelay,
                      marketId: data[7]?.id,
                      back: true,
                      name: data[7]?.runners[11]?.name,
                      isWeak: data[7]?.isWeak,
                    });
                  }}
                className={`casino-odds-box back ${
                  data[7]?.status === "OPEN" &&
                  data[7]?.runners[11]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}>
                  {/*   <!-- key7 status--> */}
                  <span className="casino-odds">{data[7]?.runners[11]?.back[0]?.price}</span>
                  {/*    <!-- key7 >> runner3 >>back--> */}
                  <div className="casino-nation-book text-center">
                  <span
                      className={`${
                        sevenIndexElevenRunnersEx &&   sevenIndexElevenRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      {  sevenIndexElevenRunnersEx
                        ?   sevenIndexElevenRunnersEx[0]?.pnl
                        : null}
                    </span>
                  </div>
                </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="/cards/K.png" />
                    </div>
                  </div>
                  <div
                  onClick={() => {
                    setShowBets(true);
                    setPlaceBetValue({});
                    setPlaceBetValue({
                      price: data[7]?.runners[12]?.back[0]?.price,
                      side: 0,
                      selectionId: data[7]?.runners[12]?.id,
                      btype: data[7]?.btype,
                      eventTypeId: data[7]?.eventTypeId,
                      betDelay: data[7]?.betDelay,
                      marketId: data[7]?.id,
                      back: true,
                      name: data[7]?.runners[12]?.name,
                      isWeak: data[7]?.isWeak,
                    });
                  }}
                className={`casino-odds-box back ${
                  data[7]?.status === "OPEN" &&
                  data[7]?.runners[12]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}>
                  {/*   <!-- key7 status--> */}
                  <span className="casino-odds">{data[7]?.runners[12]?.back[0]?.price}</span>
                  {/*    <!-- key7 >> runner3 >>back--> */}
                  <div className="casino-nation-book text-center">
                  <span
                      className={`${
                        sevenIndexTwelveRunnersEx &&   sevenIndexTwelveRunnersEx[0]?.pnl < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      {  sevenIndexTwelveRunnersEx
                        ?   sevenIndexTwelveRunnersEx[0]?.pnl
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
    </div>
  );
};

export default DTL20;
