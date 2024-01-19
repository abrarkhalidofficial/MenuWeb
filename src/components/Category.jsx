import MenuCard from "./MenuCard";

export function Category({ category, products }) {
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
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </>
        ) : products?.length === 0 ? (
          <div className="menu__home__content__right__content__bottom__content__items__empty">
            No items found
          </div>
        ) : (
          products?.map((product) => (
            <MenuCard key={product.idProduct} product={product} />
          ))
        )}
      </div>
    </section>
  );
}
