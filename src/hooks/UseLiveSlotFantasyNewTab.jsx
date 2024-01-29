import axios from "axios";
import UseEncryptData from "./UseEncryptData";
import UseTokenGenerator from "./UseTokenGenerator";
import { config } from "../utils/config";

const UseLiveSlotFantasyNewTab = async (casinoId) => {
  const liveCasinoIframeApi = config?.result?.endpoint?.liveCasinoIframe;
  const token = localStorage.getItem("token");
  const generatedToken = UseTokenGenerator();
  const encryptedData = UseEncryptData({
    gameId: casinoId?.eventId?.toString(),
    providerName: casinoId?.providerId,
    token: generatedToken,
  });

  const res = await axios.post(liveCasinoIframeApi, encryptedData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = res?.data;
  window.open(data?.gameUrl, "_blank");
};

export default UseLiveSlotFantasyNewTab;
