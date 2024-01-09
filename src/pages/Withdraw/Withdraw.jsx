import { config } from "../../utils/config";

const Withdraw = () => {
  const withdrawIframe = config?.result?.endpoint?.withdrawIframe;
  const siteUrl = config?.result?.settings?.siteUrl;
  const token = localStorage.getItem("token");

  return (
    <div className="center-container">
      <iframe
        allow="fullscreen;"
        src={`${withdrawIframe}/${siteUrl}/${token}`}
        style={{ width: "100%", height: "100%", border: "0px" }}
      ></iframe>
    </div>
  );
};

export default Withdraw;
