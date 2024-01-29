import { useNavigate } from "react-router-dom";
import { config } from "../../utils/config";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
// import { useState } from "react";
import axios from "axios";
const LiveSlotModal = ({ setShowModal, casinoId }) => {
  const navigate = useNavigate();
  // const [videoUrl, setVideoUrl] = useState("");
  const liveCasinoIframeApi = config?.result?.endpoint?.liveCasinoIframe;
  const token = localStorage.getItem("token");
  const handleNavigate = async () => {
    // console.log(casinoId);
    // const generatedToken = UseTokenGenerator();
    // const encryptedData = UseEncryptData({
    //   gameId: casinoId?.eventId,
    //   providerName: casinoId?.providerId,
    //   token: generatedToken,
    // });

    // // console.log(encryptedData);

    // const res = await axios.post(liveCasinoIframeApi, encryptedData, {
    //   headers: { Authorization: `Bearer ${token}` },
    // });
    // const data = res;
    // console.log(data);
    // window.open(data, "_blank");
    // setVideoUrl(data?.gameUrl);
    setShowModal(false);

    
    // window.open(
    //   `/live-casino/${casinoId?.eventId}/${casinoId?.providerId}`,
    //   "_blank"
    // );
    navigate(`/live-casino/${casinoId?.eventId}/${casinoId?.providerId}`)
  };
  return (
    <>
      <div className="fade modal-backdrop show"></div>
      <div
        role="dialog"
        aria-modal="true"
        className="fade modal show"
        tabIndex="-1"
        style={{ display: "block", paddingRight: "17px" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="p-0 modal-body">
              <div className="disconnected-message">
                <div className="text-center">
                  <i
                    className="fas fa-exclamation-triangle me-2"
                    style={{ fontSize: "14px" }}
                  ></i>
                  <b>Please note</b>
                </div>
                <div className="mt-3 text-center" style={{ fontSize: "22px" }}>
                  (1 Point = ₹ 100)
                </div>
                Immerse yourself in the excitement of live casino action, an
                array of captivating slots, and a diverse range of games. With
                over 1000 games available, the fun never ends....
                <div className="disconnected-buttons mt-3">
                  <button
                    onClick={handleNavigate}
                    type="button"
                    className="btn btn-outline-primary"
                  >
                    Ok,I Agree!
                  </button>
                  <a
                    onClick={() => setShowModal(false)}
                    className="btn btn-outline-danger"
                  >
                    <span>Exit</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveSlotModal;
