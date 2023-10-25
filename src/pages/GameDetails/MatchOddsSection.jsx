const MatchOddsSection = ({ match_odd, match_odds }) => {
  return (
    <div className="game-market market-4">
      <div className="market-title">
        <span>{match_odds[0]?.btype}</span>
      </div>
      <div className="market-header">
        <div className="market-nation-detail">
          <span className="market-nation-name">
            Max: {match_odd?.maxLiabilityPerBet}
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
            match_odd.status === "OPEN" &&
            match_odd?.runners[0].status === "OPEN"
              ? "market-row"
              : " market-row suspended-row"
          }`}
          data-title={`${
            match_odd.status === "OPEN" &&
            match_odd?.runners[0].status === "OPEN"
              ? "ACTIVATE"
              : "SUSPENDED"
          }`}
        >
          <div className="market-nation-detail">
            <span className="market-nation-name">
              {match_odd?.runners[0]?.name}{" "}
            </span>
            <div className="market-nation-book"></div>
          </div>
          <div className="market-odd-box back2">
            {match_odd.runners[0]?.back[2]?.price ||
            match_odd.runners[0]?.back[2]?.size ? (
              <>
                <span className="market-odd">
                  {match_odd.runners[0]?.back[2]?.price}
                </span>
                <span className="market-volume">
                  {match_odd.runners[0]?.back[2]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box back1">
            {match_odd.runners[0]?.back[1]?.price ||
            match_odd.runners[0]?.back[1]?.size ? (
              <>
                <span className="market-odd">
                  {match_odd.runners[0]?.back[1]?.price}
                </span>
                <span className="market-volume">
                  {match_odd.runners[0]?.back[1]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box back">
            {match_odd.runners[0]?.back[0]?.price ||
            match_odd.runners[0]?.back[0]?.size ? (
              <>
                <span className="market-odd">
                  {match_odd.runners[0]?.back[0]?.price}
                </span>
                <span className="market-volume">
                  {match_odd.runners[0]?.back[0]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box lay">
            {match_odd.runners[0]?.lay[0]?.price ||
            match_odd.runners[0]?.lay[0]?.size ? (
              <>
                <span className="market-odd">
                  {match_odd.runners[0]?.lay[0]?.price}
                </span>
                <span className="market-volume">
                  {match_odd.runners[0]?.lay[0]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box lay1">
            {match_odd.runners[0]?.lay[1]?.price ||
            match_odd.runners[0]?.lay[1]?.size ? (
              <>
                <span className="market-odd">
                  {match_odd.runners[0]?.lay[1]?.price}
                </span>
                <span className="market-volume">
                  {match_odd.runners[0]?.lay[1]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box lay2">
            {match_odd.runners[0]?.lay[2]?.price ||
            match_odd.runners[0]?.lay[2]?.size ? (
              <>
                <span className="market-odd">
                  {match_odd.runners[0]?.lay[2]?.price}
                </span>
                <span className="market-volume">
                  {match_odd.runners[0]?.lay[2]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
        </div>
        <div
          className={`${
            match_odd.status === "OPEN" &&
            match_odd?.runners[1].status === "OPEN"
              ? "market-row"
              : " market-row suspended-row"
          }`}
          data-title={`${
            match_odd.status === "OPEN" &&
            match_odd?.runners[1].status === "OPEN"
              ? "ACTIVATE"
              : "SUSPENDED"
          }`}
        >
          <div className="market-nation-detail">
            <span className="market-nation-name">
              {match_odd?.runners[1]?.name}
            </span>
            <div className="market-nation-book"></div>
          </div>
          <div className="market-odd-box back2">
            {match_odd.runners[1]?.back[2]?.price ||
            match_odd.runners[1]?.back[2]?.size ? (
              <>
                <span className="market-odd">
                  {match_odd.runners[1]?.back[2]?.price}
                </span>
                <span className="market-volume">
                  {match_odd.runners[1]?.back[2]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box back1">
            {match_odd.runners[1]?.back[1]?.price ||
            match_odd.runners[1]?.back[1]?.size ? (
              <>
                <span className="market-odd">
                  {match_odd.runners[1]?.back[1]?.price}
                </span>
                <span className="market-volume">
                  {match_odd.runners[1]?.back[1]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box back">
            {match_odd.runners[1]?.back[0]?.price ||
            match_odd.runners[1]?.back[0]?.size ? (
              <>
                <span className="market-odd">
                  {match_odd.runners[1]?.back[0]?.price}
                </span>
                <span className="market-volume">
                  {match_odd.runners[1]?.back[0]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box lay">
            {match_odd.runners[1]?.lay[0]?.price ||
            match_odd.runners[1]?.lay[0]?.size ? (
              <>
                <span className="market-odd">
                  {match_odd.runners[1]?.lay[0]?.price}
                </span>
                <span className="market-volume">
                  {match_odd.runners[1]?.lay[0]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box lay1">
            {match_odd.runners[1]?.lay[1]?.price ||
            match_odd.runners[1]?.lay[1]?.size ? (
              <>
                <span className="market-odd">
                  {match_odd.runners[1]?.lay[1]?.price}
                </span>
                <span className="market-volume">
                  {match_odd.runners[1]?.lay[1]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
          <div className="market-odd-box lay2">
            {match_odd.runners[1]?.lay[2]?.price ||
            match_odd.runners[1]?.lay[2]?.size ? (
              <>
                <span className="market-odd">
                  {match_odd.runners[1]?.lay[2]?.price}
                </span>
                <span className="market-volume">
                  {match_odd.runners[1]?.lay[2]?.size}
                </span>
              </>
            ) : (
              <span className="market-odd">-</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchOddsSection;
