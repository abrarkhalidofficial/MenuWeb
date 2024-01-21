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
        onClick={() => {
          const googleTranslateSelect =
            document.querySelector(".goog-te-combo");

          console.log(googleTranslateSelect);

          if (language === "en") {
            setLanguage("ar");
            googleTranslateSelect.value = "ar";
          } else {
            setLanguage("en");
            googleTranslateSelect.value = "en";
          }

          googleTranslateSelect.dispatchEvent(new Event("change"));
        }}
        title="Change language"
        className={`English__to__Arabic__button 
        ${language === "ar" ? "English__to__Arabic__button__active" : ""}`}
      />
    </div>
  );
}
