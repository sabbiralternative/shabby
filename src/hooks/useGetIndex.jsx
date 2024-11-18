import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";
import { API, settings } from "../utils";

const useGetIndex = () => {
  const token = localStorage.getItem("token");
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["index"],

    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedPostData = UseEncryptData({
        site: settings.siteUrl,
        token: generatedToken,
        type: "get_referral_code",
      });

      const res = await axios.post(API.index, encryptedPostData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = res?.data;
      if (result?.success) {
        return result?.result;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetch, isLoading };
};

export default useGetIndex;
