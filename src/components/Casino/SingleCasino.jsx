import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../../utils/config";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import NavbarWithIFrame from "./NavbarWithIFrame";

const SingleCasino = () => {
  const [url, setUrl] = useState(null);
  const getSingleCasinoApi = config?.result?.endpoint?.accessToken;
  const { eventId, eventTypeId } = useParams();

  const token = localStorage.getItem("token");

  /* Get casino iframe */
  useEffect(() => {
    const CasinoIFrame = async () => {
      /* Random token */
      const generatedToken = UseTokenGenerator();
      /* Encryp */
      const encryptedData = UseEncryptData({
        eventId: eventId,
        eventTypeId: eventTypeId,
        token: generatedToken,
        mobileOnly: true,
      });
      const res = await axios.post(getSingleCasinoApi, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const link = res?.data?.result?.url;
      if (link) {
        setUrl(link);
      }
    };
    CasinoIFrame();
  }, []);

  return (
    <>
      <div>
        <NavbarWithIFrame />
        <div className="main-container">
          <div className="sidebar left-sidebar">
            <Sidebar />
          </div>

          <div className="center-main-container list-page slot-page">
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
