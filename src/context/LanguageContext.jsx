import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import ar from "../data/ar.json";
import en from "../data/en.json";

const LanguageContext = createContext();

export const useLanguage = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return [language, setLanguage];
};

export const useGetLanguage = () => {
  const [language] = useLanguage();
  return language === "en" ? en : ar;
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useLayoutEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
      if (storedLanguage === "ar") {
        document.body.classList.add("rtl");
      } else {
        document.body.classList.remove("rtl");
      }
    }
  }, []);

  useLayoutEffect(() => {
    localStorage.setItem("language", language);
    if (language === "ar") {
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
