import { useEffect } from "react";
import { config } from "../../utils/config";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const OurVirtual = () => {
  const virtualGamesApi = config?.result?.endpoint?.virtualCasino;
  const token = localStorage.getItem("token");
  const [virtualGames, setVirtualGames] = useState([]);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterGames, setFilterGames] = useState("all");

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
      setVirtualGames(data);
    } else {
      setVirtualGames(data.filter((game) => game.category === filterGames));
    }
  }, [data, filterGames]);

  return (
    <div className="center-container">
      <div className="casino-tab-list d-xl-none">
        <ul className="nav nav-pills casino-tab" id="casino-tab">
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/4">
              <span>Our Casino</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/casino-list/LC/19">
              <span>Our Virtual</span>
            </a>
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
              return (
                <div key={i} className="casino-list-item">
                  <Link
                    to={`/our-virtual/${virtualGame?.eventId}/${virtualGame?.eventTypeId}`}
                  >
                    <div
                      className="casino-list-item-banner"
                      style={{
                        backgroundImage: `url('${virtualGame?.image}')`,
                      }}
                    ></div>
                  </Link>
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
