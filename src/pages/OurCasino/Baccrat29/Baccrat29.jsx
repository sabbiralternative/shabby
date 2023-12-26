const Baccrat29 = ({
  data,
  pnlBySelection,
  setPlaceBetValue,
  setShowBets,
  eightIndexZeroExp,
}) => {
  return (
    <div className="casino-table">
      <div className="casino-table-box">
        <div className="casino-table-left-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail">Player A</div>
          </div>
          <div className="casino-table-body">
            <div className="casino-table-row">
              <div className="casino-odds-box">Winner</div>
              <div className="casino-odds-box">High Card</div>
              <div className="casino-odds-box">Pair</div>
              <div className="casino-odds-box">Color Plus</div>
            </div>
            <div className="casino-table-row">
              {data
                .slice(0, 7)
                .filter((game, idx) => idx % 2 === 0)
                .map((game, gameIdx) =>
                  game?.runners?.map((runner) =>
                    runner?.back?.map(({ price }) => {
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
                              btype: game?.btype,
                              eventTypeId: game?.eventTypeId,
                              betDelay: game?.betDelay,
                              marketId: game?.id,
                              back: true,
                              name: runner?.name,
                              isWeak: game?.isWeak,
                              maxLiabilityPerMarket:game?.maxLiabilityPerMarket,
                              isBettable:game?.isBettable,
                              maxLiabilityPerBet:game?.maxLiabilityPerBet
                            });
                          }}
                          key={gameIdx}
                          className={`casino-odds-box back ${
                            game?.status === "OPEN" &&
                            runner?.status === "ACTIVE"
                              ? ""
                              : " suspended-box"
                          }`}
                        >
                          <span className="casino-odds">{price}</span>
                          {pnl && (
                            <span className="casino-nation-book">
                              {pnl?.map(({ pnl }, i) => {
                                return (
                                  <div
                                    key={i}
                                    className={`casino-nation-book ${
                                      pnl > 0 ? "text-success" : "text-danger"
                                    }`}
                                    style={{
                                      cursor: "pointer",
                                    }}
                                  >
                                    {pnl}
                                  </div>
                                );
                              })}
                            </span>
                          )}
                        </div>
                      );
                    })
                  )
                )}
            </div>
          </div>
        </div>
        <div className="casino-table-box-divider"></div>

        <div className="casino-table-right-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail">Player B</div>
          </div>
          <div className="casino-table-body">
            <div className="casino-table-row">
              <div className="casino-odds-box">Winner</div>
              <div className="casino-odds-box">High Card</div>
              <div className="casino-odds-box">Pair</div>
              <div className="casino-odds-box">Color Plus</div>
            </div>
            <div className="casino-table-row">
              {data
                .slice(0, 8)
                .filter((game, idx) => idx % 2 === 1)
                .map((game, gameIdx) =>
                  game?.runners?.map((runner) =>
                    runner?.back?.map(({ price }) => {
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
                              btype: game?.btype,
                              eventTypeId: game?.eventTypeId,
                              betDelay: game?.betDelay,
                              marketId: game?.id,
                              back: true,
                              name: runner?.name,
                              isWeak: game?.isWeak,
                              maxLiabilityPerMarket:game?.maxLiabilityPerMarket,
                              isBettable:game?.isBettable,
                              maxLiabilityPerBet:game?.maxLiabilityPerBet
                            });
                          }}
                          key={gameIdx}
                          className={`casino-odds-box back ${
                            game?.status === "OPEN" &&
                            runner?.status === "ACTIVE"
                              ? ""
                              : " suspended-box"
                          }`}
                        >
                          <span className="casino-odds">{price}</span>
                          {pnl && (
                            <span className="casino-nation-book">
                              {pnl?.map(({ pnl }, i) => {
                                return (
                                  <div
                                    key={i}
                                    className={`casino-nation-book ${
                                      pnl > 0 ? "text-success" : "text-danger"
                                    }`}
                                    style={{
                                      cursor: "pointer",
                                    }}
                                  >
                                    {pnl}
                                  </div>
                                );
                              })}
                            </span>
                          )}
                        </div>
                      );
                    })
                  )
                )}
            </div>
          </div>
        </div>
      </div>
      <div className="casino-table-full-box mt-3">
        <img src="/assets/lucky9.png" />
        <div className="casino-odd-box-container">
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
            <span className="casino-odds">
              {" "}
              {data[8]?.runners[0]?.back[0]?.price}
            </span>
          </div>

          <div
            onClick={() => {
              setShowBets(true);
              setPlaceBetValue({});
              setPlaceBetValue({
                price: data[8]?.runners[0]?.lay[0]?.price,
                side: 1,
                selectionId: data[8]?.runners[0]?.id,
                btype: data[8]?.btype,
                eventTypeId: data[8]?.eventTypeId,
                betDelay: data[8]?.betDelay,
                marketId: data[8]?.id,
                lay: true,
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
            <span className="casino-odds">
              {" "}
              {data[8]?.runners[0]?.lay[0]?.price}
            </span>
          </div>

          <div className="casino-nation-book text-center w-100">
            <span
              className={`casino-nation-book ${
                eightIndexZeroExp && eightIndexZeroExp[0]?.pnl < 0
                  ? "text-danger"
                  : "text-success"
              }`}
            >
              {eightIndexZeroExp ? eightIndexZeroExp[0]?.pnl : null}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baccrat29;
