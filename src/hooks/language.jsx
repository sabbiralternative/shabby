import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { API } from "../utils";

export const useGetLanguage = () => {
  return useQuery({
    queryKey: ["language"],
    queryFn: async () => {
      const { data } = await AxiosSecure.get(API.language);
      return data;
    },
  });
};
