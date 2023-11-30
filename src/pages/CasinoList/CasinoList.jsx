import { useNavigate } from "react-router-dom";
import { config } from "../../utils/config";

const CasinoList = ({ casino }) => {
  const navigate = useNavigate();
  const isAuraCasino = config?.result?.settings?.casino;

  let name = casino.name;
  name = name.replace(/ /g, "");
  const auraEventId = {
    eventId: casino?.eventId,
    eventTypeId: casino?.eventTypeId,
  };
  const diamondCasino = {
    eventId: casino?.eventId,
    eventTypeId: casino?.eventTypeId,
    casinoSlug: casino?.slug,
  };

  const navigateToCasinoDetails = () => {
    if (isAuraCasino == "aura") {
      localStorage.removeItem("auraEventId");
      localStorage.setItem("auraEventId", JSON.stringify(auraEventId));
      navigate(`/casino/${name}`);
    } else if (isAuraCasino == "diamond") {
      localStorage.removeItem("casino");
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
