const BookmarkerTwoSection = ({ bookmark2, bookmarker2 }) => {
  return (
    <div key={bookmark2.id} className="game-market market-4 width70">
      <div className="market-title">
        <span>{bookmarker2[0]?.name}</span>
      </div>
      <div className="market-header">
        <div className="market-nation-detail">
          <span className="market-nation-name">
            Max: {bookmarker2[0]?.maxLiabilityPerBet}
          </span>
        </div>
        <div className="market-odd-box no-border d-none d-md-block"></div>
        <div className="market-odd-box no-border d-none d-md-block"></div>
        <div className="market-odd-box back">
          <b>Back</b>
        </div>
        <div className="market-odd-box lay">
          <b>Lay</b>
        </div>
        <div className="market-odd-box"></div>
        <div className="market-odd-box no-border"></div>
      </div>
      <div className="market-body" data-title="SUSPENDED">
        <div
          className={`${
            bookmark2.status === "OPEN" &&
            bookmark2?.runners[0].status === "OPEN"
              ? "market-row"
              : " market-row suspended-row "
          }`}
          data-title={`${
            bookmark2.status === "OPEN" &&
            bookmark2?.runners[0].status === "OPEN"
              ? "ACTIVATE"
              : "SUSPENDED"
          }`}
        >
          <div className="market-nation-detail">
            <span className="market-nation-name">
              {bookmark2?.runners[0]?.name}
            </span>
            <div className="market-nation-book"></div>
          </div>
          <div className="market-odd-box back2">
            {bookmark2?.runners[0]?.back[2]?.price ||
            bookmark2?.runners[0]?.back[2]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark2?.runners[0]?.back[2]?.price}
                </span>
                <span className="market-volume">
                  {bookmark2?.runners[0]?.back[2]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>

          <div className="market-odd-box back1">
            {bookmark2?.runners[0]?.back[1]?.price ||
            bookmark2?.runners[0]?.back[1]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark2?.runners[0]?.back[1]?.price}
                </span>
                <span className="market-volume">
                  {bookmark2?.runners[0]?.back[1]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box back">
            {bookmark2?.runners[0]?.back[0]?.price ||
            bookmark2?.runners[0]?.back[0]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark2?.runners[0]?.back[0]?.price}
                </span>
                <span className="market-volume">
                  {bookmark2?.runners[0]?.back[0]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
        </div>

        <div
          className={`${
            bookmark2.status === "OPEN" &&
            bookmark2?.runners[1].status === "OPEN"
              ? "market-row"
              : " market-row suspended-row "
          }`}
          data-title={`${
            bookmark2.status === "OPEN" &&
            bookmark2?.runners[1].status === "OPEN"
              ? "ACTIVATE"
              : "SUSPENDED"
          }`}
        >
          <div className="market-nation-detail">
            <span className="market-nation-name">
              {" "}
              {bookmark2?.runners[1]?.name}
            </span>
            <div className="market-nation-book"></div>
          </div>
          <div className="market-odd-box back2">
            {bookmark2?.runners[1]?.back[2]?.price ||
            bookmark2?.runners[1]?.back[2]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark2?.runners[1]?.back[2]?.price}
                </span>
                <span className="market-volume">
                  {bookmark2?.runners[1]?.back[2]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box back1">
            {bookmark2?.runners[1]?.back[1]?.price ||
            bookmark2?.runners[1]?.back[1]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark2?.runners[1]?.back[1]?.price}
                </span>
                <span className="market-volume">
                  {bookmark2?.runners[1]?.back[1]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box back">
            {bookmark2?.runners[1]?.back[0]?.price ||
            bookmark2?.runners[1]?.back[0]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark2?.runners[1]?.back[0]?.price}
                </span>
                <span className="market-volume">
                  {bookmark2?.runners[1]?.back[0]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box lay">
            {bookmark2?.runners[1]?.lay[0]?.price ||
            bookmark2?.runners[1]?.lay[0]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark2?.runners[1]?.lay[0]?.price}
                </span>
                <span className="market-volume">
                  {bookmark2?.runners[1]?.lay[0]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box lay1">
            {bookmark2?.runners[1]?.lay[1]?.price ||
            bookmark2?.runners[1]?.lay[1]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark2?.runners[1]?.lay[1]?.price}
                </span>
                <span className="market-volume">
                  {bookmark2?.runners[1]?.lay[1]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box lay2">
            {bookmark2?.runners[1]?.lay[2]?.price ||
            bookmark2?.runners[1]?.lay[2]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark2?.runners[1]?.lay[2]?.price}
                </span>
                <span className="market-volume">
                  {bookmark2?.runners[1]?.lay[2]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
        </div>
      </div>
      {/* <div className="market-row">
        <marquee className="market-remark">
          DP World Lions vs Titans Match Bet Started In Our Exchange
        </marquee>
      </div> */}
    </div>
  );
};

export default BookmarkerTwoSection;
