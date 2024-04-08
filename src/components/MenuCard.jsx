import cartAtom from "../data/cartAtom";
import productPopupAtom from "../data/productAtom";
import themeAtom from "../data/themeAtom";
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-flame"
        >
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>{" "}
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
