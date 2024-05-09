import axios from "axios";
import UseEncryptData from "./UseEncryptData";
import UseTokenGenerator from "./UseTokenGenerator";
import { API } from "../utils";

const UseLiveSlotFantasyNewTab = async (casinoId) => {
  const token = localStorage.getItem("token");
  /* get random token */
  const generatedToken = UseTokenGenerator();
  /* Encryption data */
  const encryptedData = UseEncryptData({
    gameId: casinoId?.eventId?.toString() || casinoId?.game_id?.toString(),
    providerName: casinoId?.providerId,
    token: generatedToken,
  });

  const res = await axios.post(API.liveCasinoIframe, encryptedData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = res?.data;
  /* Open live casino in new tab */
  window.open(data?.gameUrl, "_blank");
};

export default UseLiveSlotFantasyNewTab;
