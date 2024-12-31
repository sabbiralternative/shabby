import { useQuery } from "@tanstack/react-query";
import { API } from "../utils";
import { AxiosSecure } from "../lib/AxiosSecure";

const useLatestEvent = () => {
  const { data: latestEvents } = useQuery({
    queryKey: ["latestEvent"],
    queryFn: async () => {
      const res = await AxiosSecure.post(API.latestEvents, { type: "cup" });
      const data = res.data;
      if (data?.success) {
        return data?.result;
      }
    },
  });
  return { latestEvents };
};

export default useLatestEvent;
