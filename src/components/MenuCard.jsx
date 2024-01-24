import { cartAtom } from "../data/cartAtom";
import { productPopupAtom } from "../data/productAtom";
import { themeAtom } from "../data/themeAtom";
import { useAtom } from "jotai";
import { useLanguage } from "../context/LanguageContext";

export default function MenuCard({ product, delay }) {
  const [selectedLanguage] = useLanguage();
  const [theme] = useAtom(themeAtom);
  const [cart, setCart] = useAtom(cartAtom);
  const [, setDataForProductPopup] = useAtom(productPopupAtom);
  const isInCart = cart.find((item) => item?.name === product?.name);

  const handleAddToCart = () => {
    if (isInCart) {
      const newCart = cart.filter((item) => item?.name !== product?.name);
      setCart(newCart);
    } else {
      setDataForProductPopup({
        ...product,
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

      <div className="menu__home__content__right__content__bottom__content__items__card__name">
        {selectedLanguage === "ar" ? product?.nameAr : product?.name}
      </div>
      <div className="menu__home__content__right__content__bottom__content__items__card__weight">
        {selectedLanguage === "ar" && "سعرات حرارية "}
        {product?.calories}
        {selectedLanguage === "en" && " CAL"}
      </div>
      <div className="menu__home__content__right__content__bottom__content__items__card__price">
        {selectedLanguage === "ar" && "السعر "}
        {product?.price}
        {selectedLanguage === "en" && " SAR"}
      </div>
      <button
        onClick={handleAddToCart}
        className={
          isInCart
            ? "menu__home__content__right__content__bottom__content__items__card__button menu__home__content__right__content__bottom__content__items__card__button__active"
            : "menu__home__content__right__content__bottom__content__items__card__button"
        }
      >
        {isInCart
          ? selectedLanguage === "ar"
            ? "إزالة"
            : "Added"
          : selectedLanguage === "ar"
            ? "أضف إلى السلة"
            : "Add to cart"}
      </button>
    </div>
  );
}
