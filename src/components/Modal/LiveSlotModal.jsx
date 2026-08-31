import { useNavigate } from "react-router-dom";
import useLanguage from "../../hooks/use-language";
import { LanguageKey } from "../../constant";

const LiveSlotModal = ({ setShowModal, casinoId }) => {
  const { getLanguage } = useLanguage();
  const navigate = useNavigate();
  const handleNavigate = async () => {
    setShowModal(false);
    navigate(
      `/${casinoId?.base}/${casinoId?.name || casinoId?.providerId}/${
        casinoId?.eventId
      }`,
    );
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
                  <b>{getLanguage(LanguageKey.PLEASE_NOTE)}</b>
                </div>
                <div className="mt-3 text-center" style={{ fontSize: "22px" }}>
                  (1 Point = ₹ 100)
                </div>
                Immerse yourself in the excitement of live casino action, an
                array of captivating slots, and a diverse range of games. With
                over 1000 games available, the fun never ends....
                <div className="disconnected-buttons mt-3">
                  <button
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      color: "white",
                    }}
                    onClick={handleNavigate}
                    type="button"
                    className="btn btn-outline-primary"
                  >
                    {getLanguage(LanguageKey.OK)},
                    {getLanguage(LanguageKey.I_AGREE)}!
                  </button>
                  <a
                    onClick={() => setShowModal(false)}
                    className="btn btn-outline-danger"
                  >
                    <span>{getLanguage(LanguageKey.EXIT)}</span>
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
