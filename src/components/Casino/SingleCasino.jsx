import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import NavbarWithIFrame from "./NavbarWithIFrame";
import IFrameLoader from "../Loader/IFrameLoader";
import { API } from "../../utils";
import { AxiosSecure } from "../../lib/AxiosSecure";

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
      /* Encryp */
      const payload = {
        eventId: eventId,
        eventTypeId: eventTypeId,
        mobileOnly: true,
      };
      const res = await AxiosSecure.post(API.accessToken, payload);
      const link = res?.data?.result?.url;
      setLoading(false);

      if (link) {
        setUrl(link);
      }
    };
    CasinoIFrame();
  }, [eventId, eventTypeId, token]);

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
                // position: "absolute",
                width: "100%",
                height: "100%",
                minHeight: "100vh",
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
