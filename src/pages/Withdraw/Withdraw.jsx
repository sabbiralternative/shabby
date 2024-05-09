import { API, settings } from "../../utils";

const Withdraw = () => {
  const token = localStorage.getItem("token");
  /* withdraw iframe */
  return (
    <div className="center-container">
      <iframe
        allow="fullscreen;"
        src={`${API.withdrawIframe}/${settings.siteUrl}/${token}`}
        style={{ width: "100%", height: "100%", border: "0px" }}
      ></iframe>
    </div>
  );
};

export default Withdraw;
