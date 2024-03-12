import { config } from "../../utils/config";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CasinoList from "../../components/Casino/CasinoList";
import UseState from "../../hooks/UseState";
import TabPanel from "./TabPanel";
import { tabPanel } from "../../static/tabs/tabs";
import BetTable from "../../components/BetTable/BetTable";

const HomePage = () => {
  const isCasino = config?.result?.settings.casino;
  const auraCasinoApi = config?.result?.endpoint?.auraCasino;
  const diamondCasinoApi = config?.result?.endpoint?.diamondCasino;
  const testCasinoApi = config?.result?.endpoint?.testCasino;
  const token = localStorage.getItem("token");
  const [casino_list, setCasino_list] = useState([]);
  const { sports } = UseState();
  const [data, setData] = useState([]);
  const oddsApi = config?.result?.endpoint?.group;
  const interval = config?.result?.settings?.interval;

  /* Get casino thumbnail for home page */
  useEffect(() => {
    const getAuraCasino = async () => {
      const res = await axios.get(
        `${isCasino == "aura" ? auraCasinoApi : ""} ${
          isCasino == "diamond" ? diamondCasinoApi : ""
        }  ${isCasino == "test" ? testCasinoApi : ""}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      setCasino_list(data);
    };
    getAuraCasino();
  }, [auraCasinoApi, diamondCasinoApi, isCasino, token, testCasinoApi]);

  /* Get game events */
  useEffect(() => {
    const gameData = async () => {
      if (sports !== null) {
        const apiUrl = `${oddsApi}/${sports}`;
        const res = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = res.data;
        setData(data);
      }
    };
    gameData();
    /* Refetch odds api for cricket, football, and tennis */
    if (sports === 4 || sports === 1 || sports === 2) {
      const intervalId = setInterval(gameData, interval);
      return () => clearInterval(intervalId);
    }
  }, [sports, oddsApi, token, interval]);

  return (
    <div className="center-container">
      <ul className="nav nav-pills sports-tab">
        {tabPanel.map((tab) => (
          <TabPanel
            label={tab.label}
            icon={tab.icon}
            to={tab.to}
            key={tab.label}
            id={tab.id}
          />
        ))}
      </ul>

      <div className="tab-content mt-1 ">
        <div className="tab-pane active">
          <div className="bet-table">
            <div className="bet-table-header">
              <div className="bet-nation-name">
                <b>Game</b>
              </div>
              <div className="bet-nation-odd">
                <b>1</b>
              </div>
              <div className="bet-nation-odd">
                <b>X</b>
              </div>
              <div className="bet-nation-odd">
                <b>2</b>
              </div>
            </div>
            <div className="bet-table-body position-relative">
              {/* Odds component for each sportsType */}
              {data && Object.values(data).length > 0 && sports === 4
                ? Object.keys(data)
                    .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                    .map((key, index) => (
                      <BetTable key={index} keys={key} data={data} />
                    ))
                : null}
              {data && Object.values(data).length > 0 && sports === 0
                ? Object.keys(data)
                    .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                    .map((key, index) => (
                      <BetTable key={index} keys={key} data={data} />
                    ))
                : null}

              {data && Object.values(data).length > 0 && sports === 1
                ? Object.keys(data)
                    .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                    .map((key, index) => (
                      <BetTable key={index} keys={key} data={data} />
                    ))
                : null}

              {data && Object.values(data).length > 0 && sports === 2
                ? Object.keys(data)
                    .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                    .map((key, index) => (
                      <BetTable key={index} keys={key} data={data} />
                    ))
                : null}

              {data && Object.values(data).length > 0 && sports === 8
                ? Object.keys(data)
                    .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                    .map((key, index) => (
                      <BetTable key={index} keys={key} data={data} />
                    ))
                : null}

              {data && Object.values(data).length > 0 && sports === 15
                ? Object.keys(data)
                    .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                    .map((key, index) => (
                      <BetTable key={index} keys={key} data={data} />
                    ))
                : null}

              {data && Object.values(data).length > 0 && sports === 18
                ? Object.keys(data)
                    .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                    .map((key, index) => (
                      <BetTable key={index} keys={key} data={data} />
                    ))
                : null}

              {data && Object.values(data).length > 0 && sports === 59
                ? Object.keys(data)
                    .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                    .map((key, index) => (
                      <BetTable key={index} keys={key} data={data} />
                    ))
                : null}

              {data && Object.values(data).length > 0 && sports === 11
                ? Object.keys(data)
                    .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                    .map((key, index) => (
                      <BetTable key={index} keys={key} data={data} />
                    ))
                : null}

              {data && Object.values(data).length > 0 && sports === 9
                ? Object.keys(data)
                    .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                    .map((key, index) => (
                      <BetTable key={index} keys={key} data={data} />
                    ))
                : null}
              {data && Object.values(data).length > 0 && sports === 85
                ? Object.keys(data)
                    .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                    .map((key, index) => (
                      <BetTable key={index} keys={key} data={data} />
                    ))
                : null}

              {data && Object.values(data).length > 0 && sports === 99
                ? Object.keys(data)
                    .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                    .map((key, index) => (
                      <BetTable key={index} keys={key} data={data} />
                    ))
                : null}

              {!data && <div className="bet-table-row">No Record Found</div>}
            </div>
          </div>
        </div>
      </div>

      <div className="casino-list mt-2">
        {/* Casino thumbnail component */}
        {casino_list?.map((casino, i) => (
          <CasinoList key={i} casino={casino} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
