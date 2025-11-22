const LiveMatch = ({
  setShowMobileTv,
  setFetchVideo,
  showMobileTv,
  videoUrl,
}) => {
  return (
    <div
      style={{
        cursor: "pointer",
      }}
      onClick={() => {
        setShowMobileTv((prev) => !prev);
        setFetchVideo(true);
      }}
      className="sidebar-box"
    >
      <div className="sidebar-title">
        <h4>Live Match</h4>
      </div>
      {showMobileTv && (
        <div className="live-tv">
          <iframe
            src={videoUrl?.url}
            referrerPolicy={
              videoUrl?.ref === false ? "no-referrer" : "no-referrer"
            }
            style={{
              width: "100%",
              border: "0px",
            }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default LiveMatch;
