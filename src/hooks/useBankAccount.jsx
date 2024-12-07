import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { API, settings } from "../utils";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";

const useBankAccount = (payload) => {
  const token = localStorage.getItem("token");
  const { data: bankData, refetch: refetchBankData } = useQuery({
    queryKey: ["bankAccount"],

    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const bankData = {
        ...payload,
        site: settings.siteUrl,
        token: generatedToken,
      };
      const encryptedData = handleEncryptData(bankData);
      const res = await axios.post(API.bankAccount, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res?.data;

      if (data?.success) {
        return data?.result;
      }
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { bankData, refetchBankData };
};

export default useBankAccount;
