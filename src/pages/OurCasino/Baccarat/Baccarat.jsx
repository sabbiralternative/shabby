const Baccarat = ({
  one,
  data,
  setPlaceBetValue,
  setShowBets,
  lowExposure,
  highExposure,
  zeroIndexTwoRunnersEx,
  evenExposure,
  redExposure,
  a23Exposure,
  fourIndexZeroRunnersEx,
  fiveIndexZeroRunnersEx,
  sixIndexZeroExp,
}) => {
  return (
    <div className="casino-table">
      <div className="casino-table-full-box">
        <div className="baccarat-graph text-center">
          <h4 className="">Statistics</h4>
          <div style={{ height: "160px", width: "100%" }}>
            <div
              id="reactgooglegraph-1"
              style={{ height: "160px", width: "100%" }}
            >
              <div style={{ position: "relative" }}>
                <div
                  dir="ltr"
                  style={{
                    position: "relative",
                    width: "520px",
                    height: "160px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                      width: "100%",
                      height: "100%",
                    }}
                    aria-label="A chart."
                  >
                    <svg
                      width="520"
                      height="160"
                      aria-label="A chart."
                      style={{ overflow: "hidden" }}
                    >
                      <defs id="_ABSTRACT_RENDERER_ID_85"></defs>
                      <g>
                        <rect
                          x="343"
                          y="3"
                          width="177"
                          height="47"
                          stroke="none"
                          strokeWidth="0"
                          fillOpacity="0"
                          fill="#ffffff"
                        ></rect>
                        <g id="Player">
                          <rect
                            x="343"
                            y="3"
                            width="177"
                            height="11"
                            stroke="none"
                            strokeWidth="0"
                            fillOpacity="0"
                            fill="#ffffff"
                          ></rect>
                          <g>
                            <text
                              textAnchor="start"
                              x="358"
                              y="12.35"
                              fontFamily="Arial"
                              fontSize="11"
                              stroke="none"
                              strokeWidth="0"
                              fill="#222222"
                            >
                              Player
                            </text>
                          </g>
                          <circle
                            cx="348.5"
                            cy="8.5"
                            r="5.5"
                            stroke="none"
                            strokeWidth="0"
                            fill="#086cb8"
                          ></circle>
                        </g>
                        <g id="Banker">
                          <rect
                            x="343"
                            y="21"
                            width="177"
                            height="11"
                            stroke="none"
                            strokeWidth="0"
                            fillOpacity="0"
                            fill="#ffffff"
                          ></rect>
                          <g>
                            <text
                              textAnchor="start"
                              x="358"
                              y="30.35"
                              fontFamily="Arial"
                              fontSize="11"
                              stroke="none"
                              strokeWidth="0"
                              fill="#222222"
                            >
                              Banker
                            </text>
                          </g>
                          <circle
                            cx="348.5"
                            cy="26.5"
                            r="5.5"
                            stroke="none"
                            strokeWidth="0"
                            fill="#ae2130"
                          ></circle>
                        </g>
                        <g id="Tie">
                          <rect
                            x="343"
                            y="39"
                            width="177"
                            height="11"
                            stroke="none"
                            strokeWidth="0"
                            fillOpacity="0"
                            fill="#ffffff"
                          ></rect>
                          <g>
                            <text
                              textAnchor="start"
                              x="358"
                              y="48.35"
                              fontFamily="Arial"
                              fontSize="11"
                              stroke="none"
                              strokeWidth="0"
                              fill="#222222"
                            >
                              Tie
                            </text>
                          </g>
                          <circle
                            cx="348.5"
                            cy="44.5"
                            r="5.5"
                            stroke="none"
                            strokeWidth="0"
                            fill="#279532"
                          ></circle>
                        </g>
                      </g>
                      <g>
                        <path
                          d="M245,72.3L245,87.7A77,61.6,0,0,1,209.25866321338276,139.71060021092413L209.25866321338276,124.31060021092412A77,61.6,0,0,0,245,72.3"
                          stroke="#06518a"
                          strokeWidth="1"
                          fill="#06518a"
                        ></path>
                        <path
                          d="M168,72.3L168,87.7L209.25866321338276,139.71060021092413L209.25866321338276,124.31060021092412"
                          stroke="#06518a"
                          strokeWidth="1"
                          fill="#06518a"
                        ></path>
                        <path
                          d="M168,72.3L168,10.699999999999996A77,61.6,0,0,1,209.25866321338276,124.31060021092412L168,72.3A0,0,0,0,0,168,72.3"
                          stroke="#086cb8"
                          strokeWidth="1"
                          fill="#086cb8"
                        ></path>
                        <text
                          textAnchor="start"
                          x="208.20733520295096"
                          y="64.74421862743291"
                          fontFamily="Arial"
                          fontSize="11"
                          stroke="none"
                          strokeWidth="0"
                          fill="#ffffff"
                        >
                          41%
                        </text>
                      </g>
                      <g>
                        <path
                          d="M168,72.3L168,87.7L108.67048030626424,48.43468223148069L108.67048030626424,33.034682231480694"
                          stroke="#1d7026"
                          strokeWidth="1"
                          fill="#1d7026"
                        ></path>
                        <path
                          d="M168,72.3L108.67048030626424,33.034682231480694A77,61.6,0,0,1,168,10.699999999999996L168,72.3A0,0,0,0,0,168,72.3"
                          stroke="#279532"
                          strokeWidth="1"
                          fill="#279532"
                        ></path>
                        <text
                          textAnchor="start"
                          x="133.81046216949449"
                          y="38.368454778901786"
                          fontFamily="Arial"
                          fontSize="11"
                          stroke="none"
                          strokeWidth="0"
                          fill="#ffffff"
                        >
                          14%
                        </text>
                      </g>
                      <g>
                        <path
                          d="M209.25866321338276,124.31060021092412L209.25866321338276,139.71060021092413A77,61.6,0,0,1,91,87.70000000000002L91,72.3A77,61.6,0,0,0,209.25866321338276,124.31060021092412"
                          stroke="#831924"
                          strokeWidth="1"
                          fill="#831924"
                        ></path>
                        <path
                          d="M168,72.3L209.25866321338276,124.31060021092412A77,61.6,0,0,1,108.67048030626424,33.034682231480694L168,72.3A0,0,0,0,0,168,72.3"
                          stroke="#ae2130"
                          strokeWidth="1"
                          fill="#ae2130"
                        ></path>
                        <text
                          textAnchor="start"
                          x="117.26104647975356"
                          y="103.0098602027878"
                          fontFamily="Arial"
                          fontSize="11"
                          stroke="none"
                          strokeWidth="0"
                          fill="#ffffff"
                        >
                          45%
                        </text>
                      </g>
                      <g></g>
                    </svg>
                    <div
                      aria-label="A tabular representation of the data in the chart."
                      style={{
                        position: "absolute",
                        left: "-10000px",
                        top: "auto",
                        width: "1px",
                        height: "1px",
                        overflow: "hidden",
                      }}
                    >
                      <table>
                        <thead>
                          <tr>
                            <th>P</th>
                            <th>Data</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Player</td>
                            <td>41</td>
                          </tr>
                          <tr>
                            <td>Banker</td>
                            <td>45</td>
                          </tr>
                          <tr>
                            <td>Tie</td>
                            <td>14</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      aria-label="A tabular representation of the data in the chart."
                      style={{
                        position: "absolute",
                        left: "-10000px",
                        top: "auto",
                        width: "1px",
                        height: "1px",
                        overflow: "hidden",
                      }}
                    >
                      <table>
                        <thead>
                          <tr>
                            <th>P</th>
                            <th>Data</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Player</td>
                            <td>41</td>
                          </tr>
                          <tr>
                            <td>Banker</td>
                            <td>45</td>
                          </tr>
                          <tr>
                            <td>Tie</td>
                            <td>14</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      aria-label="A tabular representation of the data in the chart."
                      style={{
                        position: "absolute",
                        left: "-10000px",
                        top: "auto",
                        width: "1px",
                        height: "1px",
                        overflow: "hidden",
                      }}
                    >
                      <table>
                        <thead>
                          <tr>
                            <th>P</th>
                            <th>Data</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Player</td>
                            <td>41</td>
                          </tr>
                          <tr>
                            <td>Banker</td>
                            <td>45</td>
                          </tr>
                          <tr>
                            <td>Tie</td>
                            <td>14</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      aria-label="A tabular representation of the data in the chart."
                      style={{
                        position: "absolute",
                        left: "-10000px",
                        top: "auto",
                        width: "1px",
                        height: "1px",
                        overflow: "hidden",
                      }}
                    >
                      <table>
                        <thead>
                          <tr>
                            <th>P</th>
                            <th>Data</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Player</td>
                            <td>41</td>
                          </tr>
                          <tr>
                            <td>Banker</td>
                            <td>45</td>
                          </tr>
                          <tr>
                            <td>Tie</td>
                            <td>14</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    display: "none",
                    position: "absolute",
                    top: "170px",
                    left: "218px",
                    whiteSpace: "nowrap",
                    fontFamily: "Arial",
                    fontSize: "11px",
                  }}
                >
                  Tie
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="baccarat-odds-container">
          <div className="baccarat-other-odds">


            <div className="baccarat-other-odd-box-container">
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
                className={`baccarat-other-odd-box   ${
                  data[3]?.status === "OPEN" &&
                  data[3]?.runners[0]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                {/* <!-- result3 >> status --> */}
                <span>Perfect Pair</span>
                <span> {data[3]?.runners[0]?.back[0]?.price}</span>
              </div>
              {/*   <!-- result3 >> runner0 >> back0 >> price --> */}
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


            <div className="baccarat-other-odd-box-container">
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
                className={`baccarat-other-odd-box   ${
                  data[4]?.status === "OPEN" &&
                  data[4]?.runners[0]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                {/*   <!-- result4 >> status --> */}
                <span>Big</span>
                <span>{data[4]?.runners[0]?.back[0]?.price}</span>
              </div>
              {/* <!-- result4 >> runner0 >> back0 >> price --> */}
              <div className="casino-nation-book text-center ">
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

            <div className="baccarat-other-odd-box-container">
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
                className={`baccarat-other-odd-box   ${
                  data[5]?.status === "OPEN" &&
                  data[5]?.runners[0]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                {/* <!-- result5 >> status --> */}
                <span>Small</span>
                <span>{data[5]?.runners[0]?.back[0]?.price}</span>
              </div>
              {/*   <!-- result5 >> runner0 >> back0 >> price --> */}
              <div className="casino-nation-book text-center ">
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

            <div className="baccarat-other-odd-box-container">
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
                className={`baccarat-other-odd-box   ${
                  data[6]?.status === "OPEN" &&
                  data[6]?.runners[0]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                {/* <!-- result5 >> status --> */}
                <span>Either Player</span>
                <span>{data[6]?.runners[0]?.back[0]?.price}</span>
              </div>
              {/*   <!-- result5 >> runner0 >> back0 >> price --> */}
              <div className="casino-nation-book text-center ">
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
          </div>
          <div className="baccarat-main-odds mt-3">


            <div className="player-pair-box-container">
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
                className={`player-pair-box   ${
                  data[1]?.status === "OPEN" &&
                  data[1]?.runners[0]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                {/*  <!-- result1 >> status --> */}
                <div>Player Pair</div>
                <div>{data[1]?.runners[0]?.back[0]?.price}</div>
                {/* <!-- result1 >> runner0 >> back0 >> price --> */}
              </div>
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










            <div className="player-box-container">
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
                className={`player-box   ${
                  data[0]?.status === "OPEN" &&
                  data[0]?.runners[0]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                {/* <!-- result0 >> status --> */}
                <div>Player</div>
                <div>{data[0]?.runners[0]?.back[0]?.price}</div>
                {/*   <!-- result0 >> runner0 >> back0 >> price --> */}
                <div>
                  {data[0]?.runners[0]?.card?.length > 2 && (
                    <img
                      className="l-rotate"
                      src={`/cards/${data[0]?.runners[0]?.card[2]}.jpg`}
                    />
                  )}

                  {data[0]?.runners[0]?.card?.length > 1 ? (
                    <img src={`/cards/${data[0]?.runners[0]?.card[1]}.jpg`} />
                  ) : (
                    <img src={one} />
                  )}

                  {data[0]?.runners[0]?.card?.length > 0 ? (
                    <img src={`/cards/${data[0]?.runners[0]?.card[0]}.jpg`} />
                  ) : (
                    <img src={one} />
                  )}
                </div>
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

            <div className="tie-box-container">
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
                className={`tie-box   ${
                  data[0]?.status === "OPEN" &&
                  data[0]?.runners[2]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                {/*  <!-- result0 >> status --> */}
                <div>Tie</div>
                <div>{data[0]?.runners[2]?.back[0]?.price}</div>
                {/* <!-- result0 >> runner2 >> back0 >> price --> */}
              </div>
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

            <div className="banker-box-container">
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
                className={`banker-box   ${
                  data[0]?.status === "OPEN" &&
                  data[0]?.runners[1]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                {/*   <!-- result0 >> status --> */}
                <div>Banker</div>
                <div>{data[0]?.runners[1]?.back[0]?.price}</div>
                {/*  <!-- result0 >> runner1 >> back0 >> price --> */}
                <div>
                  {data[0]?.runners[1]?.card?.length > 0 ? (
                    <img src={`/cards/${data[0]?.runners[1]?.card[0]}.jpg`} />
                  ) : (
                    <img src={one} />
                  )}
                  {data[0]?.runners[1]?.card?.length > 1 ? (
                    <img src={`/cards/${data[0]?.runners[1]?.card[1]}.jpg`} />
                  ) : (
                    <img src={one} />
                  )}

                  {data[0]?.runners[1]?.card?.length > 2 && (
                    <img
                      className="r-rotate"
                      src={`/cards/${data[0]?.runners[1]?.card[2]}.jpg`}
                    />
                  )}
                </div>
              </div>
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

            <div className="banker-pair-box-container">
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
                className={`banker-pair-box   ${
                  data[2]?.status === "OPEN" &&
                  data[2]?.runners[0]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                {/* <!-- result2 >> status --> */}
                <div>Banker Pair</div>
                <div>{data[2]?.runners[0]?.back[0]?.price}</div>
                {/* <!-- result2 >> runner0 >> back0 >> price --> */}
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default Baccarat;
