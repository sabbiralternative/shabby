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
import OneCardOneDay from "../OneCardOneDay/OneCardOneDay.jsx";
import OneCard20 from "../OneCard20/OneCard20.jsx";
import TeenPattiOneDay from "../TeenPattiOneday/TeenPattiOneday.jsx";
import TeenPatti20 from "../TeenPatti20/TeenPatti20.jsx";
import InstantTeenPatti from "../InstantTeenPatti/InstantTeenPatti.jsx";

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
  /* data[7]?.runners[1] exposure */
  const [sevenIndexOneRunnersEx, setSevenIndexOneEx] = useState([]);
  /* data[7]?.runners[2] exposure */
  const [sevenIndexTwoRunnersEx, setSevenIndexTwoEx] = useState([]);
  /* data[7]?.runners[3] exposure */
  const [sevenIndexThreeRunnersEx, setSevenIndexThreeEx] = useState([]);
  /* data[7]?.runners[4] exposure */
  const [sevenIndexFourRunnersEx, setSevenIndexFourEx] = useState([]);
  /* data[7]?.runners[5] exposure */
  const [sevenIndexFiveRunnersEx, setSevenIndexFiveEx] = useState([]);
  /* data[7]?.runners[6] exposure */
  const [sevenIndexSixRunnersEx, setSevenIndexSixEx] = useState([]);
  /* data[7]?.runners[7] exposure */
  const [sevenIndexSevenRunnersEx, setSevenIndexSevenEx] = useState([]);
  /* data[7]?.runners[8] exposure */
  const [sevenIndexEightRunnersEx, setSevenIndexEightEx] = useState([]);
  /* data[7]?.runners[9] exposure */
  const [sevenIndexNineRunnersEx, setSevenIndexNineEx] = useState([]);
  /* data[7]?.runners[10] exposure */
  const [sevenIndexTenRunnersEx, setSevenIndexTenEx] = useState([]);
  /* data[7]?.runners[11] exposure */
  const [sevenIndexElevenRunnersEx, setSevenIndexElevenEx] = useState([]);
  /* data[7]?.runners[12] exposure */
  const [sevenIndexTwelveRunnersEx, setSevenIndexTwelveEx] = useState([]);
  /* data[8]?.runners[0] exposure */
  const [eightIndexZeroRunnersEx, setEightIndexZeroEx] = useState([]);
  /* data[8]?.runners[1] exposure */
  const [eightIndexOneRunnersEx, setEightIndexOneEx] = useState([]);
  /* data[8]?.runners[2] exposure */
  const [eightIndexTwoRunnersEx, setEightIndexTwoEx] = useState([]);

  /* data[8]?.runners[2] exposure */
  const [eightIndexThreeRunnersEx, setEightIndexThreeEx] = useState([]);
  /* data[8]?.runners[2] exposure */
  const [eightIndexFourRunnersEx, setEightIndexFourEx] = useState([]);

  /* data[8]?.runners[2] exposure */
  const [eightIndexFiveRunnersEx, setEightIndexFiveEx] = useState([]);
  /* data[8]?.runners[2] exposure */
  const [eightIndexSixRunnersEx, setEightIndexSixEx] = useState([]);
  /* data[8]?.runners[2] exposure */
  const [eightIndexSevenRunnersEx, setEightIndexSevenEx] = useState([]);
  /* data[8]?.runners[2] exposure */
  const [eightIndexEightRunnersEx, setEightIndexEightEx] = useState([]);
  /* data[8]?.runners[2] exposure */
  const [eightIndexNineRunnersEx, setEightIndexNineEx] = useState([]);
  /* data[8]?.runners[2] exposure */
  const [eightIndexTenRunnersEx, setEightIndexTenEx] = useState([]);
  /* data[8]?.runners[2] exposure */
  const [eightIndexElevenRunnersEx, setEightIndexElevenEx] = useState([]);
  /* data[8]?.runners[2] exposure */
  const [eightIndexTwelveRunnersEx, setEightIndexTwelveEx] = useState([]);
  /* data[9]?.runners[0] exposure */
  const [nineIndexZeroRunnersEx, setNineIndexZeroEx] = useState([]);
  /* data[9]?.runners[1] exposure */
  const [nineIndexOneRunnersEx, setNineIndexOneEx] = useState([]);
  /* data[9]?.runners[2] exposure */
  const [nineIndexTwoRunnersEx, setNineIndexTwoEx] = useState([]);
  const [nineIndexThreeRunnersEx, setNineIndexThreeEx] = useState([]);
  const [nineIndexFourRunnersEx, setNineIndexFourEx] = useState([]);
  const [nineIndexFiveRunnersEx, setNineIndexFiveEx] = useState([]);
  const [nineIndexSixRunnersEx, setNineIndexSixEx] = useState([]);
  const [nineIndexSevenRunnersEx, setNineIndexSevenEx] = useState([]);
  const [nineIndexEightRunnersEx, setNineIndexEightEx] = useState([]);
  const [nineIndexNineRunnersEx, setNineIndexNineEx] = useState([]);
  const [nineIndexTenRunnersEx, setNineIndexTenEx] = useState([]);
  const [nineIndexElevenRunnersEx, setNineIndexElevenEx] = useState([]);
  const [nineIndexTwelveRunnersEx, setNineIndexTwelveEx] = useState([]);

  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  console.log(pnlBySelection);
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

    /* data 7 index start */
    /* data[7]?.runners[0] exposure */
    const sevenIndexZeroExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[7]?.runners[0]?.id
    );
    setSevenIndexZeroEx(sevenIndexZeroExp);
    /* data[7]?.runners[1] exposure */
    const sevenIndexOneExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[7]?.runners[1]?.id
    );
    setSevenIndexOneEx(sevenIndexOneExp);
    /* data[7]?.runners[2] exposure */
    const sevenIndexTwoExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[7]?.runners[2]?.id
    );
    setSevenIndexTwoEx(sevenIndexTwoExp);
    /* data[7]?.runners[3] exposure */
    const sevenIndexThreeExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[7]?.runners[3]?.id
    );
    setSevenIndexThreeEx(sevenIndexThreeExp);
    /* data[7]?.runners[3] exposure */
    const sevenIndexFourExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[7]?.runners[4]?.id
    );
    setSevenIndexFourEx(sevenIndexFourExp);
    /* data[7]?.runners[3] exposure */
    const sevenIndexFiveExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[7]?.runners[5]?.id
    );
    setSevenIndexFiveEx(sevenIndexFiveExp);
    /* data[7]?.runners[3] exposure */
    const sevenIndexSixExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[7]?.runners[6]?.id
    );
    setSevenIndexSixEx(sevenIndexSixExp);
    /* data[7]?.runners[3] exposure */
    const sevenIndexSevenExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[7]?.runners[7]?.id
    );
    setSevenIndexSevenEx(sevenIndexSevenExp);

    const sevenIndexEightExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[7]?.runners[8]?.id
    );
    setSevenIndexEightEx(sevenIndexEightExp);
    /*  */
    const sevenIndexNineExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[7]?.runners[9]?.id
    );
    setSevenIndexNineEx(sevenIndexNineExp);
    /*  */
    const sevenIndexTenExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[7]?.runners[10]?.id
    );
    setSevenIndexTenEx(sevenIndexTenExp);
    /*  */
    const sevenIndexElevenExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[7]?.runners[11]?.id
    );
    setSevenIndexElevenEx(sevenIndexElevenExp);
    /*  */
    const sevenIndexTwelveExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[7]?.runners[12]?.id
    );
    setSevenIndexTwelveEx(sevenIndexTwelveExp);
    /* data 7 index end */

    /* data[8]?.runners[0] exposure */
    const eightIndexZeroExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[8]?.runners[0]?.id
    );
    setEightIndexZeroEx(eightIndexZeroExp);

    /* data[8]?.runners[1] exposure */
    const eightIndexOneExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[8]?.runners[1]?.id
    );
    setEightIndexOneEx(eightIndexOneExp);
    /* data[8]?.runners[2] exposure */
    const eightIndexTwoExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[8]?.runners[2]?.id
    );
    setEightIndexTwoEx(eightIndexTwoExp);
    /* data[8]?.runners[2] exposure */
    const eightIndexThreeExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[8]?.runners[3]?.id
    );
    setEightIndexThreeEx(eightIndexThreeExp);
    /* data[8]?.runners[2] exposure */
    const eightIndexFourExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[8]?.runners[4]?.id
    );
    setEightIndexFourEx(eightIndexFourExp);
    const eightIndexFiveExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[8]?.runners[5]?.id
    );
    setEightIndexFiveEx(eightIndexFiveExp);
    const eightIndexSixExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[8]?.runners[6]?.id
    );
    setEightIndexSixEx(eightIndexSixExp);

    const eightIndexSevenExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[8]?.runners[7]?.id
    );
    setEightIndexSevenEx(eightIndexSevenExp);

    const eightIndexEightExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[8]?.runners[8]?.id
    );
    setEightIndexEightEx(eightIndexEightExp);
    const eightIndexNineExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[8]?.runners[9]?.id
    );
    setEightIndexNineEx(eightIndexNineExp);
    const eightIndexTenExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[8]?.runners[10]?.id
    );
    setEightIndexTenEx(eightIndexTenExp);
    const eightIndexElevenExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[8]?.runners[11]?.id
    );
    setEightIndexElevenEx(eightIndexElevenExp);
    const eightIndexTwelveExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[8]?.runners[11]?.id
    );
    setEightIndexTwelveEx(eightIndexTwelveExp);
    /* data[9]?.runners[0] exposure */
    const nineIndexZeroExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[9]?.runners[0]?.id
    );
    setNineIndexZeroEx(nineIndexZeroExp);
    /* data[9]?.runners[1] exposure */
    const nineIndexOneExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[9]?.runners[1]?.id
    );
    setNineIndexOneEx(nineIndexOneExp);
    /* data[9]?.runners[2] exposure */
    const nineIndexTwoExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[9]?.runners[2]?.id
    );
    setNineIndexTwoEx(nineIndexTwoExp);
    //  /* data[9]?.runners[2] exposure */
    const nineIndexThreeExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[9]?.runners[3]?.id
    );
    setNineIndexThreeEx(nineIndexThreeExp);
    const nineIndexFourExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[9]?.runners[4]?.id
    );
    setNineIndexFourEx(nineIndexFourExp);
    const nineIndexFiveExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[9]?.runners[5]?.id
    );
    setNineIndexFiveEx(nineIndexFiveExp);
    const nineIndexSixExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[9]?.runners[6]?.id
    );
    setNineIndexSixEx(nineIndexSixExp);
    const nineIndexSevenExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[9]?.runners[7]?.id
    );
    setNineIndexSevenEx(nineIndexSevenExp);
    const nineIndexEightExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[9]?.runners[8]?.id
    );
    setNineIndexEightEx(nineIndexEightExp);
    const nineIndexNineExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[9]?.runners[9]?.id
    );
    setNineIndexNineEx(nineIndexNineExp);
    const nineIndexTenExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[9]?.runners[10]?.id
    );
    setNineIndexTenEx(nineIndexTenExp);
    const nineIndexElevenExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[9]?.runners[11]?.id
    );
    setNineIndexElevenEx(nineIndexElevenExp);
    const nineIndexTwelveExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[9]?.runners[12]?.id
    );
    setNineIndexTwelveEx(nineIndexTwelveExp);
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
        ${slug == "teen1" ? "onecard1day" : ""} 
        ${slug == "teen120" ? "onecard20" : ""} 
        ${slug == "teen" || slug == 'teen3' || slug == 'teen32' ? "teenpatti1day" : ""} 
        ${slug == "teen20" ? "teenpatti20" : ""} 
   
        `}
        >
          {/* DiamondHeader start */}
          <DiamondHeader data={data} myBets={myBets} />
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
                <Card data={data} one={one} slug={slug} />
                {/* Card end */}
              </div>
              {/* Clock start */}
              <Clock />
              {/* Clock end */}
            </div>

            <div className="casino-detail">
              {
                slug == 'teen3' || slug == 'teen32' ? <InstantTeenPatti data={data}
                setPlaceBetValue={setPlaceBetValue}
                setShowBets={setShowBets}
                lowExposure={lowExposure}
                highExposure={highExposure}
                />:null
              }
              {slug == "teen20" ? <TeenPatti20 
             data={data}
             setPlaceBetValue={setPlaceBetValue}
             setShowBets={setShowBets}
             lowExposure={lowExposure}
             highExposure={highExposure}
             evenExposure={evenExposure}
             redExposure={redExposure}
             a23Exposure={a23Exposure}
             four56Exposure={four56Exposure}
             fourIndexZeroRunnersEx={fourIndexZeroRunnersEx}
             fourIndexOneRunnersEx={fourIndexOneRunnersEx}
             fiveIndexZeroRunnersEx={fiveIndexZeroRunnersEx}
             fiveIndexOneRunnersEx={fiveIndexOneRunnersEx}
             sixIndexOneRunnersEx={sixIndexOneRunnersEx}
             sixIndexZeroRunnersEx={sixIndexZeroRunnersEx}
              /> : null}
              {slug == "teen" ? (
                <TeenPattiOneDay
                  data={data}
                  setPlaceBetValue={setPlaceBetValue}
                  setShowBets={setShowBets}
                  lowExposure={lowExposure}
                  highExposure={highExposure}
                  evenExposure={evenExposure}
                  redExposure={redExposure}
                  a23Exposure={a23Exposure}
                  fourIndexZeroRunnersEx={fourIndexZeroRunnersEx}
                  fourIndexOneRunnersEx={fourIndexOneRunnersEx}
                  fiveIndexZeroRunnersEx={fiveIndexZeroRunnersEx}
                  fiveIndexOneRunnersEx={fiveIndexOneRunnersEx}
                  sevenIndexZeroRunnersEx={sevenIndexZeroRunnersEx}
                  eightIndexZeroRunnersEx={eightIndexZeroRunnersEx}
                  sevenIndexOneRunnersEx={sevenIndexOneRunnersEx}
                  eightIndexOneRunnersEx={eightIndexOneRunnersEx}
                  sixIndexOneRunnersEx={sixIndexOneRunnersEx}
                  sixIndexZeroRunnersEx={sixIndexZeroRunnersEx}
                />
              ) : null}
              {slug == "teen120" ? (
                <OneCard20
                  data={data}
                  setPlaceBetValue={setPlaceBetValue}
                  setShowBets={setShowBets}
                  highExposure={highExposure}
                  lowExposure={lowExposure}
                  zeroIndexTwoRunnersEx={zeroIndexTwoRunnersEx}
                  evenExposure={evenExposure}
                />
              ) : null}
              {slug == "teen1" ? (
                <OneCardOneDay
                  data={data}
                  setPlaceBetValue={setPlaceBetValue}
                  setShowBets={setShowBets}
                  lowExposure={lowExposure}
                  highExposure={highExposure}
                  blackExposure={blackExposure}
                  evenExposure={evenExposure}
                  oddExposure={oddExposure}
                  redExposure={redExposure}
                />
              ) : null}

              {slug == "dtl20" ? (
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
                  eightIndexZeroRunnersEx={eightIndexZeroRunnersEx}
                  nineIndexZeroRunnersEx={nineIndexZeroRunnersEx}
                  sevenIndexOneRunnersEx={sevenIndexOneRunnersEx}
                  eightIndexOneRunnersEx={eightIndexOneRunnersEx}
                  nineIndexOneRunnersEx={nineIndexOneRunnersEx}
                  sevenIndexTwoRunnersEx={sevenIndexTwoRunnersEx}
                  eightIndexTwoRunnersEx={eightIndexTwoRunnersEx}
                  nineIndexTwoRunnersEx={nineIndexTwoRunnersEx}
                  sevenIndexThreeRunnersEx={sevenIndexThreeRunnersEx}
                  eightIndexThreeRunnersEx={eightIndexThreeRunnersEx}
                  sevenIndexFourRunnersEx={sevenIndexFourRunnersEx}
                  sevenIndexFiveRunnersEx={sevenIndexFiveRunnersEx}
                  sevenIndexSixRunnersEx={sevenIndexSixRunnersEx}
                  sevenIndexSevenRunnersEx={sevenIndexSevenRunnersEx}
                  sevenIndexEightRunnersEx={sevenIndexEightRunnersEx}
                  sevenIndexNineRunnersEx={sevenIndexNineRunnersEx}
                  sevenIndexTenRunnersEx={sevenIndexTenRunnersEx}
                  sevenIndexElevenRunnersEx={sevenIndexElevenRunnersEx}
                  sevenIndexTwelveRunnersEx={sevenIndexTwelveRunnersEx}
                  eightIndexFourRunnersEx={eightIndexFourRunnersEx}
                  eightIndexFiveRunnersEx={eightIndexFiveRunnersEx}
                  eightIndexSixRunnersEx={eightIndexSixRunnersEx}
                  eightIndexSevenRunnersEx={eightIndexSevenRunnersEx}
                  eightIndexEightRunnersEx={eightIndexEightRunnersEx}
                  eightIndexNineRunnersEx={eightIndexNineRunnersEx}
                  eightIndexTenRunnersEx={eightIndexTenRunnersEx}
                  eightIndexElevenRunnersEx={eightIndexElevenRunnersEx}
                  eightIndexTwelveRunnersEx={eightIndexTwelveRunnersEx}
                  nineIndexThreeRunnersEx={nineIndexThreeRunnersEx}
                  nineIndexFourRunnersEx={nineIndexFourRunnersEx}
                  nineIndexFiveRunnersEx={nineIndexFiveRunnersEx}
                  nineIndexSixRunnersEx={nineIndexSixRunnersEx}
                  nineIndexSevenRunnersEx={nineIndexSevenRunnersEx}
                  nineIndexEightRunnersEx={nineIndexEightRunnersEx}
                  nineIndexNineRunnersEx={nineIndexNineRunnersEx}
                  nineIndexTenRunnersEx={nineIndexTenRunnersEx}
                  nineIndexElevenRunnersEx={nineIndexElevenRunnersEx}
                  nineIndexTwelveRunnersEx={nineIndexTwelveRunnersEx}
                  oddExposure={oddExposure}
                />
              ) : null}

              {/* Dragon tiger one day  */}
              {slug == "dt6" ? (
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
              ) : null}

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
          <MatchBets />
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

        <MyBets myBets={myBets} slug={slug} />
      </div>
    </>
  );
};

export default PlaceBetDiamond;
