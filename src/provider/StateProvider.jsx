import { createContext, useEffect, useState } from "react";
import { getSetApis } from "../utils/config";
import { API, settings } from "../utils";
import notice from "../../notice.json";
export const StateContext = createContext(null);
const StateProvider = ({ children }) => {
  const [predictOdds, setPredictOdds] = useState([]);
  const [sports, setSports] = useState(4);
  const [addBank, setAddBank] = useState(false);
  const [buttonValue, SetButtonValue] = useState(false);
  const [placeBetValue, setPlaceBetValue] = useState({});
  const [filterGames, setFilterGames] = useState("all");
  const [refetchBetsExposure, setRefetchBetsExposure] = useState(null);
  const [successRegister, setSuccessRegister] = useState("");
  const [logo, setLogo] = useState("");
  const [noticeLoaded, setNoticeLoaded] = useState(false);
  const baseUrl = notice?.result?.settings?.baseUrl;
  useEffect(() => {
    getSetApis(setNoticeLoaded, baseUrl);
  }, [noticeLoaded, baseUrl]);

  useEffect(() => {
    if (noticeLoaded) {
      /* Dynamically append  theme css  */
      const logo = `${API.assets}/${settings.siteUrl}/logo.${settings.logoFormat}`;
      setLogo(logo);
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";

      if (settings.build === "production") {
        link.href = `${API.assets}/${settings.siteUrl}/theme.css`;
        document.head.appendChild(link);
      } else {
        link.href = `/src/static/front/css/theme.css`;
        document.head.appendChild(link);
      }
      /* Dynamically append site logo  */
      const FavIconLink = document.createElement("link");
      FavIconLink.rel = "icon";
      FavIconLink.type = "image/png";
      FavIconLink.href = `${API.assets}/${settings.siteUrl}/favicon.png`;
      document.head.appendChild(FavIconLink);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [noticeLoaded]);

  /* These are all exposure for state */
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
  const [zeroIndexSixRunnersEx, setZeroIndexSixEx] = useState([]);

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
  const [tenIndexZeroRunnersEx, setTenIndexZeroEx] = useState([]);
  const [elevenIndexZeroRunnersEx, setElevenIndexZeroEx] = useState([]);
  const [twelveIndexZeroRunnersEx, setTwelveIndexZeroEx] = useState([]);
  const [thirteenIndexZeroRunnersEx, setThirteenIndexZeroEx] = useState([]);
  const [fourteenIndexZeroRunnersEx, setFourteenIndexZeroEx] = useState([]);
  const [fifteenIndexZeroRunnersEx, setFifteenIndexZeroEx] = useState([]);
  const [sixteenIndexZeroRunnersEx, setSixteenIndexZeroEx] = useState([]);
  const [seventeenIndexZeroRunnersEx, setSeventeenIndexZeroEx] = useState([]);

  if (!noticeLoaded) {
    return;
  }

  const stateInfo = {
    sports,
    setSports,
    buttonValue,
    SetButtonValue,
    placeBetValue,
    setPlaceBetValue,
    filterGames,
    setFilterGames,
    refetchBetsExposure,
    setRefetchBetsExposure,
    successRegister,
    setSuccessRegister,
    logo,
    setLogo,
    addBank,
    setAddBank,

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
    zeroIndexSixRunnersEx,
    setZeroIndexSixEx,
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
    predictOdds,
    setPredictOdds,
  };
  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
