import { useEffect, useState } from "react";
import { config } from "../../../utils/config.js";
import axios from "axios";
import one from "../../../static/front/img/virtual-casino/1.jpg";
import seven from "../../../static/front/img/cards/7.png";
import A from "../../../static/front/img/cards/A.png";
import two from "../../../static/front/img/cards/2.png";
import three from "../../../static/front/img/cards/3.png";
import four from "../../../static/front/img/cards/4.png";
import five from "../../../static/front/img/cards/5.png";
import six from "../../../static/front/img/cards/6.png";
import eight from "../../../static/front/img/cards/8.png";
import nine from "../../../static/front/img/cards/9.png";
import ten from "../../../static/front/img/cards/10.png";
import j from "../../../static/front/img/cards/J.png";
import q from "../../../static/front/img/cards/Q.png";
import k from "../../../static/front/img/cards/K.png";
import UseState from "../../../hooks/UseState.jsx";
import PlaceBets from "../../../components/PlaceBets/PlaceBets.jsx";
import { useQuery } from "@tanstack/react-query";
import PlaceBetModal from "../../../components/PlaceBets/PlaceBetModal.jsx";
import Lucky7 from "../Lucky7/Lucky7.jsx";
import AmarAkbar from "../AmarAkbar/AmarAkbar.jsx";
import MyBets from "../MyBets/MyBets.jsx";
import Clock from "../Clock/Clock.jsx";
import DragonGames from "../DragonGames/DragonGames.jsx";
import { useParams } from "react-router-dom";
import Bollywood from "../Bollywood/Bollywood.jsx";
import LastResult from "../LastResult/LastResult.jsx";
import MatchBets from "../MatchBets/MatchBets.jsx";
import DiamondHeader from "../DiamondHeader/DiamondHeader.jsx";
import Card from "../Card/Card.jsx";
import DragonOneDay from "../DragonOneDay/DragonOneDay.jsx";
import DTL20 from "../DTL20/DTL20.jsx";

