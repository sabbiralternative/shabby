const TeenPattiTest = ({
  data,
  setShowBets,
  setPlaceBetValue,
  lowExposure,
  highExposure,
  zeroIndexTwoRunnersEx,
  evenExposure,
  redExposure,
  a23Exposure,
  fourIndexZeroRunnersEx,
  fiveIndexZeroRunnersEx,
  sixIndexZeroExp,
  sevenIndexZeroExp,
  eightIndexZeroExp,
  nineIndexZeroExp,
  tenIndexZeroExp,
  elevenIndexZeroExp,
  twelveIndexZeroExp,
  thirteenIndexZeroExp,
  fourteenIndexZeroExp,
  fifteenIndexZeroExp,
}) => {
  return (
    <div className="casino-table">
      <div className="casino-table-full-box">
        <div className="casino-table-header">
          <div className="casino-nation-detail"></div>
          <div className="casino-odds-box back">Tiger</div>
          <div className="casino-odds-box back">Lion</div>
          <div className="casino-odds-box back">Dragon</div>
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
                  maxLiabilityPerMarket:data[0]?.maxLiabilityPerMarket,
                  isBettable:data[0]?.isBettable,
                  maxLiabilityPerBet:data[0]?.maxLiabilityPerBet
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
              {/*  <!-- suspended-box >> key0 >> status:  key0 >> runner0 >> back >> price --> */}
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
            {/*   <!--- result0 >> runner2 >> back0 --> */}
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">Pair</div>
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
              className={`casino-odds-box back  ${
                data[1]?.status === "OPEN" &&
                data[1]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[1]?.runners[0]?.back[0]?.price}
              </span>
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
              className={`casino-odds-box back  ${
                data[2]?.status === "OPEN" &&
                data[2]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[2]?.runners[0]?.back[0]?.price}
              </span>
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
            {/*    <!--- result2 >> runner0 >> back0 --> */}
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
              className={`casino-odds-box back  ${
                data[3]?.status === "OPEN" &&
                data[3]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[3]?.runners[0]?.back[0]?.price}
              </span>
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
            {/* <!--- result3 >> runner0 >> back0 --> */}
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">Flush</div>
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
                  maxLiabilityPerMarket:data[4]?.maxLiabilityPerMarket,
                  isBettable:data[4]?.isBettable,
                  maxLiabilityPerBet:data[4]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back  ${
                data[4]?.status === "OPEN" &&
                data[4]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[4]?.runners[0]?.back[0]?.price}
              </span>
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    fourIndexZeroRunnersEx && fourIndexZeroRunnersEx[0]?.pnl < 0
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
                  maxLiabilityPerMarket:data[5]?.maxLiabilityPerMarket,
                  isBettable:data[5]?.isBettable,
                  maxLiabilityPerBet:data[5]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back  ${
                data[5]?.status === "OPEN" &&
                data[5]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[5]?.runners[0]?.back[0]?.price}
              </span>
              <div className="casino-nation-book text-center">
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
            {/* <!--- result5 >> runner0 >> back0 --> */}
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
                  maxLiabilityPerMarket:data[6]?.maxLiabilityPerMarket,
                  isBettable:data[6]?.isBettable,
                  maxLiabilityPerBet:data[6]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back  ${
                data[6]?.status === "OPEN" &&
                data[6]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[6]?.runners[0]?.back[0]?.price}
              </span>
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    sixIndexZeroExp && sixIndexZeroExp[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {sixIndexZeroExp ? sixIndexZeroExp[0]?.pnl : null}
                </span>
              </div>
            </div>
            {/*   <!--- result6  >> runner0 >> back0 --> */}
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">Straight</div>
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
                  maxLiabilityPerMarket:data[7]?.maxLiabilityPerMarket,
                  isBettable:data[7]?.isBettable,
                  maxLiabilityPerBet:data[7]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back  ${
                data[7]?.status === "OPEN" &&
                data[7]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[7]?.runners[0]?.back[0]?.price}
              </span>
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    sevenIndexZeroExp && sevenIndexZeroExp[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {sevenIndexZeroExp ? sevenIndexZeroExp[0]?.pnl : null}
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
                  maxLiabilityPerMarket:data[8]?.maxLiabilityPerMarket,
                  isBettable:data[8]?.isBettable,
                  maxLiabilityPerBet:data[8]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back  ${
                data[8]?.status === "OPEN" &&
                data[8]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[8]?.runners[0]?.back[0]?.price}
              </span>
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    eightIndexZeroExp && eightIndexZeroExp[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {eightIndexZeroExp ? eightIndexZeroExp[0]?.pnl : null}
                </span>
              </div>
            </div>
            {/*  <!--- result8 >> runner0 >> back0 --> */}
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
                  maxLiabilityPerMarket:data[9]?.maxLiabilityPerMarket,
                  isBettable:data[9]?.isBettable,
                  maxLiabilityPerBet:data[9]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back  ${
                data[9]?.status === "OPEN" &&
                data[9]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[9]?.runners[0]?.back[0]?.price}
              </span>
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    nineIndexZeroExp && nineIndexZeroExp[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {nineIndexZeroExp ? nineIndexZeroExp[0]?.pnl : null}
                </span>
              </div>
            </div>
            {/*  <!--- result9 >> runner0 >> back0 --> */}
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">Trio</div>
            </div>
            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[10]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[10]?.runners[0]?.id,
                  btype: data[10]?.btype,
                  eventTypeId: data[10]?.eventTypeId,
                  betDelay: data[10]?.betDelay,
                  marketId: data[10]?.id,
                  back: true,
                  name: data[10]?.runners[0]?.name,
                  isWeak: data[10]?.isWeak,
                  maxLiabilityPerMarket:data[10]?.maxLiabilityPerMarket,
                  isBettable:data[10]?.isBettable,
                  maxLiabilityPerBet:data[10]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back  ${
                data[10]?.status === "OPEN" &&
                data[10]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[10]?.runners[0]?.back[0]?.price}
              </span>
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    tenIndexZeroExp && tenIndexZeroExp[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {tenIndexZeroExp ? tenIndexZeroExp[0]?.pnl : null}
                </span>
              </div>
            </div>
            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[11]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[11]?.runners[0]?.id,
                  btype: data[11]?.btype,
                  eventTypeId: data[11]?.eventTypeId,
                  betDelay: data[11]?.betDelay,
                  marketId: data[11]?.id,
                  back: true,
                  name: data[11]?.runners[0]?.name,
                  isWeak: data[11]?.isWeak,
                  maxLiabilityPerMarket:data[11]?.maxLiabilityPerMarket,
                  isBettable:data[11]?.isBettable,
                  maxLiabilityPerBet:data[11]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back  ${
                data[11]?.status === "OPEN" &&
                data[11]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[11]?.runners[0]?.back[0]?.price}
              </span>
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    elevenIndexZeroExp && elevenIndexZeroExp[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {elevenIndexZeroExp ? elevenIndexZeroExp[0]?.pnl : null}
                </span>
              </div>
            </div>
            {/*  <!--- result11 >> runner0 >> back0 --> */}
            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[12]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[12]?.runners[0]?.id,
                  btype: data[12]?.btype,
                  eventTypeId: data[12]?.eventTypeId,
                  betDelay: data[12]?.betDelay,
                  marketId: data[12]?.id,
                  back: true,
                  name: data[12]?.runners[0]?.name,
                  isWeak: data[12]?.isWeak,
                  maxLiabilityPerMarket:data[12]?.maxLiabilityPerMarket,
                  isBettable:data[12]?.isBettable,
                  maxLiabilityPerBet:data[12]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back  ${
                data[12]?.status === "OPEN" &&
                data[12]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[12]?.runners[0]?.back[0]?.price}
              </span>
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    twelveIndexZeroExp && twelveIndexZeroExp[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {twelveIndexZeroExp ? twelveIndexZeroExp[0]?.pnl : null}
                </span>
              </div>
            </div>
            {/* <!--- result12 >> runner0 >> back0 --> */}
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">Straight Flush</div>
            </div>
            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[13]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[13]?.runners[0]?.id,
                  btype: data[13]?.btype,
                  eventTypeId: data[13]?.eventTypeId,
                  betDelay: data[13]?.betDelay,
                  marketId: data[13]?.id,
                  back: true,
                  name: data[13]?.runners[0]?.name,
                  isWeak: data[13]?.isWeak,
                  maxLiabilityPerMarket:data[13]?.maxLiabilityPerMarket,
                  isBettable:data[13]?.isBettable,
                  maxLiabilityPerBet:data[13]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back  ${
                data[13]?.status === "OPEN" &&
                data[13]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[13]?.runners[0]?.back[0]?.price}
              </span>
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    thirteenIndexZeroExp && thirteenIndexZeroExp[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {thirteenIndexZeroExp ? thirteenIndexZeroExp[0]?.pnl : null}
                </span>
              </div>
            </div>
            {/*  <!--- result13 >> runner0 >> back0 --> */}
            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[14]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[14]?.runners[0]?.id,
                  btype: data[14]?.btype,
                  eventTypeId: data[14]?.eventTypeId,
                  betDelay: data[14]?.betDelay,
                  marketId: data[14]?.id,
                  back: true,
                  name: data[14]?.runners[0]?.name,
                  isWeak: data[14]?.isWeak,
                  maxLiabilityPerMarket:data[14]?.maxLiabilityPerMarket,
                  isBettable:data[14]?.isBettable,
                  maxLiabilityPerBet:data[14]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back  ${
                data[14]?.status === "OPEN" &&
                data[14]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[14]?.runners[0]?.back[0]?.price}
              </span>
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    fourteenIndexZeroExp && fourteenIndexZeroExp[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {fourteenIndexZeroExp ? fourteenIndexZeroExp[0]?.pnl : null}
                </span>
              </div>
            </div>
            {/*  <!--- result14 >> runner0 >> back0 --> */}
            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[15]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[15]?.runners[0]?.id,
                  btype: data[15]?.btype,
                  eventTypeId: data[15]?.eventTypeId,
                  betDelay: data[15]?.betDelay,
                  marketId: data[15]?.id,
                  back: true,
                  name: data[15]?.runners[0]?.name,
                  isWeak: data[15]?.isWeak,
                  maxLiabilityPerMarket:data[15]?.maxLiabilityPerMarket,
                  isBettable:data[15]?.isBettable,
                  maxLiabilityPerBet:data[15]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back  ${
                data[15]?.status === "OPEN" &&
                data[15]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[15]?.runners[0]?.back[0]?.price}
              </span>
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    fifteenIndexZeroExp && fifteenIndexZeroExp[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {fifteenIndexZeroExp ? fifteenIndexZeroExp[0]?.pnl : null}
                </span>
              </div>
            </div>
            {/*  <!--- result15 >> runner0 >> back0 --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeenPattiTest;
