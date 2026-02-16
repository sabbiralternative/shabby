import { useEffect } from "react";
import { useState } from "react";
import LiveSlotModal from "../../components/Modal/LiveSlotModal";
import { Link, useNavigate } from "react-router-dom";
import { API, settings } from "../../utils";
import UseLiveSlotFantasyNewTab from "../../hooks/UseLiveSlotFantasyNewTab";
import { AxiosInstance } from "../../lib/AxiosInstance";

const SlotGames = () => {
  const [slotGames, setSlotGames] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [casinoId, setCasinoId] = useState({});

  const [product, setProduct] = useState("All");
  const navigate = useNavigate();
  /* Get slot games */
  useEffect(() => {
    const getSlotCasino = async () => {
      const res = await AxiosInstance.post(API.slotsWolf, {
        gameList: "All",
        product,
        isHome: false,
      });
      const data = res.data;
      setSlotGames(data);
    };
    getSlotCasino();
  }, [product]);

  /* Navigate to slot video */
  const navigateSlotCasinoVideo = (casino) => {
    if (settings.casino_currency !== "AED") {
      navigate(
        `/slot-games/${casino?.game_name.replace(/ /g, "")}/${casino?.game_id}`,
      );
      UseLiveSlotFantasyNewTab(casino);
    } else {
      setShowModal(true);
      setCasinoId({
        eventId: casino?.game_id,
        name: casino?.game_name.replace(/ /g, ""),
        base: "slot-games",
      });
    }
  };
  if (
    slotGames == undefined ||
    !slotGames?.gameList ||
    !Object.keys(slotGames?.gameList)
  ) {
    return;
  }

  return (
    <div className="center-container">
      <div className="casino-tab-list">
        <ul className="nav nav-pills casino-tab" id="casino-tab">
          <li onClick={() => setProduct("All")} className="nav-item">
            <Link className={`nav-link ${product === "All" ? "active" : ""}`}>
              <span>ALL</span>
            </Link>
          </li>
          {slotGames?.companyListData?.map((item, i) => {
            return (
              <li
                key={i}
                onClick={() => setProduct(item?.product)}
                className="nav-item"
              >
                <Link
                  className={`nav-link ${
                    product === item?.product ? "active" : ""
                  }`}
                >
                  <span>{item?.product}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div className="casino-tab-list">
        <a className="tabs-arow tabs-arow-left">
          <i className="fas fa-angle-left"></i>
        </a>
        <ul className="nav nav-pills casino-tab" id="slot-tab">
          <li className="nav-item">
            <a className="nav-link active" href="/slot-list/34">
              <span>NetEnt</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/24">
              <span>Red Tiger</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/1">
              <span>1X2 Gaming</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/3">
              <span>BB Games</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/4">
              <span>Booongo</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/5">
              <span>Blueprint Gaming</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/58">
              <span>Dragoon Soft</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/7">
              <span>Elk Studios</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/8">
              <span>Evoplay</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/9">
              <span>Fantasma Games</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/10">
              <span>Gamefish Global</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/11">
              <span>Habanero</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/12">
              <span>Hacksaw Gaming</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/13">
              <span>Iron Dog Studio</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/14">
              <span>Kalamba Games</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/15">
              <span>Lady Luck</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/17">
              <span>Nolimit city</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/18">
              <span>OMI Gaming</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/19">
              <span>OneTouch</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/20">
              <span>Play &amp; GO</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/21">
              <span>PlayPearls</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/22">
              <span>Push Gaming</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/23">
              <span>Quickspin</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/26">
              <span>Relax Gaming</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/27">
              <span>RTG Slots</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/28">
              <span>Spearhead Studios</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/29">
              <span>Slotmill</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/30">
              <span>Splitrock Gaming</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/31">
              <span>Thunderkick</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/32">
              <span>Woohoo Games</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/33">
              <span>Yggdrasil</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/36">
              <span>Amatic</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/39">
              <span>Egt</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/50">
              <span>Wazdan</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/56">
              <span>Novomatic</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/57">
              <span>Pragmatic</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list/52">
              <span>Virtual Games</span>
            </a>
          </li>
        </ul>
        <a className="tabs-arow tabs-arow-right">
          <i className="fas fa-angle-right"></i>
        </a>
      </div>
      <div className="casino-sub-tab-list">
        <ul className="nav nav-pills casino-sub-tab" id="slot-sub-tab">
          <li className="nav-item">
            <a className="nav-link active" href="/slot-list/34/120">
              <span>New Slots</span>
            </a>
          </li>
        </ul>
      </div> */}
      <div className="">
        <div className="tab-content mt-xl-2 mt-1">
          <div className="tab-pane active" id="all-casino">
            <div className="casino-list">
              {slotGames?.gameList &&
                Object?.keys(slotGames?.gameList)?.map((title) =>
                  Array.isArray(slotGames?.gameList[title])
                    ? slotGames?.gameList[title]?.map((item) => {
                        return (
                          <div
                            key={item?.game_id}
                            className="casino-list-item rect"
                          >
                            <div
                              title={item?.url_thumb}
                              onClick={() => navigateSlotCasinoVideo(item)}
                              className="casino-list-item-banner"
                              style={{
                                backgroundImage: `url(${item?.url_thumb})`,
                              }}
                            ></div>
                          </div>
                        );
                      })
                    : Object?.values(slotGames?.gameList[title])?.map(
                        (item) => {
                          return (
                            <div
                              key={item?.game_id}
                              className="casino-list-item rect"
                            >
                              <div
                                title={item?.url_thumb}
                                onClick={() => navigateSlotCasinoVideo(item)}
                                className="casino-list-item-banner"
                                style={{
                                  backgroundImage: `url(${item?.url_thumb})`,
                                }}
                              ></div>
                            </div>
                          );
                        },
                      ),
                )}
            </div>
          </div>
        </div>
      </div>
      {showModal && settings.casino_currency === "AED" && (
        <LiveSlotModal setShowModal={setShowModal} casinoId={casinoId} />
      )}
    </div>
  );
};

export default SlotGames;
