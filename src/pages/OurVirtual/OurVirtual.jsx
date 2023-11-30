import { useEffect } from "react";
import { config } from "../../utils/config";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const OurVirtual = () => {
  const virtualGamesApi = config?.result?.endpoint?.virtualCasino;
  const token = localStorage.getItem("token");
  const [virtualGames, setVirtualGames] = useState([]);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterGames, setFilterGames] = useState("all");
  const navigate = useNavigate();
  const [active, setActive] = useState("ourVirtual");

  useEffect(() => {
    const getVirtualGames = async () => {
      const res = await axios.get(virtualGamesApi, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res.data;
      setData(data);
      setVirtualGames(data);
    };
    getVirtualGames();
  }, [token, virtualGamesApi]);

  useEffect(() => {
    const categories = Array.from(new Set(data.map((item) => item.category)));

    setCategories(categories);
  }, [data]);

  useEffect(() => {
    if (filterGames == "all") {
      setVirtualGames(data.filter((d) => d.visible === true));
    } else {
      const category = data.filter((game) => game.category === filterGames);
      setVirtualGames(category.filter((d) => d.visible === true));
    }
  }, [data, filterGames]);

  return (
    <div className="center-container">
      <div className="casino-tab-list d-xl-none">
        <ul className="nav nav-pills casino-tab" id="casino-tab">
          <li onClick={() => setActive("ourCasino")} className="nav-item">
            <Link
              className={`nav-link ${active === "ourCasino" ? "active" : ""}`}
              to="/our-casino"
            >
              <span>Our Casino</span>
            </Link>
          </li>
          <li onClick={() => setActive("ourVirtual")} className="nav-item">
            <Link
              to="/our-virtual"
              className={`nav-link ${active === "ourVirtual" ? "active" : ""}`}
            >
              <span>Our Virtual</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="casino-sub-tab-list">
        <ul className="nav nav-pills casino-sub-tab" id="casino-sub-tab">
          <li onClick={() => setFilterGames("all")} className="nav-item">
            <Link
              className={`nav-link ${filterGames == "all" ? "active" : ""}`}
            >
              <span>All Casino</span>
            </Link>
          </li>
          {categories?.sort().map((category, i) => {
            return (
              <li
                onClick={() => setFilterGames(category)}
                key={i}
                className={`nav-item`}
              >
                <Link
                  className={`nav-link ${
                    filterGames == category ? "active" : ""
                  }`}
                >
                  <span>{category}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="tab-content mt-xl-2 mt-1">
        <div className="tab-pane active" id="all-casino">
          <div className="casino-list">
            {virtualGames?.map((virtualGame, i) => {
              const virtual = {
                eventId: virtualGame.eventId,
                eventTypeId: virtualGame?.eventTypeId,
                casinoSlug: virtualGame?.slug,
                type: "virtual",
              };

              const handleNavigate = () => {
                localStorage.removeItem("casino");
                localStorage.setItem("casino", JSON.stringify(virtual));
                navigate(`/our-casino/${virtualGame?.slug}`);
              };

              return (
                <div
                  onClick={handleNavigate}
                  key={i}
                  className="casino-list-item"
                >
                  <a>
                    <div
                      className="casino-list-item-banner"
                      style={{
                        backgroundImage: `url('${virtualGame?.image}')`,
                      }}
                    ></div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVirtual;
