import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { config } from "../../utils/config";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";

const LiveCasinoVideo = () => {
  const { eventId, name } = useParams();
  const location = useLocation();
  const [videoUrl, setVideoUrl] = useState("");
  const liveCasinoIframeApi = config?.result?.endpoint?.liveCasinoIframe;
  let additionalData = {};
  if (location.pathname?.includes ("/fantasy-games")) {
    additionalData = { providerId: name };
  }
  const token = localStorage.getItem("token");
  /* Get live casino video */
  useEffect(() => {
    const getLiveCasinoVideo = async () => {
      /* Random token */
      const generatedToken = UseTokenGenerator();
      /* Encrypt post data */
      const encryptedData = UseEncryptData({
        gameId: eventId,
        token: generatedToken,
        isHome: false,
        mobileOnly: true,
        ...additionalData,
      });
  
      const res = await axios.post(liveCasinoIframeApi, encryptedData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res.data;
    
      setVideoUrl(data?.gameUrl);
    };
    getLiveCasinoVideo();
  }, [token, eventId, liveCasinoIframeApi, name]);

  return (
    <iframe
      allow="fullscreen;"
      src={videoUrl}
      style={{
        width: "100%",
        border: "0px",
      }}
    ></iframe>
  );
};

export default LiveCasinoVideo;
