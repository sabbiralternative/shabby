/* eslint-disable react/no-unknown-property */
import { useNavigate } from "react-router-dom";
import { settings } from "../../utils";

const CasinoList = ({ casino }) => {
  const navigate = useNavigate();

  // let name = casino.name;
  // name = name.replace(/ /g, "");
  const diamondCasino = {
    eventId: casino?.eventId,
    eventTypeId: casino?.eventTypeId,
    casinoSlug: casino?.slug,
    type: "ourCasino",
  };

  const navigateToCasinoDetails = async () => {
    if (settings.casino == "aura" || settings.casino === "test") {
      navigate(`/casino/${casino?.eventId}/${casino?.eventTypeId}`);
    } else if (settings.casino == "diamond") {
      localStorage.removeItem("casino");
      localStorage.removeItem("auraEventId");
      localStorage.setItem("casino", JSON.stringify(diamondCasino));
      navigate(`/our-casino/${casino?.slug}`);
    } else if (settings.casino === "mac88") {
      navigate(
        `/mac88/${casino?.game_name.replace(/ /g, "")}/${casino?.game_id}`
      );
    }
  };

  console.log(casino);

  return (
    <>
      {settings?.casino === "mac88" ? (
        <div
          onClick={navigateToCasinoDetails}
          className="casino-list-item"
          style={{ width: "100%" }}
        >
          <div
            className="casino-list-item-banner"
            style={{
              backgroundImage: `url(${casino.img})`,
            }}
          ></div>
          <div
            style={{
              backgroundColor: "var(--bg-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            {casino?.game_name}
          </div>
        </div>
      ) : (
        <div onClick={navigateToCasinoDetails} className="casino-list-item">
          <div
            className="casino-list-item-banner"
            style={{
              backgroundImage: `url(${casino.image})`,
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export default CasinoList;
