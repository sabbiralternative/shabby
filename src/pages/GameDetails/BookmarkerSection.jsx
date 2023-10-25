const BookmarkerSection = ({ bookmark, bookmarker }) => {
  return (
    <div className="game-market market-4 width70">
      <div className="market-title">
        <span>{bookmarker[0].btype}</span>
      </div>
      <div className="market-header">
        <div className="market-nation-detail">
          <span className="market-nation-name">
            Max: {bookmark?.maxLiabilityPerBet}
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
      <div className="market-body">
        <div
          className={`${
            bookmark.status === "OPEN" && bookmark?.runners[0].status === "OPEN"
              ? "market-row"
              : " market-row suspended-row"
          }`}
          data-title={`${
            bookmark.status === "OPEN" && bookmark?.runners[0].status === "OPEN"
              ? "ACTIVATE"
              : "SUSPENDED"
          }`}
        >
          <div className="market-nation-detail">
            <span className="market-nation-name">
              {bookmark?.runners[0]?.name}
            </span>
            <div className="market-nation-book"></div>
          </div>
          <div className="market-odd-box back2">
            {bookmark?.runners[0]?.back[2]?.price ||
            bookmark?.runners[0]?.back[2]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark?.runners[0]?.back[2]?.price}
                </span>
                <span className="market-volume">
                  {bookmark?.runners[0]?.back[2]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box back1">
            {bookmark?.runners[0]?.back[1]?.price ||
            bookmark?.runners[0]?.back[1]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark?.runners[0]?.back[1]?.price}
                </span>
                <span className="market-volume">
                  {bookmark?.runners[0]?.back[1]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box back">
            {bookmark?.runners[0]?.back[0]?.price ||
            bookmark?.runners[0]?.back[0]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark?.runners[0]?.back[0]?.price}
                </span>
                <span className="market-volume">
                  {bookmark?.runners[0]?.back[0]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box lay">
            {bookmark?.runners[0]?.lay[0]?.price ||
            bookmark?.runners[0]?.lay[0]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark?.runners[0]?.lay[0]?.price}
                </span>
                <span className="market-volume">
                  {bookmark?.runners[0]?.lay[0]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box lay1">
            {bookmark?.runners[0]?.lay[1]?.price ||
            bookmark?.runners[0]?.lay[1]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark?.runners[0]?.lay[1]?.price}
                </span>
                <span className="market-volume">
                  {bookmark?.runners[0]?.lay[1]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box lay2">
            {bookmark?.runners[0]?.lay[2]?.price ||
            bookmark?.runners[0]?.lay[2]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark?.runners[0]?.lay[2]?.price}
                </span>
                <span className="market-volume">
                  {bookmark?.runners[0]?.lay[2]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
        </div>

        <div
          className={`${
            bookmark.status === "OPEN" && bookmark?.runners[1].status === "OPEN"
              ? "market-row"
              : " market-row suspended-row"
          }`}
          data-title={`${
            bookmark.status === "OPEN" && bookmark?.runners[1].status === "OPEN"
              ? "ACTIVATE"
              : "SUSPENDED"
          }`}
        >
          <div className="market-nation-detail">
            <span className="market-nation-name">
              {bookmark?.runners[1]?.name}
            </span>
            <div className="market-nation-book"></div>
          </div>

          <div className="market-odd-box back2">
            {bookmark?.runners[1]?.back[2]?.price ||
            bookmark?.runners[1]?.back[2]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark?.runners[1]?.back[2]?.price}
                </span>
                <span className="market-volume">
                  {bookmark?.runners[1]?.back[2]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box back1">
            {bookmark?.runners[1]?.back[1]?.price ||
            bookmark?.runners[1]?.back[1]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark?.runners[1]?.back[1]?.price}
                </span>
                <span className="market-volume">
                  {bookmark?.runners[1]?.back[1]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box back">
            {bookmark?.runners[1]?.back[0]?.price ||
            bookmark?.runners[1]?.back[0]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark?.runners[1]?.back[0]?.price}
                </span>
                <span className="market-volume">
                  {bookmark?.runners[1]?.back[0]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box lay">
            {bookmark?.runners[1]?.lay[0]?.price ||
            bookmark?.runners[1]?.lay[0]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark?.runners[1]?.lay[0]?.price}
                </span>
                <span className="market-volume">
                  {bookmark?.runners[1]?.lay[0]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box lay1">
            {bookmark?.runners[1]?.lay[1]?.price ||
            bookmark?.runners[1]?.lay[1]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark?.runners[1]?.lay[1]?.price}
                </span>
                <span className="market-volume">
                  {bookmark?.runners[1]?.lay[1]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box lay2">
            {bookmark?.runners[1]?.lay[2]?.price ||
            bookmark?.runners[1]?.lay[2]?.size ? (
              <>
                <span className="market-odd">
                  {bookmark?.runners[1]?.lay[2]?.price}
                </span>
                <span className="market-volume">
                  {bookmark?.runners[1]?.lay[2]?.size}
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
              Assembly Election 2023 Bets Started In Our&nbsp;Exchange
            </marquee>
          </div> */}
    </div>
  );
};

export default BookmarkerSection;
