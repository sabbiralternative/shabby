const LastResult = ({ data }) => {
  const { eventId } = JSON.parse(localStorage.getItem("casino"));

  return (
    <>
      <div className="casino-last-result-title">
        <span>Last Result</span>
        <span>
          <a>View All</a>
        </span>
      </div>
      <div className="casino-last-results">
        {data &&
          data?.length > 0 &&
          data[0]?.recent_winner?.map(({ winner }, i) => {
            return (
              <span
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

        ${
          eventId == 10019 && winner?.split("")[0] === "R"
            ? " result-b"
            : ""
        }
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
