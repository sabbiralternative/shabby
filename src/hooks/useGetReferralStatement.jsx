import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import moment from "moment";
import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";
import { API, settings } from "../utils";

const useGetReferralStatement = (
  from_date,
  to_date,
  fetchData,
  setFetchData
) => {
  const token = localStorage.getItem("token");
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["ReferralStatement"],
    enabled: fetchData,
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedPostData = UseEncryptData({
        site: settings.siteUrl,
        token: generatedToken,
        type: "referral_statement",
        from_date: moment(from_date).format("YYYY-MM-DD"),
        to_date: moment(to_date).format("YYYY-MM-DD"),
      });

      const res = await axios.post(API.index, encryptedPostData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = res?.data;
      setFetchData(false);
      if (result?.success) {
        return result?.result;
      }
    },
    gcTime: 0,
  });
  return { data, refetch, isLoading };
};

export default useGetReferralStatement;
