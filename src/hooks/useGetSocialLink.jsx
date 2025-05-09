import { useQuery } from "@tanstack/react-query";
import { API } from "../utils";
import { AxiosSecure } from "../lib/AxiosSecure";

const useGetSocialLink = () => {
  /* get whats app link */
  const { data: socialLink, refetch: refetchSocialLinks } = useQuery({
    queryKey: ["whatsApp"],
    queryFn: async () => {
      const res = await AxiosSecure.post(API.whatsapp);

      const data = res.data;
      if (data?.success) {
        return data?.result;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { socialLink, refetchSocialLinks };
};

export default useGetSocialLink;
