import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { API } from "../utils";

export const useIndex = () => {
  return useMutation({
    mutationKey: ["index"],
    mutationFn: async (payload) => {
      const { data } = await AxiosSecure.post(`${API.index}`, payload);
      return data;
    },
  });
};

export const useGetIndex = (payload) => {
  return useQuery({
    queryKey: ["index", payload],
    queryFn: async () => {
      const { data } = await AxiosSecure.post(`${API.index}`, payload);
      return data;
    },
  });
};
