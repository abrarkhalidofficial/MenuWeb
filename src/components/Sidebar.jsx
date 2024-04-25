import data from "../data/data.json";
import { memo } from "react";
import { useLanguage } from "../context/LanguageContext";

function Sidebar({ onPress, deferredActiveCategory }) {
  const [language] = useLanguage();

  return (
    <div className="menu__home__content__left">
      <div className="menu__home__content__left__links">
        {data.map((category, index) => (
          <button
            key={category.name}
            onClick={onPress}
            datatoscrollspyid={index}
            style={{ animationDelay: `${index * 0.1}s` }}
            className={
              "menu__home__content__left__link fadeIn " +
              (parseInt(deferredActiveCategory) === index ? "active" : "")
            }
          >
            <img
              className="menu__home__content__left__link__img"
              src={category.imageUrl}
              loading="lazy"
              alt={language === "ar" ? category.nameAr : category.name}
            />
            <div
              className="menu__home__content__left__link__overlay"
              key={index}
              onClick={onPress}
              datatoscrollspyid={index}
            >
              {language === "ar" ? category.nameAr : category.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(Sidebar);
