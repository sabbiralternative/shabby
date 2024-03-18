import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";
import { config } from "../utils/config";

const useLatestEvent = () => {
  const token = localStorage.getItem("token");
  const latestEventAPi = config?.result?.endpoint?.latestEvents;
  const { data: latestEvents } = useQuery({
    queryKey: ["latestEvent"],
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const payload = {
        type: "cup",
        token: generatedToken,
      };
      const encryptedData = UseEncryptData(payload);

      const res = await axios.post(latestEventAPi, encryptedData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res.data;
      if (data?.success) {
        return data?.result;
      }
    },
  });
  return { latestEvents };
};

export default useLatestEvent;
