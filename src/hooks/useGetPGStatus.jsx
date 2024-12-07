import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
import { API, settings } from "../utils";

const useGetPGStatus = (orderId, method) => {
  const token = localStorage.getItem("token");
  const { data: pgStatus = [], refetch: refetchPGStatus } = useQuery({
    queryKey: ["pg-status"],
    enabled: method === "pg",
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData({
        token: generatedToken,
        site: settings.siteUrl,
        orderId,
      });
      const res = await axios.post(`${API.pgStatus}`, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      return data;
    },
    refetchInterval: method === "pg" ? 10000 : null,
    gcTime: 0,
  });
  return { pgStatus, refetchPGStatus };
};

export default useGetPGStatus;
