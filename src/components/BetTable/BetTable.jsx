import ic_vir from "../../static/front/img/ic_vir.png";
import ic_bm from "../../static/front/img/ic_bm.png";
import ic_fancy from "../../static/front/img/ic_fancy.png";
import game_icon from "../../static/front/img/game-icon.svg";
import UseState from "../../hooks/UseState";
const BetTable = ({ data }) => {
  const { sports } = UseState();
  const {
    eventName,
    date,
    inPlay,
    isBookmaker,
    isFancy,
    isGaming,
    isTv,
    isVirtual,
    status,
  } = data;

  return (
    <>
      <div className="bet-table-row">
        <div className="bet-nation-name">
          <a className="bet-nation-game-name" href="/game-details/4/822593513">
            <span>{eventName}</span>
            <span className="d-none d-md-inline-block">&nbsp;/&nbsp;</span>
            <span>{date}</span>
          </a>
          <div className="game-icons">
            {inPlay === 1 ? (
              <div className="game-icon">
                <span className="active"></span>
              </div>
            ) : (
              <div className="game-icon"></div>
            )}

            {isTv === 1 ? (
              <div className="game-icon">
                <i className="fas fa-tv icon-tv"></i>
              </div>
            ) : (
              <div className="game-icon"></div>
            )}
            {isFancy === 1 ? (
              <div className="game-icon">
                <img src={ic_fancy} />
              </div>
            ) : (
              <div className="game-icon"></div>
            )}
            {isBookmaker === 1 ? (
              <div className="game-icon">
                <img src={ic_bm} />
              </div>
            ) : (
              <div className="game-icon"></div>
            )}
            {isVirtual === 1 ? (
              <div className="game-icon">
                <img src={ic_vir} />
              </div>
            ) : (
              <div className="game-icon"></div>
            )}
            {isGaming === 1 ? (
              <div className="game-icon">
                <img src={game_icon} />
              </div>
            ) : (
              <div className="game-icon"></div>
            )}
          </div>
        </div>

        <div className="bet-nation-odd d-xl-none">
          <b>1</b>
        </div>
        <div className="bet-nation-odd d-xl-none">
          <b>X</b>
        </div>
        <div className="bet-nation-odd d-xl-none">
          <b>2</b>
        </div>

        {status === "OPEN" ? (
          <div className="bet-nation-odd">
            <div className="back odd-box">
              <span className="bet-odd">
                <b>{data?.[0]?.ex?.availableToBack[0]?.price}</b>
              </span>
            </div>

            <div className="lay odd-box">
              <span className="bet-odd">
                <b>{data?.[0]?.ex?.availableToLay[0]?.price}</b>
              </span>
            </div>
          </div>
        ) : (
          <div className="bet-nation-odd suspended-box">
            <div className="back odd-box">
              <span className="bet-odd">
                <b>{data?.[0]?.ex?.availableToBack[0]?.price}</b>
              </span>
            </div>

            <div className="lay odd-box ">
              <span className="bet-odd">
                <b>{data?.[0]?.ex?.availableToLay[0]?.price}</b>
              </span>
            </div>
          </div>
        )}

        {!data[2] && sports !== 1 && (
          <div className="bet-nation-odd">
            <div className="back odd-box">
              <span className="bet-odd">
                <b>-</b>
              </span>
            </div>
            <div className="lay odd-box">
              <span className="bet-odd">
                <b>-</b>
              </span>
            </div>
          </div>
        )}

        {status === "OPEN" && data[2] && (
          <div className="bet-nation-odd">
            <div className="back odd-box">
              <span className="bet-odd">
                <b>{data?.[1]?.ex?.availableToBack[0]?.price}</b>
              </span>
            </div>
            <div className="lay odd-box">
              <span className="bet-odd">
                <b>{data?.[1]?.ex?.availableToLay[0]?.price}</b>
              </span>
            </div>
          </div>
        )}

        {status === "SUSPENDED" && !data[2] && sports === 1 && (
          <div className="bet-nation-odd suspended-box">
            <div className="back odd-box">
              <span className="bet-odd">
                <b>{data?.[1]?.ex?.availableToBack[0]?.price}</b>
              </span>
            </div>
            <div className="lay odd-box ">
              <span className="bet-odd">
                <b>{data?.[1]?.ex?.availableToLay[0]?.price}</b>
              </span>
            </div>
          </div>
        )}

        {status === "OPEN" ? (
          <div className="bet-nation-odd">
            <div className="back odd-box">
              <span className="bet-odd">
                <b>{data?.[1]?.ex?.availableToBack[0]?.price}</b>
              </span>
            </div>
            <div className="lay odd-box">
              <span className="bet-odd">
                <b>{data?.[1]?.ex?.availableToLay[0]?.price}</b>
              </span>
            </div>
          </div>
        ) : (
          <div className="bet-nation-odd suspended-box">
            <div className="back odd-box">
              <span className="bet-odd">
                <b>{data?.[1]?.ex?.availableToBack[0]?.price}</b>
              </span>
            </div>
            <div className="lay odd-box ">
              <span className="bet-odd">
                <b>{data?.[1]?.ex?.availableToLay[0]?.price}</b>
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BetTable;
