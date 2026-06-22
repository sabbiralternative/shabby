import { createContext, useEffect, useState } from "react";
import { API } from "../utils";
import { AxiosSecure } from "../lib/AxiosSecure";

export const LanguageContext = createContext(null);
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");
  const [languageLoading, setLanguageLoading] = useState(true);
  const [valueByLanguage, setValueByLanguage] = useState(null);

  useEffect(() => {
    const getLanguage = async () => {
      const { data } = await AxiosSecure.get(API.language);
      setValueByLanguage(data);
    };
    getLanguage();
  }, [language]);

  const stateInfo = {
    languageLoading,
    setLanguageLoading,
    language,
    setLanguage,
    valueByLanguage,
    setValueByLanguage,
  };
  return (
    <LanguageContext.Provider value={stateInfo}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
