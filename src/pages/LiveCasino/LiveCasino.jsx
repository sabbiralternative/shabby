import { useEffect, useState } from "react";
import { config } from "../../utils/config";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LiveSlotModal from "../../components/Modal/LiveSlotModal";

const LiveCasino = () => {
  const [product, setProduct] = useState("All");
  const [live_casino, setLive_Casino] = useState({});
  const liveCasinoWolf = config?.result?.endpoint?.liveCasinoWolf;
  const token = localStorage.getItem("token");
  const [showModal, setShowModal] = useState(false);
  const [casinoId, setCasinoId] = useState({});
  const isAEDCurrency = config?.result?.settings?.casinoCurrency;
  const navigate = useNavigate();
  /* Get live casino */
  useEffect(() => {
    const getLiveCasino = async () => {
      const res = await axios.post(
        `${liveCasinoWolf}`,
        {
          gameList: "All",
          product: product,
          isHome: false,
        },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );

      if (res?.status === 200) {
        const data = res.data;
        setLive_Casino(data);
      }
    };
    getLiveCasino();
  }, [token, liveCasinoWolf, product]);

  /* Navigate to live casino video */
  const navigateLiveCasinoVideo = (casino) => {
  

    if (isAEDCurrency !== "AED") {
      navigate(
        `/live-casino/${casino?.game_name.replace(/ /g, "")}/${casino?.game_id}`
      );
    } else {
      setShowModal(true);
      setCasinoId({
        eventId: casino?.game_id,
        name: casino?.game_name.replace(/ /g, ""),
        base:'live-casino'
      });
    }
  };

  if (
    live_casino == undefined ||
    !live_casino?.gameList ||
    !Object.keys(live_casino?.gameList)
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
          {live_casino?.companyListData?.map((item, i) => {
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
      <div className="tab-content mt-xl-2 mt-1">
        <div className="tab-pane active" id="all-casino">
          <div className="casino-list">
            {live_casino?.gameList &&
              Object?.keys(live_casino?.gameList)?.map((title) =>
                Array.isArray(live_casino?.gameList[title])
                  ? live_casino?.gameList[title]?.map((item) => {
                      return (
                        <div
                          key={item?.game_id}
                          className="casino-list-item rect"
                        >
                          <div
                            title={item?.url_thumb}
                            onClick={() => navigateLiveCasinoVideo(item)}
                            className="casino-list-item-banner"
                            style={{
                              backgroundImage: `url(${item?.url_thumb})`,
                            }}
                          ></div>
                        </div>
                      );
                    })
                  : Object?.values(live_casino?.gameList[title])?.map(
                      (item) => {
                        return (
                          <div
                            key={item?.game_id}
                            className="casino-list-item rect"
                          >
                            <div
                              title={item?.url_thumb}
                              onClick={() => navigateLiveCasinoVideo(item)}
                              className="casino-list-item-banner"
                              style={{
                                backgroundImage: `url(${item?.url_thumb})`,
                              }}
                            ></div>
                          </div>
                        );
                      }
                    )
              )}
          </div>
        </div>
      </div>
      {showModal && isAEDCurrency === "AED" && (
        <LiveSlotModal setShowModal={setShowModal} casinoId={casinoId} />
      )}
    </div>
  );
};

export default LiveCasino;
