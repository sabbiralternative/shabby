const WarGames = ({
  data,
  setPlaceBetValue,
  setShowBets,
  pnlBySelection,
  one,
}) => {
  return (
    <div className="casino-table">
      <div className="casino-table-header w-100">
        <div className="casino-nation-detail"></div>
        <div className="casino-odds-box">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {data[0]?.runners[0]?.card?.length > 0 ? (
                  <img src={`/cards/${data[0]?.runners?.[0]?.card[0]}.jpg`} />
                ) : (
                  <img src={one} />
                )}

                {/*  <!-- result0 >> runners0>> card --> */}
              </div>
            </div>
          </div>
        </div>
        <div className="casino-odds-box">
          <div className="flip-card">
            <div className="flip-card-inner">
              {data[1]?.runners[0]?.card?.length > 0 ? (
                <div className="flip-card-front">
                  <img src={`/cards/${data[1]?.runners[0]?.card[0]}.jpg`} />
                  {/* <!-- key0 runner2 card--> */}
                </div>
              ) : (
                <div className="flip-card-front">
                  <img src={one} />
                  {/*     <!-- key0 runner2 card--> */}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="casino-odds-box">
          <div className="flip-card">
            <div className="flip-card-inner">
              {data[2]?.runners[0]?.card?.length > 0 ? (
                <div className="flip-card-front">
                  <img src={`/cards/${data[2]?.runners[0]?.card[0]}.jpg`} />
                  {/* <!-- key0 runner2 card--> */}
                </div>
              ) : (
                <div className="flip-card-front">
                  <img src={one} />
                  {/*     <!-- key0 runner2 card--> */}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="casino-odds-box">
          <div className="flip-card">
            <div className="flip-card-inner">
              {data[3]?.runners[0]?.card?.length > 0 ? (
                <div className="flip-card-front">
                  <img src={`/cards/${data[3]?.runners[0]?.card[0]}.jpg`} />
                  {/* <!-- key0 runner2 card--> */}
                </div>
              ) : (
                <div className="flip-card-front">
                  <img src={one} />
                  {/*     <!-- key0 runner2 card--> */}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="casino-odds-box">
          <div className="flip-card">
            <div className="flip-card-inner">
              {data[4]?.runners[0]?.card?.length > 0 ? (
                <div className="flip-card-front">
                  <img src={`/cards/${data[4]?.runners[0]?.card[0]}.jpg`} />
                  {/* <!-- key0 runner2 card--> */}
                </div>
              ) : (
                <div className="flip-card-front">
                  <img src={one} />
                  {/*     <!-- key0 runner2 card--> */}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="casino-odds-box">
          <div className="flip-card">
            <div className="flip-card-inner">
              {data[5]?.runners[0]?.card?.length > 0 ? (
                <div className="flip-card-front">
                  <img src={`/cards/${data[5]?.runners[0]?.card[0]}.jpg`} />
                  {/* <!-- key0 runner2 card--> */}
                </div>
              ) : (
                <div className="flip-card-front">
                  <img src={one} />
                  {/*     <!-- key0 runner2 card--> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="casino-table-full-box d-none d-md-block">
        <div className="casino-table-header">
          <div className="casino-nation-detail"></div>
          <div className="casino-odds-box">1</div>
          <div className="casino-odds-box">2</div>
          <div className="casino-odds-box">3</div>
          <div className="casino-odds-box">4</div>
          <div className="casino-odds-box">5</div>
          <div className="casino-odds-box">6</div>
        </div>
        <div className="casino-table-body">
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">
                <span>Winner</span>
              </div>
            </div>

            {data?.slice(0, 6).map((game) =>
              game?.runners?.map((runner, i) => {
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
                        maxLiabilityPerMarket: game?.maxLiabilityPerMarket,
                        isBettable: game?.isBettable,
                        maxLiabilityPerBet: game?.maxLiabilityPerBet,
                      });
                    }}
                    key={i}
                    className={`casino-odds-box back  ${
                      game?.status === "OPEN" && runner?.status === "ACTIVE"
                        ? ""
                        : "suspended-box"
                    }`}
                  >
                    <span className="casino-odds">
                      {runner?.back[0]?.price}
                    </span>
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
              })
            )}
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">
                <span>Black</span>
                <span className="card-icon ms-1">
                  <span className="card-black"></span>
                </span>
                <span className="card-icon ms-1">
                  <span className="card-black"></span>
                </span>
              </div>
            </div>

            {data?.slice(6, 12).map((game) =>
              game?.runners?.slice(0, 1)?.map((runner, i) => {
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
                        maxLiabilityPerMarket: game?.maxLiabilityPerMarket,
                        isBettable: game?.isBettable,
                        maxLiabilityPerBet: game?.maxLiabilityPerBet,
                      });
                    }}
                    key={i}
                    className={`casino-odds-box back  ${
                      game?.status === "OPEN" && runner?.status === "ACTIVE"
                        ? ""
                        : "suspended-box"
                    }`}
                  >
                    <span className="casino-odds">
                      {runner?.back[0]?.price}
                    </span>
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
              })
            )}
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">
                <span>Red</span>
                <span className="card-icon ms-1">
                  <span className="card-red"></span>
                </span>
                <span className="card-icon ms-1">
                  <span className="card-red"></span>
                </span>
              </div>
            </div>

            {data?.slice(6, 12).map((game) =>
              game?.runners?.slice(1, 2)?.map((runner, i) => {
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
                        maxLiabilityPerMarket: game?.maxLiabilityPerMarket,
                        isBettable: game?.isBettable,
                        maxLiabilityPerBet: game?.maxLiabilityPerBet,
                      });
                    }}
                    key={i}
                    className={`casino-odds-box back  ${
                      game?.status === "OPEN" && runner?.status === "ACTIVE"
                        ? ""
                        : "suspended-box"
                    }`}
                  >
                    <span className="casino-odds">
                      {runner?.back[0]?.price}
                    </span>
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
              })
            )}
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">
                <span>Odds</span>
              </div>
            </div>

            {data?.slice(12, 18).map((game) =>
              game?.runners?.slice(0, 1)?.map((runner, i) => {
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
                        maxLiabilityPerMarket: game?.maxLiabilityPerMarket,
                        isBettable: game?.isBettable,
                        maxLiabilityPerBet: game?.maxLiabilityPerBet,
                      });
                    }}
                    key={i}
                    className={`casino-odds-box back  ${
                      game?.status === "OPEN" && runner?.status === "ACTIVE"
                        ? ""
                        : "suspended-box"
                    }`}
                  >
                    <span className="casino-odds">
                      {runner?.back[0]?.price}
                    </span>
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
              })
            )}
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">
                <span>Even</span>
              </div>
            </div>

            {data?.slice(12, 18).map((game) =>
              game?.runners?.slice(1, 2)?.map((runner, i) => {
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
                        maxLiabilityPerMarket: game?.maxLiabilityPerMarket,
                        isBettable: game?.isBettable,
                        maxLiabilityPerBet: game?.maxLiabilityPerBet,
                      });
                    }}
                    key={i}
                    className={`casino-odds-box back  ${
                      game?.status === "OPEN" && runner?.status === "ACTIVE"
                        ? ""
                        : "suspended-box"
                    }`}
                  >
                    <span className="casino-odds">
                      {runner?.back[0]?.price}
                    </span>
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
              })
            )}
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">
                <img src="/assets/spade.png" />
              </div>
            </div>
            {data?.slice(18, 24).map((game) =>
              game?.runners?.slice(0, 1)?.map((runner, i) => {
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
                        maxLiabilityPerMarket: game?.maxLiabilityPerMarket,
                        isBettable: game?.isBettable,
                        maxLiabilityPerBet: game?.maxLiabilityPerBet,
                      });
                    }}
                    key={i}
                    className={`casino-odds-box back  ${
                      game?.status === "OPEN" && runner?.status === "ACTIVE"
                        ? ""
                        : "suspended-box"
                    }`}
                  >
                    <span className="casino-odds">
                      {runner?.back[0]?.price}
                    </span>
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
              })
            )}
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">
                <img src="/assets/heart.png" />
              </div>
            </div>

            {data?.slice(18, 24).map((game) =>
              game?.runners?.slice(1, 2)?.map((runner, i) => {
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
                        maxLiabilityPerMarket: game?.maxLiabilityPerMarket,
                        isBettable: game?.isBettable,
                        maxLiabilityPerBet: game?.maxLiabilityPerBet,
                      });
                    }}
                    key={i}
                    className={`casino-odds-box back  ${
                      game?.status === "OPEN" && runner?.status === "ACTIVE"
                        ? ""
                        : "suspended-box"
                    }`}
                  >
                    <span className="casino-odds">
                      {runner?.back[0]?.price}
                    </span>
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
              })
            )}
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">
                <img src="/assets/club.png" />
              </div>
            </div>
            {data?.slice(18, 24).map((game) =>
              game?.runners?.slice(2, 3)?.map((runner, i) => {
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
                        maxLiabilityPerMarket: game?.maxLiabilityPerMarket,
                        isBettable: game?.isBettable,
                        maxLiabilityPerBet: game?.maxLiabilityPerBet,
                      });
                    }}
                    key={i}
                    className={`casino-odds-box back  ${
                      game?.status === "OPEN" && runner?.status === "ACTIVE"
                        ? ""
                        : "suspended-box"
                    }`}
                  >
                    <span className="casino-odds">
                      {runner?.back[0]?.price}
                    </span>
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
              })
            )}
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">
                <img src="/assets/diamond.png" />
              </div>
            </div>

            {data?.slice(18, 24).map((game) =>
              game?.runners?.slice(3, 4)?.map((runner, i) => {
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
                        maxLiabilityPerMarket: game?.maxLiabilityPerMarket,
                        isBettable: game?.isBettable,
                        maxLiabilityPerBet: game?.maxLiabilityPerBet,
                      });
                    }}
                    key={i}
                    className={`casino-odds-box back  ${
                      game?.status === "OPEN" && runner?.status === "ACTIVE"
                        ? ""
                        : "suspended-box"
                    }`}
                  >
                    <span className="casino-odds">
                      {runner?.back[0]?.price}
                    </span>
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
              })
            )}
          </div>
        </div>
      </div>
      {/* <div className="casino-table-full-box d-md-none">
        <ul className="menu-tabs d-xl-none nav nav-tabs" role="tablist">
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
              1
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
              2
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
              3
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              type="button"
              id="uncontrolled-tab-example-tab-3"
              role="tab"
              data-rr-ui-event-key="3"
              aria-controls="uncontrolled-tab-example-tabpane-3"
              aria-selected="false"
              tabIndex="-1"
              className="nav-link"
            >
              4
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              type="button"
              id="uncontrolled-tab-example-tab-4"
              role="tab"
              data-rr-ui-event-key="4"
              aria-controls="uncontrolled-tab-example-tabpane-4"
              aria-selected="false"
              tabIndex="-1"
              className="nav-link"
            >
              5
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              type="button"
              id="uncontrolled-tab-example-tab-5"
              role="tab"
              data-rr-ui-event-key="5"
              aria-controls="uncontrolled-tab-example-tabpane-5"
              aria-selected="false"
              tabIndex="-1"
              className="nav-link"
            >
              6
            </button>
          </li>
        </ul>
        <div className="tab-content">
          <div
            role="tabpanel"
            id="uncontrolled-tab-example-tabpane-0"
            aria-labelledby="uncontrolled-tab-example-tab-0"
            className="fade tab-pane active show"
          >
            <div className="casino-table-body">
              <div className="row row5">
                <div className="col-6">
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">Winner</div>
                      <div className="casino-nation-book text-danger">-100</div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <span>Black</span>
                        <span className="card-icon ms-1">
                          <span className="card-black"></span>
                        </span>
                        <span className="card-icon ms-1">
                          <span className="card-black"></span>
                        </span>
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <span>Red</span>
                        <span className="card-icon ms-1">
                          <span className="card-red"></span>
                        </span>
                        <span className="card-icon ms-1">
                          <span className="card-red"></span>
                        </span>
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">Odd</div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">Even</div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/spade.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/club.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/heart.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/diamond.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            role="tabpanel"
            id="uncontrolled-tab-example-tabpane-1"
            aria-labelledby="uncontrolled-tab-example-tab-1"
            className="fade tab-pane"
          >
            <div className="casino-table-body">
              <div className="row row5">
                <div className="col-6">
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">Winner</div>
                      <div className="casino-nation-book text-danger">-100</div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <span>Black</span>
                        <span className="card-icon ms-1">
                          <span className="card-black"></span>
                        </span>
                        <span className="card-icon ms-1">
                          <span className="card-black"></span>
                        </span>
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <span>Red</span>
                        <span className="card-icon ms-1">
                          <span className="card-red"></span>
                        </span>
                        <span className="card-icon ms-1">
                          <span className="card-red"></span>
                        </span>
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">Odd</div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">Even</div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/spade.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/club.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/heart.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/diamond.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            role="tabpanel"
            id="uncontrolled-tab-example-tabpane-2"
            aria-labelledby="uncontrolled-tab-example-tab-2"
            className="fade tab-pane"
          >
            <div className="casino-table-body">
              <div className="row row5">
                <div className="col-6">
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">Winner</div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <span>Black</span>
                        <span className="card-icon ms-1">
                          <span className="card-black"></span>
                        </span>
                        <span className="card-icon ms-1">
                          <span className="card-black"></span>
                        </span>
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <span>Red</span>
                        <span className="card-icon ms-1">
                          <span className="card-red"></span>
                        </span>
                        <span className="card-icon ms-1">
                          <span className="card-red">[</span>
                        </span>
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">Odd</div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">Even</div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/spade.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/club.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/heart.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/diamond.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            role="tabpanel"
            id="uncontrolled-tab-example-tabpane-3"
            aria-labelledby="uncontrolled-tab-example-tab-3"
            className="fade tab-pane"
          >
            <div className="casino-table-body">
              <div className="row row5">
                <div className="col-6">
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">Winner</div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <span>Black</span>
                        <span className="card-icon ms-1">
                          <span className="card-black"></span>
                        </span>
                        <span className="card-icon ms-1">
                          <span className="card-black"></span>
                        </span>
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <span>Red</span>
                        <span className="card-icon ms-1">
                          <span className="card-red"></span>
                        </span>
                        <span className="card-icon ms-1">
                          <span className="card-red">[</span>
                        </span>
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">Odd</div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">Even</div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/spade.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/club.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/heart.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/diamond.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            role="tabpanel"
            id="uncontrolled-tab-example-tabpane-4"
            aria-labelledby="uncontrolled-tab-example-tab-4"
            className="fade tab-pane"
          >
            <div className="casino-table-body">
              <div className="row row5">
                <div className="col-6">
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">Winner</div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <span>Black</span>
                        <span className="card-icon ms-1">
                          <span className="card-black"></span>
                        </span>
                        <span className="card-icon ms-1">
                          <span className="card-black">]</span>
                        </span>
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <span>Red</span>
                        <span className="card-icon ms-1">
                          <span className="card-red"></span>
                        </span>
                        <span className="card-icon ms-1">
                          <span className="card-red"></span>
                        </span>
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">Odd</div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">Even</div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/spade.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/club.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/heart.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/diamond.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            role="tabpanel"
            id="uncontrolled-tab-example-tabpane-5"
            aria-labelledby="uncontrolled-tab-example-tab-5"
            className="fade tab-pane"
          >
            <div className="casino-table-body">
              <div className="row row5">
                <div className="col-6">
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">Winner</div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <span>Black</span>
                        <span className="card-icon ms-1">
                          <span className="card-black"></span>
                        </span>
                        <span className="card-icon ms-1">
                          <span className="card-black">]</span>
                        </span>
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <span>Red</span>
                        <span className="card-icon ms-1">
                          <span className="card-red"></span>
                        </span>
                        <span className="card-icon ms-1">
                          <span className="card-red"></span>
                        </span>
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">Odd</div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">Even</div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/spade.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/club.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/heart.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">
                        <img src="static/front/img/icons/diamond.png" />
                      </div>
                    </div>
                    <div className="casino-odds-box back suspended-box">
                      <span className="casino-odds">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default WarGames;
