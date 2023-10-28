const BookmarkerTwoSection = ({ bookmarker2 }) => {
  return (
    <>
      <div className="game-market market-2">
        <div className="market-title">
          <span>{bookmarker2[0]?.btype}</span>
        </div>
        <div className="market-header">
          <div className="market-nation-detail">
            <span className="market-nation-name">
              Max: {bookmarker2[0]?.maxLiabilityPerBet}
            </span>
          </div>
          {/* <div className="market-odd-box no-border d-none d-md-block"></div>
          <div className="market-odd-box no-border d-none d-md-block"></div> */}
          <div className="market-odd-box back">
            <b>Back</b>
          </div>
          <div className="market-odd-box lay">
            <b>Lay</b>
          </div>
          {/* <div className="market-odd-box"></div>
          <div className="market-odd-box no-border"></div> */}
        </div>

        <div className="market-body">
          {bookmarker2[0]?.runners?.map((runner) => {
            return (
              <div
                key={runner.id}
                className={`${
                  runner.status === "OPEN"
                    ? "market-row"
                    : " market-row suspended-row"
                }`}
                data-title={`${
                  runner.status === "OPEN" ? "ACTIVATE" : "SUSPENDED"
                }`}
              >
                <div className="market-nation-detail">
                  <span className="market-nation-name">{runner.name} </span>
                  <div className="market-nation-book"></div>
                </div>
                {
                  runner?.back?.slice().reverse().map( (back,i) => {
                   return(
                    <div key={i} className={`market-odd-box ${i === 0 ? 'back2': ''} ${i === 1 ? 'back1': ''} ${i === 2 ? 'back': ''}`}>
                    {back?.price ||
                   back?.size ? (
                      <>
                        <span className="market-odd">
                          {back?.price}
                        </span>
                        <span className="market-volume">
                          {back?.size}
                        </span>
                      </>
                    ) : (
                      <span className="market-odd">-</span>
                    )}
                  </div>
                   )
                  })
                }


                {
                  runner?.lay?.map( (lay,i) => {
                   return(
                    <div key={i} className={`market-odd-box ${i === 0 ? 'lay': ''} ${i === 1 ? 'lay1': ''} ${i === 2 ? 'lay2': ''}`}>
                    {lay?.price ||
                   lay?.size ? (
                      <>
                        <span className="market-odd">
                          {lay?.price}
                        </span>
                        <span className="market-volume">
                          {lay?.size}
                        </span>
                      </>
                    ) : (
                      <span className="market-odd">-</span>
                    )}
                  </div>
                   )
                  })
                }

              </div>
            );
          })}

        </div>
      </div>
    </>
  );
};

export default BookmarkerTwoSection;
