const TopQueenTeenPatti = ({
  data,
  setPlaceBetValue,
  setShowBets,
  lowExposure,
  highExposure,
  evenExposure,
  redExposure,
}) => {
  return (
    <div className="casino-detail">
      <div className="casino-table">
        <div className="casino-table-box">
          <div className="casino-table-left-box">
            <div className="casino-table-header">
              <div className="casino-nation-detail">Player A</div>
              <div className="casino-odds-box back">Back</div>
              <div className="casino-odds-box lay">Lay</div>
            </div>
            <div className="casino-table-body">
              <div className="casino-table-row ">
                <div className="casino-nation-detail">
                  <div className="casino-nation-name">Main</div>
                  <div className="casino-nation-book text-success">
                    {" "}
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
                  <span className="casino-odds">
                    {" "}
                    {data[0]?.runners[0]?.back[0]?.price}
                  </span>
                </div>
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
                      maxLiabilityPerMarket: data[0]?.maxLiabilityPerMarket,
                      isBettable: data[0]?.isBettable,
                      maxLiabilityPerBet: data[0]?.maxLiabilityPerBet,
                    });
                  }}
                  className={`casino-odds-box lay ${
                    data[0]?.status === "OPEN" ? "" : " suspended-box"
                  }`}
                >
                  <span className="casino-odds">
                    {" "}
                    {data[0]?.runners[0]?.lay[0]?.price}
                  </span>
                </div>
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
              <div className="casino-table-row">
                <div className="casino-nation-detail">
                  <div className="casino-nation-name">Main</div>
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
                <div
                  className={`casino-odds-box back ${
                    data[0]?.status === "OPEN" ? "" : " suspended-box"
                  }`}
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
                      maxLiabilityPerMarket: data[0]?.maxLiabilityPerMarket,
                      isBettable: data[0]?.isBettable,
                      maxLiabilityPerBet: data[0]?.maxLiabilityPerBet,
                    });
                  }}
                >
                  <span className="casino-odds">
                    {" "}
                    {data[0]?.runners[1]?.back[0]?.price}{" "}
                  </span>
                </div>
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
                      maxLiabilityPerMarket: data[0]?.maxLiabilityPerMarket,
                      isBettable: data[0]?.isBettable,
                      maxLiabilityPerBet: data[0]?.maxLiabilityPerBet,
                    });
                  }}
                  className={`casino-odds-box lay ${
                    data[0]?.status === "OPEN" ? "" : " suspended-box"
                  }`}
                >
                  <span className="casino-odds">
                    {" "}
                    {data[0]?.runners[1]?.lay[0]?.price}
                  </span>
                </div>
              </div>
              <div className="casino-table-row under-over-row">
                <div className="uo-box">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">Player B Under 21</div>
                    <div className="casino-nation-book text-danger">
                      {" "}
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
                    <span className="casino-odds">
                      {data[1]?.runners[0]?.back[0]?.price}{" "}
                    </span>
                  </div>
                </div>
                <div className="uo-box">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">Player B Over 21</div>
                    <div className="casino-nation-book text-danger">
                      {" "}
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
                    <span className="casino-odds">
                      {data[2]?.runners[0]?.back[0]?.price}{" "}
                    </span>
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

export default TopQueenTeenPatti;
