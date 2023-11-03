import { useEffect, useState } from "react";
import { config } from "../../utils/config";
import axios from "axios";
import DiamondCasinoList from "./DiamondCasinoList";
const OurCasino = () => {
  const diamondCasinoUrl = config?.result?.endpoint?.diamondCasino;
  const token = localStorage.getItem("token");
  const [casino_list, setCasino_list] = useState([]);

  useEffect(() => {
    const getAuraCasino = async () => {
      const res = await axios.get(diamondCasinoUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      const sort = data.sort((a, b) => a.sort - b.sort);
      setCasino_list(sort);
    };
    getAuraCasino();
  }, [diamondCasinoUrl, token]);


  return (
    <div className="center-container">
      <div className="casino-tab-list d-xl-none">
        <ul className="nav nav-pills casino-tab" id="casino-tab">
          <li className="nav-item">
            <a className="nav-link active" href="/casino-list/LC/4">
              <span>Our Casino</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/19">
              <span>Our Virtual</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="casino-sub-tab-list">
        <ul className="nav nav-pills casino-sub-tab" id="casino-sub-tab">
          <li className="nav-item">
            <a className="nav-link active" href="/casino-list/LC/4/35">
              <span>All Casino</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/4/31">
              <span>Roulette</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/4/20">
              <span>Teenpatti</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/4/21">
              <span>Poker</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/4/22">
              <span>Baccarat</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/4/23">
              <span>Dragon Tiger</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/4/24">
              <span>32 Cards</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/4/26">
              <span>Andar Bahar</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/4/27">
              <span>Lucky 7</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/4/28">
              <span>3 Card Judgement</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/4/29">
              <span>Casino War</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/4/30">
              <span>Worli</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/4/34">
              <span>Sports</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/4/32">
              <span>Bollywood</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/4/33">
              <span>Lottery</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/4/40">
              <span>Queen</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/4/41">
              <span>Race</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/4/73">
              <span>Others</span>
            </a>
          </li>
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
      <div className="slot-iframe">
        <iframe
          scrolling="no"
          allow="fullscreen;"
          src=""
          style={{ widows: "100%", border: "0px" }}
        ></iframe>
      </div>
    </div>
  );
};

export default OurCasino;
