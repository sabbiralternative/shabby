const OneCardOneDay = ({data,setShowBets,setPlaceBetValue,lowExposure,highExposure,evenExposure, oddExposure,redExposure,blackExposure}) => {
    return (
        <div className="casino-table">
        <div className="casino-table-box">
          <div className="casino-table-left-box">
            <div className="casino-table-body">
            <div className="casino-table-row ">
                <div className="casino-nation-detail">
                  <div className="casino-nation-name">Player</div>
                  <div className="casino-nation-book text-success">
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
                    });
                  }}
                className={`casino-odds-box back ${
                    data[0]?.status === "OPEN" &&
                    data[0]?.runners[0]?.status === "OPEN"
                      ? ""
                      : " suspended-box"
                  }`}>
                  {/*  <!-- key0 >> status --> */}
                  <span className="casino-odds"> {data[0]?.runners[0]?.back[0]?.price}</span>
                </div>
                {/*   <!-- key0 >> runner0 >> back >> price --> */}


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
                className={`casino-odds-box lay ${
                    data[0]?.status === "OPEN" &&
                    data[0]?.runners[0]?.status === "OPEN"
                      ? ""
                      : " suspended-box"
                  }`}>
                  {/*   <!-- key0 >> status --> */}
                  <span className="casino-odds">{data[0]?.runners[0]?.lay[0]?.price}</span>
                </div>
                {/*    <!-- key0 >> runner0 >> lay >> price --> */}
              </div>
            </div>
          </div>
          <div className="casino-table-box-divider"></div>
          <div className="casino-table-right-box">
            <div className="casino-table-body">
              <div className="casino-table-row ">
                <div className="casino-nation-detail">
                  <div className="casino-nation-name">Dealer</div>
                  <div className="casino-nation-book text-success">
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
                    });
                  }}
                className={`casino-odds-box back ${
              data[0]?.status === "OPEN" &&
              data[0]?.runners[1]?.status === "OPEN"
                ? ""
                : " suspended-box"
            }`}>
                  {/*   <!-- key0 >> status --> */}
                  <span className="casino-odds"> {data[0]?.runners[1]?.back[0]?.price}</span>
                </div>
                {/* <!-- key0 >> runner1 >> back >> price --> */}
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
                className={`casino-odds-box lay ${
                    data[0]?.status === "OPEN" &&
                    data[0]?.runners[1]?.status === "OPEN"
                      ? ""
                      : " suspended-box"
                  }`}>
                  {/* <!-- key0 >> status --> */}
                  <span className="casino-odds">{data[0]?.runners[1]?.lay[0]?.price}</span>
                </div>
                {/*  <!-- key0 >> runner1 >> lay >> price --> */}
              </div>
            </div>
          </div>
        </div>
        <div className="casino-table-box mt-3 sevenupbox">
          <div className="casino-table-left-box">
            <h4 className="d-md-none mb-2">Player</h4>
            <div className="seven-up-down-box">
              <div
               style={{cursor:'pointer'}}
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
              className={`up-box ${
                data[1]?.status === "OPEN" &&
                data[1]?.runners[0]?.status === "OPEN"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*  <!-- key1 >> status --> */}
                <div className="up-down-book">
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
                <div className="text-end">
                  <div className="up-down-odds"> {data[1]?.runners[0]?.back[0]?.price}</div>
                  <span>DOWN</span>
                  {/*   <!-- key1 >> runner0 >> back >> price --> */}
                </div>
              </div>



              <div
              style={{cursor:'pointer'}}
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
              className={`down-box ${
                data[1]?.status === "OPEN" &&
                data[1]?.runners[1]?.status === "OPEN"
                  ? ""
                  : " suspended-box"
              }`}>
                {/* <!-- key1 >> status --> */}
                <div className="up-down-book">
                <span
                className={`${
                  oddExposure &&  oddExposure[0]?.pnl < 0
                    ? "text-danger"
                    : "text-success"
                }`}
              >
                { oddExposure ?  oddExposure[0]?.pnl : null}
              </span>
                </div>
                <div className="text-start">
                  <div className="up-down-odds">{data[1]?.runners[1]?.back[0]?.price}</div>
                  <span>UP</span>
                  {/*    <!-- key1 >> runner1 >> back >> price --> */}
                </div>
              </div>
              <div className="seven-box">
              <img src="/public/cards/trape-seven.png" />
              </div>
            </div>
          </div>
          <div className="casino-table-box-divider"></div>

          <div className="casino-table-left-box">
            <h4 className="d-md-none mb-2">Dealer</h4>
            <div
             style={{cursor:'pointer'}}
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
            className="seven-up-down-box">
              <div className={`up-box ${
                data[2]?.status === "OPEN" &&
                data[2]?.runners[0]?.status === "OPEN"
                  ? ""
                  : " suspended-box"
              }`}>
                {/*  <!-- key2 >> status --> */}
                <div className="up-down-book">
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
                <div className="text-end">
                  <div className="up-down-odds">{data[2]?.runners[0]?.back[0]?.price}</div>
                  <span>DOWN</span>
                  {/*      <!-- key2 >> runner0 >> back >> price --> */}
                </div>
              </div>
              <div
                style={{cursor:'pointer'}}
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
              className={`down-box ${
                data[2]?.status === "OPEN" &&
                data[2]?.runners[1]?.status === "OPEN"
                  ? ""
                  : " suspended-box"
              }`}>
                {/* *<!-- key2 >> status -->  */}
                <div className="up-down-book">
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
                <div className="text-start">
                  <div className="up-down-odds">{data[2]?.runners[1]?.back[0]?.price}</div>
                  <span>UP</span>
                  {/*   <!-- key2 >> runner1 >> back >> price --> */}
                </div>
              </div>
              <div className="seven-box">
                <img src="/public/cards/trape-seven.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OneCardOneDay;