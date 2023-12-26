const TeenPattiOpen = ({
  data,
  setPlaceBetValue,
  setShowBets,
  lowExposure,
  evenExposure,
  a23Exposure,
  redExposure,
  fourIndexZeroExp,
  fiveIndexZeroExp,
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
  sixteenIndexZeroExp,
  seventeenIndexZeroExp,
  eightTeenIndexZero,
  nineteenIndexZeroExp,
  twentyIndexZeroExp,
  twentyOneIndexZeroExp,
  twentyTwoIndexZeroExp,
  twentyThreeIndexZeroExp,
}) => {
  return (
    <div className="casino-table">
      <div className="casino-table-full-box">
        <div className="casino-table-header">
          <div className="casino-nation-detail"></div>
          <div className="casino-odds-box back">Odds</div>
          <div className="casino-odds-box back">Pair Plus</div>
          <div className="casino-odds-box back">Total</div>
        </div>
        <div className="casino-table-body">
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">
                Player 1<div className="patern-name"></div>
              </div>
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
              className={`casino-odds-box back ${
                data[0]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">
                {" "}
                {data[0]?.runners[0]?.back[0]?.price}
              </span>
              {/*    <!-- result0 >> runners0 >> back0 --> */}
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
              {/*    <!-- exposure --> */}
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
              className={`casino-odds-box back ${
                data[8]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              <span className="casino-odds">Pair Plus 1</span>
              {data[8]?.runners[0]?.back[0]?.price}
              {/*    <!-- result0 >> status --> */}

              {/*    <!-- result0 >> runners0 >> back0 --> */}
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
              {/*    <!-- exposure --> */}
            </div>

            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[16]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[16]?.runners[0]?.id,
                  btype: data[16]?.btype,
                  eventTypeId: data[16]?.eventTypeId,
                  betDelay: data[16]?.betDelay,
                  marketId: data[16]?.id,
                  back: true,
                  name: data[16]?.runners[0]?.name,
                  isWeak: data[16]?.isWeak,
                  maxLiabilityPerMarket:data[16]?.maxLiabilityPerMarket,
                  isBettable:data[16]?.isBettable,
                  maxLiabilityPerBet:data[16]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back ${
                data[16]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">
                {" "}
                {data[16]?.runners[0]?.back[0]?.price}
              </span>
              {/*    <!-- result0 >> runners0 >> back0 --> */}
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    sixteenIndexZeroExp && sixteenIndexZeroExp[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {sixteenIndexZeroExp ? sixteenIndexZeroExp[0]?.pnl : null}
                </span>
              </div>
              {/*    <!-- exposure --> */}
            </div>
          </div>

          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">
                Player 2<div className="patern-name"></div>
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
                  maxLiabilityPerMarket:data[1]?.maxLiabilityPerMarket,
                  isBettable:data[1]?.isBettable,
                  maxLiabilityPerBet:data[1]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back ${
                data[1]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">
                {" "}
                {data[1]?.runners[0]?.back[0]?.price}
              </span>
              {/*    <!-- result0 >> runners0 >> back0 --> */}
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
              {/*    <!-- exposure --> */}
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
                  maxLiabilityPerMarket:data[9]?.maxLiabilityPerMarket,
                  isBettable:data[9]?.isBettable,
                  maxLiabilityPerBet:data[9]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back ${
                data[9]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}{" "}
              <span className="casino-odds">Pair Plus 2</span>
              {data[9]?.runners[0]?.back[0]?.price}
              {/*    <!-- result0 >> runners0 >> back0 --> */}
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
              {/*    <!-- exposure --> */}
            </div>

            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[17]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[17]?.runners[0]?.id,
                  btype: data[17]?.btype,
                  eventTypeId: data[17]?.eventTypeId,
                  betDelay: data[17]?.betDelay,
                  marketId: data[17]?.id,
                  back: true,
                  name: data[17]?.runners[0]?.name,
                  isWeak: data[17]?.isWeak,
                  maxLiabilityPerMarket:data[17]?.maxLiabilityPerMarket,
                  isBettable:data[17]?.isBettable,
                  maxLiabilityPerBet:data[17]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back ${
                data[17]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">
                {" "}
                {data[17]?.runners[0]?.back[0]?.price}
              </span>
              {/*    <!-- result0 >> runners0 >> back0 --> */}
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    seventeenIndexZeroExp && seventeenIndexZeroExp[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {seventeenIndexZeroExp ? seventeenIndexZeroExp[0]?.pnl : null}
                </span>
              </div>
              {/*    <!-- exposure --> */}
            </div>
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">
                Player 3<div className="patern-name"></div>
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
              className={`casino-odds-box back ${
                data[2]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">
                {" "}
                {data[2]?.runners[0]?.back[0]?.price}
              </span>
              {/*    <!-- result0 >> runners0 >> back0 --> */}
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
              {/*    <!-- exposure --> */}
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
              className={`casino-odds-box back ${
                data[10]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">Pair Plus 3</span>{" "}
              {data[10]?.runners[0]?.back[0]?.price}
              {/*    <!-- result0 >> runners0 >> back0 --> */}
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
              {/*    <!-- exposure --> */}
            </div>

            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[18]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[18]?.runners[0]?.id,
                  btype: data[18]?.btype,
                  eventTypeId: data[18]?.eventTypeId,
                  betDelay: data[18]?.betDelay,
                  marketId: data[18]?.id,
                  back: true,
                  name: data[18]?.runners[0]?.name,
                  isWeak: data[18]?.isWeak,
                  maxLiabilityPerMarket:data[18]?.maxLiabilityPerMarket,
                  isBettable:data[18]?.isBettable,
                  maxLiabilityPerBet:data[18]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back ${
                data[18]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">
                {" "}
                {data[18]?.runners[0]?.back[0]?.price}
              </span>
              {/*    <!-- result0 >> runners0 >> back0 --> */}
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    eightTeenIndexZero && eightTeenIndexZero[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {eightTeenIndexZero ? eightTeenIndexZero[0]?.pnl : null}
                </span>
              </div>
              {/*    <!-- exposure --> */}
            </div>
            {/*   <!-- result18 >> runners0 >> back0 >> price --> */}
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">
                Player 4<div className="patern-name"></div>
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
                  maxLiabilityPerMarket:data[3]?.maxLiabilityPerMarket,
                  isBettable:data[3]?.isBettable,
                  maxLiabilityPerBet:data[3]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back ${
                data[3]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">
                {" "}
                {data[3]?.runners[0]?.back[0]?.price}
              </span>
              {/*    <!-- result0 >> runners0 >> back0 --> */}
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
              {/*    <!-- exposure --> */}
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
              className={`casino-odds-box back ${
                data[11]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">Pair Plus 4</span>{" "}
              {data[11]?.runners[0]?.back[0]?.price}
              {/*    <!-- result0 >> runners0 >> back0 --> */}
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
              {/*    <!-- exposure --> */}
            </div>

            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[19]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[19]?.runners[0]?.id,
                  btype: data[19]?.btype,
                  eventTypeId: data[19]?.eventTypeId,
                  betDelay: data[19]?.betDelay,
                  marketId: data[19]?.id,
                  back: true,
                  name: data[19]?.runners[0]?.name,
                  isWeak: data[19]?.isWeak,
                  maxLiabilityPerMarket:data[19]?.maxLiabilityPerMarket,
                  isBettable:data[19]?.isBettable,
                  maxLiabilityPerBet:data[19]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back ${
                data[19]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">
                {" "}
                {data[19]?.runners[0]?.back[0]?.price}
              </span>
              {/*    <!-- result0 >> runners0 >> back0 --> */}
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    nineteenIndexZeroExp && nineteenIndexZeroExp[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {nineteenIndexZeroExp ? nineteenIndexZeroExp[0]?.pnl : null}
                </span>
              </div>
              {/*    <!-- exposure --> */}
            </div>
            {/*        <!-- result19 >> runners0 >> back0 >> price --> */}
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">
                Player 5<div className="patern-name"></div>
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
                  maxLiabilityPerMarket:data[4]?.maxLiabilityPerMarket,
                  isBettable:data[4]?.isBettable,
                  maxLiabilityPerBet:data[4]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back ${
                data[4]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">
                {" "}
                {data[4]?.runners[0]?.back[0]?.price}
              </span>
              {/*    <!-- result0 >> runners0 >> back0 --> */}
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    fourIndexZeroExp && fourIndexZeroExp[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {fourIndexZeroExp ? fourIndexZeroExp[0]?.pnl : null}
                </span>
              </div>
              {/*    <!-- exposure --> */}
            </div>

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
              className={`casino-odds-box back ${
                data[12]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">Pair Plus 5</span>{" "}
              {data[12]?.runners[0]?.back[0]?.price}
              {/*    <!-- result0 >> runners0 >> back0 --> */}
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
              {/*    <!-- exposure --> */}
            </div>

            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[20]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[20]?.runners[0]?.id,
                  btype: data[20]?.btype,
                  eventTypeId: data[20]?.eventTypeId,
                  betDelay: data[20]?.betDelay,
                  marketId: data[20]?.id,
                  back: true,
                  name: data[20]?.runners[0]?.name,
                  isWeak: data[20]?.isWeak,
                  maxLiabilityPerMarket:data[20]?.maxLiabilityPerMarket,
                  isBettable:data[20]?.isBettable,
                  maxLiabilityPerBet:data[20]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back ${
                data[20]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">
                {" "}
                {data[20]?.runners[0]?.back[0]?.price}
              </span>
              {/*    <!-- result0 >> runners0 >> back0 --> */}
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    twentyIndexZeroExp && twentyIndexZeroExp[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {twentyIndexZeroExp ? twentyIndexZeroExp[0]?.pnl : null}
                </span>
              </div>
              {/*    <!-- exposure --> */}
            </div>
            {/*    <!-- result20 >> runners0 >> back0 >> price --> */}
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">
                Player 6<div className="patern-name"></div>
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
              className={`casino-odds-box back ${
                data[5]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">
                {" "}
                {data[5]?.runners[0]?.back[0]?.price}
              </span>
              {/*    <!-- result0 >> runners0 >> back0 --> */}
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    fiveIndexZeroExp && fiveIndexZeroExp[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {fiveIndexZeroExp ? fiveIndexZeroExp[0]?.pnl : null}
                </span>
              </div>
              {/*    <!-- exposure --> */}
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
              className={`casino-odds-box back ${
                data[13]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">Pair Plus 6</span>{" "}
              {data[13]?.runners[0]?.back[0]?.price}
              {/*    <!-- result0 >> runners0 >> back0 --> */}
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
              {/*    <!-- exposure --> */}
            </div>

            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[21]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[21]?.runners[0]?.id,
                  btype: data[21]?.btype,
                  eventTypeId: data[21]?.eventTypeId,
                  betDelay: data[21]?.betDelay,
                  marketId: data[21]?.id,
                  back: true,
                  name: data[21]?.runners[0]?.name,
                  isWeak: data[21]?.isWeak,
                  maxLiabilityPerMarket:data[21]?.maxLiabilityPerMarket,
                  isBettable:data[21]?.isBettable,
                  maxLiabilityPerBet:data[21]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back ${
                data[21]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">
                {" "}
                {data[21]?.runners[0]?.back[0]?.price}
              </span>
              {/*    <!-- result0 >> runners0 >> back0 --> */}
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    twentyOneIndexZeroExp && twentyOneIndexZeroExp[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {twentyOneIndexZeroExp ? twentyOneIndexZeroExp[0]?.pnl : null}
                </span>
              </div>
              {/*    <!-- exposure --> */}
            </div>
            {/*     <!-- result21 >> runners0 >> back0 >> price --> */}
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">
                Player 7<div className="patern-name"></div>
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
                  maxLiabilityPerMarket:data[6]?.maxLiabilityPerMarket,
                  isBettable:data[6]?.isBettable,
                  maxLiabilityPerBet:data[6]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back ${
                data[6]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">
                {" "}
                {data[6]?.runners[0]?.back[0]?.price}
              </span>
              {/*    <!-- result0 >> runners0 >> back0 --> */}
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
              {/*    <!-- exposure --> */}
            </div>

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
              className={`casino-odds-box back ${
                data[14]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">Pair Plus 7</span>{" "}
              {data[14]?.runners[0]?.back[0]?.price}
              {/*    <!-- result0 >> runners0 >> back0 --> */}
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
              {/*    <!-- exposure --> */}
            </div>

            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[22]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[22]?.runners[0]?.id,
                  btype: data[22]?.btype,
                  eventTypeId: data[22]?.eventTypeId,
                  betDelay: data[22]?.betDelay,
                  marketId: data[22]?.id,
                  back: true,
                  name: data[22]?.runners[0]?.name,
                  isWeak: data[22]?.isWeak,
                  maxLiabilityPerMarket:data[22]?.maxLiabilityPerMarket,
                  isBettable:data[22]?.isBettable,
                  maxLiabilityPerBet:data[22]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back ${
                data[22]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">
                {" "}
                {data[22]?.runners[0]?.back[0]?.price}
              </span>
              {/*    <!-- result0 >> runners0 >> back0 --> */}
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    twentyTwoIndexZeroExp && twentyTwoIndexZeroExp[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {twentyTwoIndexZeroExp ? twentyTwoIndexZeroExp[0]?.pnl : null}
                </span>
              </div>
              {/*    <!-- exposure --> */}
            </div>
            {/*     <!-- result22 >> runners0 >> back0 >> price --> */}
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">
                Player 8<div className="patern-name"></div>
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
                  maxLiabilityPerMarket:data[7]?.maxLiabilityPerMarket,
                  isBettable:data[7]?.isBettable,
                  maxLiabilityPerBet:data[7]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back ${
                data[7]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">
                {" "}
                {data[7]?.runners[0]?.back[0]?.price}
              </span>
              {/*    <!-- result0 >> runners0 >> back0 --> */}
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
              {/*    <!-- exposure --> */}
            </div>

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
              className={`casino-odds-box back ${
                data[15]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">Pair Plus 8</span>{" "}
              {data[15]?.runners[0]?.back[0]?.price}
              {/*    <!-- result0 >> runners0 >> back0 --> */}
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
              {/*    <!-- exposure --> */}
            </div>

            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[23]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[23]?.runners[0]?.id,
                  btype: data[23]?.btype,
                  eventTypeId: data[23]?.eventTypeId,
                  betDelay: data[23]?.betDelay,
                  marketId: data[23]?.id,
                  back: true,
                  name: data[23]?.runners[0]?.name,
                  isWeak: data[23]?.isWeak,
                  maxLiabilityPerMarket:data[23]?.maxLiabilityPerMarket,
                  isBettable:data[23]?.isBettable,
                  maxLiabilityPerBet:data[23]?.maxLiabilityPerBet
                });
              }}
              className={`casino-odds-box back ${
                data[23]?.status === "OPEN" ? "" : " suspended-box"
              }`}
            >
              {/*    <!-- result0 >> status --> */}
              <span className="casino-odds">
                {" "}
                {data[23]?.runners[0]?.back[0]?.price}
              </span>
              {/*    <!-- result0 >> runners0 >> back0 --> */}
              <div className="casino-nation-book text-center">
                <span
                  className={`${
                    twentyThreeIndexZeroExp &&
                    twentyThreeIndexZeroExp[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {twentyThreeIndexZeroExp
                    ? twentyThreeIndexZeroExp[0]?.pnl
                    : null}
                </span>
              </div>
              {/*    <!-- exposure --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeenPattiOpen;
