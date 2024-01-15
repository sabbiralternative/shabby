import { useEffect, useState } from "react";
import axios from "axios";
import { picture } from "./Utils.jsx";
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
import Notification from "../../../components/Notification/Notification.jsx";
import {
  currentBetsApi,
  exposerApi,
  getSingleCasinoApi,
  interval,
  oddsApi,
  token,
} from "../../../utils/Utils.jsx";
import VLucky7 from "../VLucky7/VLucky7.jsx";
import VAmarAkbarAnthony from "../VAmarAkbarAnthony/VAmarAkbarAnthony.jsx";
import VBollywoodCasino from "../VBollywoodCasino/VBollywoodCasino.jsx";
import VTeenPatti from "../VTeenPatti/VTeenPatti.jsx";
import VMTeenPatti from "../VMTeenPatti/VMTeenPatti.jsx";
import PokerOneDay from "../PokerOneDay/PokerOneDay.jsx";
import PokerSix from "../PokerSix/PokerSix.jsx";
import PokerTwenty from "../PokerTwenty/PokerTwenty.jsx";
import TeenPattiTest from "../TeenPattiTest/TeenPattiTest.jsx";
import Baccarat from "../Baccarat/Baccarat.jsx";
import Baccarat2 from "../Baccarat2/Baccarat2.jsx";
import TeenPattiOpen from "../TeenPattiOpen/TeenPattiOpen.jsx";
import WorliGames from "../WorliGames/WorliGames.jsx";
import WarGames from "../WarGames/WarGames.jsx";
import RaceTwenty from "../RaceTwenty/RaceTwenty.jsx";
import Card32A from "../Card32A/Card32A.jsx";
import Baccrat29 from "../Baccrat29/Baccrat29.jsx";
import TeenPattiTwoPointZero from "../TeenPattiTwoPointZero/TeenPattiTwoPointZero.jsx";
import UseTokenGenerator from "../../../hooks/UseTokenGenerator.jsx";
import UseEncryptData from "../../../hooks/UseEncryptData.jsx";

