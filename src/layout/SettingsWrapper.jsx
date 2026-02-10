import { useEffect } from "react";
import UseState from "../hooks/UseState";
import { useSettingsMutation } from "../hooks/settings";

const SettingsWrapper = ({ children }) => {
  const { token } = UseState();
  const { mutate, isSuccess } = useSettingsMutation();

  useEffect(() => {
    mutate();
  }, [token, mutate]);

  if (!isSuccess) {
    return null;
  }

  return children;
};

export default SettingsWrapper;
