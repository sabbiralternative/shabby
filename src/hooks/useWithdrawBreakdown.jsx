import { useQuery } from "@tanstack/react-query";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
import { API, settings } from "../utils";
import axios from "axios";

/* get withdraw breakdown data */
const useWithdrawBreakdown = () => {
  const token = localStorage.getItem("token");
  const { data: withdrawBreakdown = {} } = useQuery({
    queryKey: ["withdraw-breakdown"],

    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData({
        token: generatedToken,
        site: settings.siteUrl,
      });
      const res = await axios.post(`${API.withdrawBreakdown}`, encryptedData, {
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
  return { withdrawBreakdown };
};

export default useWithdrawBreakdown;
