import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { config } from "../../utils/config";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import NavbarWithIFrame from "./NavbarWithIFrame";
import Sidebar from "../Sidebar/Sidebar";
import Category from "../Category/Category";

const LiveCasinoVideo = () => {
  const { eventId, name } = useParams();
  const location = useLocation();

  const [videoUrl, setVideoUrl] = useState("");
  const liveCasinoIframeApi = config?.result?.endpoint?.liveCasinoIframe;

  const token = localStorage.getItem("token");
  /* Get live casino video */
  useEffect(() => {
    const getLiveCasinoVideo = async () => {
      let additionalData = {};
      if (location.pathname?.includes("/fantasy-games")) {
        additionalData = { providerId: name };
      }
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
      // console.log({
      //   gameId: eventId,
      //   token: generatedToken,
      //   isHome: false,
      //   mobileOnly: true,
      //   ...additionalData,
      // });
      const res = await axios.post(liveCasinoIframeApi, encryptedData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res.data;
      console.log(data);
      setVideoUrl(data?.gameUrl);
    };
    getLiveCasinoVideo();
  }, [token, eventId, liveCasinoIframeApi, name,location.pathname]);

  return (
    <div>
      <NavbarWithIFrame />
      <div className="main-container">
        <div className="sidebar left-sidebar">
          <Sidebar />
        </div>
        <Category />

        <div className="center-main-container list-page slot-page">
          <iframe
            allow="fullscreen"
            src={videoUrl}
            title="casino video"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              border: " none",
              margin: "0",
              padding: "0",
              overflow: "hidden",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LiveCasinoVideo;
