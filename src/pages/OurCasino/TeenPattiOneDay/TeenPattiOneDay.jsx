const TeenPattiOneDay = ({
  data,
  setPlaceBetValue,
  setShowBets,
  lowExposure,
  highExposure,
  evenExposure,
  redExposure,
  a23Exposure,
  fourIndexZeroRunnersEx,
  fourIndexOneRunnersEx,
  fiveIndexZeroRunnersEx,
  fiveIndexOneRunnersEx,
  sevenIndexZeroRunnersEx,
  eightIndexZeroRunnersEx,
  sevenIndexOneRunnersEx,
  eightIndexOneRunnersEx,
  sixIndexOneRunnersEx,
  sixIndexZeroRunnersEx,
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
            <div
              className={`casino-table-row ${
                data[0]?.status === "OPEN" ? "" : "suspended-row"
              }`}
            >
              {/*  <!--suspended-row  key 0 status , here u have to use suspended-row instead of suspended-box  --> */}
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
                className="casino-odds-box back"
              >
                <span className="casino-odds">
                  {" "}
                  {data[0]?.runners[0]?.back[0]?.price}
                </span>
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
                className="casino-odds-box lay"
              >
                <span className="casino-odds">
                  {" "}
                  {data[0]?.runners[0]?.lay[0]?.price}
                </span>
              </div>
              {/*  <!-- key0 >> runner0 >> lay >> price --> */}
            </div>

            <div
              className={`casino-table-row ${
                data[1]?.status === "OPEN" ? "" : "suspended-row"
              }`}
            >
              {/*   <!--suspended-row  key 1 status, here u have to use suspended-row instead of suspended-box  --> */}
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Consecutive</div>
                <div className="casino-nation-book">
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
                {/*  <!-- exposure rate here --> */}
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
                className="casino-odds-box back"
              >
                <span className="casino-odds">
                  {" "}
                  {data[1]?.runners[0]?.back[0]?.price}
                </span>
              </div>
              {/*  <!-- key1 >> runner0 >> back >> price --> */}
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[1]?.runners[0]?.lay[0]?.price,
                    side: 1,
                    selectionId: data[1]?.runners[0]?.id,
                    btype: data[1]?.btype,
                    eventTypeId: data[1]?.eventTypeId,
                    betDelay: data[1]?.betDelay,
                    marketId: data[1]?.id,
                    lay: true,
                    name: data[1]?.runners[0]?.name,
                    isWeak: data[1]?.isWeak,
                  });
                }}
                className="casino-odds-box lay"
              >
                <span className="casino-odds">
                  {" "}
                  {data[1]?.runners[0]?.lay[0]?.price}
                </span>
              </div>
              {/*  <!-- key1 >> runner0 >> lay >> price --> */}
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
            <div
              className={`casino-table-row ${
                data[0]?.status === "OPEN" ? "" : "suspended-row"
              }`}
            >
              {/* <!--suspended-row  key 0 status, here u have to use suspended-row instead of suspended-box  --> */}
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
                {/* <!-- exposure rate here --> */}
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
                className="casino-odds-box back"
              >
                <span className="casino-odds">
                  {data[0]?.runners[1]?.back[0]?.price}
                </span>
              </div>
              {/*  <!-- key0 >> runner1 >> back >> price --> */}
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
                className="casino-odds-box lay"
              >
                <span className="casino-odds">
                  {data[0]?.runners[1]?.lay[0]?.price}
                </span>
              </div>
              {/*  <!-- key0 >> runner1 >> lay >> price --> */}
            </div>

            <div
              className={`casino-table-row ${
                data[2]?.status === "OPEN" ? "" : "suspended-row"
              }`}
            >
              {/* <!--suspended-row  key2 status, here u have to use suspended-row instead of suspended-box  --> */}
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Consecutive</div>
                <div className="casino-nation-book">
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
                {/*   <!-- exposure rate here --> */}
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
                className="casino-odds-box back"
              >
                <span className="casino-odds">
                  {data[2]?.runners[0]?.back[0]?.price}
                </span>
              </div>
              {/*  <!-- key2 >> runner0 >> back >> price --> */}
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[2]?.runners[0]?.lay[0]?.price,
                    side: 1,
                    selectionId: data[2]?.runners[0]?.id,
                    btype: data[1]?.btype,
                    eventTypeId: data[2]?.eventTypeId,
                    betDelay: data[2]?.betDelay,
                    marketId: data[2]?.id,
                    lay: true,
                    name: data[2]?.runners[0]?.name,
                    isWeak: data[2]?.isWeak,
                  });
                }}
                className="casino-odds-box lay"
              >
                <span className="casino-odds">
                  {data[2]?.runners[0]?.lay[0]?.price}
                </span>
              </div>
              {/*  <!-- key2 >> runner0 >> lay >> price --> */}
            </div>
          </div>
        </div>
      </div>
      <div className="casino-table-full-box teenpatti1day-other-odds mt-3">
        <div className="casino-table-header">
          <div className="casino-nation-detail"></div>
          <div className="casino-odds-box">Card 1</div>
          <div className="casino-odds-box">Card 2</div>
          <div className="casino-odds-box">Card 3</div>
          <div className="casino-odds-box">Card 4</div>
          <div className="casino-odds-box">Card 5</div>
          <div className="casino-odds-box">Card 6</div>
        </div>
        <div className="casino-table-body">
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">Odd</div>
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
              className={`casino-odds-box back casino-table-row ${
                data[3]?.status === "OPEN" ? "" : "suspended-box"
              }`}
            >
              {/* <!-- key3 >> status --> */}
              <span className="casino-odds">
                {" "}
                {data[3]?.runners[0]?.back[0]?.price}
              </span>
              {/* <!-- key3 >> runner0 >> back >> price --> */}
              <div className="casino-nation-book">
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
                data[4]?.status === "OPEN" ? "" : "suspended-box"
              }`}
            >
              {/*   <!-- key4 >> status --> */}
              <span className="casino-odds">
                {" "}
                {data[4]?.runners[0]?.back[0]?.price}
              </span>
              {/*  <!-- key4 >> runner0 >> back >> price --> */}
              <div className="casino-nation-book">
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
                });
              }}
              className={`casino-odds-box back ${
                data[5]?.status === "OPEN" ? "" : "suspended-box"
              }`}
            >
              {/*  <!-- key5 >> status --> */}
              <span className="casino-odds">
                {data[5]?.runners[0]?.back[0]?.price}
              </span>
              {/*  <!-- key5 >> runner0 >> back >> price --> */}
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
                data[6]?.status === "OPEN" ? "" : "suspended-box"
              }`}
            >
              {/*  <!-- key5 >> status --> */}
              <span className="casino-odds">
                {data[6]?.runners[0]?.back[0]?.price}
              </span>
              {/*  <!-- key5 >> runner0 >> back >> price --> */}
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
                data[7]?.status === "OPEN" ? "" : "suspended-box"
              }`}
            >
              {/*  <!-- key5 >> status --> */}
              <span className="casino-odds">
                {data[7]?.runners[0]?.back[0]?.price}
              </span>
              {/*  <!-- key5 >> runner0 >> back >> price --> */}
              <div className="casino-nation-book">
                <span
                  className={`${
                    sevenIndexZeroRunnersEx &&
                    sevenIndexZeroRunnersEx[0]?.pnl < 0
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
                data[8]?.status === "OPEN" ? "" : "suspended-box"
              }`}
            >
              {/*  <!-- key5 >> status --> */}
              <span className="casino-odds">
                {data[8]?.runners[0]?.back[0]?.price}
              </span>
              {/*  <!-- key5 >> runner0 >> back >> price --> */}
              <div className="casino-nation-book">
                <span
                  className={`${
                    eightIndexZeroRunnersEx &&
                    eightIndexZeroRunnersEx[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {eightIndexZeroRunnersEx
                    ? eightIndexZeroRunnersEx[0]?.pnl
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
                data[3]?.status === "OPEN" ? "" : "suspended-box"
              }`}
            >
              {/*  <!-- key5 >> status --> */}
              <span className="casino-odds">
                {data[3]?.runners[1]?.back[0]?.price}
              </span>
              {/*  <!-- key5 >> runner0 >> back >> price --> */}
              <div className="casino-nation-book">
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
                data[4]?.status === "OPEN" ? "" : "suspended-box"
              }`}
            >
              {/*  <!-- key5 >> status --> */}
              <span className="casino-odds">
                {data[4]?.runners[1]?.back[0]?.price}
              </span>
              {/*  <!-- key5 >> runner0 >> back >> price --> */}
              <div className="casino-nation-book">
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
                data[5]?.status === "OPEN" ? "" : "suspended-box"
              }`}
            >
              {/*  <!-- key5 >> status --> */}
              <span className="casino-odds">
                {data[5]?.runners[1]?.back[0]?.price}
              </span>
              {/*  <!-- key5 >> runner0 >> back >> price --> */}
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
                data[6]?.status === "OPEN" ? "" : "suspended-box"
              }`}
            >
              {/*  <!-- key5 >> status --> */}
              <span className="casino-odds">
                {data[6]?.runners[1]?.back[0]?.price}
              </span>
              {/*  <!-- key5 >> runner0 >> back >> price --> */}
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
                data[7]?.status === "OPEN" ? "" : "suspended-box"
              }`}
            >
              {/*  <!-- key5 >> status --> */}
              <span className="casino-odds">
                {data[7]?.runners[1]?.back[0]?.price}
              </span>
              {/*  <!-- key5 >> runner0 >> back >> price --> */}
              <div className="casino-nation-book">
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
                data[8]?.status === "OPEN" ? "" : "suspended-box"
              }`}
            >
              {/*  <!-- key5 >> status --> */}
              <span className="casino-odds">
                {data[8]?.runners[1]?.back[0]?.price}
              </span>
              {/*  <!-- key5 >> runner0 >> back >> price --> */}
              <div className="casino-nation-book">
                <span
                  className={`${
                    eightIndexOneRunnersEx && eightIndexOneRunnersEx[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {eightIndexOneRunnersEx
                    ? eightIndexOneRunnersEx[0]?.pnl
                    : null}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeenPattiOneDay;
