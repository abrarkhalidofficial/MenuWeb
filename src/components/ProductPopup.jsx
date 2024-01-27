import { Minus, Plus } from "react-feather";
import { memo, useEffect, useState } from "react";

import Rounded from "./RoundedButton";
import cartAtom from "../data/cartAtom";
import productPopupAtom from "../data/productAtom";
import { useAtom } from "jotai";
import { useLanguage } from "../context/LanguageContext";

const sizes = [
  { en: "Small", ar: "صغير" },
  { en: "Medium", ar: "متوسط" },
  { en: "Large", ar: "كبير" },
];
const spices = [
  { en: "Medium", ar: "متوسط" },
  { en: "Extra", ar: "إضافي" },
  { en: "Extra Hot", ar: "حار إضافي" },
];

function ProductPopup() {
  const [selectedLanguage] = useLanguage();
  const [cart, setCart] = useAtom(cartAtom);
  const [quantity, setQuantity] = useState(1);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(sizes[0].en);
  const [selectedSpice, setSelectedSpice] = useState(spices[0].en);
  const [dataForProductPopup, setDataForProductPopup] =
    useAtom(productPopupAtom);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => setQuantity(quantity + 1);

  const handleAddToCart = () => {
    setCart([
      ...cart,
      {
        ...dataForProductPopup,
        quantity,
      },
    ]);
    setDataForProductPopup({});
  };

  useEffect(() => {
    if (Object.keys(dataForProductPopup).length > 0) {
      setPopupOpen(true);
    } else {
      setTimeout(() => {
        setPopupOpen(false);
      }, 100);
    }
  }, [dataForProductPopup]);

  return (
    popupOpen && (
      <div
        className="menu__home__content__popup"
        onClick={() => setDataForProductPopup({})}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={
            "menu__home__content__popup__content " +
            (Object.keys(dataForProductPopup).length > 0
              ? "is__open"
              : "is__closed")
          }
        >
          <div className="menu__home__content__popup__content__slide">
            <div className="menu__home__content__popup__content__slider__content">
              <div className="menu__home__content__popup__content__slider">
                <img
                  loading="lazy"
                  src={dataForProductPopup?.image}
                  alt={dataForProductPopup?.name}
                  className="fadeIn"
                />
              </div>
              <div
                className="menu__home__content__popup__content__slider__heading fadeIn"
                style={{ animationDelay: `0.3s` }}
              >
                {selectedLanguage === "ar"
                  ? dataForProductPopup?.nameAr
                  : dataForProductPopup?.name}
              </div>
              <div
                className="menu__home__content__popup__content__slider__weight fadeIn"
                style={{ animationDelay: `0.4s` }}
              >
                {selectedLanguage === "ar" && "سعرات حرارية "}
                {dataForProductPopup?.calories}
                {selectedLanguage === "en" && " CAL"}
              </div>
              <div
                className="menu__home__content__popup__content__slider__info fadeIn"
                style={{ animationDelay: `0.5s` }}
              >
                {selectedLanguage === "ar"
                  ? dataForProductPopup?.descriptionAr
                  : dataForProductPopup?.description}
              </div>
            </div>
          </div>
          <div className="menu__home__content__popup__content__buttons">
            <div className="menu__home__content__popup__content__buttons__content fadeIn">
              <div className="menu__home__content__popup__content__buttons__name">
                {selectedLanguage === "ar" ? "حدد الحجم" : "Select Size"}
              </div>
              <div className="menu__home__content__popup__content__buttons__buttons">
                {sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size.en)}
                    className={
                      selectedSize === size.en
                        ? `menu__home__content__popup__content__buttons__buttons__button menu__home__content__popup__content__buttons__buttons__button__active fadeIn`
                        : `menu__home__content__popup__content__buttons__buttons__button fadeIn`
                    }
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {size[selectedLanguage === "ar" ? "ar" : "en"]}
                  </button>
                ))}
              </div>
            </div>
            <div className="menu__home__content__popup__content__buttons__content fadeIn">
              <div className="menu__home__content__popup__content__buttons__name">
                {selectedLanguage === "ar" ? "حدد الحرارة" : "Select Spice"}
              </div>
              <div className="menu__home__content__popup__content__buttons__buttons">
                {spices.map((spice, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSpice(spice.en)}
                    className={
                      selectedSpice === spice.en
                        ? `menu__home__content__popup__content__buttons__buttons__button menu__home__content__popup__content__buttons__buttons__button__active fadeIn`
                        : `menu__home__content__popup__content__buttons__buttons__button fadeIn`
                    }
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {spice[selectedLanguage === "ar" ? "ar" : "en"]}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="menu__home__content__popup__content__qauntity__and__price fadeIn">
            <div className="menu__home__content__popup__content__qauntity__and__price__qauntity">
              <div className="menu__home__content__popup__content__qauntity__and__price__price__name">
                {selectedLanguage === "ar" ? "الكمية" : "Quantity"}
              </div>
              <div className="menu__home__content__popup__content__qauntity">
                <button
                  className="menu__home__content__popup__content__qauntity__button"
                  onClick={handleDecrement}
                >
                  <Minus />
                </button>
                <div
                  className="menu__home__content__popup__content__qauntity__number fadeIn"
                  style={{ animationDelay: `0.5s` }}
                >
                  {quantity}
                </div>
                <button
                  className="menu__home__content__popup__content__qauntity__button"
                  onClick={handleIncrement}
                >
                  <Plus />
                </button>
              </div>
            </div>
            <div className="menu__home__content__popup__content__qauntity__and__price__price fadeIn">
              <div className="menu__home__content__popup__content__qauntity__and__price__price__name">
                {selectedLanguage === "ar" ? "السعر" : "Price"}
              </div>
              <div
                className="menu__home__content__popup__content__qauntity__and__price__price__number"
                style={{ animationDelay: `0.5s` }}
              >
                {selectedLanguage === "ar" && "السعر "}
                {dataForProductPopup?.price * quantity}
                {selectedLanguage === "en" && " SAR"}
              </div>
            </div>
          </div>
          <Rounded
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1700"
          >
            <a
              className="menu__home__content__popup__content__buttons__addtocart__button__color fadeIn"
              onClick={handleAddToCart}
            >
              {selectedLanguage === "ar" ? "أضف إلى السلة" : "Add to cart"}
            </a>
          </Rounded>
        </div>
      </div>
    )
  );
}

export default memo(ProductPopup);
