import { useMutation } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { settingsAPI } from "../constant";
import { API, settings as Settings } from "../utils";
import UseState from "./UseState";

export const useSettingsMutation = () => {
  const { setLogo } = UseState();
  return useMutation({
    mutationKey: ["settings"],
    mutationFn: async () => {
      const { data } = await AxiosSecure.post(settingsAPI);

      if (data?.success) {
        if (data?.result) {
          const { endpoint = {}, ...settings } = data.result;

          Object.keys(endpoint).forEach((key) => {
            API[key] = endpoint[key];
          });

          Object.keys(settings).forEach((key) => {
            Settings[key] = settings[key];
          });
        }
        /* Dynamically append  theme css  */
        if (Settings.build === "production") {
          const logo = `${API.assets}/${Settings.siteUrl}/logo.${Settings.logoFormat}`;
          setLogo(logo);
        } else {
          setLogo(`/assets/logo.${Settings.logoFormat}`);
        }

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";

        if (Settings.build === "production") {
          link.href = `${API.assets}/${Settings.siteUrl}/theme.css`;
          document.head.appendChild(link);
        } else {
          link.href = `/src/static/front/css/theme.css`;
          document.head.appendChild(link);
        }
        /* Dynamically append site logo  */
        const FavIconLink = document.createElement("link");
        FavIconLink.rel = "icon";
        FavIconLink.type = "image/png";
        FavIconLink.href = `${API.assets}/${Settings.siteUrl}/favicon.png`;
        document.head.appendChild(FavIconLink);
      }
      return data;
    },
  });
};
