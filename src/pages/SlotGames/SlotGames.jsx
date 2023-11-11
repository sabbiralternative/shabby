import { useEffect } from "react";
import { config } from "../../utils/config";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SlotGames = () => {
  const slotGamesApi = config?.result?.endpoint?.slotCasino;
  const token = localStorage.getItem("token");
  const [slotGames, setSlotGames] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getSlotCasino = async () => {
      const res = await axios.get(slotGamesApi, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res.data;
      setSlotGames(data);
    };
    getSlotCasino();
  }, [token, slotGamesApi]);

  const navigateSlotCasinoVideo = (slotGame) => {
    navigate(`/slot-games/${slotGame?.eventId}/${slotGame?.providerId}`);
  };

  return (
    <div className="center-container">
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
              {slotGames?.map((slotGame, i) => {
                return (
                  <div
                    onClick={() => navigateSlotCasinoVideo(slotGame)}
                    key={i}
                    className="casino-list-item rect"
                  >
                    <div
                      className="casino-list-item-banner"
                      style={{
                        backgroundImage: `url(${slotGame?.image})`,
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotGames;
