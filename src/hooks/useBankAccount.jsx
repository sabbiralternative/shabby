import { useQuery } from "@tanstack/react-query";
import { API } from "../utils";
import { AxiosSecure } from "../lib/AxiosSecure";

const useBankAccount = (payload) => {
  const {
    data: bankData,
    refetch: refetchBankData,
    isFetched,
  } = useQuery({
    queryKey: ["bankAccount", payload],

    queryFn: async () => {
      const res = await AxiosSecure.post(API.bankAccount, payload);
      const data = res?.data;

      if (data?.success) {
        return data?.result;
      }
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { bankData, refetchBankData, isFetched };
};

export default useBankAccount;
