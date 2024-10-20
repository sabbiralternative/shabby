import { useQuery } from "@tanstack/react-query";
import UseTokenGenerator from "./UseTokenGenerator";

import UseEncryptData from "./UseEncryptData";
import axios from "axios";
import { API, settings } from "../utils";

const useGetSocialLink = () => {
  const token = localStorage.getItem("token");

  /* get whats app link */
  const { data: socialLink, refetch: refetchSocialLinks } = useQuery({
    queryKey: ["whatsApp"],
    queryFn: async () => {
      /* random token function */
      const generatedToken = UseTokenGenerator();
      /* Encryption post data */
      const encryptedVideoData = UseEncryptData({
        site: settings.siteUrl,
        token: generatedToken,
      });
      const res = await axios.post(API.whatsapp, encryptedVideoData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
