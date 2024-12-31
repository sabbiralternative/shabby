import { API } from "../utils";
import { AxiosSecure } from "../lib/AxiosSecure";

const UseLiveSlotFantasyNewTab = async (casinoId) => {
  const payload = {
    gameId: casinoId?.eventId?.toString() || casinoId?.game_id?.toString(),
    providerName: casinoId?.providerId,
  };

  const res = await AxiosSecure.post(API.liveCasinoIframe, payload);
  const data = res?.data;
  /* Open live casino in new tab */
  window.open(data?.gameUrl, "_blank");
};

export default UseLiveSlotFantasyNewTab;
