import { useEffect } from "react";
import { config } from "../../utils/config";
import axios from "axios";
import { useState } from "react";
import { token } from "../../utils/Utils";
import LiveSlotModal from "../../components/Modal/LiveSlotModal";
import { useNavigate } from "react-router-dom";
const FantasyGames = () => {
  const FantasyGamesApi = config?.result?.endpoint?.fantasyGames;
  const [params, setParams] = useState("aviator");
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [casinoId, setCasinoId] = useState({});
  const isAEDCurrency = config?.result?.settings?.casinoCurrency;
  const navigate = useNavigate();

  /* Get fantasy games */
  useEffect(() => {
    const getFantasyGames = async () => {
      const res = await axios.get(`${FantasyGamesApi}/${params}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res.data;
      if (data) {
        setData(data);
      }
    };
    getFantasyGames();
  }, [FantasyGamesApi, params]);

  /* Navigate to slot casino video */
  const navigateSlotCasinoVideo = (casino) => {
    if (isAEDCurrency !== "AED") {
      navigate(`/fantasy-games/${casino?.eventId}/${casino?.providerId}`);
    } else {
      setShowModal(true);
      setCasinoId({
        eventId: casino?.eventId,
        providerId: casino?.providerId,
        base: "fantasy-games",
      });
    }
  };

  return (
    <div className="center-container">
      <div className="container-fluid container-fluid-5">
        <div className="casino-sub-tab-list">
          <div
            className="casino-sub-tab nav nav-pills"
            id="slot-tab"
            role="tablist"
          >
            <div onClick={() => setParams("aviator")} className="nav-item">
              <a
                role="tab"
                data-rr-ui-event-key="0"
                id="left-tabs-example-tab-0"
                aria-controls="left-tabs-example-tabpane-0"
                aria-selected="true"
                className={`nav-link ${params === "aviator" ? "active" : ""}`}
                tabIndex="0"
              >
                aviator
              </a>
            </div>

            <div onClick={() => setParams("smart")} className="nav-item">
              <a
                role="tab"
                data-rr-ui-event-key="3"
                id="left-tabs-example-tab-3"
                aria-controls="left-tabs-example-tabpane-3"
                aria-selected="false"
                tabIndex="-1"
                className={`nav-link ${params === "smart" ? "active" : ""}`}
              >
                smart
              </a>
            </div>
          </div>
        </div>
        <div className="mt-2 tab-content">
          <div
            role="tabpanel"
            id="left-tabs-example-tabpane-0"
            aria-labelledby="left-tabs-example-tab-0"
            className="fade tab-pane active show"
          >
            <div className="casino-list mt-2 mt-lg-0">
              {data?.map((games, i) => {
                return (
                  <div
                    onClick={() => navigateSlotCasinoVideo(games)}
                    key={i}
                    className="casino-list-item"
                  >
                    <img src={games?.image} className="img-fluid pointer" />
                    <div className="fancy-play">
                      <i className="fas fa-play"></i>
                      <i className="fas fa-info-circle fancy-info"></i>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {showModal && isAEDCurrency === "AED" && (
        <LiveSlotModal setShowModal={setShowModal} casinoId={casinoId} />
      )}
    </div>
  );
};

export default FantasyGames;
