import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { config } from "../../utils/config";

const LiveCasinoVideo = () => {
  const { eventId, providerId } = useParams();
  const [videoUrl, setVideoUrl] = useState("");
  const liveCasinoIframeApi = config?.result?.endpoint?.liveCasinoIframe;
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getLiveCasinoVideo = async () => {
      const res = await axios.post(
        liveCasinoIframeApi,
        { gameId: eventId, providerName: providerId },
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

export default LiveCasinoVideo;
