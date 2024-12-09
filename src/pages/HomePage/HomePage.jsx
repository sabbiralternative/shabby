import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CasinoList from "../../components/Casino/CasinoList";
import UseState from "../../hooks/UseState";
import TabPanel from "./TabPanel";
import { tabPanel } from "../../static/tabs/tabs";
import BetTable from "../../components/BetTable/BetTable";
import useLatestEvent from "../../hooks/useLatestEvent";
import { useNavigate } from "react-router-dom";
import UseBalance from "../../hooks/UseBalance";
import { API, settings } from "../../utils";
import handleDecryptData from "../../utils/handleDecryptData";
import HorseGreyhound from "../../components/HorseGreyhound/HorseGreyhound";

const HomePage = () => {
  const [casino_list, setCasino_list] = useState([]);
  const { sports } = UseState();
  const [data, setData] = useState([]);

  const { latestEvents } = useLatestEvent();
  const navigate = useNavigate();
  const [, refetchBalance] = UseBalance();

  useEffect(() => {
    if (!settings.balanceApiLoop) {
      refetchBalance();
    }
  }, [refetchBalance]);
  useEffect(() => {
    const getAuraCasino = async () => {
      const res = await axios.get(
        `${settings.casino == "aura" ? API.auraCasino : ""} ${
          settings.casino == "diamond" ? API.diamondCasino : ""
        }  ${settings.casino == "test" ? API.testCasino : ""}`
      );
      const data = res.data;
      setCasino_list(data);
    };
    getAuraCasino();
  }, []);

  /* Get game events */
  useEffect(() => {
    const gameData = async () => {
      if (sports !== null) {
        const apiUrl = `${API.groupSportsBook}/${sports}`;
        const res = await axios.get(apiUrl);
        const data = res.data;
        const decryptionData = await handleDecryptData(JSON.stringify(data));
        setData(decryptionData);
      }
    };
    gameData();
    if (sports !== 7 && sports !== 4339) {
      const intervalId = setInterval(gameData, settings.interval);
      return () => clearInterval(intervalId);
    }
  }, [sports]);

  return (
    <div className="center-container">
      <div className="latest-event d-none d-xl-flex">
        {latestEvents?.map((event, i) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(
                  `/game-details/${event?.eventTypeId}/${event?.eventId}`
                );
              }}
              key={i}
              className="latest-event-item"
            >
              <a className="blink_me">
                <i className="d-icon me-1"></i>
                <span style={{ color: "white" }}>{event?.eventName}</span>
              </a>
            </div>
          );
        })}
      </div>
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
              {data && sports === 7 ? (
                <HorseGreyhound
                  data={data}
                  eventTypeId={7}
                  title="Horse Racing"
                />
              ) : null}
              {data && sports === 4339 ? (
                <HorseGreyhound
                  data={data}
                  eventTypeId={4339}
                  title="Greyhound Racing"
                />
              ) : null}

              {data &&
              Object.values(data).length > 0 &&
              sports !== 4339 &&
              sports !== 7
                ? Object.keys(data)
                    ?.filter((key) => {
                      return data?.[key]?.visible === true;
                    })
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
