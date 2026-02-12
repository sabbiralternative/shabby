import { useEffect } from "react";
import UseState from "../hooks/UseState";
import { useSettingsMutation } from "../hooks/settings";
import { API } from "../utils";

const SettingsWrapper = ({ children }) => {
  const { token } = UseState();
  const { mutate } = useSettingsMutation();

  useEffect(() => {
    mutate();
  }, [token, mutate]);

  if (!API.login) {
    return null;
  }

  return children;
};

export default SettingsWrapper;
