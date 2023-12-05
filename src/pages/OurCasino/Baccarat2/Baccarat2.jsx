const Baccarat2 = ({
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

  four56Exposure,
  eight910Exposure,
  jqkExposure,
  threeIndexFourEx,
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
              <div style={{position:'relative'}}>
                <div
                  dir="ltr"
            
                  style={{
                    position: "relative",
                    width: "166px",
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
                      width="166"
                      height="160"
                      aria-label="A chart."
                      style={{overflow:'hidden'}}
                    >
                      <defs
                        id="_ABSTRACT_RENDERER_ID_249"
                      ></defs>
                      <g>
                        <rect
                          x="119"
                          y="3"
                          width="47"
                          height="39"
                          stroke="none"
                          strokeWidth="0"
                          fillOpacity="0"
                          fill="#ffffff"
                        ></rect>
                        <g id="Player">
                          <rect
                            x="119"
                            y="3"
                            width="47"
                            height="9"
                            stroke="none"
                            strokeWidth="0"
                            fillOpacity="0"
                            fill="#ffffff"
                          ></rect>
                          <g>
                            <text
                              textAnchor="start"
                              x="131"
                              y="10.65"
                              fontFamily="Arial"
                              fontSize="9"
                              stroke="none"
                              strokeWidth="0"
                              fill="#222222"
                            >
                              Player
                            </text>
                          </g>
                          <circle
                            cx="123.5"
                            cy="7.5"
                            r="4.5"
                            stroke="none"
                            strokeWidth="0"
                            fill="#086cb8"
                          ></circle>
                        </g>
                        <g id="Banker">
                          <rect
                            x="119"
                            y="18"
                            width="47"
                            height="9"
                            stroke="none"
                            strokeWidth="0"
                            fillOpacity="0"
                            fill="#ffffff"
                          ></rect>
                          <g>
                            <text
                              textAnchor="start"
                              x="131"
                              y="25.65"
                              fontFamily="Arial"
                              fontSize="9"
                              stroke="none"
                              strokeWidth="0"
                              fill="#222222"
                            >
                              Banker
                            </text>
                          </g>
                          <circle
                            cx="123.5"
                            cy="22.5"
                            r="4.5"
                            stroke="none"
                            strokeWidth="0"
                            fill="#ae2130"
                          ></circle>
                        </g>
                        <g id="Tie">
                          <rect
                            x="119"
                            y="33"
                            width="47"
                            height="9"
                            stroke="none"
                            strokeWidth="0"
                            fillOpacity="0"
                            fill="#ffffff"
                          ></rect>
                          <g>
                            <text
                              textAnchor="start"
                              x="131"
                              y="40.65"
                              fontFamily="Arial"
                              fontSize="9"
                              stroke="none"
                              strokeWidth="0"
                              fill="#222222"
                            >
                              Tie
                            </text>
                          </g>
                          <circle
                            cx="123.5"
                            cy="37.5"
                            r="4.5"
                            stroke="none"
                            strokeWidth="0"
                            fill="#279532"
                          ></circle>
                        </g>
                      </g>
                      <g>
                        <path
                          d="M104,75L104,85A50,40,0,0,1,78.08768370508578,120.05226720175455L78.08768370508578,110.05226720175455A50,40,0,0,0,104,75"
                          stroke="#06518a"
                          strokeWidth="1"
                          fill="#06518a"
                        ></path>
                        <path
                          d="M54,75L54,85L78.08768370508578,120.05226720175455L78.08768370508578,110.05226720175455"
                          stroke="#06518a"
                          strokeWidth="1"
                          fill="#06518a"
                        ></path>
                        <path
                          d="M54,75L54,35A50,40,0,0,1,78.08768370508578,110.05226720175455L54,75A0,0,0,0,0,54,75"
                          stroke="#086cb8"
                          strokeWidth="1"
                          fill="#086cb8"
                        ></path>
                        <text
                          textAnchor="start"
                          x="74.68776129694791"
                          y="72.38663005658105"
                          fontFamily="Arial"
                          fontSize="9"
                          stroke="none"
                          strokeWidth="0"
                          fill="#ffffff"
                        >
                          42%
                        </text>
                      </g>
                      <g>
                        <path
                          d="M54,75L54,85L29.9123162949142,49.947732798245475L29.9123162949142,39.947732798245475"
                          stroke="#1d7026"
                          strokeWidth="1"
                          fill="#1d7026"
                        ></path>
                        <path
                          d="M54,75L29.9123162949142,39.947732798245475A50,40,0,0,1,54,35L54,75A0,0,0,0,0,54,75"
                          stroke="#279532"
                          strokeWidth="1"
                          fill="#279532"
                        ></path>
                      </g>
                      <g>
                        <path
                          d="M78.08768370508578,110.05226720175455L78.08768370508578,120.05226720175455A50,40,0,0,1,4,85L4,75A50,40,0,0,0,78.08768370508578,110.05226720175455"
                          stroke="#831924"
                          strokeWidth="1"
                          fill="#831924"
                        ></path>
                        <path
                          d="M54,75L78.08768370508578,110.05226720175455A50,40,0,0,1,29.9123162949142,39.947732798245475L54,75A0,0,0,0,0,54,75"
                          stroke="#ae2130"
                          strokeWidth="1"
                          fill="#ae2130"
                        ></path>
                        <text
                          textAnchor="start"
                          x="18.5034734040061"
                          y="89.16376223551248"
                          fontFamily="Arial"
                          fontSize="9"
                          stroke="none"
                          strokeWidth="0"
                          fill="#ffffff"
                        >
                          50%
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
                            <td>42</td>
                          </tr>
                          <tr>
                            <td>Banker</td>
                            <td>50</td>
                          </tr>
                          <tr>
                            <td>Tie</td>
                            <td>8</td>
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
                            <td>42</td>
                          </tr>
                          <tr>
                            <td>Banker</td>
                            <td>50</td>
                          </tr>
                          <tr>
                            <td>Tie</td>
                            <td>8</td>
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
                            <td>42</td>
                          </tr>
                          <tr>
                            <td>Banker</td>
                            <td>50</td>
                          </tr>
                          <tr>
                            <td>Tie</td>
                            <td>8</td>
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
                            <td>42</td>
                          </tr>
                          <tr>
                            <td>Banker</td>
                            <td>50</td>
                          </tr>
                          <tr>
                            <td>Tie</td>
                            <td>8</td>
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
                    left: "176px",
                    whiteSpace: "nowrap",
                    fontFamily: "Arial",
                    fontSize: "11px",
                  }}
                  
                >
                  50%
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
                <span>Score 1-4</span>
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
                className={`baccarat-other-odd-box   ${
                  data[3]?.status === "OPEN" &&
                  data[3]?.runners[1]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                {/* <!-- result3 >> status --> */}
                <span>Score 5-6</span>
                <span> {data[3]?.runners[1]?.back[0]?.price}</span>
              </div>
              {/*   <!-- result3 >> runner0 >> back0 >> price --> */}
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





            <div className="baccarat-other-odd-box-container">
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
                  });
                }}
                className={`baccarat-other-odd-box   ${
                  data[3]?.status === "OPEN" &&
                  data[3]?.runners[2]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                {/* <!-- result3 >> status --> */}
                <span>Score 7</span>
                <span> {data[3]?.runners[2]?.back[0]?.price}</span>
              </div>
              {/*   <!-- result3 >> runner0 >> back0 >> price --> */}
              <div className="casino-nation-book text-center ">
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



            <div className="baccarat-other-odd-box-container">
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
                  });
                }}
                className={`baccarat-other-odd-box   ${
                  data[3]?.status === "OPEN" &&
                  data[3]?.runners[3]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                {/* <!-- result3 >> status --> */}
                <span>Score 5-6</span>
                <span> {data[3]?.runners[3]?.back[0]?.price}</span>
              </div>
              {/*   <!-- result3 >> runner0 >> back0 >> price --> */}
              <div className="casino-nation-book text-center ">
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





            <div className="baccarat-other-odd-box-container">
              <div
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[3]?.runners[4]?.back[0]?.price,
                    side: 0,
                    selectionId: data[3]?.runners[4]?.id,
                    btype: data[3]?.btype,
                    eventTypeId: data[3]?.eventTypeId,
                    betDelay: data[3]?.betDelay,
                    marketId: data[3]?.id,
                    back: true,
                    name: data[3]?.runners[4]?.name,
                    isWeak: data[3]?.isWeak,
                  });
                }}
                className={`baccarat-other-odd-box   ${
                  data[3]?.status === "OPEN" &&
                  data[3]?.runners[4]?.status === "ACTIVE"
                    ? ""
                    : " suspended-box"
                }`}
              >
                {/* <!-- result3 >> status --> */}
                <span>Score 5-6</span>
                <span> {data[3]?.runners[4]?.back[0]?.price}</span>
              </div>
              {/*   <!-- result3 >> runner0 >> back0 >> price --> */}
              <div className="casino-nation-book text-center ">
                <span
                  className={`${
                    threeIndexFourEx && threeIndexFourEx[0]?.pnl < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {threeIndexFourEx ? threeIndexFourEx[0]?.pnl : null}
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
               {/*  <!-- result0 >> status --> */}
                <div>Player</div>
                <div>{data[0]?.runners[0]?.back[0]?.price}</div>
                {/* <!-- result0 >> runners0 >> back >> price --> */}
                <div>
                  {data[0]?.runners[0]?.card?.length > 2 && (
                    <img
                      className="l-rotate"
                      src={`/cards/${data[0]?.runners[0]?.card[2]}.jpg`}
                    />
                  )}

                  {data[0]?.runners[0]?.card?.length > 0 ? (
                    <img src={`/cards/${data[0]?.runners[0]?.card[0]}.jpg`} />
                  ) : (
                    <img src={one} />
                  )}

                  {data[0]?.runners[0]?.card?.length > 1 ? (
                    <img src={`/cards/${data[0]?.runners[0]?.card[1]}.jpg`} />
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
               {/*  <!-- result0 >> status --> */}
                <div>Banker</div>
                <div>{data[0]?.runners[1]?.back[0]?.price}</div>
               {/*  <!-- result0 >> runners1 >> back >> price --> */}
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
                      className="l-rotate"
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

export default Baccarat2;