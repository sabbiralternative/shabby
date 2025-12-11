import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { API } from "../utils";

export const useExposure = (eventId) => {
  return useQuery({
    queryKey: ["exposure", eventId],
    queryFn: async () => {
      const res = await AxiosSecure.post(`${API.exposure}/${eventId}`);
      const data = res.data;

      if (data.success) {
        return data.result;
      }
    },
  });
};
