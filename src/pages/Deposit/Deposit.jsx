import { API, settings } from "../../utils";

const Deposit = () => {
  const token = localStorage.getItem("token");
  /* Deposit iframe */
  return (
    <div className="center-container">
      <iframe
        allow="fullscreen;"
        src={`${API.depositIframe}/${settings.siteUrl}/${token}`}
        style={{ width: "100%", height: "100%", border: "0px" }}
      ></iframe>
    </div>
  );
};

export default Deposit;
