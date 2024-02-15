import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../../utils/config";
import { useParams } from "react-router-dom";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";

const SlotGamesVideo = () => {
  const { eventId, providerId } = useParams();
  const [videoUrl, setVideoUrl] = useState("");
  const liveCasinoIframeApi = config?.result?.endpoint?.liveCasinoIframe;
  const token = localStorage.getItem("token");


  /* Get slot casino video url */
  useEffect(() => {
    const getLiveCasinoVideo = async () => {
      /* random token */
      const generatedToken = UseTokenGenerator();
      /* Encrypt post data */
      const encryptedData = UseEncryptData({
        gameId: eventId,
        providerName: providerId,
        token: generatedToken,
      });
      const res = await axios.post(liveCasinoIframeApi, encryptedData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res.data;
      setVideoUrl(data?.gameUrl);
    };
    getLiveCasinoVideo();
  }, [token, eventId, providerId, liveCasinoIframeApi]);

  return (
    <div className="slot-iframe show">
      <iframe
        allow="fullscreen;"
        src={videoUrl?.length > 0 && videoUrl}
        style={{
          width: "100%",
          border: "0px",
        }}
      ></iframe>
    </div>
  );
};

export default SlotGamesVideo;
