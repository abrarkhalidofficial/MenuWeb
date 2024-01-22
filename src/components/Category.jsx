import MenuCard from "./MenuCard";

export function Category({ category, products, index }) {
  return (
    <section
      key={index}
      id={index}
      className="menu__home__content__right__content__bottom__content"
    >
      <div className="menu__home__content__right__content__bottom__content__heading">
        {category.name}
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
            No products found
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