const PlaceBetDiamond = () => {
  const getSingleCasinoApi = config?.result?.endpoint?.accessToken;
  const interval = config?.result?.settings?.interval;
  const oddsApi = config?.result?.endpoint?.odds;
  const token = localStorage.getItem("token");
  const { eventTypeId, eventId } = JSON.parse(
    localStorage.getItem("diamondCasino")
  );
  const { slug } = useParams();

  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
  const [showBets, setShowBets] = useState(false);
  const { setPlaceBetValue, placeBetValue } = UseState();
  const [exposer, setExposer] = useState([]);
  const [myBets, setMyBets] = useState([]);
  const exposerApi = config?.result?.endpoint?.exposure;
  const currentBetsApi = config?.result?.endpoint?.currentBets;
  /* data[0]?.runners[0] exposure */
  const [lowExposure, setLowExposure] = useState([]);
  /* data[0]?.runners[1] exposure */
  const [highExposure, setHighExposure] = useState([]);
  /* data[0]?.runners[2] exposure */
  const [zeroIndexTwoRunnersEx, setZeroIndexTwoEx] = useState([]);
  /* data[0]?.runners[3] exposure */
  const [zeroIndexThreeRunnersEx, setZeroIndexThreeEx] = useState([]);
  /* data[0]?.runners[4] exposure */
  const [zeroIndexFourRunnersEx, setZeroIndexFourEx] = useState([]);
  /* data[0]?.runners[4] exposure */
  const [zeroIndexFiveRunnersEx, setZeroIndexFiveEx] = useState([]);

  /* data[1]?.runners[0] exposure */
  const [evenExposure, setEvenExposure] = useState([]);
  /* data[1]?.runners[1] exposure */
  const [oddExposure, setOddExposure] = useState([]);
  /* data[2]?.runners[2] exposure */
  const [redExposure, setRedExposure] = useState([]);
  /* data[2]?.runners[1] exposure */
  const [blackExposure, setBlackExposure] = useState([]);
  /* data[3]?.runners[0] exposure */
  const [a23Exposure, setA23Exposure] = useState([]);
  /* data[3]?.runners[1] exposure */
  const [four56Exposure, setFour56Exposure] = useState([]);
  /* data[3]?.runners[2] exposure */
  const [eight910Exposure, setEight910Exposure] = useState([]);
  /* data[3]?.runners[3] exposure */
  const [jqkExposure, setJqkExposure] = useState([]);
    /* data[4]?.runners[0] exposure */
  const [fourIndexZeroRunnersEx, setFourIndexZeroEx] = useState([]);
    /* data[4]?.runners[1] exposure */
  const [fourIndexOneRunnersEx, setFourIndexOneEx] = useState([]);
    /* data[5]?.runners[0] exposure */
  const [fiveIndexZeroRunnersEx, setFiveIndexZeroEx] = useState([]);
    /* data[5]?.runners[1] exposure */
  const [fiveIndexOneRunnersEx, setFiveIndexOneEx] = useState([]);
    /* data[6]?.runners[0] exposure */
  const [sixIndexZeroRunnersEx, setSixIndexZeroEx] = useState([]);
    /* data[6]?.runners[0] exposure */
  const [sixIndexOneRunnersEx, setSixIndexOneEx] = useState([]);
    /* data[7]?.runners[0] exposure */
  const [sevenIndexZeroRunnersEx, setSevenIndexZeroEx] = useState([]);

  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  useEffect(() => {
    /* data[0]?.runners[0] exposure */
    const low = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[0]?.runners[0]?.id
    );
    setLowExposure(low);

    /* data[0]?.runners[1] exposure */
    const high = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[0]?.runners[1]?.id
    );
    setHighExposure(high);

    /* data[0]?.runners[2] exposure */
    const zeroIndexTwoExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[0]?.runners[2]?.id
    );
    setZeroIndexTwoEx(zeroIndexTwoExp);

    /* data[0]?.runners[3] exposure */
    const zeroIndexThreeExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[0]?.runners[2]?.id
    );
    setZeroIndexThreeEx(zeroIndexThreeExp);

    /* data[0]?.runners[4] exposure */
    const zeroIndexFourExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[0]?.runners[2]?.id
    );
    setZeroIndexFourEx(zeroIndexFourExp);

    /* data[0]?.runners[5] exposure */
    const zeroIndexFiveExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[0]?.runners[2]?.id
    );
    setZeroIndexFiveEx(zeroIndexFiveExp);

    /* data[1]?.runners[0] exposure */
    const even = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[1]?.runners[0]?.id
    );
    setEvenExposure(even);

    /* data[1]?.runners[1] exposure */
    const odd = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[1]?.runners[1]?.id
    );
    setOddExposure(odd);

    /* data[2]?.runners[0] exposure */
    const red = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[2]?.runners[0]?.id
    );
    setRedExposure(red);

    /* data[2]?.runners[1] exposure */
    const black = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[2]?.runners[1]?.id
    );
    setBlackExposure(black);

    /* data[3]?.runners[0] exposure */
    const a23 = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[3]?.runners[0]?.id
    );
    setA23Exposure(a23);

    /* data[3]?.runners[1] exposure */
    const four56 = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[3]?.runners[1]?.id
    );
    setFour56Exposure(four56);

    /* data[3]?.runners[2] exposure */
    const eight910 = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[3]?.runners[2]?.id
    );
    setEight910Exposure(eight910);

    /* data[3]?.runners[3] exposure */
    const jqk = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[3]?.runners[3]?.id
    );
    setJqkExposure(jqk);

       /* data[4]?.runners[0] exposure */
       const fourIndexZeroExp = pnlBySelection?.filter(
        (pnl) => pnl?.RunnerId == data[4]?.runners[0]?.id
      );
      setFourIndexZeroEx(fourIndexZeroExp);

       /* data[4]?.runners[1] exposure */
       const fourIndexOneExp = pnlBySelection?.filter(
        (pnl) => pnl?.RunnerId == data[4]?.runners[1]?.id
      );
      setFourIndexOneEx(fourIndexOneExp);

       /* data[5]?.runners[0] exposure */
       const fiveIndexZeroExp = pnlBySelection?.filter(
        (pnl) => pnl?.RunnerId == data[5]?.runners[0]?.id
      );
      setFiveIndexZeroEx(fiveIndexZeroExp);

       /* data[5]?.runners[1] exposure */
       const fiveIndexOneExp = pnlBySelection?.filter(
        (pnl) => pnl?.RunnerId == data[5]?.runners[1]?.id
      );
      setFiveIndexOneEx(fiveIndexOneExp);
       /* data[6]?.runners[0] exposure */
       const sixIndexZeroExp = pnlBySelection?.filter(
        (pnl) => pnl?.RunnerId == data[6]?.runners[0]?.id
      );
      setSixIndexZeroEx(sixIndexZeroExp);
       /* data[6]?.runners[1] exposure */
       const sixIndexOneExp = pnlBySelection?.filter(
        (pnl) => pnl?.RunnerId == data[6]?.runners[1]?.id
      );
      setSixIndexOneEx(sixIndexOneExp);
       /* data[7]?.runners[0] exposure */
       const sevenIndexZeroExp = pnlBySelection?.filter(
        (pnl) => pnl?.RunnerId == data[7]?.runners[0]?.id
      );
      setSevenIndexZeroEx(sevenIndexZeroExp);
  }, [data]);

  /* Get video */
  useEffect(() => {
    const getCasinoVideo = async () => {
      const res = await axios.post(
        getSingleCasinoApi,
        {
          eventId: eventId,
          eventTypeId: eventTypeId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      if (data.success) {
        setUrl(data?.result?.url);
      }
    };
    getCasinoVideo();
  }, [eventId, eventTypeId, getSingleCasinoApi, token]);

  /* Get odds */
  useEffect(() => {
    const getGameDetails = async () => {
      const res = await axios.get(`${oddsApi}/${eventTypeId}/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      if (data.success) {
        setData(data.result);
      }
    };
    getGameDetails();
    const intervalId = setInterval(getGameDetails, interval);
    return () => clearInterval(intervalId);
  }, [token, oddsApi, eventTypeId, eventId, interval]);

  /* Get exposure data */
  const { refetch: refetchExposure } = useQuery({
    queryKey: ["exposure"],
    queryFn: async () => {
      const res = await axios.get(`${exposerApi}/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;

      if (data.success) {
        setExposer(data.result);
      }
    },
  });

  /* Fetch Current Bets */
  const { refetch: refetchCurrentBets } = useQuery({
    queryKey: ["currentBets"],
    queryFn: () => {
      fetch(`${currentBetsApi}/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setMyBets(data?.result);
            console.log(data);
          }
        });
    },
  });
  console.log(data);
  return (
    <>
      <div className="center-container">
        {showBets && window.innerWidth < 1200 && (
          <PlaceBetModal
            placeBetValue={placeBetValue}
            refetchCurrentBets={refetchCurrentBets}
            refetchExposure={refetchExposure}
            setShowBets={setShowBets}
            showBets={showBets}
          />
        )}
        <div
          className={`casino-page-container 
        ${
          slug == "lucky7eu" || slug == "lucky7eu2" || slug == "lucky7"
            ? "lucky7a"
            : ""
        } 
        ${slug == "aaa2" || slug == "aaa" ? "aaa" : ""} 
        ${slug == "dt202" || slug == "dt20" ? "dt20" : ""} 
        ${slug == "btable" ? "bollywood" : ""} 
        ${slug == "dt6" ? "dt1day" : ""} 
        ${slug == "dtl20" ? "dtl20" : ""} 
   
        `}
        >
          {/* DiamondHeader start */}
         <DiamondHeader data={data} myBets={myBets}/>
            {/* DiamondHeader start */}
          <div className="">
            <div className="casino-video">
              <div className="video-box-container">
                {/* Iframe video */}
                <div className="casino-video-box">
                  <iframe
                    allow="fullscreen;"
                    src={url}
                    style={{ widows: "100%", border: "0px" }}
                  ></iframe>
                </div>
              </div>
              <div className="casino-video-cards">
                {/* Card start */}
                <Card data={data} one={one} slug={slug}/>
               {/* Card end */}
              </div>
              {/* Clock start */}
              <Clock />
                {/* Clock end */}
            </div>

            <div className="casino-detail">

              {
                slug == "dtl20" ? (
<DTL20
  data={data}
  setPlaceBetValue={setPlaceBetValue}
  setShowBets={setShowBets}
  lowExposure={lowExposure}
  highExposure={highExposure}
  evenExposure={evenExposure}
  blackExposure={blackExposure}
  redExposure={redExposure}
  a23Exposure={a23Exposure}
  four56Exposure={four56Exposure}
  fourIndexZeroRunnersEx={fourIndexZeroRunnersEx}
  fourIndexOneRunnersEx={fourIndexOneRunnersEx}
  fiveIndexZeroRunnersEx={fiveIndexZeroRunnersEx}
  fiveIndexOneRunnersEx={fiveIndexOneRunnersEx}
  pnlBySelection={pnlBySelection}
  zeroIndexTwoRunnersEx={zeroIndexTwoRunnersEx}
  sixIndexZeroRunnersEx={sixIndexZeroRunnersEx}
  sixIndexOneRunnersEx={sixIndexOneRunnersEx}
  sevenIndexZeroRunnersEx={sevenIndexZeroRunnersEx}
/>
                ):null
              }



              {/* Dragon tiger one day  */}
              {
                slug == 'dt6' ? (
                <DragonOneDay
                data={data}
                setPlaceBetValue={setPlaceBetValue}
                setShowBets={setShowBets}
                lowExposure={lowExposure}
                highExposure={highExposure}
                evenExposure={evenExposure}
                blackExposure={blackExposure}
                redExposure={redExposure}
                a23Exposure={a23Exposure}
                four56Exposure={four56Exposure}
                fourIndexZeroRunnersEx={fourIndexZeroRunnersEx}
                fourIndexOneRunnersEx={fourIndexOneRunnersEx}
                fiveIndexZeroRunnersEx={fiveIndexZeroRunnersEx}
                fiveIndexOneRunnersEx={fiveIndexOneRunnersEx}
                pnlBySelection={pnlBySelection}
                />
                ):null
              }


              {/* Bollywood casino */}
              {slug == "btable" ? (
                <Bollywood
                  data={data}
                  setShowBets={setShowBets}
                  setPlaceBetValue={setPlaceBetValue}
                  zeroIndexTwoRunnersEx={zeroIndexTwoRunnersEx}
                  lowExposure={lowExposure}
                  highExposure={highExposure}
                  evenExposure={evenExposure}
                  oddExposure={oddExposure}
                  redExposure={redExposure}
                  blackExposure={blackExposure}
                  four56Exposure={four56Exposure}
                  pnlBySelection={pnlBySelection}
                  a23Exposure={a23Exposure}
                  zeroIndexFiveRunnersEx={zeroIndexFiveRunnersEx}
                  zeroIndexFourRunnersEx={zeroIndexFourRunnersEx}
                  zeroIndexThreeRunnersEx={zeroIndexThreeRunnersEx}
                />
              ) : null}

              {/* market start  for lucky 7--> */}
              {slug === "lucky7eu" ||
              slug === "lucky7eu2" ||
              slug === "lucky7" ? (
                <Lucky7
                  A={A}
                  a23Exposure={a23Exposure}
                  blackExposure={blackExposure}
                  data={data}
                  eight={eight}
                  eight910Exposure={eight910Exposure}
                  evenExposure={evenExposure}
                  five={five}
                  four={four}
                  four56Exposure={four56Exposure}
                  highExposure={highExposure}
                  j={j}
                  jqkExposure={jqkExposure}
                  k={k}
                  lowExposure={lowExposure}
                  nine={nine}
                  oddExposure={oddExposure}
                  pnlBySelection={pnlBySelection}
                  q={q}
                  redExposure={redExposure}
                  setPlaceBetValue={setPlaceBetValue}
                  setShowBets={setShowBets}
                  seven={seven}
                  six={six}
                  ten={ten}
                  three={three}
                  two={two}
                />
              ) : null}

              {/* market start  for Bollywood--> */}
              {slug == "aaa2" || slug == "aaa" ? (
                <AmarAkbar
                  data={data}
                  setShowBets={setShowBets}
                  setPlaceBetValue={setPlaceBetValue}
                  zeroIndexTwoRunnersEx={zeroIndexTwoRunnersEx}
                  lowExposure={lowExposure}
                  highExposure={highExposure}
                  evenExposure={evenExposure}
                  oddExposure={oddExposure}
                  redExposure={redExposure}
                  blackExposure={blackExposure}
                  four56Exposure={four56Exposure}
                  pnlBySelection={pnlBySelection}
                  a23Exposure={a23Exposure}
                />
              ) : null}

              {slug == "dt202" || slug == "dt20" ? (
                <DragonGames
                  data={data}
                  pnlBySelection={pnlBySelection}
                  setPlaceBetValue={setPlaceBetValue}
                  setShowBets={setShowBets}
                  evenExposure={evenExposure}
                  highExposure={highExposure}
                  lowExposure={lowExposure}
                  zeroIndexTwoRunnersEx={zeroIndexTwoRunnersEx}
                  blackExposure={blackExposure}
                  redExposure={redExposure}
                  fourIndexZeroRunnersEx={fourIndexZeroRunnersEx}
                  fourIndexOneRunnersEx={fourIndexOneRunnersEx}
                  fiveIndexZeroRunnersEx={fiveIndexZeroRunnersEx}
                  fiveIndexOneRunnersEx={fiveIndexOneRunnersEx}
                  a23Exposure={a23Exposure}
                  four56Exposure={four56Exposure}

                />
              ) : null}

              {/* Last result */}
              <LastResult />

            </div>
            {/* End casino details */}
          </div>
        <MatchBets/>
        </div>
      </div>
      <div className="sidebar right-sidebar casino-right-sidebar">
        {/* Place bet start */}
        {showBets && window.innerWidth > 1199 && (
          <PlaceBets
            placeBetValue={placeBetValue}
            showBets={showBets}
            setShowBets={setShowBets}
            refetchCurrentBets={refetchCurrentBets}
            refetchExposure={refetchExposure}
          />
        )}
        {/* Place bet end */}
        <div className="sidebar-box my-bet-container">
          <MyBets myBets={myBets} />
        </div>
      </div>
    </>
  );
};

export default PlaceBetDiamond;
