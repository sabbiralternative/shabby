/* eslint-disable react/no-unknown-property */
import { useNavigate } from "react-router-dom";
import { settings } from "../../utils";

const CasinoList = ({ casino }) => {
  const token = localStorage.getItem("token");
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
    if (token) {
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
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {settings?.casino === "mac88" ? (
        <div
          style={{ cursor: "pointer" }}
          onClick={navigateToCasinoDetails}
          className="casino-list-item-mac88"
        >
          <div style={{ width: "100%", padding: "1px" }}>
            <img
              className="img-fluid"
              style={{ height: "110px", width: "100%" }}
              src={casino?.img}
            />
            <div
              className="casino-list-item-mac88-name"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage:
                  "linear-gradient(var(--bg-primary), var(--bg-secondary))",
                color: "white",
                padding: "2px 0px",
              }}
            >
              {casino?.game_name}
            </div>
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
