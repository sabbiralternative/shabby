import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../../utils/config";
import { useParams } from "react-router-dom";
import UseState from "../../hooks/UseState";

const SlotGamesVideo = () => {
  const { eventId, providerId } = useParams();
  const [videoUrl, setVideoUrl] = useState("");
  const liveCasinoIframeApi = config?.result?.endpoint?.liveCasinoIframe;
  const token = localStorage.getItem("token");
  const { generatedToken } = UseState();
  useEffect(() => {
    const getLiveCasinoVideo = async () => {
      const res = await axios.post(
        liveCasinoIframeApi,
        { gameId: eventId, providerName: providerId,token:generatedToken },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const data = res.data;
      setVideoUrl(data?.gameUrl);
    };
    getLiveCasinoVideo();
  }, [token, eventId, providerId, liveCasinoIframeApi]);

  return (
    <div className="slot-iframe show">
      <iframe
        allow="fullscreen;"
        src={videoUrl}
        style={{
          width: "100%",
          border: "0px",
        }}
      ></iframe>
    </div>
  );
};

export default SlotGamesVideo;
