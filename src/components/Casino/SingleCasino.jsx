import axios from "axios";
import { useEffect, useState } from "react";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import NavbarWithIFrame from "./NavbarWithIFrame";
import IFrameLoader from "../Loader/IFrameLoader";
import { API } from "../../utils";

const SingleCasino = () => {
  const [url, setUrl] = useState(null);
  const { eventId, eventTypeId } = useParams();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  /* Get casino iframe */
  useEffect(() => {
    const CasinoIFrame = async () => {
      /* Random token */
      setLoading(true);
      const generatedToken = UseTokenGenerator();
      /* Encryp */
      const encryptedData = UseEncryptData({
        eventId: eventId,
        eventTypeId: eventTypeId,
        token: generatedToken,
        mobileOnly: true,
      });
      const res = await axios.post(API.accessToken, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const link = res?.data?.result?.url;
      setLoading(false);
      console.log(link);
      if (link) {
        setUrl(link);
      }
    };
    CasinoIFrame();
  }, []);

  // if(loading){
  //   return <IFrameLoader/>
  // }

  return (
    <>
      <div>
        <NavbarWithIFrame />
        <div className="main-container">
          <div className="sidebar left-sidebar">
            <Sidebar />
          </div>

          <div className="center-main-container list-page slot-page">
            {loading && <IFrameLoader />}
            <iframe
              allow="fullscreen"
              src={url}
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
    </>
  );
};

export default SingleCasino;
