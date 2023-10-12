import axios from "axios";
import { useNavigate } from "react-router-dom";
import { config } from "../../utils/config";

const CasinoList = ({ casino }) => {
  const navigate = useNavigate();
  const getSingleCasinoApi = config?.result?.endpoint?.accessToken;
  const token = localStorage.getItem("token");
  let name = casino.name;
  name = name.replace(/ /g, "");

  const getCasinoVideo = async () => {
    const res = await axios.post(
      getSingleCasinoApi,
      {
        eventId: casino.eventId,
        eventTypeId: casino.eventTypeId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const link = res?.data?.result?.url;
    if (link) {
      localStorage.removeItem("casinoUrl");
      localStorage.setItem("casinoUrl", link);
      navigate(`/casino/${name}`);
    }
  };

  return (
    <div onClick={getCasinoVideo} className="casino-list-item">
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
