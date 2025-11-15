import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CasinoList from "../../components/Casino/CasinoList";
import UseState from "../../hooks/UseState";
import TabPanel from "./TabPanel";
import BetTable from "../../components/BetTable/BetTable";
import useLatestEvent from "../../hooks/useLatestEvent";
import { useNavigate } from "react-router-dom";
import UseBalance from "../../hooks/UseBalance";
import { API, settings } from "../../utils";
import handleDecryptData from "../../utils/handleDecryptData";

import useLanguage from "../../hooks/useLanguage";
import { MdSportsCricket, MdSportsKabaddi } from "react-icons/md";
import { BiBasketball } from "react-icons/bi";
import { GiBasketballBall, GiVolleyballBall } from "react-icons/gi";
import { TbClover } from "react-icons/tb";
import {
  IoGameController,
  IoFootballOutline,
  IoFootball,
  IoTennisballSharp,
} from "react-icons/io5";
import { FaPlayCircle, FaTrophy } from "react-icons/fa";
import { FaTableTennisPaddleBall } from "react-icons/fa6";
import { languageValue } from "../../utils/language";
import { LanguageKey } from "../../constant";
import CasinoHighLight from "./CasinoHighLight";
import HorseGreyhound from "../../components/HorseGreyhound/HorseGreyhound";

const HomePage = () => {
  const { valueByLanguage } = useLanguage();
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
        }  ${settings.casino == "test" ? API.testCasino : ""} ${
          settings?.casino === "mac88" ? API.mac88 : ""
        }`
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

        const res = await axios.get(apiUrl, {
          headers: {
            "Cache-Control": "public",
            "max-age": 1,
          },
        });
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

  const tabPanel = [
    {
      label: "In-Play",
      icon: FaPlayCircle,
      to: "",
      id: 0,
    },
    {
      label: languageValue(valueByLanguage, LanguageKey.CRICKET),
      icon: MdSportsCricket,
      to: "",
      id: 4,
    },
    {
      label: languageValue(valueByLanguage, LanguageKey.FOOTBALL),
      icon: IoFootball,
      to: "football",
      id: 1,
    },
    {
      label: languageValue(valueByLanguage, LanguageKey.TENNIS),
      icon: IoTennisballSharp,
      to: "tennis",
      id: 2,
    },
    {
      label: "Sportsbook",
      icon: FaTrophy,
      to: "sportsbook",
      id: 299,
      path: "/casino/sportsbook/550000",
    },
    {
      label: languageValue(valueByLanguage, LanguageKey.KABADDI),
      icon: MdSportsKabaddi,
      to: "kabaddi",
      id: 5,
    },
    {
      label: languageValue(valueByLanguage, LanguageKey.HORSE),
      icon: MdSportsKabaddi,
      to: "horse",
      id: 7,
    },
    {
      label: languageValue(valueByLanguage, LanguageKey.GREYHOUND),
      icon: MdSportsKabaddi,
      to: "kabaddi",
      id: 4339,
    },
    {
      label: "Table Tennis",
      icon: FaTableTennisPaddleBall,
      to: "tableTennis",
      id: 8,
    },
    {
      label: "Basketball",
      icon: GiBasketballBall,
      to: "basketball",
      id: 15,
    },
    {
      label: "Volleyball",
      icon: GiVolleyballBall,
      to: "volleyball",
      id: 18,
    },
    {
      label: "Snooker",
      icon: TbClover,
      to: "snooker",
      id: 59,
    },
    {
      label: "E Games",
      icon: IoGameController,
      to: "eGames",
      id: 11,
    },
    {
      label: "Futsal",
      icon: IoFootballOutline,
      to: "futsal",
      id: 9,
    },
    {
      label: "Handball",
      icon: BiBasketball,
      to: "handball",
      id: 85,
    },
  ];

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
            path={tab?.path}
          />
        ))}
      </ul>

      {sports !== 7 && sports !== 4339 ? (
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
      ) : (
        <>
          {data?.length > 0 && (
            <HorseGreyhound data={data} eventTypeId={sports} />
          )}
        </>
      )}

      {settings.liveCasinoType === "ultrawin" && <CasinoHighLight />}
      {/* Casino thumbnail component */}
      {settings?.casino === "mac88" ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {casino_list?.data?.map((casino, i) => (
            <CasinoList key={i} casino={casino} />
          ))}
        </div>
      ) : (
        <div className="casino-list mt-2">
          {" "}
          {casino_list?.map((casino, i) => (
            <CasinoList key={i} casino={casino} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
