const Notification = ({ message, success, setMessage }) => {
  setTimeout(() => {
    setMessage("");
  }, 5000);
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 9999,
        inset: "16px",
        pointerEvents: "none",
      }}
    >
      <div
        className="go4109123758"
        style={{
          left: "0px",
          right: "0px",
          display: "flex",
          position: "absolute",
          transition: "all 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s",
          transform: "translateY(0px)",
          top: "0px",
          justifyContent: "center",
        }}
      >
        <div
          className="go2072408551"
          style={{
            animation:
              "go3223188581 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 normal forwards running",
          }}
        >
          <div className="go685806154">
            <div className="go1858758034"></div>
            <div className="go1579819456">
              {success ? (
                <div className="go2344853693"></div>
              ) : (
                <div className="go2534082608"></div>
              )}
            </div>
          </div>
          <div role="status" aria-live="polite" className="go3958317564">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