const PlaceBetDiamond = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { eventTypeId, eventId, type } = JSON.parse(
    localStorage.getItem("casino")
  );

  const { slug } = useParams();
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
  const [showBets, setShowBets] = useState(false);
  const {
    refetchBetsExposure,
    setRefetchBetsExposure,
    setPlaceBetValue,
    placeBetValue,
    lowExposure,
    setLowExposure,
    nineIndexTwelveRunnersEx,
    setNineIndexTwelveEx,
    nineIndexElevenRunnersEx,
    setNineIndexElevenEx,
    nineIndexTenRunnersEx,
    setNineIndexTenEx,
    nineIndexNineRunnersEx,
    setNineIndexNineEx,
    nineIndexEightRunnersEx,
    setNineIndexEightEx,
    nineIndexSevenRunnersEx,
    setNineIndexSevenEx,
    nineIndexSixRunnersEx,
    setNineIndexSixEx,
    nineIndexFiveRunnersEx,
    setNineIndexFiveEx,
    nineIndexFourRunnersEx,
    setNineIndexFourEx,
    nineIndexThreeRunnersEx,
    setNineIndexThreeEx,
    nineIndexTwoRunnersEx,
    setNineIndexTwoEx,
    nineIndexOneRunnersEx,
    setNineIndexOneEx,
    nineIndexZeroRunnersEx,
    setNineIndexZeroEx,
    eightIndexTwelveRunnersEx,
    setEightIndexTwelveEx,
    eightIndexElevenRunnersEx,
    setEightIndexElevenEx,
    eightIndexTenRunnersEx,
    setEightIndexTenEx,
    eightIndexNineRunnersEx,
    setEightIndexNineEx,
    eightIndexEightRunnersEx,
    setEightIndexEightEx,
    eightIndexSevenRunnersEx,
    setEightIndexSevenEx,
    eightIndexSixRunnersEx,
    setEightIndexSixEx,
    eightIndexFiveRunnersEx,
    setEightIndexFiveEx,
    eightIndexFourRunnersEx,
    setEightIndexFourEx,
    eightIndexThreeRunnersEx,
    setEightIndexThreeEx,
    eightIndexTwoRunnersEx,
    setEightIndexTwoEx,
    eightIndexOneRunnersEx,
    setEightIndexOneEx,
    eightIndexZeroRunnersEx,
    setEightIndexZeroEx,
    sevenIndexTwelveRunnersEx,
    setSevenIndexTwelveEx,
    sevenIndexElevenRunnersEx,
    setSevenIndexElevenEx,
    sevenIndexTenRunnersEx,
    setSevenIndexTenEx,
    sevenIndexNineRunnersEx,
    setSevenIndexNineEx,
    sevenIndexEightRunnersEx,
    setSevenIndexEightEx,
    sevenIndexSevenRunnersEx,
    setSevenIndexSevenEx,
    sevenIndexSixRunnersEx,
    setSevenIndexSixEx,
    sevenIndexFiveRunnersEx,
    setSevenIndexFiveEx,
    sevenIndexFourRunnersEx,
    setSevenIndexFourEx,
    sevenIndexThreeRunnersEx,
    setSevenIndexThreeEx,
    sevenIndexTwoRunnersEx,
    setSevenIndexTwoEx,
    sevenIndexOneRunnersEx,
    setSevenIndexOneEx,
    sevenIndexZeroRunnersEx,
    // zeroIndexSixRunnersEx,
    setZeroIndexSixEx,
    setSevenIndexZeroEx,
    sixIndexOneRunnersEx,
    setSixIndexOneEx,
    sixIndexZeroRunnersEx,
    setSixIndexZeroEx,
    fiveIndexOneRunnersEx,
    setFiveIndexOneEx,
    fiveIndexZeroRunnersEx,
    setFiveIndexZeroEx,
    fourIndexOneRunnersEx,
    setFourIndexOneEx,
    fourIndexZeroRunnersEx,
    setFourIndexZeroEx,
    jqkExposure,
    setJqkExposure,
    eight910Exposure,
    setEight910Exposure,
    four56Exposure,
    setFour56Exposure,
    a23Exposure,
    setA23Exposure,
    blackExposure,
    setBlackExposure,
    redExposure,
    setRedExposure,
    oddExposure,
    setOddExposure,
    evenExposure,
    setEvenExposure,
    zeroIndexFiveRunnersEx,
    setZeroIndexFiveEx,
    zeroIndexFourRunnersEx,
    setZeroIndexFourEx,
    zeroIndexThreeRunnersEx,
    setZeroIndexThreeEx,
    zeroIndexTwoRunnersEx,
    setZeroIndexTwoEx,
    highExposure,
    setHighExposure,
    tenIndexZeroRunnersEx,
    setTenIndexZeroEx,
    elevenIndexZeroRunnersEx,
    setElevenIndexZeroEx,
    twelveIndexZeroRunnersEx,
    setTwelveIndexZeroEx,
    thirteenIndexZeroRunnersEx,
    setThirteenIndexZeroEx,
    fourteenIndexZeroRunnersEx,
    setFourteenIndexZeroEx,
    fifteenIndexZeroRunnersEx,
    setFifteenIndexZeroEx,
    sixteenIndexZeroRunnersEx,
    setSixteenIndexZeroEx,
    seventeenIndexZeroRunnersEx,
    setSeventeenIndexZeroEx,
  } = UseState();
  const [threeIndexFourExp, setThreeIndexFour] = useState("");
  const [eighteenIndexZeroExp, setEighteenIndexZero] = useState("");
  const [nineteenIndexZeroExp, setNineteenIndexZero] = useState("");
  const [twentyIndexZeroExp, setTwentyIndexZero] = useState("");
  const [twentyOneIndexZeroExp, setTwentyOneIndexZero] = useState("");
  const [twentyTwoIndexZeroExp, setTwentyTwoIndexZero] = useState("");
  const [twentyThreeIndexZeroExp, setTwentyThreeIndexZero] = useState("");
  const [exposer, setExposer] = useState([]);
  const [myBets, setMyBets] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSticky, setSticky] = useState(false);
  const [tabs, setTabs] = useState("game");
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  /* Scroll position sticky */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldStick = scrollY > 115;

      setSticky(shouldStick);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Filter exposure */
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
      (pnl) => pnl?.RunnerId == data[0]?.runners[3]?.id
    );
    setZeroIndexThreeEx(zeroIndexThreeExp);

    /* data[0]?.runners[4] exposure */
    const zeroIndexFourExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[0]?.runners[4]?.id
    );
    setZeroIndexFourEx(zeroIndexFourExp);

    /* data[0]?.runners[5] exposure */
    const zeroIndexFiveExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[0]?.runners[5]?.id
    );
    setZeroIndexFiveEx(zeroIndexFiveExp);
    const zeroIndexSixExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[0]?.runners[6]?.id
    );
    setZeroIndexSixEx(zeroIndexSixExp);

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

    /* data[3]?.runners[4] exposure */
    const threeIndexFourEx = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[3]?.runners[4]?.id
    );
    setThreeIndexFour(threeIndexFourEx);

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

    const tenIndexZeroExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[10]?.runners[0]?.id
    );
    setTenIndexZeroEx(tenIndexZeroExp);

    const elevenIndexZeroExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[11]?.runners[0]?.id
    );
    setElevenIndexZeroEx(elevenIndexZeroExp);

    const twelveIndexZeroExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[12]?.runners[0]?.id
    );
    setTwelveIndexZeroEx(twelveIndexZeroExp);

    const thirteenIndexZeroExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[13]?.runners[0]?.id
    );
    setThirteenIndexZeroEx(thirteenIndexZeroExp);

    const fourteenIndexZeroExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[14]?.runners[0]?.id
    );
    setFourteenIndexZeroEx(fourteenIndexZeroExp);
    const fifteenIndexZeroExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[15]?.runners[0]?.id
    );
    setFifteenIndexZeroEx(fifteenIndexZeroExp);
    const sixteenIndexZeroExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[16]?.runners[0]?.id
    );
    setSixteenIndexZeroEx(sixteenIndexZeroExp);

    const seventeenIndexZeroExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[17]?.runners[0]?.id
    );
    setSeventeenIndexZeroEx(seventeenIndexZeroExp);

    const eighteenIndexZeroExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[18]?.runners[0]?.id
    );
    setEighteenIndexZero(eighteenIndexZeroExp);
    const nineteenIndexZeroExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[19]?.runners[0]?.id
    );
    setNineteenIndexZero(nineteenIndexZeroExp);
    const twentyIndexZeroExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[20]?.runners[0]?.id
    );
    setTwentyIndexZero(twentyIndexZeroExp);

    const twentyOneIndexZeroExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[21]?.runners[0]?.id
    );
    setTwentyOneIndexZero(twentyOneIndexZeroExp);
    const twentyTwoIndexZeroExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[22]?.runners[0]?.id
    );
    setTwentyTwoIndexZero(twentyTwoIndexZeroExp);
    const twentyThreeIndexZeroExp = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[23]?.runners[0]?.id
    );
    setTwentyThreeIndexZero(twentyThreeIndexZeroExp);
  }, [data]);

  /* Get video */
  useEffect(() => {
    const generatedToken = UseTokenGenerator();
    const encryptedVideoData = UseEncryptData({
      eventId: eventId,
      eventTypeId: eventTypeId,
      token: generatedToken,
    });
    const getCasinoVideo = async () => {
      const res = await axios.post(getSingleCasinoApi, encryptedVideoData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;

      if (data.success) {
        setUrl(data?.result?.url);
      }
    };
    getCasinoVideo();
  }, [eventId, eventTypeId]);

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
  }, [eventTypeId, eventId]);

  /* Get exposure data */
  const { refetch: refetchExposure } = useQuery({
    queryKey: ["exposure"],
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData(generatedToken);
      const res = await axios.post(`${exposerApi}/${eventId}`, encryptedData, {
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
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData(generatedToken);
      const res = await axios.post(
        `${currentBetsApi}/${eventId}`,
        encryptedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;

      if (data.success) {
        setMyBets(data?.result);
      }
    },
  });

  /* Refetch  refetchCurrentBets;
      refetchExposure
      setRefetchBetsExposure*/
  useEffect(() => {
    if (refetchBetsExposure === 1) {
      refetchCurrentBets();
      refetchExposure();
      setRefetchBetsExposure(null);
    }
  }, [
    refetchBetsExposure,
    refetchCurrentBets,
    refetchExposure,
    setRefetchBetsExposure,
  ]);

  return (
    <>
      <div className="center-container">
        {errorMessage && (
          <Notification
            message={errorMessage}
            success={false}
            setMessage={setErrorMessage}
          />
        )}
        {successMessage && (
          <Notification
            message={successMessage}
            success={true}
            setMessage={setSuccessMessage}
          />
        )}
        {showBets && window.innerWidth < 1200 && (
          <PlaceBetModal
            placeBetValue={placeBetValue}
            refetchCurrentBets={refetchCurrentBets}
            refetchExposure={refetchExposure}
            setShowBets={setShowBets}
            showBets={showBets}
            setSuccessMessage={setSuccessMessage}
            setErrorMessage={setErrorMessage}
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
        ${
          slug == "teen" || slug == "teen3" || slug == "teen32"
            ? "teenpatti1day"
            : ""
        } 
        ${slug == "teen20" ? "teenpatti20" : ""} 
        ${slug == "vlucky7" ? "lucky7a vcasino" : ""} 
        ${slug == "vaaa" ? "aaa vcasino" : ""} 
        ${slug == "vbtable" ? "bollywood vcasino" : ""} 
        ${slug == "vteen20" ? "teenpatti20 vcasino" : ""} 
        ${slug == "vteenmuf" ? "teenpattimuflis vcasino" : ""} 
        ${slug == "poker" ? "poker1day" : ""} 
        ${slug == "poker6" ? "poker6player" : ""} 
        ${slug == "poker20" ? "poker20" : ""} 
        ${slug == "teenmuf" ? "teenpattimuflis" : ""} 
        ${slug == "teen9" ? "teenpattitest" : ""} 
        ${slug == "baccarat" ? "baccarat" : ""} 
        ${slug == "baccarat2" ? "baccarat baccarat2" : ""} 
        ${slug == "teen8" ? "teenpattiopen" : ""} 
        ${slug == "worli" || slug == "worli2" ? "worli" : ""} 
        ${slug == "war" ? "casino-war" : ""} 
        ${slug == "race20" ? "race20" : ""} 
        ${slug == "card32" || slug == "card32eu" ? "cards32a" : ""} 
        ${slug == "teensin" ? "baccarat29" : ""} 
        ${slug == "teen6" ? "teenpatti2" : ""} 
   
        `}
        >
          {/* DiamondHeader start */}
          <DiamondHeader
            data={data}
            myBets={myBets}
            setTabs={setTabs}
            tabs={tabs}
          />

          {tabs === "placedBet" && (
            <div className="table-responsive w-100">
              <table className="table">
                <thead>
                  <tr>
                    <th>Matched Bet</th>
                    <th className="text-end">Odds</th>
                    <th className="text-end">Stake</th>
                  </tr>
                </thead>
                {myBets.length > 0 && Array.isArray(myBets) && (
                  <tbody>
                    {myBets?.map(({ nation, userRate, amount, betType }, i) => {
                      return (
                        <tr
                          key={i}
                          className={`${betType === "Lay" ? "lay" : "back"}`}
                        >
                          <td>{nation}</td>
                          <td className="text-end">{userRate}</td>
                          <td className="text-end">{amount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                )}
              </table>
            </div>
          )}
          {/* DiamondHeader start */}
          {tabs === "game" && (
            <div className="">
              <div className="casino-video">
                <div className="video-box-container">
                  {/* Iframe video */}
                  <div className="casino-video-box">
                    {type === "ourCasino" && (
                      <iframe
                        allow="fullscreen;"
                        src={url}
                        style={{ widows: "100%", border: "0px" }}
                      ></iframe>
                    )}
                    {type === "virtual" && (
                      <img
                        src={`/dealer-bg/${slug}.png`}
                        className="vcasinobg"
                      />
                    )}
                  </div>
                </div>
                <div className="casino-video-cards">
                  {/* Card start */}
                  <Card data={data} one={picture.one} slug={slug} />
                  {/* Card end */}
                </div>
                {/* Clock start */}
                <Clock data={data} />
                {/* Clock end */}
              </div>

              <div className="casino-detail">
                {slug == "teen6" && (
                  <TeenPattiTwoPointZero
                    data={data}
                    setPlaceBetValue={setPlaceBetValue}
                    setShowBets={setShowBets}
                    lowExposure={lowExposure}
                    evenExposure={evenExposure}
                    oddExposure={oddExposure}
                    highExposure={highExposure}
                    redExposure={redExposure}
                    blackExposure={blackExposure}
                  />
                )}
                {slug == "teensin" && (
                  <Baccrat29
                    data={data}
                    pnlBySelection={pnlBySelection}
                    setShowBets={setShowBets}
                    placeBetValue={placeBetValue}
                    eightIndexZeroExp={eightIndexZeroRunnersEx}
                  />
                )}
                {slug == "card32" || slug == "card32eu" ? (
                  <Card32A
                    data={data}
                    setPlaceBetValue={setPlaceBetValue}
                    setShowBets={setShowBets}
                    lowExposure={lowExposure}
                    highExposure={highExposure}
                    zeroIndexTwoExp={zeroIndexTwoRunnersEx}
                    zeroIndexThreeExp={zeroIndexThreeRunnersEx}
                  />
                ) : null}
                {slug == "race20" && (
                  <RaceTwenty
                    data={data}
                    setPlaceBetValue={setPlaceBetValue}
                    setShowBets={setShowBets}
                    lowExposure={lowExposure}
                    highExposure={highExposure}
                    zeroIndexTwoExp={zeroIndexTwoRunnersEx}
                    zeroIndexThreeExp={zeroIndexThreeRunnersEx}
                    evenExposure={evenExposure}
                    oddExposure={oddExposure}
                    redExposure={redExposure}
                    blackExposure={blackExposure}
                    a23Exposure={a23Exposure}
                    four56Exposure={four56Exposure}
                  />
                )}
                {slug == "war" && (
                  <WarGames
                    one={picture.one}
                    pnlBySelection={pnlBySelection}
                    data={data}
                    setPlaceBetValue={setPlaceBetValue}
                    setShowBets={setShowBets}
                  />
                )}
                {slug == "worli" || slug == "worli2" ? (
                  <WorliGames
                    pnlBySelection={pnlBySelection}
                    data={data}
                    placeBetValue={placeBetValue}
                    setShowBets={setShowBets}
                    evenExposure={evenExposure}
                    redExposure={redExposure}
                    oddExposure={oddExposure}
                    blackExposure={blackExposure}
                  />
                ) : null}
                {slug == "teen8" && (
                  <TeenPattiOpen
                    data={data}
                    setPlaceBetValue={setPlaceBetValue}
                    setShowBets={setShowBets}
                    lowExposure={lowExposure}
                    evenExposure={evenExposure}
                    a23Exposure={a23Exposure}
                    redExposure={redExposure}
                    fourIndexZeroExp={fourIndexZeroRunnersEx}
                    fiveIndexZeroExp={fiveIndexZeroRunnersEx}
                    sixIndexZeroExp={sixIndexZeroRunnersEx}
                    sevenIndexZeroExp={sevenIndexZeroRunnersEx}
                    eightIndexZeroExp={eightIndexZeroRunnersEx}
                    nineIndexZeroExp={nineIndexZeroRunnersEx}
                    tenIndexZeroExp={tenIndexZeroRunnersEx}
                    elevenIndexZeroExp={elevenIndexZeroRunnersEx}
                    twelveIndexZeroExp={twelveIndexZeroRunnersEx}
                    thirteenIndexZeroExp={thirteenIndexZeroRunnersEx}
                    fourteenIndexZeroExp={fourteenIndexZeroRunnersEx}
                    fifteenIndexZeroExp={fifteenIndexZeroRunnersEx}
                    sixteenIndexZeroExp={sixteenIndexZeroRunnersEx}
                    seventeenIndexZeroExp={seventeenIndexZeroRunnersEx}
                    eightTeenIndexZero={eighteenIndexZeroExp}
                    nineteenIndexZeroExp={nineteenIndexZeroExp}
                    twentyIndexZeroExp={twentyIndexZeroExp}
                    twentyOneIndexZeroExp={twentyOneIndexZeroExp}
                    twentyTwoIndexZeroExp={twentyTwoIndexZeroExp}
                    twentyThreeIndexZeroExp={twentyThreeIndexZeroExp}
                  />
                )}
                {slug == "baccarat2" && (
                  <Baccarat2
                    data={data}
                    four56Exposure={four56Exposure}
                    eight910Exposure={eight910Exposure}
                    jqkExposure={jqkExposure}
                    threeIndexFourEx={threeIndexFourExp}
                    one={picture.one}
                    setPlaceBetValue={setPlaceBetValue}
                    setShowBets={setShowBets}
                    lowExposure={lowExposure}
                    highExposure={highExposure}
                    zeroIndexTwoRunnersEx={zeroIndexTwoRunnersEx}
                    evenExposure={evenExposure}
                    redExposure={redExposure}
                    a23Exposure={a23Exposure}
                    fourIndexZeroRunnersEx={fourIndexZeroRunnersEx}
                    fiveIndexZeroRunnersEx={fiveIndexZeroRunnersEx}
                    sixIndexZeroExp={sixIndexZeroRunnersEx}
                  />
                )}
                {slug == "baccarat" ? (
                  <Baccarat
                    one={picture.one}
                    data={data}
                    setPlaceBetValue={setPlaceBetValue}
                    setShowBets={setShowBets}
                    lowExposure={lowExposure}
                    highExposure={highExposure}
                    zeroIndexTwoRunnersEx={zeroIndexTwoRunnersEx}
                    evenExposure={evenExposure}
                    redExposure={redExposure}
                    a23Exposure={a23Exposure}
                    fourIndexZeroRunnersEx={fourIndexZeroRunnersEx}
                    fiveIndexZeroRunnersEx={fiveIndexZeroRunnersEx}
                    sixIndexZeroExp={sixIndexZeroRunnersEx}
                  />
                ) : null}
                {slug === "teen9" && (
                  <TeenPattiTest
                    data={data}
                    setPlaceBetValue={setPlaceBetValue}
                    setShowBets={setShowBets}
                    lowExposure={lowExposure}
                    highExposure={highExposure}
                    zeroIndexTwoRunnersEx={zeroIndexTwoRunnersEx}
                    evenExposure={evenExposure}
                    redExposure={redExposure}
                    a23Exposure={a23Exposure}
                    fourIndexZeroRunnersEx={fourIndexZeroRunnersEx}
                    fiveIndexZeroRunnersEx={fiveIndexZeroRunnersEx}
                    sixIndexZeroExp={sixIndexZeroRunnersEx}
                    sevenIndexZeroExp={sevenIndexZeroRunnersEx}
                    eightIndexZeroExp={eightIndexZeroRunnersEx}
                    nineIndexZeroExp={nineIndexZeroRunnersEx}
                    tenIndexZeroExp={tenIndexZeroRunnersEx}
                    elevenIndexZeroExp={elevenIndexZeroRunnersEx}
                    twelveIndexZeroExp={twelveIndexZeroRunnersEx}
                    thirteenIndexZeroExp={thirteenIndexZeroRunnersEx}
                    fourteenIndexZeroExp={fourteenIndexZeroRunnersEx}
                    fifteenIndexZeroExp={fiveIndexZeroRunnersEx}
                    pnlBySelection={pnlBySelection}
                  />
                )}
                {slug === "poker20" && (
                  <PokerTwenty
                    data={data}
                    setPlaceBetValue={setPlaceBetValue}
                    setShowBets={setShowBets}
                    lowExposure={lowExposure}
                    highExposure={highExposure}
                    evenExposure={evenExposure}
                    redExposure={redExposure}
                    a23Exposure={a23Exposure}
                    fourIndexZeroRunnersEx={fourIndexZeroRunnersEx}
                    fiveIndexZeroExp={fiveIndexZeroRunnersEx}
                    sixIndexZeroExp={sixIndexZeroRunnersEx}
                    sevenIndexZeroExp={sevenIndexZeroRunnersEx}
                    eightIndexZeroExp={eightIndexZeroRunnersEx}
                    nineIndexZeroExp={nineIndexZeroRunnersEx}
                    tenIndexZeroRunnersEx={tenIndexZeroRunnersEx}
                    elevenIndexZeroRunnersEx={elevenIndexZeroRunnersEx}
                    twelveIndexZeroRunnersEx={twelveIndexZeroRunnersEx}
                    thirteenIndexZeroRunnersEx={thirteenIndexZeroRunnersEx}
                    fourteenIndexZeroRunnersEx={fourteenIndexZeroRunnersEx}
                    fifteenIndexZeroRunnersEx={fifteenIndexZeroRunnersEx}
                    sixteenIndexZeroRunnersEx={sixteenIndexZeroRunnersEx}
                    seventeenIndexZeroRunnersEx={seventeenIndexZeroRunnersEx}
                  />
                )}
                {slug === "poker6" && (
                  <PokerSix
                    data={data}
                    setPlaceBetValue={setPlaceBetValue}
                    setShowBets={setShowBets}
                    lowExposure={lowExposure}
                    highExposure={highExposure}
                    zeroIndexTwoExp={zeroIndexThreeRunnersEx}
                    zeroIndexThreeExp={zeroIndexThreeRunnersEx}
                    zeroIndexFourExp={zeroIndexFourRunnersEx}
                    zeroIndexFiveRunnersEx={zeroIndexFiveRunnersEx}
                  />
                )}
                {slug === "poker" && (
                  <PokerOneDay
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
                  />
                )}
                {slug === "vlucky7" ? (
                  <VLucky7
                    A={picture.A}
                    a23Exposure={a23Exposure}
                    blackExposure={blackExposure}
                    data={data}
                    eight={picture.eight}
                    eight910Exposure={eight910Exposure}
                    evenExposure={evenExposure}
                    five={picture.five}
                    four={picture.four}
                    four56Exposure={four56Exposure}
                    highExposure={highExposure}
                    j={picture.j}
                    jqkExposure={jqkExposure}
                    k={picture.k}
                    lowExposure={lowExposure}
                    nine={picture.nine}
                    oddExposure={oddExposure}
                    pnlBySelection={pnlBySelection}
                    q={picture.q}
                    redExposure={redExposure}
                    setPlaceBetValue={setPlaceBetValue}
                    setShowBets={setShowBets}
                    seven={picture.seven}
                    six={picture.six}
                    ten={picture.ten}
                    three={picture.three}
                    two={picture.two}
                  />
                ) : null}
                {slug === "vaaa" && (
                  <VAmarAkbarAnthony
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
                )}
                {slug === "vbtable" && (
                  <VBollywoodCasino
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
                )}
                {slug === "vteen20" && (
                  <VTeenPatti
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
                  />
                )}
                {slug === "vteenmuf" || slug === "teenmuf" ? (
                  <VMTeenPatti
                    data={data}
                    setPlaceBetValue={setPlaceBetValue}
                    setShowBets={setShowBets}
                    lowExposure={lowExposure}
                    highExposure={highExposure}
                    evenExposure={evenExposure}
                    redExposure={redExposure}
                    a23Exposure={a23Exposure}
                    oddExposure={oddExposure}
                  />
                ) : null}
                {slug == "teen3" || slug == "teen32" ? (
                  <InstantTeenPatti
                    data={data}
                    setPlaceBetValue={setPlaceBetValue}
                    setShowBets={setShowBets}
                    lowExposure={lowExposure}
                    highExposure={highExposure}
                  />
                ) : null}
                {slug == "teen20" ? (
                  <TeenPatti20
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
                  />
                ) : null}
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
                    A={picture.A}
                    a23Exposure={a23Exposure}
                    blackExposure={blackExposure}
                    data={data}
                    eight={picture.eight}
                    eight910Exposure={eight910Exposure}
                    evenExposure={evenExposure}
                    five={picture.five}
                    four={picture.four}
                    four56Exposure={four56Exposure}
                    highExposure={highExposure}
                    j={picture.j}
                    jqkExposure={jqkExposure}
                    k={picture.k}
                    lowExposure={lowExposure}
                    nine={picture.nine}
                    oddExposure={oddExposure}
                    pnlBySelection={pnlBySelection}
                    q={picture.q}
                    redExposure={redExposure}
                    setPlaceBetValue={setPlaceBetValue}
                    setShowBets={setShowBets}
                    seven={picture.seven}
                    six={picture.six}
                    ten={picture.ten}
                    three={picture.three}
                    two={picture.two}
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
                <LastResult data={data} />
              </div>
              {/* End casino details */}
            </div>
          )}
          <MatchBets />
        </div>
      </div>

      <div
        className={`sidebar right-sidebar casino-right-sidebar ${
          isSticky ? "sticky" : ""
        }`}
      >
        {/* Place bet start */}
        {showBets && window.innerWidth > 1199 && (
          <PlaceBets
            placeBetValue={placeBetValue}
            showBets={showBets}
            setShowBets={setShowBets}
            refetchCurrentBets={refetchCurrentBets}
            refetchExposure={refetchExposure}
            setErrorMessage={setErrorMessage}
            setSuccessMessage={setSuccessMessage}
          />
        )}
        {/* Place bet end */}

        <MyBets myBets={myBets} slug={slug} />
      </div>
    </>
  );
};

export default PlaceBetDiamond;
