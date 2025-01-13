import { useEffect, useRef, useState } from "react";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import axios from "axios";
import { API } from "../../../utils";

const DiamondHeader = ({ data, myBets, setTabs, tabs }) => {
  // const { eventId } = JSON.parse(localStorage.getItem("casino"));
  const singleDiamondRulesRef = useRef();
  const [singleDiamondRules, setSingleDiamondRules] = useState("");
  useCloseModalClickOutside(singleDiamondRulesRef, () => {
    setSingleDiamondRules("");
  });

  const getSingleDiamondRules = async (eventTypeId, eventId) => {
    const { data } = await axios.get(
      `${API.singleDiamondRules}/${eventTypeId}/${eventId}`
    );
    if (data?.success) {
      setSingleDiamondRules(data?.result?.html);
    }
  };

  useEffect(() => {
    const button = document.getElementsByClassName("btn-close")[0];

    const handleClick = () => {
      setSingleDiamondRules("");
    };

    if (button) {
      button.addEventListener("click", handleClick);
    }

    // Cleanup the event listener
    return () => {
      if (button) {
        button.removeEventListener("click", handleClick);
      }
    };
  }, [singleDiamondRules]);
  return (
    <>
      {singleDiamondRules && (
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
              <div
                ref={singleDiamondRulesRef}
                dangerouslySetInnerHTML={{
                  __html: singleDiamondRules,
                }}
              ></div>
            </div>
          </div>
        </>
      )}
      <div className="casino-header">
        <span className="casino-name">
          {data[0]?.eventName}
          <a
            onClick={() =>
              getSingleDiamondRules(data?.[0]?.eventTypeId, data?.[0]?.eventId)
            }
            className="ms-1"
          >
            <small>Rules</small>
          </a>
        </span>
        <span className="casino-rid d-none d-xl-inline-block">
          <small>
            Round ID: <span>{data[0]?.roundId}</span>
          </small>
        </span>
      </div>
      <div className="casino-title-header-mobile d-xl-none">
        <ul className="nav nav-tabs menu-tabs">
          <li
            onClick={() => setTabs("game")}
            className="nav-item"
            style={{ cursor: "pointer" }}
          >
            <div className={`nav-link ${tabs === "game" ? "active" : ""}`}>
              Game
            </div>
          </li>
          <li
            onClick={() => setTabs("placedBet")}
            className="nav-item"
            style={{ cursor: "pointer" }}
          >
            <div className={`nav-link ${tabs === "placedBet" ? "active" : ""}`}>
              Placed Bet ({myBets?.length})
            </div>
          </li>
        </ul>

        <div className="pe-2">
          <span className="casino-rid">
            Round ID: <span>{data[0]?.roundId}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default DiamondHeader;
