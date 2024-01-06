import { config } from "../../utils/config";

const Deposit = () => {
  const depositIframe = config?.result?.endpoint?.depositIframe;
  const siteUrl = config?.result?.settings?.siteUrl;
  const token = localStorage.getItem("token");

  return (
    <div className="center-container">
      <iframe
        allow="fullscreen;"
        src={`${depositIframe}/${siteUrl}/${token}`}
        style={{ width: "100%", height: "100%", border: "0px" }}
        
      ></iframe>
    </div>
  );
};

export default Deposit;
