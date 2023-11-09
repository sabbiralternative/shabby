import axios from "axios";
import { useState } from "react";
import { config } from "../../utils/config";

const SingleCasino = () => {
  const [url, setUrl] = useState(null);
  const getSingleCasinoApi = config?.result?.endpoint?.accessToken;
  const { eventId, eventTypeId } = JSON.parse(
    localStorage.getItem("auraEventId")
  );
  const token = localStorage.getItem("token");
  const navigateToCasinoDetails = async () => {
    const res = await axios.post(
      getSingleCasinoApi,
      {
        eventId: eventId,
        eventTypeId: eventTypeId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const link = res?.data?.result?.url;
    if (link) {
      setUrl(link);
    }
  };
  navigateToCasinoDetails();
  return (
    <>
      <iframe
        src={url}
        title="casino video"
        style={{ border: "0px", height: "100vh", width: "100vw" }}
      ></iframe>
    </>
  );
};

export default SingleCasino;
