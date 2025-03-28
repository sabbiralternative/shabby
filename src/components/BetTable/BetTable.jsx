import ic_vir from "../../static/front/img/ic_vir.png";
import ic_bm from "../../static/front/img/ic_bm.png";
import ic_fancy from "../../static/front/img/ic_fancy.png";
import game_icon from "../../static/front/img/game-icon.svg";
import UseState from "../../hooks/UseState";
import { useNavigate } from "react-router-dom";
import { PiTelevisionBold } from "react-icons/pi";

const BetTable = ({ data, keys }) => {
  /* get sports number */
  const { sports } = UseState();
  const navigate = useNavigate();
  /* navigate to game-details page */
  const navigateGameList = (keys) => {
    navigate(`/game-details/${data[keys]?.eventTypeId}/${keys}`);
  };

  return (
    <>
      <div className="bet-table-row">
        <div className="bet-nation-name">
          <div
            onClick={() => navigateGameList(keys)}
            style={{
              cursor: "pointer",
            }}
            className="bet-nation-game-name"
          >
            <span>{data[keys]?.eventName}</span>
            <span className="d-none d-md-inline-block">&nbsp;/&nbsp;</span>
            <span>{data[keys]?.date}</span>
          </div>
          <div className="game-icons">
            {data[keys]?.inPlay === 1 ? (
              <div className="game-icon">
                <span className="active"></span>
              </div>
            ) : (
              <div className="game-icon"></div>
            )}

            {data[keys]?.isTv === 1 ? (
              <div className="game-icon">
                <PiTelevisionBold size={17} />
                {/* <i className="fas fa-tv icon-tv"></i> */}
              </div>
            ) : (
              <div className="game-icon"></div>
            )}
            {data[keys]?.isFancy === 1 ? (
              <div className="game-icon">
                <img src={ic_fancy} />
              </div>
            ) : (
              <div className="game-icon"></div>
            )}
            {data[keys]?.isBookmaker === 1 ? (
              <div className="game-icon">
                <img src={ic_bm} />
              </div>
            ) : (
              <div className="game-icon"></div>
            )}
            {data[keys]?.isVirtual === 1 ? (
              <div className="game-icon">
                <img src={ic_vir} />
              </div>
            ) : (
              <div className="game-icon"></div>
            )}
            {data[keys]?.isGaming === 1 ? (
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

        {/* Data 0 */}
        {data[keys]?.status === "OPEN" && data[keys][0] ? (
          <div className="bet-nation-odd">
            <div className="back odd-box">
              <span className="bet-odd">
                <b>{data[keys]?.[0]?.ex?.availableToBack[0]?.price ?? "-"}</b>
              </span>
            </div>
            <div className="lay odd-box">
              <span className="bet-odd">
                <b>{data[keys]?.[0]?.ex?.availableToLay[0]?.price ?? "-"}</b>
              </span>
            </div>
          </div>
        ) : (
          <div className="bet-nation-odd suspended-box">
            <div className="back odd-box">
              <span className="bet-odd">
                <b>{data[keys]?.[0]?.ex?.availableToBack[0]?.price ?? "-"}</b>
              </span>
            </div>
            <div className="lay odd-box ">
              <span className="bet-odd">
                <b>{data[keys]?.[0]?.ex?.availableToLay[0]?.price ?? "-"}</b>
              </span>
            </div>
          </div>
        )}
        {/* Data 0 */}

        {/* Data 2 */}
        {data[keys]?.status === "OPEN" && data[keys][2] && (
          <div className="bet-nation-odd">
            <div className="back odd-box">
              <span className="bet-odd">
                <b>{data[keys]?.[2]?.ex?.availableToBack[0]?.price ?? "-"}</b>
              </span>
            </div>
            <div className="lay odd-box">
              <span className="bet-odd">
                <b>{data[keys]?.[2]?.ex?.availableToLay[0]?.price ?? "-"}</b>
              </span>
            </div>
          </div>
        )}
        {data[keys]?.status === "SUSPENDED" && data[keys][2] && (
          <div className="bet-nation-odd suspended-box">
            <div className="back odd-box">
              <span className="bet-odd">
                <b>{data[keys]?.[2]?.ex?.availableToBack[0]?.price ?? "-"}</b>
              </span>
            </div>
            <div className="lay odd-box ">
              <span className="bet-odd">
                <b>{data[keys]?.[2]?.ex?.availableToLay[0]?.price ?? "-"}</b>
              </span>
            </div>
          </div>
        )}

        {!data[keys][2] && (
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
        {/* Data 2 */}

        {/* Data 1 */}
        {data[keys]?.status === "OPEN" &&
        data[keys][1] &&
        (sports || sports === 0) ? (
          <div className="bet-nation-odd">
            <div className="back odd-box">
              <span className="bet-odd">
                <b>{data[keys]?.[1]?.ex?.availableToBack[0]?.price ?? "-"}</b>
              </span>
            </div>
            <div className="lay odd-box">
              <span className="bet-odd">
                <b>{data[keys]?.[1]?.ex?.availableToLay[0]?.price ?? "-"}</b>
              </span>
            </div>
          </div>
        ) : (
          <div className="bet-nation-odd suspended-box">
            <div className="back odd-box">
              <span className="bet-odd">
                <b>{data[keys]?.[1]?.ex?.availableToBack[0]?.price ?? "-"} </b>
              </span>
            </div>
            <div className="lay odd-box ">
              <span className="bet-odd">
                <b>{data[keys]?.[1]?.ex?.availableToLay[0]?.price ?? "-"}</b>
              </span>
            </div>
          </div>
        )}
        {!data[keys][1] && (
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
        {/* Data 1 */}
      </div>
    </>
  );
};

export default BetTable;
