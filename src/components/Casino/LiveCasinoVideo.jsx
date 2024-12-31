import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import UseEncryptData from "../../hooks/UseEncryptData";
import NavbarWithIFrame from "./NavbarWithIFrame";
import Sidebar from "../Sidebar/Sidebar";
import IFrameLoader from "../Loader/IFrameLoader";
import { API } from "../../utils";
import { AxiosSecure } from "../../lib/AxiosSecure";

const LiveCasinoVideo = () => {
  const { eventId, name } = useParams();
  const location = useLocation();
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  /* Get live casino video */
  useEffect(() => {
    const getLiveCasinoVideo = async () => {
      setLoading(true);
      let additionalData = {};
      if (location.pathname?.includes("/fantasy-games")) {
        additionalData = { providerId: name };
      }

      /* Encrypt post data */
      const payload = UseEncryptData({
        gameId: eventId,
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
      const res = await AxiosSecure.post(API.liveCasinoIframe, payload);
      const data = res.data;
      console.log(data);
      setVideoUrl(data?.gameUrl);
      setLoading(false);
    };
    getLiveCasinoVideo();
  }, [eventId, location, name]);
  // token, eventId, liveCasinoIframeApi, name, location.pathname

  // if(loading){
  //   return <IFrameLoader/>
  // }
  return (
    <div>
      <NavbarWithIFrame />
      <div className="main-container">
        <div className="sidebar left-sidebar">
          <Sidebar />
        </div>

        <div
          className="center-main-container list-page slot-page"
          style={{ backgroundColor: "black" }}
        >
          {loading && <IFrameLoader bgColor="black" spinnerColor="white" />}
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
