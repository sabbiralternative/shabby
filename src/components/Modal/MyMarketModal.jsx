import { useRef } from "react";
import CloseModalClickOutside from "../../hooks/CloseModalClickOutside";
import { Link } from "react-router-dom";

const MyMarketModal = ({ setShowMyMarket, myMarketData }) => {
  const modalRef = useRef();
  CloseModalClickOutside(modalRef, () => {
    setShowMyMarket(false);
  });

  return (
    <>
      <div className="fade modal-backdrop show"></div>
      <div
        role="dialog"
        aria-modal="true"
        className="fade modal show"
        tabIndex="-1"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content" ref={modalRef}>
            <div className="modal-header">
              <div className="modal-title h4">My Market</div>
              <button
                onClick={() => setShowMyMarket(false)}
                type="button"
                className="btn-close"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Event Type</th>
                      <th>Event Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myMarketData?.map((event, i) => {
                      return (
                        <tr key={i}>
                          <td>{event?.eventTypeName}</td>
                          <td>
                            <Link
                              onClick={() => setShowMyMarket(false)}
                              to={`/game-details/${event?.eventTypeId}/${event?.eventId}`}
                            >
                              {event?.eventName}
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyMarketModal;
