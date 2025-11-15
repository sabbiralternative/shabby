import { useMutation } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { API } from "../utils";

export const useBankMutation = () => {
  return useMutation({
    mutationKey: ["bank-account"],
    mutationFn: async (payload) => {
      const { data } = await AxiosSecure.post(`${API.bankAccount}`, payload);
      return data;
    },
  });
};
