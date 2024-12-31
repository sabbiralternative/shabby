import { useContext } from "react";
import { LanguageContext } from "../provider/LanguageProvider";

const useLanguage = () => {
  const language = useContext(LanguageContext);
  return language;
};

export default useLanguage;
