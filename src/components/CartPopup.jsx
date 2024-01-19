import "swiper/css";
import "swiper/css/pagination";
import item from "../assets/itemimg.png";
import star from "../assets/star.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
export default function CartPopup({}) {
  const [Activebutton, setActivebutton] = useState(false);
  const handleButtonClick = () => {
    setActivebutton(!Activebutton);
  };

  const [quantity, setQuantity] = useState(1);
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="menu__home__content__popup" style={{ display: "none" }}>
      <div className="menu__home__content__popup__content">
        <div className="menu__home__content__popup__content__slide">
          <Swiper
            className="menu__home__content__popup__content__slide__Swiper"
            slidesPerView={1}
          >
            <SwiperSlide className="menu__home__content__popup__content__slider">
              <div className="menu__home__content__popup__content__slider__content">
                {" "}
                <img
                  src={item}
                  alt="item"
                  className="menu__home__content__popup__content__slider__img"
                />
                <img
                  src={star}
                  alt=""
                  className="menu__home__content__popup__content__slider__star"
                />
                <div className="menu__home__content__popup__content__slider__heading">
                  Chicken Burger
                </div>
                <div className="menu__home__content__popup__content__slider__weight">
                  250gm
                </div>
                <div className="menu__home__content__popup__content__slider__info">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
              </div>{" "}
            </SwiperSlide>{" "}
            <SwiperSlide className="menu__home__content__popup__content__slider">
              <div className="menu__home__content__popup__content__slider__content">
                {" "}
                <img
                  src={item}
                  alt="item"
                  className="menu__home__content__popup__content__slider__img"
                />
                <img
                  src={star}
                  alt=""
                  className="menu__home__content__popup__content__slider__star"
                />
                <div className="menu__home__content__popup__content__slider__heading">
                  Chicken Burger
                </div>
                <div className="menu__home__content__popup__content__slider__weight">
                  250gm
                </div>
                <div className="menu__home__content__popup__content__slider__info">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
              </div>{" "}
            </SwiperSlide>{" "}
            <SwiperSlide className="menu__home__content__popup__content__slider">
              <div className="menu__home__content__popup__content__slider__content">
                {" "}
                <img
                  src={item}
                  alt="item"
                  className="menu__home__content__popup__content__slider__img"
                />
                <img
                  src={star}
                  alt=""
                  className="menu__home__content__popup__content__slider__star"
                />
                <div className="menu__home__content__popup__content__slider__heading">
                  Chicken Burger
                </div>
                <div className="menu__home__content__popup__content__slider__weight">
                  250gm
                </div>
                <div className="menu__home__content__popup__content__slider__info">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
              </div>{" "}
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="menu__home__content__popup__content__buttons">
          <div className="menu__home__content__popup__content__buttons__content">
            <div className="menu__home__content__popup__content__buttons__name">
              Select Size
            </div>
            <div className="menu__home__content__popup__content__buttons__buttons">
              <button
                onClick={handleButtonClick}
                className={
                  Activebutton
                    ? `menu__home__content__popup__content__buttons__buttons__button `
                    : `menu__home__content__popup__content__buttons__buttons__button menu__home__content__popup__content__buttons__buttons__button__active`
                }
              >
                Medium
              </button>
              <button
                onClick={handleButtonClick}
                className={
                  Activebutton
                    ? `menu__home__content__popup__content__buttons__buttons__button `
                    : `menu__home__content__popup__content__buttons__buttons__button menu__home__content__popup__content__buttons__buttons__button__active`
                }
              >
                Large
              </button>
              <button
                onClick={handleButtonClick}
                className={
                  Activebutton
                    ? `menu__home__content__popup__content__buttons__buttons__button `
                    : `menu__home__content__popup__content__buttons__buttons__button menu__home__content__popup__content__buttons__buttons__button__active`
                }
              >
                Extra Large
              </button>
            </div>
          </div>
          <div className="menu__home__content__popup__content__buttons__content">
            <div className="menu__home__content__popup__content__buttons__name">
              Select Spices
            </div>
            <div className="menu__home__content__popup__content__buttons__buttons">
              <button
                className={
                  Activebutton
                    ? `menu__home__content__popup__content__buttons__buttons__button `
                    : `menu__home__content__popup__content__buttons__buttons__button menu__home__content__popup__content__buttons__buttons__button__active`
                }
              >
                Medium
              </button>
              <button
                className={
                  Activebutton
                    ? `menu__home__content__popup__content__buttons__buttons__button `
                    : `menu__home__content__popup__content__buttons__buttons__button menu__home__content__popup__content__buttons__buttons__button__active`
                }
              >
                Extra
              </button>
              <button
                className={
                  Activebutton
                    ? `menu__home__content__popup__content__buttons__buttons__button `
                    : `menu__home__content__popup__content__buttons__buttons__button menu__home__content__popup__content__buttons__buttons__button__active`
                }
              >
                Extra Hot Spicy
              </button>
            </div>
          </div>
        </div>
        <div className="menu__home__content__popup__content__qauntity__and__price">
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
              <div className="menu__home__content__popup__content__qauntity__number">
                {quantity}
              </div>
              <button
                className="menu__home__content__popup__content__qauntity__button"
                onClick={handleIncrement}
              >
                +
              </button>{" "}
            </div>{" "}
          </div>
          <div className="menu__home__content__popup__content__qauntity__and__price__price">
            <div className="menu__home__content__popup__content__qauntity__and__price__price__name">
              Price
            </div>
            <div className="menu__home__content__popup__content__qauntity__and__price__price__number">
              AED 100
            </div>
          </div>
        </div>

        <button className="menu__home__content__popup__content__buttons__addtocart__button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
