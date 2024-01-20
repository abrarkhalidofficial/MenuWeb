import "swiper/scss";
import Rounded from "../common/RoundedButton/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import { cartAtom } from "../data/cartAtom";
import { productPopupAtom } from "../data/productAtom";
import { useAtom } from "jotai";

const sizes = ["Small", "Medium", "Large"];

const spices = ["Medium", "Extra", "Extra Hot "];

export default function CartPopup({}) {
  const [cart, setCart] = useAtom(cartAtom);
  const [dataForProductPopup, setDataForProductPopup] =
    useAtom(productPopupAtom);

  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const [selectedSpice, setSelectedSpice] = useState(spices[0]);

  const [quantity, setQuantity] = useState(1);

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

  console.log(dataForProductPopup);

  const [popupOpen, setPopupOpen] = useState(false);

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
        onClick={() => {
          setDataForProductPopup({});
        }}
      >
        <div
          className={
            "menu__home__content__popup__content" +
            " " +
            (Object.keys(dataForProductPopup).length > 0
              ? "is__open"
              : "is__closed")
          }
          onClick={(e) => e.stopPropagation()}
        >
          <div className="menu__home__content__popup__content__slide">
            <div className="menu__home__content__popup__content__slider__content">
              <Swiper
                loop={true}
                spaceBetween={10}
                slidesPerView={1.7}
                centeredSlides={true}
                className="menu__home__content__popup__content__slider"
              >
                {Array(10)
                  .fill()
                  .map((_, index) => (
                    <SwiperSlide
                      className="menu__home__content__popup__content__slider__slide"
                      key={index}
                    >
                      <img
                        style={{ animationDelay: `${index * 0.3}s` }}
                        src={dataForProductPopup?.strMealThumb}
                        alt={dataForProductPopup?.strMeal}
                        className="fadeIn"
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div
                className="menu__home__content__popup__content__slider__heading fadeIn"
                style={{ animationDelay: `0.3s` }}
              >
                {dataForProductPopup?.strMeal}
              </div>
              <div
                className="menu__home__content__popup__content__slider__weight fadeIn"
                style={{ animationDelay: `0.4s` }}
              >
                {dataForProductPopup?.weight}gm
              </div>
              <div
                className="menu__home__content__popup__content__slider__info fadeIn"
                style={{ animationDelay: `0.5s` }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
          <div className="menu__home__content__popup__content__buttons">
            <div className="menu__home__content__popup__content__buttons__content fadeIn">
              <div className="menu__home__content__popup__content__buttons__name">
                Select Size
              </div>
              <div className="menu__home__content__popup__content__buttons__buttons">
                {sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={
                      selectedSize === size
                        ? `menu__home__content__popup__content__buttons__buttons__button menu__home__content__popup__content__buttons__buttons__button__active fadeIn`
                        : `menu__home__content__popup__content__buttons__buttons__button fadeIn`
                    }
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="menu__home__content__popup__content__buttons__content fadeIn">
              <div className="menu__home__content__popup__content__buttons__name">
                Select Spices
              </div>
              <div className="menu__home__content__popup__content__buttons__buttons">
                {spices.map((spice, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSpice(spice)}
                    className={
                      selectedSpice === spice
                        ? `menu__home__content__popup__content__buttons__buttons__button menu__home__content__popup__content__buttons__buttons__button__active fadeIn`
                        : `menu__home__content__popup__content__buttons__buttons__button fadeIn`
                    }
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {spice}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="menu__home__content__popup__content__qauntity__and__price fadeIn">
            <div className="menu__home__content__popup__content__qauntity__and__price__qauntity">
              <div className="menu__home__content__popup__content__qauntity__and__price__price__name">
                Quantity
              </div>
              <div className="menu__home__content__popup__content__qauntity">
                <button
                  className="menu__home__content__popup__content__qauntity__button"
                  onClick={handleDecrement}
                >
                  -
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
                  +
                </button>
              </div>
            </div>
            <div className="menu__home__content__popup__content__qauntity__and__price__price fadeIn">
              <div className="menu__home__content__popup__content__qauntity__and__price__price__name">
                Price
              </div>
              <div
                className="menu__home__content__popup__content__qauntity__and__price__price__number"
                style={{ animationDelay: `0.5s` }}
              >
                AED {dataForProductPopup?.price * quantity}
              </div>
            </div>
          </div>
          {/* <button className="menu__home__content__popup__content__buttons__addtocart__button"></button> */}
          <Rounded
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1700"
          >
            <a
              className="menu__home__content__popup__content__buttons__addtocart__button__color fadeIn"
              onClick={handleAddToCart}
            >
              Add to Cart
            </a>
          </Rounded>
        </div>
      </div>
    )
  );
}
