const PokerTwenty = ({
  data,
  setShowBets,
  setPlaceBetValue,
  lowExposure,
  evenExposure,
  redExposure,
  a23Exposure,
  fourIndexZeroRunnersEx,
  tenIndexZeroRunnersEx,
  elevenIndexZeroRunnersEx,
  twelveIndexZeroRunnersEx,
  thirteenIndexZeroRunnersEx,
  fourteenIndexZeroRunnersEx,
  fifteenIndexZeroRunnersEx,
  sixteenIndexZeroRunnersEx,
  seventeenIndexZeroRunnersEx,
  fiveIndexZeroExp,
  sixIndexZeroExp,
  sevenIndexZeroExp,
  eightIndexZeroExp,
  nineIndexZeroExp,
}) => {
  return (
    <div className="casino-table">
      <div className="poker20-other-odds">
        <div className="casino-table-box">
          <div className="casino-table-left-box">
            <div className="w-100 d-xl-none mobile-nation-name">Player A</div>
            <div className="casino-odds-box-container">
              <div className="casino-nation-name text-center">Winner</div>

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
                    maxLiabilityPerMarket: data[0]?.maxLiabilityPerMarket,
                    isBettable: data[0]?.isBettable,
                    maxLiabilityPerBet: data[0]?.maxLiabilityPerBet,
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
            </div>
            <div className="casino-odds-box-container">
              <div className="casino-nation-name text-center">One Pair</div>

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
                    maxLiabilityPerMarket: data[1]?.maxLiabilityPerMarket,
                    isBettable: data[1]?.isBettable,
                    maxLiabilityPerBet: data[1]?.maxLiabilityPerBet,
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
            </div>
            <div className="casino-odds-box-container">
              <div className="casino-nation-name text-center">Two Pair</div>

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
                    maxLiabilityPerMarket: data[2]?.maxLiabilityPerMarket,
                    isBettable: data[2]?.isBettable,
                    maxLiabilityPerBet: data[2]?.maxLiabilityPerBet,
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
            </div>
            <div className="casino-odds-box-container">
              <div className="casino-nation-name text-center">
                Three of a Kind
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
                    maxLiabilityPerMarket: data[3]?.maxLiabilityPerMarket,
                    isBettable: data[3]?.isBettable,
                    maxLiabilityPerBet: data[3]?.maxLiabilityPerBet,
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
            </div>
            <div className="casino-odds-box-container">
              <div className="casino-nation-name text-center">Straight</div>

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
                    maxLiabilityPerMarket: data[4]?.maxLiabilityPerMarket,
                    isBettable: data[4]?.isBettable,
                    maxLiabilityPerBet: data[4]?.maxLiabilityPerBet,
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
                {/*    <!-- exposure --> */}
              </div>
              {/*    <!-- result4 >> runners0 >> back0 --> */}
            </div>
            <div className="casino-odds-box-container">
              <div className="casino-nation-name text-center">Flush</div>

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
                    maxLiabilityPerMarket: data[5]?.maxLiabilityPerMarket,
                    isBettable: data[5]?.isBettable,
                    maxLiabilityPerBet: data[5]?.maxLiabilityPerBet,
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
              {/*    <!-- result5 >> runners0 >> back0 --> */}
            </div>
            <div className="casino-odds-box-container">
              <div className="casino-nation-name text-center">Full House</div>

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
                    maxLiabilityPerMarket: data[6]?.maxLiabilityPerMarket,
                    isBettable: data[6]?.isBettable,
                    maxLiabilityPerBet: data[6]?.maxLiabilityPerBet,
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
              {/*       <!-- result6 >> runners0 >> back0 --> */}
            </div>
            <div className="casino-odds-box-container">
              <div className="casino-nation-name text-center">
                Four of a Kind
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
                    maxLiabilityPerMarket: data[7]?.maxLiabilityPerMarket,
                    isBettable: data[7]?.isBettable,
                    maxLiabilityPerBet: data[7]?.maxLiabilityPerBet,
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
              {/*  <!-- result7 >> runners0 >> back0 --> */}
            </div>
            <div className="casino-odds-box-container">
              <div className="casino-nation-name text-center">
                Straight Flush
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
                    maxLiabilityPerMarket: data[8]?.maxLiabilityPerMarket,
                    isBettable: data[8]?.isBettable,
                    maxLiabilityPerBet: data[8]?.maxLiabilityPerBet,
                  });
                }}
                className={`casino-odds-box back ${
                  data[8]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                {/*    <!-- result0 >> status --> */}
                <span className="casino-odds">
                  {" "}
                  {data[8]?.runners[0]?.back[0]?.price}
                </span>
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
              {/*    <!-- result8 >> runners0 >> back0 --> */}
            </div>
          </div>
          <div className="casino-table-box-divider"></div>
          <div className="casino-table-right-box">
            <div className="w-100 d-xl-none mobile-nation-name">Player B</div>
            <div className="casino-odds-box-container">
              <div className="casino-nation-name text-center">Winner</div>

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
                    maxLiabilityPerMarket: data[9]?.maxLiabilityPerMarket,
                    isBettable: data[9]?.isBettable,
                    maxLiabilityPerBet: data[9]?.maxLiabilityPerBet,
                  });
                }}
                className={`casino-odds-box back ${
                  data[9]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                {/*    <!-- result0 >> status --> */}
                <span className="casino-odds">
                  {" "}
                  {data[9]?.runners[0]?.back[0]?.price}
                </span>
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
            </div>
            <div className="casino-odds-box-container">
              <div className="casino-nation-name text-center">One Pair</div>

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
                    maxLiabilityPerMarket: data[10]?.maxLiabilityPerMarket,
                    isBettable: data[10]?.isBettable,
                    maxLiabilityPerBet: data[10]?.maxLiabilityPerBet,
                  });
                }}
                className={`casino-odds-box back ${
                  data[10]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                {/*    <!-- result0 >> status --> */}
                <span className="casino-odds">
                  {" "}
                  {data[10]?.runners[0]?.back[0]?.price}
                </span>
                {/*    <!-- result0 >> runners0 >> back0 --> */}
                <div className="casino-nation-book text-center">
                  <span
                    className={`${
                      tenIndexZeroRunnersEx && tenIndexZeroRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {tenIndexZeroRunnersEx
                      ? tenIndexZeroRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
                {/*    <!-- exposure --> */}
              </div>
              {/*        <!-- result10 >> runners0 >> back0 --> */}
            </div>
            <div className="casino-odds-box-container">
              <div className="casino-nation-name text-center">Two Pair</div>

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
                    maxLiabilityPerMarket: data[11]?.maxLiabilityPerMarket,
                    isBettable: data[11]?.isBettable,
                    maxLiabilityPerBet: data[11]?.maxLiabilityPerBet,
                  });
                }}
                className={`casino-odds-box back ${
                  data[11]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                {/*    <!-- result0 >> status --> */}
                <span className="casino-odds">
                  {" "}
                  {data[11]?.runners[0]?.back[0]?.price}
                </span>
                {/*    <!-- result0 >> runners0 >> back0 --> */}
                <div className="casino-nation-book text-center">
                  <span
                    className={`${
                      elevenIndexZeroRunnersEx &&
                      elevenIndexZeroRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {elevenIndexZeroRunnersEx
                      ? elevenIndexZeroRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
                {/*    <!-- exposure --> */}
              </div>
              {/*   <!-- result11 >> runners0 >> back0 --> */}
            </div>
            <div className="casino-odds-box-container">
              <div className="casino-nation-name text-center">
                Three of a Kind
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
                    maxLiabilityPerMarket: data[12]?.maxLiabilityPerMarket,
                    isBettable: data[12]?.isBettable,
                    maxLiabilityPerBet: data[12]?.maxLiabilityPerBet,
                  });
                }}
                className={`casino-odds-box back ${
                  data[12]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                {/*    <!-- result0 >> status --> */}
                <span className="casino-odds">
                  {" "}
                  {data[12]?.runners[0]?.back[0]?.price}
                </span>
                {/*    <!-- result0 >> runners0 >> back0 --> */}
                <div className="casino-nation-book text-center">
                  <span
                    className={`${
                      twelveIndexZeroRunnersEx &&
                      twelveIndexZeroRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {twelveIndexZeroRunnersEx
                      ? twelveIndexZeroRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
                {/*    <!-- exposure --> */}
              </div>
              {/*     <!-- result12 >> runners0 >> back0 --> */}
            </div>
            <div className="casino-odds-box-container">
              <div className="casino-nation-name text-center">Straight</div>

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
                    maxLiabilityPerMarket: data[13]?.maxLiabilityPerMarket,
                    isBettable: data[13]?.isBettable,
                    maxLiabilityPerBet: data[13]?.maxLiabilityPerBet,
                  });
                }}
                className={`casino-odds-box back ${
                  data[13]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                {/*    <!-- result0 >> status --> */}
                <span className="casino-odds">
                  {" "}
                  {data[13]?.runners[0]?.back[0]?.price}
                </span>
                {/*    <!-- result0 >> runners0 >> back0 --> */}
                <div className="casino-nation-book text-center">
                  <span
                    className={`${
                      thirteenIndexZeroRunnersEx &&
                      thirteenIndexZeroRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {thirteenIndexZeroRunnersEx
                      ? thirteenIndexZeroRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
                {/*    <!-- exposure --> */}
              </div>
              {/*  <!-- result13 >> runners0 >> back0 --> */}
            </div>
            <div className="casino-odds-box-container">
              <div className="casino-nation-name text-center">Flush</div>

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
                    maxLiabilityPerMarket: data[14]?.maxLiabilityPerMarket,
                    isBettable: data[14]?.isBettable,
                    maxLiabilityPerBet: data[14]?.maxLiabilityPerBet,
                  });
                }}
                className={`casino-odds-box back ${
                  data[14]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                {/*    <!-- result0 >> status --> */}
                <span className="casino-odds">
                  {" "}
                  {data[14]?.runners[0]?.back[0]?.price}
                </span>
                {/*    <!-- result0 >> runners0 >> back0 --> */}
                <div className="casino-nation-book text-center">
                  <span
                    className={`${
                      fourteenIndexZeroRunnersEx &&
                      fourteenIndexZeroRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {fourteenIndexZeroRunnersEx
                      ? fourteenIndexZeroRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
                {/*    <!-- exposure --> */}
              </div>
              {/*  <!-- result14 >> runners0 >> back0 --> */}
            </div>
            <div className="casino-odds-box-container">
              <div className="casino-nation-name text-center">Full House</div>

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
                    maxLiabilityPerMarket: data[15]?.maxLiabilityPerMarket,
                    isBettable: data[15]?.isBettable,
                    maxLiabilityPerBet: data[15]?.maxLiabilityPerBet,
                  });
                }}
                className={`casino-odds-box back ${
                  data[15]?.status === "OPEN" ? "" : " suspended-box"
                }`}
              >
                {/*    <!-- result0 >> status --> */}
                <span className="casino-odds">
                  {" "}
                  {data[15]?.runners[0]?.back[0]?.price}
                </span>
                {/*    <!-- result0 >> runners0 >> back0 --> */}
                <div className="casino-nation-book text-center">
                  <span
                    className={`${
                      fifteenIndexZeroRunnersEx &&
                      fifteenIndexZeroRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {fifteenIndexZeroRunnersEx
                      ? fifteenIndexZeroRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
                {/*    <!-- exposure --> */}
              </div>
              {/*  <!-- result15 >> runners0 >> back0 --> */}
            </div>
            <div className="casino-odds-box-container">
              <div className="casino-nation-name text-center">
                Four of a Kind
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
                    maxLiabilityPerMarket: data[16]?.maxLiabilityPerMarket,
                    isBettable: data[16]?.isBettable,
                    maxLiabilityPerBet: data[16]?.maxLiabilityPerBet,
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
                      sixteenIndexZeroRunnersEx &&
                      sixteenIndexZeroRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {sixteenIndexZeroRunnersEx
                      ? sixteenIndexZeroRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
                {/*    <!-- exposure --> */}
              </div>
              {/*      <!-- result16 >> runners0 >> back0 --> */}
            </div>
            <div className="casino-odds-box-container">
              <div className="casino-nation-name text-center">
                Straight Flush
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
                    maxLiabilityPerMarket: data[17]?.maxLiabilityPerMarket,
                    isBettable: data[17]?.isBettable,
                    maxLiabilityPerBet: data[17]?.maxLiabilityPerBet,
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
                      seventeenIndexZeroRunnersEx &&
                      seventeenIndexZeroRunnersEx[0]?.pnl < 0
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    {seventeenIndexZeroRunnersEx
                      ? seventeenIndexZeroRunnersEx[0]?.pnl
                      : null}
                  </span>
                </div>
                {/*    <!-- exposure --> */}
              </div>
              {/*   <!-- result17 >> runners0 >> back0 --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokerTwenty;
