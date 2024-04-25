import { memo, useEffect, useState } from "react";

import MenuCard from "./MenuCard";
import { useLanguage } from "../context/LanguageContext";

function Category({ category, products, index }) {
  const [selectedLanguage] = useLanguage();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <section
      key={index}
      id={index}
      className="menu__home__content__right__content__bottom__content"
    >
      <div className="menu__home__content__right__content__bottom__content__heading">
        {selectedLanguage === "ar" ? category.nameAr : category.name}
      </div>
      <div className="menu__home__content__right__content__bottom__content__items">
        {loading ? (
          <>
            {Array(10)
              ?.fill(0)
              ?.map((_, index) => (
                <MenuCard key={index} delay={`${index * 0.1}s`} />
              ))}
          </>
        ) : products?.length === 0 ? (
          <div className="menu__home__content__right__content__bottom__content__items__empty">
            {selectedLanguage === "ar" ? "لا يوجد منتجات" : "No Products"}
          </div>
        ) : (
          products?.map((product, index) => (
            <MenuCard
              key={product.name}
              product={product}
              delay={`${index * 0.1}s`}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default memo(Category);
