import UseState from "../../../hooks/UseState";

const LastResult = ({ data }) => {
  const { eventName } = UseState();

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
          eventName === "Amar Akbar Anthony" && winner.split("")[0] === "A"
            ? " result-a"
            : ""
        }
        ${
          eventName === "Amar Akbar Anthony" && winner.split("")[0] === "B"
            ? " result-b"
            : ""
        }
        ${
          eventName === "Amar Akbar Anthony" && winner.split("")[0] === "C"
            ? " result-c"
            : ""
        }
        ${
          eventName === "Lucky 7A" && winner.split("")[0] === "L"
            ? " result-a"
            : ""
        }
        ${
          eventName === "Lucky 7A" && winner.split("")[0] === "H"
            ? " result-b"
            : ""
        }
        ${
          eventName === "Teenpatti Test" && winner.split("")[0] === "T"
            ? " result-a"
            : ""
        }
        ${
          eventName === "Teenpatti Test" && winner.split("")[0] === "L"
            ? " result-b"
            : ""
        }
        ${
          eventName === "Teenpatti Test" && winner.split("")[0] === "D"
            ? " result-c"
            : ""
        }


        ${
          eventName === "Instant Teenpatti" ||
          (eventName === "TP OPEN" && winner.split("")[0] === "A")
            ? " result-a"
            : ""
        }
        ${
          eventName === "Instant Teenpatti" ||
          (eventName === "TP OPEN" && winner.split("")[0] === "B")
            ? " result-b"
            : ""
        }
















































        ${eventName === "Bollywood Casino" ? " result-b" : ""}
        `}
              >
                {winner.split("")[0]}
              </span>
            );
          })}
        {/* <span className="result result-a">D</span>
        <span className="result result-a">D</span>
        <span className="result result-b">T</span>
        <span className="result result-a">D</span>
        <span className="result result-b">T</span>
        <span className="result result-b">T</span>
        <span className="result result-b">T</span>
        <span className="result result-b">T</span>
        <span className="result result-b">T</span>
        <span className="result result-b">T</span> */}
      </div>
    </>
  );
};

export default LastResult;
