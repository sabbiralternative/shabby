import axios from "axios";
import { API } from "../../../utils";
import { useEffect, useRef, useState } from "react";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";

const LastResult = ({ data }) => {
  const singleDiamondRef = useRef();
  useCloseModalClickOutside(singleDiamondRef, () => {
    setSingleDiamond("");
  });

  const [singleDiamond, setSingleDiamond] = useState("");
  const { eventId } = JSON.parse(localStorage.getItem("casino"));
  const getSingleDiamond = async (roundId) => {
    const { data } = await axios.get(`${API.singleDiamond}/${roundId}`);
    if (data?.success) {
      console.log(data);
      setSingleDiamond(data?.result?.html);
    }
  };

  useEffect(() => {
    const button = document.getElementsByClassName("btn-close")[0];

    const handleClick = () => {
      setSingleDiamond("");
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
  }, [singleDiamond]);

  return (
    <>
      {singleDiamond && (
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
                ref={singleDiamondRef}
                dangerouslySetInnerHTML={{
                  __html: singleDiamond,
                }}
              ></div>
            </div>
          </div>
        </>
      )}
      <div className="casino-last-result-title">
        <span>Last Result</span>
        <span>
          <a>View All</a>
        </span>
      </div>
      <div className="casino-last-results">
        {data &&
          data?.length > 0 &&
          data[0]?.recent_winner?.map(({ winner, roundId }, i) => {
            return (
              <span
                onClick={() => getSingleDiamond(roundId)}
                key={i}
                className={`result 
       
        ${
          (eventId == 10004 || eventId == 10005 || eventId == 10082) &&
          winner?.split("")[0] === "A"
            ? " result-a"
            : ""
        }
        ${
          (eventId == 10004 || eventId == 10005 || eventId == 10082) &&
          winner?.split("")[0] === "B"
            ? " result-b"
            : ""
        }
        ${
          (eventId == 10004 || eventId == 10005 || eventId == 10082) &&
          winner?.split("")[0] === "C"
            ? " result-c"
            : ""
        }
        ${
          (eventId == 10002 ||
            eventId == 10003 ||
            eventId == 10001 ||
            eventId == 10081) &&
          winner?.split("")[0] === "L"
            ? " result-a"
            : ""
        }
        ${
          (eventId == 10002 ||
            eventId == 10003 ||
            eventId == 10001 ||
            eventId == 10081) &&
          winner?.split("")[0] === "H"
            ? " result-b"
            : ""
        }
        ${
          (eventId == 10002 ||
            eventId == 10003 ||
            eventId == 10001 ||
            eventId == 10081) &&
          winner?.split("")[0] === "T"
            ? " result-b"
            : ""
        }
        ${eventId == 10018 && winner?.split("")[0] === "T" ? " result-a" : ""}
        ${eventId == 10018 && winner?.split("")[0] === "L" ? " result-b" : ""}
        ${eventId == 10018 && winner?.split("")[0] === "D" ? " result-c" : ""}
        ${
          (eventId == 10014 || eventId == 10015 || 10019) &&
          winner?.split("")[0] === "A"
            ? " result-a"
            : ""
        }
        ${
          (eventId == 10014 || eventId == 10015 || 10019 || eventId == 10017) &&
          winner?.split("")[0] === "B"
            ? " result-b"
            : ""
        }
        ${
          (eventId == 10012 || eventId == 10013) && winner?.split("")[0] === "P"
            ? " result-a"
            : ""
        }
        ${
          (eventId == 10012 || eventId == 10013) && winner?.split("")[0] === "D"
            ? " result-b"
            : ""
        }


        ${
          (eventId == 10010 || eventId == 10013) && winner?.split("")[0] === "L"
            ? " result-c"
            : ""
        }
        ${
          (eventId == 10010 || eventId == 10013) && winner?.split("")[0] === "T"
            ? " result-b"
            : ""
        }
        ${
          (eventId == 10010 || eventId == 10013) && winner?.split("")[0] === "D"
            ? " result-a"
            : ""
        }
        ${eventId == 10006 || eventId == 10083 ? " result-b" : ""}
        ${
          (eventId == 10007 || eventId == 10008) && winner?.split("")[0] === "T"
            ? " result-a"
            : ""
        }
        ${
          (eventId == 10007 || eventId == 10008) && winner?.split("")[0] === "D"
            ? " result-b"
            : ""
        }

        ${eventId == 10019 && winner?.split("")[0] === "R" ? " result-b" : ""}
        `}
              >
                {winner?.split("")[0]}
              </span>
            );
          })}
      </div>
    </>
  );
};

export default LastResult;
