import ScrollContainer from "react-indiana-drag-scroll";
import { memo } from "react";
import { useLanguage } from "../context/LanguageContext";

function MobileCategories({ activeCategory, onPress, data }) {
  const [language] = useLanguage();

  return (
    <div className="menu__home__content__right__mobilebar">
      <ScrollContainer className="menu__home__content__right__mobilebar__links">
        {data.map((category, index) => (
          <button
            key={index}
            onClick={onPress}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
            data-to-scrollSpy-id={index}
            className={
              "menu__home__content__right__mobilebar__link__mobile " +
              (activeCategory === index ? "active" : "")
            }
          >
            <img
              className="menu__home__content__left__link__img__mobile"
              src={category.imageUrl}
              alt={language === "ar" ? category.nameAr : category.name}
            />
            <div
              className="menu__home__content__left__link__overlay__mobile"
              key={index}
              onClick={onPress}
              data-to-scrollSpy-id={index}
            >
              {language === "ar" ? category.nameAr : category.name}
            </div>
          </button>
        ))}
      </ScrollContainer>
    </div>
  );
}

export default memo(MobileCategories);
