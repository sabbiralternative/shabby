import { useNavigate } from "react-router-dom";
import { config } from "../../utils/config";

const CasinoList = ({ casino }) => {
  const navigate = useNavigate();
  const isAuraCasino = config?.result?.settings?.casino;
  // let name = casino.name;
  // name = name.replace(/ /g, "");
  const diamondCasino = {
    eventId: casino?.eventId,
    eventTypeId: casino?.eventTypeId,
    casinoSlug: casino?.slug,
    type: "ourCasino",
  };

  const navigateToCasinoDetails = async () => {
    if (isAuraCasino == "aura" || isAuraCasino === "test") {
      navigate(`/casino/${casino?.eventId}/${casino?.eventTypeId}`);
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
