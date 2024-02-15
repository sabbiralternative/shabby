import { useNavigate } from "react-router-dom";
import { config } from "../../utils/config";
import UseEncryptData from "../../hooks/UseEncryptData";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import axios from "axios";

const CasinoList = ({ casino }) => {
  const navigate = useNavigate();
  const isAuraCasino = config?.result?.settings?.casino;
  const getSingleCasinoApi = config?.result?.endpoint?.accessToken;
  const token = localStorage.getItem("token");
  // let name = casino.name;
  // name = name.replace(/ /g, "");
  const auraEventId = {
    eventId: casino?.eventId,
    eventTypeId: casino?.eventTypeId,
  };
  const diamondCasino = {
    eventId: casino?.eventId,
    eventTypeId: casino?.eventTypeId,
    casinoSlug: casino?.slug,
    type: "ourCasino",
  };

  const navigateToCasinoDetails = async () => {
    if (isAuraCasino == "aura" || isAuraCasino === "test") {
      localStorage.removeItem("casino");
      localStorage.removeItem("auraEventId");
      localStorage.setItem("auraEventId", JSON.stringify(auraEventId));
      const generatedToken = UseTokenGenerator();
      const encryptedVideoData = UseEncryptData({
        eventId: casino?.eventId,
        eventTypeId: casino?.eventTypeId,
        token: generatedToken,
      });

      const res = await axios.post(getSingleCasinoApi, encryptedVideoData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;

      if (data.success) {
        window.open(data?.result?.url, "_blank");
      }

      // window.open(
      //   `/casino/${name}`,
      //   "_blank"
      // );
      // navigate(`/casino/${name}`);
    } else if (isAuraCasino == "diamond") {
      localStorage.removeItem("casino");
      localStorage.removeItem("auraEventId");
      localStorage.setItem("casino", JSON.stringify(diamondCasino));
      navigate(`/our-casino/${casino?.slug}`);
    }
  };

  return (
    <div onClick={navigateToCasinoDetails} className="casino-list-item">
      <div
        className="casino-list-item-banner"
        style={{
          backgroundImage: `url(${casino.image})`,
        }}
      ></div>
    </div>
  );
};

export default CasinoList;
