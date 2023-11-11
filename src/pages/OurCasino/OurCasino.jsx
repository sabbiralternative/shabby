import { useEffect, useState } from "react";
import { config } from "../../utils/config";
import axios from "axios";
import DiamondCasinoList from "./DiamondCasinoList";
import CasinoList from "../CasinoList/CasinoList";
import { Link } from "react-router-dom";
const OurCasino = () => {
  const diamondCasinoUrl = config?.result?.endpoint?.diamondCasino;
  const auraCasinoApi = config?.result?.endpoint?.auraCasino;
  const casinoType = config?.result?.settings?.casino;
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [casino_list, setCasino_list] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterGames, setFilterGames] = useState("all");

  useEffect(() => {
    const getAuraCasino = async () => {
      const res = await axios.get(
        `${casinoType == "aura" ? auraCasinoApi : ""} ${
          casinoType == "diamond" ? diamondCasinoUrl : ""
        }`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      const sort = data.sort((Link, b) => Link.sort - b.sort);
      setData(sort);
      setCasino_list(sort);
    };
    getAuraCasino();
  }, [diamondCasinoUrl, auraCasinoApi, casinoType, token, filterGames]);

  useEffect(() => {
    const categories = Array.from(new Set(data.map((item) => item.category)));

    setCategories(categories);
  }, [data]);

  useEffect(() => {
    if (filterGames == "all") {
      setCasino_list(data);
    } else {
      setCasino_list(data.filter((game) => game.category === filterGames));
    }
  }, [ data, filterGames]);

  return (
    <>
      {casinoType == "diamond" && (
        <div className="center-container">
          <div className="casino-tab-list d-xl-none">
            <ul className="nav nav-pills casino-tab" id="casino-tab">
              <li className="nav-item">
                <Link className="nav-link active" href="/casino-list/LC/4">
                  <span>Our Casino</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" >
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
              {
                <div className="casino-list">
                  {casino_list.map((casino, i) => (
                    <DiamondCasinoList key={i} casino={casino} />
                  ))}
                </div>
              }
            </div>
          </div>
        </div>
      )}
      {casinoType == "aura" && (
        <div className="center-container">
          <div className="casino-list mt-2">
            {casino_list.map((casino, i) => (
              <CasinoList key={i} casino={casino} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default OurCasino;

{
  /* 
                <Link className="nav-link" href="/casino-list/LC/4/31">
                  <span>{category}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/casino-list/LC/4/20">
                  <span>Teenpatti</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/casino-list/LC/4/21">
                  <span>Poker</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/casino-list/LC/4/22">
                  <span>Baccarat</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/casino-list/LC/4/23">
                  <span>Dragon Tiger</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/casino-list/LC/4/24">
                  <span>32 Cards</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/casino-list/LC/4/26">
                  <span>Andar Bahar</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/casino-list/LC/4/27">
                  <span>Lucky 7</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/casino-list/LC/4/28">
                  <span>3 Card Judgement</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/casino-list/LC/4/29">
                  <span>Casino War</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/casino-list/LC/4/30">
                  <span>Worli</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/casino-list/LC/4/34">
                  <span>Sports</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/casino-list/LC/4/32">
                  <span>Bollywood</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/casino-list/LC/4/33">
                  <span>Lottery</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/casino-list/LC/4/40">
                  <span>Queen</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/casino-list/LC/4/41">
                  <span>Race</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/casino-list/LC/4/73">
                  <span>Others</span>
                </Link>
              </li> */
}
