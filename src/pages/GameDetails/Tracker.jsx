import { useState } from "react";

const Tracker = ({ score }) => {
  const [showTracker, setShowTracker] = useState(false);
  return (
    <>
      {score?.tracker && (
        <div
          onClick={() => setShowTracker((prev) => !prev)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
            height: "40px",
            width: "100%",
            margin: "5px",
            backgroundColor: "#eceaea",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              gap: "5px",
              cursor: "pointer",
            }}
          >
            <span> Tracker</span>
            <svg
              data-cy="ic-tracker-simple"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fill: "currentcolor",
                color: "rgb(242, 201, 76)",
                width: "auto",
                height: "14px",
              }}
            >
              <path
                opacity="1"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5C4 3.89543 4.89543 3 6 3C7.10457 3 8 3.89543 8 5C8 5.51252 7.80722 5.98001 7.49022 6.33391L9.34156 9.11092C9.54775 9.03906 9.76931 9 10 9C10.2307 9 10.4523 9.03907 10.6585 9.11095L12.5098 6.33398C12.1928 5.98007 12 5.51255 12 5C12 3.89543 12.8954 3 14 3C15.1046 3 16 3.89543 16 5C16 6.10457 15.1046 7 14 7C13.7693 7 13.5478 6.96095 13.3416 6.8891L11.4903 9.66613C11.8072 10.02 12 10.4875 12 11C12 12.1046 11.1046 13 10 13C8.89543 13 8 12.1046 8 11C8 10.4875 8.19279 10.02 8.5098 9.66606L6.65847 6.88907C6.45227 6.96094 6.2307 7 6 7C5.76933 7 5.54779 6.96095 5.34161 6.8891L3.49026 9.66613C3.80724 10.02 4 10.4875 4 11C4 12.1046 3.10457 13 2 13C0.895431 13 0 12.1046 0 11C0 9.89543 0.895431 9 2 9C2.23072 9 2.45232 9.03907 2.65853 9.11095L4.50984 6.33398C4.1928 5.98007 4 5.51255 4 5Z"
              ></path>
            </svg>
          </div>
        </div>
      )}

      {score && score?.tracker !== null && showTracker && (
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            height: "125px",
          }}
        >
          <iframe
            style={{
              width: "100%",
              height: "auto",
              position: "relative",
              overflow: "hidden",
              background: "transparent",
            }}
            src={score?.tracker}
            width="100%"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Tracker;
