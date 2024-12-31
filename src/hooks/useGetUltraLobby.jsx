import { useQuery } from "@tanstack/react-query";
import { API } from "../utils";
import { AxiosInstance } from "../lib/AxiosInstance";

const useGetUltraLobby = () => {
  const {
    data,
    refetch: refetchLiveCasino,
    isLoading,
  } = useQuery({
    queryKey: ["ultraLobby"],

    queryFn: async () => {
      const res = await AxiosInstance.post(API.ultraLobby);
      const result = res?.data;
      return result;
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetchLiveCasino, isLoading };
};

export default useGetUltraLobby;
