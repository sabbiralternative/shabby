import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../utils";
import handleDecryptData from "../utils/handleDecryptData";

const useGetGroupSportsBook = (group) => {
  return useQuery({
    queryKey: ["group-sports-book"],
    enabled: group ? true : false,
    queryFn: async () => {
      const { data } = await axios.get(`${API.groupSportsBook}/${group}`, {
        headers: {
          "Cache-Control": "public",
          "max-age": 1,
        },
      });
      const decryptionData = await handleDecryptData(JSON.stringify(data));
      return decryptionData;
    },
    gcTime: 0,
  });
};

export default useGetGroupSportsBook;
