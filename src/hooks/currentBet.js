import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { API } from "../utils";

export const useCurrentBets = (eventId) => {
  return useQuery({
    queryKey: ["currentBets", eventId],
    queryFn: async () => {
      try {
        const { data } = await AxiosSecure.post(
          `${API.currentBets}/${eventId}`
        );

        if (data.success) {
          return data.result;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  });
};
