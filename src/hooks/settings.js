import { useMutation } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { settingsAPI } from "../constant";
import { API, settings as Settings } from "../utils";
import UseState from "./UseState";
import { getSiteURL } from "../utils/getSiteURL";

export const useSettingsMutation = () => {
  const isLocalhost = window.location.hostname === "localhost";
  const { setLogo, closePopupForForever } = UseState();
  return useMutation({
    mutationKey: ["settings"],
    mutationFn: async () => {
      let payload = {};
      const { siteURL } = getSiteURL();

      if (siteURL) {
        payload.site = siteURL;
      }
      const { data } = await AxiosSecure.post(settingsAPI, payload);

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
        if (Settings.app_only && !closePopupForForever) {
          document.title = window.location.hostname;
        } else {
          document.title = Settings.site_name;
        }
        /* Dynamically append  theme css  */
        if (!isLocalhost) {
          const logo = `${API.assets}/${Settings.site}/logo.${Settings.logo_format}`;
          setLogo(logo);
        } else {
          setLogo(`/assets/logo.${Settings.logo_format}`);
        }

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";

        if (!isLocalhost) {
          link.href = `${API.assets}/${Settings.site}/theme.css`;
          document.head.appendChild(link);
        } else {
          link.href = `/src/static/front/css/theme.css`;
          document.head.appendChild(link);
        }
        /* Dynamically append site logo  */
        const FavIconLink = document.createElement("link");
        FavIconLink.rel = "icon";
        FavIconLink.type = "image/png";
        FavIconLink.href = `${API.assets}/${Settings.site}/favicon.png`;
        document.head.appendChild(FavIconLink);
      }
      return data;
    },
  });
};
