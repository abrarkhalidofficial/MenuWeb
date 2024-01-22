import { cartAtom } from "../data/cartAtom";
import { productPopupAtom } from "../data/productAtom";
import star from "../assets/star.png";
import stardark from "../assets/stardark.png";
import { themeAtom } from "../data/themeAtom";
import { useAtom } from "jotai";
import { useMemo } from "react";

export default function MenuCard({ product, delay }) {
  const [theme] = useAtom(themeAtom);
  const [cart, setCart] = useAtom(cartAtom);
  const [, setDataForProductPopup] = useAtom(productPopupAtom);
  const isInCart = cart.find((item) => item?.name === product?.name);

  const randomWeight = useMemo(() => Math.floor(Math.random() * 500), []);

  const randomPrice = useMemo(() => Math.floor(Math.random() * 1000), []);

  const handleAddToCart = () => {
    if (isInCart) {
      const newCart = cart.filter((item) => item?.name !== product?.name);
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
      onClick={handleAddToCart}
      className={
        product
          ? "menu__home__content__right__content__bottom__content__items__card fadeIn"
          : "menu__home__content__right__content__bottom__content__items__card menu__home__content__right__content__bottom__content__items__card__empty"
      }
    >
      <div className="menu__home__content__right__content__bottom__content__items__card__foodimg">
        <img loading="lazy" src={product?.image} alt="item" />
      </div>
      <div className="menu__home__content__right__content__bottom__content__items__card__ratingimg">
        {theme === "light" ? (
          <img loading="lazy" src={star} alt="star" />
        ) : (
          <img loading="lazy" src={stardark} alt="star" />
        )}
      </div>
      <div className="menu__home__content__right__content__bottom__content__items__card__name">
        {product?.name}
      </div>
      <div className="menu__home__content__right__content__bottom__content__items__card__weight">
        {randomWeight} gm
      </div>
      <div className="menu__home__content__right__content__bottom__content__items__card__price">
        {product?.price}
      </div>
      <button
        onClick={handleAddToCart}
        className={
          isInCart
            ? "menu__home__content__right__content__bottom__content__items__card__button menu__home__content__right__content__bottom__content__items__card__button__active"
            : "menu__home__content__right__content__bottom__content__items__card__button"
        }
      >
        {isInCart ? "Added" : "Add to cart"}
      </button>
    </div>
  );
}
