const WorliGames = ({
  data,
  setShowBets,
  setPlaceBetValue,
  pnlBySelection,
  evenExposure,
  redExposure,
  oddExposure,
  blackExposure,
}) => {
  return (
    <div className="casino-table">
      <div className="tab-content">
        <div
          role="tabpanel"
          id="worli-tabs-tabpane-single"
          aria-labelledby="worli-tabs-tab-single"
          className="fade single tab-pane active show"
        >
          <div
            className={`worlibox ${
              data[0]?.status === "OPEN" ? "" : "suspended-box"
            } `}
          >
            <div className="worli-left">
              <div className="worli-box-title">
                <b>9.5</b>
              </div>

              <div className="worli-box-row">
                {data[0] &&
                  data[0].runners?.slice(0, 5).map((runner, i) => {
                    const pnl = pnlBySelection?.filter(
                      (pnl) => pnl?.RunnerId === runner?.id
                    );
                    return (
                      <div
                        onClick={() => {
                          setShowBets(true);
                          setPlaceBetValue({});
                          setPlaceBetValue({
                            price: runner?.back[0]?.price,
                            side: 0,
                            selectionId: runner?.id,
                            btype: data[0]?.btype,
                            eventTypeId: data[0]?.eventTypeId,
                            betDelay: data[0]?.betDelay,
                            marketId: data[0]?.id,
                            back: true,
                            name: runner?.name,
                            isWeak: data[0]?.isWeak,
                          });
                        }}
                        key={i}
                        className={`worli-odd-box back  ${
                          data[0]?.status === "OPEN" &&
                          runner?.status === "ACTIVE"
                            ? ""
                            : ""
                        }`}
                      >
                        <span className="worli-odd">{i + 1}</span>
                        {pnl && (
                          <div className="casino-nation-book">
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

              <div className="worli-box-row">
                {data[0] &&
                  data[0].runners?.slice(5, 10).map((runner, i) => {
                    const circularIndex = (i + 6) % 10;
                    const pnl = pnlBySelection?.filter(
                      (pnl) => pnl?.RunnerId === runner?.id
                    );
                    return (
                      <div
                        onClick={() => {
                          setShowBets(true);
                          setPlaceBetValue({});
                          setPlaceBetValue({
                            price: runner?.back[0]?.price,
                            side: 0,
                            selectionId: runner?.id,
                            btype: data[0]?.btype,
                            eventTypeId: data[0]?.eventTypeId,
                            betDelay: data[0]?.betDelay,
                            marketId: data[0]?.id,
                            back: true,
                            name: runner?.name,
                            isWeak: data[0]?.isWeak,
                          });
                        }}
                        key={i}
                        className={`worli-odd-box back  ${
                          data[0]?.status === "OPEN" &&
                          runner?.status === "ACTIVE"
                            ? ""
                            : ""
                        }`}
                      >
                        <span className="worli-odd">{circularIndex}</span>
                        {pnl && (
                          <div className="casino-nation-book">
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
            <div className="worli-right">
              <div className="worli-box-title">
                <b>9.5</b>
              </div>

              <div className="worli-box-row">
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
                  className="worli-odd-box back"
                >
                  <span className="worli-odd">Line 1</span>
                  <span className="d-block">1|2|3|4|5</span>
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
                </div>

                {/*    <!-- result1 >> runners0 >> back0 --> */}
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
                  className="worli-odd-box back"
                >
                  <span className="worli-odd">ODD</span>
                  <span className="d-block">1|3|5|7|9</span>
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
                </div>

                {/*  <!-- result2 >> runners0 >> back0 --> */}
              </div>

              <div className="worli-box-row">
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
                  className="worli-odd-box back"
                >
                  <span className="worli-odd">Line 2</span>
                  <span className="d-block">6|7|8|9|0</span>

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
                {/*  <!-- result1 >> runners1 >> back0 --> */}
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
                  className="worli-odd-box back"
                >
                  <span className="worli-odd">EVEN</span>
                  <span className="d-block">2|4|6|8|0</span>
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
                {/*    <!-- result2 >> runners1 >> back0 --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorliGames;
