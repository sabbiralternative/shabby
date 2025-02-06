import { useEffect, useState } from "react";
import axios from "axios";
import DiamondCasinoList from "./DiamondCasinoList";
import CasinoList from "../../components/Casino/CasinoList";
import { Link } from "react-router-dom";
import UseState from "../../hooks/UseState";
import { API, settings } from "../../utils";
const OurCasino = () => {
  const [data, setData] = useState([]);
  const [casino_list, setCasino_list] = useState([]);
  const [categories, setCategories] = useState([]);
  const { filterGames, setFilterGames } = UseState();
  const [active, setActive] = useState("ourCasino");

  /* Get casino thumbnail */
  useEffect(() => {
    const getAuraCasino = async () => {
      const res = await axios.get(
        `${settings.casino == "aura" ? API.auraCasino : ""} ${
          settings.casino == "diamond" ? API.diamondCasino : ""
        } 
        ${settings.casino == "test" ? API.testCasino : ""}
        ${settings?.casino === "mac88" ? API.mac88 : ""}
        `
      );

      const data = res.data;
      if (settings?.casino === "mac88") {
        setData(data?.data);
      } else {
        const sort = data.sort((Link, b) => Link.sort - b.sort);
        setData(sort);
        setCasino_list(sort);
      }
    };
    getAuraCasino();
  }, [filterGames]);

  /* get unique category */
  useEffect(() => {
    const categories = Array.from(new Set(data.map((item) => item.category)));

    setCategories(categories);
  }, [data]);

  /* Filter category */
  useEffect(() => {
    if (filterGames == "all") {
      setCasino_list(data.filter((d) => d.visible === true));
    } else {
      const category = data.filter((game) => game.category === filterGames);

      setCasino_list(category.filter((d) => d.visible === true));
    }
  }, [data, filterGames]);

  return (
    <>
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
                className={`nav-link ${
                  active === "ourVirtual" ? "active" : ""
                }`}
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
        {settings?.casino === "mac88" && (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data?.map((casino, i) => (
              <CasinoList key={i} casino={casino} />
            ))}
          </div>
        )}

        {settings.casino == "diamond" && (
          <div className="tab-content mt-xl-2 mt-1">
            <div className="tab-pane active" id="all-casino">
              {
                <div className="casino-list">
                  {casino_list.map((casino, i) => (
                    <DiamondCasinoList key={i} casino={casino} />
                  ))}
                </div>
              }
            </div>
          </div>
        )}

        {settings.casino == "aura" || settings.casino === "test" ? (
          <div className="casino-list mt-2">
            {casino_list.map((casino, i) => (
              <CasinoList key={i} casino={casino} />
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default OurCasino;
