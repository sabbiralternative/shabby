import { useEffect, useState } from "react";
import { config } from "../../utils/config";
import axios from "axios";
import { Link } from "react-router-dom";
import LiveSlotModal from "../../components/Modal/LiveSlotModal";
const LiveCasino = () => {
  const [liveCasinoCategory, setLiveCasinoCategory] = useState("evolution");
  const [live_casino, setLive_Casino] = useState([]);
  const liveCasinoApi = config?.result?.endpoint?.liveCasino;
  const token = localStorage.getItem("token");
  const [showModal, setShowModal] = useState(false);
  const [casinoId, setCasinoId] = useState({});

  useEffect(() => {
    const getLiveCasino = async () => {
      const res = await axios.get(`${liveCasinoApi}/${liveCasinoCategory}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      const data = res.data;
      setLive_Casino(data);
    };
    getLiveCasino();
  }, [token, liveCasinoApi, liveCasinoCategory]);

  const navigateLiveCasinoVideo = (casino) => {
    setShowModal(true);
    setCasinoId({
      eventId: casino?.eventId,
      providerId: casino?.providerId,
    });
  };

  return (
    <div className="center-container">
      <div className="casino-tab-list">
        <ul className="nav nav-pills casino-tab" id="casino-tab">
          <li
            onClick={() => setLiveCasinoCategory("evolution")}
            className="nav-item"
          >
            <Link
              className={`nav-link ${
                liveCasinoCategory === "evolution" ? "active" : ""
              }`}
            >
              <span>Evolution</span>
            </Link>
          </li>
          <li
            onClick={() => setLiveCasinoCategory("tembo")}
            className="nav-item"
          >
            <Link
              className={`nav-link ${
                liveCasinoCategory === "tembo" ? "active" : ""
              }`}
            >
              <span>Tembo</span>
            </Link>
          </li>
          <li
            onClick={() => setLiveCasinoCategory("ezugi")}
            className="nav-item"
          >
            <Link
              className={`nav-link ${
                liveCasinoCategory === "ezugi" ? "active" : ""
              }`}
            >
              <span>Ezugi</span>
            </Link>
          </li>
          <li
            onClick={() => setLiveCasinoCategory("cockfight")}
            className="nav-item"
          >
            <Link
              className={`nav-link ${
                liveCasinoCategory === "cockfight" ? "active" : ""
              }`}
            >
              <span>Cockfight</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="casino-sub-tab-list">
            <ul className="nav nav-pills casino-sub-tab" id="casino-sub-tab">
                <li className="nav-item"><a className="nav-link active"
                        href="/live-casino-list/CS/26/124"><span>All Casino</span></a></li>
                <li className="nav-item"><a className="nav-link "
                        href="/live-casino-list/CS/26/125"><span>Sensual Casino</span></a></li>
                <li className="nav-item"><a className="nav-link "
                        href="/live-casino-list/CS/26/126"><span>Classic Casino</span></a></li>
            </ul>
        </div> */}
      <div className="tab-content mt-xl-2 mt-1">
        <div className="tab-pane active" id="all-casino">
          <div className="casino-list">
            {live_casino?.map((casino, i) => {
              return (
                <div key={i} className="casino-list-item rect">
                  <div
                    onClick={() => navigateLiveCasinoVideo(casino)}
                    className="casino-list-item-banner"
                    style={{
                      backgroundImage: `url(${casino?.image})`,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {showModal && (
        <LiveSlotModal setShowModal={setShowModal} casinoId={casinoId} />
      )}
    </div>
  );
};

export default LiveCasino;
