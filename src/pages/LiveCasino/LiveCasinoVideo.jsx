import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { config } from "../../utils/config";
import useTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";

const LiveCasinoVideo = () => {
  const { eventId, providerId } = useParams();
  const [videoUrl, setVideoUrl] = useState("");
  const liveCasinoIframeApi = config?.result?.endpoint?.liveCasinoIframe;
  const token = localStorage.getItem("token");
  const generatedToken  = useTokenGenerator();


  useEffect(() => {
    const getLiveCasinoVideo = async () => {
      const encryptedData = UseEncryptData({ gameId: eventId, providerName: providerId,token:generatedToken });
      const res = await axios.post(
        liveCasinoIframeApi,encryptedData
        ,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const data = res.data;
      setVideoUrl(data?.gameUrl);
    };
    getLiveCasinoVideo();
  }, [token, eventId, providerId, liveCasinoIframeApi,generatedToken]);

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
