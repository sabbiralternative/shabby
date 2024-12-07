import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
import { API, settings } from "../utils";

/* get deposit breakdown */
const useDepositBreakDown = (amount) => {
  const token = localStorage.getItem("token");
  const { data: depositBreakdown = {} } = useQuery({
    queryKey: ["deposit-breakdown"],
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData({
        token: generatedToken,
        amount,
        site: settings.siteUrl,
      });
      const res = await axios.post(`${API.depositBreakdown}`, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;

      if (data.success) {
        return data.result;
      }
    },
    gcTime: 0,
  });
  return { depositBreakdown };
};

export default useDepositBreakDown;
