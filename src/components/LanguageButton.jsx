import { Head } from "@router";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageButton() {
  const [language, setLanguage] = useLanguage();

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
