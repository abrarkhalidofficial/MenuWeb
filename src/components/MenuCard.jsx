import item from "../assets/itemimg.png";
import star from "../assets/star.png";
import { useState } from "react";

export default function MenuCard({ product }) {
  const [buttonText, setButtonText] = useState("Add to Cart");
  const handleButtonClick = () => {
    if (buttonText === "Add to Cart") {
      setButtonText("Added to Cart");
    } else {
      setButtonText("Add to Cart");
    }
  };
  return (
    <div className="menu__home__content__right__content__bottom__content__items__card">
      <div className="menu__home__content__right__content__bottom__content__items__card__foodimg">
        <img src={product.strMealThumb} alt="item" />
      </div>
      <div className="menu__home__content__right__content__bottom__content__items__card__ratingimg">
        <img src={star} alt="star" />
      </div>
      <div className="menu__home__content__right__content__bottom__content__items__card__name">
        {product.strMeal}
      </div>
      <div className="menu__home__content__right__content__bottom__content__items__card__weight">
        500g
      </div>
      <div className="menu__home__content__right__content__bottom__content__items__card__price">
        AED 600
      </div>
      <button
        onClick={handleButtonClick}
        className={
          buttonText === "Add to Cart"
            ? "menu__home__content__right__content__bottom__content__items__card__button"
            : "menu__home__content__right__content__bottom__content__items__card__button__active"
        }
      >
        {buttonText}
      </button>
    </div>
  );
}
