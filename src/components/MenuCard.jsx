import { cartAtom } from "../data/cartAtom";
import { productPopupAtom } from "../data/productAtom";
import star from "../assets/star.png";
import { useAtom } from "jotai";
import { useMemo } from "react";

export default function MenuCard({ product, delay }) {
  const [cart, setCart] = useAtom(cartAtom);
  const [, setDataForProductPopup] = useAtom(productPopupAtom);

  const isInCart = cart.find((item) => item?.strMeal === product?.strMeal);

  const randomWeight = useMemo(() => Math.floor(Math.random() * 500), []);

  const randomPrice = useMemo(() => Math.floor(Math.random() * 1000), []);

  const handleAddToCart = () => {
    if (isInCart) {
      const newCart = cart.filter((item) => item?.strMeal !== product?.strMeal);
      setCart(newCart);
    } else {
      setDataForProductPopup({
        ...product,
        weight: randomWeight,
        price: randomPrice,
      });
    }
  };

  return (
    <div
      style={{ animationDelay: delay }}
      className={
        product
          ? "menu__home__content__right__content__bottom__content__items__card fadeIn"
          : "menu__home__content__right__content__bottom__content__items__card menu__home__content__right__content__bottom__content__items__card__empty"
      }
    >
      <div className="menu__home__content__right__content__bottom__content__items__card__foodimg">
        <img loading="lazy" src={product?.strMealThumb} alt="item" />
      </div>
      <div className="menu__home__content__right__content__bottom__content__items__card__ratingimg">
        <img loading="lazy" src={star} alt="star" />
      </div>
      <div className="menu__home__content__right__content__bottom__content__items__card__name">
        {product?.strMeal}
      </div>
      <div className="menu__home__content__right__content__bottom__content__items__card__weight">
        {randomWeight}gm
      </div>
      <div className="menu__home__content__right__content__bottom__content__items__card__price">
        AED {randomPrice}
      </div>
      <button
        onClick={handleAddToCart}
        className={
          isInCart
            ? "menu__home__content__right__content__bottom__content__items__card__button menu__home__content__right__content__bottom__content__items__card__button__active"
            : "menu__home__content__right__content__bottom__content__items__card__button"
        }
      >
        {isInCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}
