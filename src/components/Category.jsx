import MenuCard from "./MenuCard";
import { useLanguage } from "../context/LanguageContext";

export function Category({ category, products }) {
  const [language] = useLanguage();
  return (
    <section
      key={category.idCategory}
      id={category.idCategory}
      className="menu__home__content__right__content__bottom__content"
    >
      <div className="menu__home__content__right__content__bottom__content__heading">
        {category.strCategory}
      </div>
      <div className="menu__home__content__right__content__bottom__content__items">
        {!products ? (
          <>
            {Array(10)
              ?.fill(0)
              ?.map((_, index) => (
                <MenuCard key={index} delay={`${index * 0.1}s`} />
              ))}
          </>
        ) : products?.length === 0 ? (
          <div className="menu__home__content__right__content__bottom__content__items__empty">
            {language === "en" ? "No products found" : "لا يوجد منتجات"}
          </div>
        ) : (
          products?.map((product, index) => (
            <MenuCard
              key={product.strMeal}
              product={product}
              delay={`${index * 0.1}s`}
            />
          ))
        )}
      </div>
    </section>
  );
}
