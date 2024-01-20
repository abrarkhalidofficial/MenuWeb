import { Head } from "@router";

import { useLanguage } from "../context/LanguageContext";
import { useLayoutEffect } from "react";

export default function LanguageButton({ settings }) {
  const [language, setLanguage] = useLanguage();

  // useLayoutEffect(() => {
  //   const root = document.querySelector(":root");
  //   root.style.setProperty("--primary", settings?.themeColor || "#202020");
  //   const body = document.querySelector("body");
  //   body.style.backgroundColor = "transparent";
  // }, [settings?.themeColor]);

  return (
    <div className="English__to__Arabic">
      <Head
        title="Menu"
        image="/favicon.ico"
        url="https://vitefilerouter.com"
        description="Menu"
      />
      <button
        onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
        title="Change language"
        className={`English__to__Arabic__button 
        ${language === "ar" ? "English__to__Arabic__button__active" : ""}`}
      />
    </div>
  );
}
