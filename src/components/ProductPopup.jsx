import { Crosshair, Minus, Plus, X, ZoomIn } from "react-feather";
import { memo, useEffect, useState } from "react";

import Rounded from "./RoundedButton";
import cartAtom from "../data/cartAtom";
import productPopupAtom from "../data/productAtom";
import { useAtom } from "jotai";
import { useLanguage } from "../context/LanguageContext";

function ProductPopup({}) {
  const [selectedLanguage] = useLanguage();
  const [cart, setCart] = useAtom(cartAtom);
  const [quantity, setQuantity] = useState(1);
  const [popupOpen, setPopupOpen] = useState(false);
  const [dataForProductPopup, setDataForProductPopup] =
    useAtom(productPopupAtom);
  const [imagePopup, setImagePopup] = useState("");
  const [addedAdditives, setAddedAdditives] = useState([]);

  const [addedVariants, setAddedVariants] = useState([]);

  const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1);

  const handleIncrement = () => setQuantity(quantity + 1);

  const handleAddToCart = () => {
    setCart([
      ...cart,
      {
        ...dataForProductPopup,
        quantity,
        additives: addedAdditives,
        variants: addedVariants,
      },
    ]);
    setDataForProductPopup({});
    setAddedAdditives([]);
    setAddedVariants([]);
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
      <>
        <div
          className="menu__home__content__popup"
          onClick={() => {
            setDataForProductPopup({});
            setAddedAdditives([]);
            setAddedVariants([]);
          }}
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
            <div className="menu__home__content__popup__content__slider">
              <img
                loading="lazy"
                src={dataForProductPopup?.image}
                alt={dataForProductPopup?.name}
                className="fadeIn"
                style={{ objectFit: "cover" }}
              />
              <div className="menu__home__content__popup__content__slider__button">
                <button
                  title="View Full Image"
                  className="menu__home__content__popup__content__slider__button__button"
                  onClick={() => setImagePopup(dataForProductPopup.image)}
                >
                  <ZoomIn />
                </button>
              </div>
            </div>
            <div
              style={{
                overflowY: "auto",
                maxHeight: "calc(100% - 350px - 4em)",
                width: "calc(100% + 4em)",
                padding: "0em 2em",
                marginLeft: selectedLanguage === "en" ? "-2em" : 0,
                marginRight: selectedLanguage === "ar" ? "-2em" : 0,
              }}
            >
              <div className="menu__home__content__popup__content__slider__content">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
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
                    style={{ animationDelay: `0.4s`, marginBottom: 0 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-flame"
                    >
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                    </svg>{" "}
                    {selectedLanguage === "ar" && "سعرات حرارية "}
                    {dataForProductPopup?.calories}
                    {selectedLanguage === "en" && " CAL"}
                  </div>
                </div>
                <div
                  className="menu__home__content__popup__content__slider__info fadeIn"
                  style={{
                    animationDelay: `0.5s`,
                    width: "100%",
                    textAlign: selectedLanguage === "ar" ? "right" : "left",
                  }}
                >
                  {selectedLanguage === "ar"
                    ? dataForProductPopup?.descriptionAr
                    : dataForProductPopup?.description}
                </div>
                {dataForProductPopup?.allergies && (
                  <div
                    className="menu__home__content__popup__content__slider__info fadeIn"
                    style={{
                      animationDelay: `0.5s`,
                      width: "100%",
                      textAlign: selectedLanguage === "ar" ? "right" : "left",
                    }}
                  >
                    <div
                      className="menu__home__content__popup__content__slider__info__allergy__heading"
                      style={{
                        marginBottom: 5,
                        marginTop: 5,
                        fontWeight: 600,
                        fontSize: 16,
                      }}
                    >
                      {selectedLanguage === "ar" ? "الحساسية" : "Allergies"}
                    </div>
                    {dataForProductPopup?.allergies?.map((allergy, index) =>
                      index === dataForProductPopup?.allergies?.length - 1 ? (
                        <span key={index}>
                          {allergy[selectedLanguage === "ar" ? "ar" : "en"]}
                        </span>
                      ) : (
                        <span key={index}>
                          {allergy[selectedLanguage === "ar" ? "ar" : "en"]}،{" "}
                        </span>
                      )
                    )}
                  </div>
                )}
              </div>
              {dataForProductPopup?.additives && (
                <div className="menu__home__content__popup__content__buttons">
                  <div
                    className="menu__home__content__popup__content__buttons__content fadeIn"
                    style={{ width: "100%", marginRight: 0, marginLeft: 0 }}
                  >
                    <div
                      className="menu__home__content__popup__content__buttons__name"
                      style={{ fontWeight: 600 }}
                    >
                      {selectedLanguage === "ar" ? "حدد الحجم" : "Select Size"}
                    </div>
                    <div className="menu__home__content__popup__content__buttons__buttons">
                      {dataForProductPopup?.additives?.map(
                        (additive, index) => (
                          <button
                            onClick={() => {
                              if (addedAdditives.includes(additive)) {
                                setAddedAdditives(
                                  addedAdditives.filter(
                                    (item) => item !== additive
                                  )
                                );
                              } else {
                                setAddedAdditives([
                                  ...addedAdditives,
                                  additive,
                                ]);
                              }
                            }}
                            key={index}
                            className={
                              addedAdditives.includes(additive)
                                ? `menu__home__content__popup__content__buttons__buttons__button menu__home__content__popup__content__buttons__buttons__button__active fadeIn`
                                : `menu__home__content__popup__content__buttons__buttons__button fadeIn`
                            }
                            style={{ animationDelay: `${index * 0.5}s` }}
                          >
                            {selectedLanguage === "ar"
                              ? additive.nameAr
                              : additive.name}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
              {dataForProductPopup?.variants && (
                <>
                  {dataForProductPopup?.variants?.map((variant, index) => (
                    <div className="menu__home__content__popup__content__qauntity__and__price menu__home__content__popup__content__qauntity__and__price__new fadeIn">
                      <div className="menu__home__content__popup__content__qauntity__and__price__qauntity">
                        <div className="menu__home__content__popup__content__qauntity__and__price__qauntity__nameprice">
                          <div className="menu__home__content__popup__content__qauntity__and__price__price__name">
                            {selectedLanguage === "ar"
                              ? variant.nameAr
                              : variant.name}
                          </div>
                          <div className="menu__home__content__popup__content__qauntity__and__price__qauntity__nameprice__price">
                            {variant.price}{" "}
                            {selectedLanguage === "ar" ? "السعر" : "SAR"}
                          </div>
                        </div>
                        <div className="menu__home__content__popup__content__qauntity">
                          <button
                            onClick={() => {
                              if (
                                addedVariants?.find(
                                  (item) => item.name === variant.name
                                )?.quantity === 1
                              ) {
                                setAddedVariants(
                                  addedVariants.filter(
                                    (item) => item.name !== variant.name
                                  )
                                );
                              } else {
                                setAddedVariants(
                                  addedVariants.map((item) => {
                                    if (item.name === variant.name) {
                                      return {
                                        ...item,
                                        quantity: item.quantity - 1,
                                      };
                                    }
                                    return item;
                                  })
                                );
                              }
                            }}
                            className="menu__home__content__popup__content__qauntity__button"
                          >
                            <Minus />
                          </button>
                          <div
                            className="menu__home__content__popup__content__qauntity__number fadeIn"
                            style={{ animationDelay: `0.5s` }}
                          >
                            {addedVariants?.find(
                              (item) => item.name === variant.name
                            )?.quantity || 0}
                          </div>
                          <button
                            onClick={() => {
                              if (
                                addedVariants?.find(
                                  (item) => item.name === variant.name
                                )?.quantity === undefined
                              ) {
                                setAddedVariants([
                                  ...addedVariants,
                                  {
                                    ...variant,
                                    quantity: 1,
                                    index,
                                  },
                                ]);
                              }
                              if (
                                addedVariants?.find(
                                  (item) => item.name === variant.name
                                )?.quantity !== undefined
                              ) {
                                setAddedVariants(
                                  addedVariants.map((item) => {
                                    if (item.name === variant.name) {
                                      return {
                                        ...item,
                                        quantity: item.quantity + 1,
                                      };
                                    }
                                    return item;
                                  })
                                );
                              }
                            }}
                            className="menu__home__content__popup__content__qauntity__button"
                          >
                            <Plus />
                          </button>
                        </div>
                      </div>
                      <div className="menu__home__content__popup__content__qauntity__and__price__price fadeIn">
                        <div
                          className="menu__home__content__popup__content__qauntity__and__price__price__number"
                          style={{ animationDelay: `0.5s` }}
                        >
                          {selectedLanguage === "ar" && "السعر "}
                          {parseFloat(
                            parseFloat(variant.price) *
                              (addedVariants?.find(
                                (item) => item.name === variant.name
                              )?.quantity || 0)
                          ).toFixed(2)}
                          {selectedLanguage === "en" && " SAR"}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className="menu__home__content__popup__content__qauntity__and__price fadeIn">
              {dataForProductPopup?.variants === undefined && (
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
              )}
              <div className="menu__home__content__popup__content__qauntity__and__price__price fadeIn">
                <div className="menu__home__content__popup__content__qauntity__and__price__price__name">
                  {selectedLanguage === "ar" ? "السعر" : "Price"}
                </div>

                <div
                  className="menu__home__content__popup__content__qauntity__and__price__price__number"
                  style={{ animationDelay: `0.5s` }}
                >
                  {selectedLanguage === "ar" && "السعر "}
                  {parseFloat(
                    ((addedVariants.length > 0
                      ? addedVariants?.reduce(
                          (acc, curr) =>
                            acc +
                            parseFloat(curr.price) * parseFloat(curr.quantity),
                          0
                        )
                      : dataForProductPopup?.variants
                      ? 0
                      : parseFloat(dataForProductPopup?.price)) +
                      (addedAdditives.length > 0
                        ? addedAdditives?.reduce(
                            (acc, curr) => acc + parseFloat(curr.price),
                            0
                          )
                        : 0)) *
                      quantity
                  ).toFixed(2)}
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
        {imagePopup !== "" ? (
          <div className="imagespopup">
            <div className="imagespopup__img">
              <button
                onClick={() => setImagePopup("")}
                className="imagespopup__img__closebutton"
              >
                <X />
              </button>
              <img
                className="imagespopup__img__closebutton__img fadeIn"
                src={imagePopup}
                alt="Full Image"
              />
            </div>
          </div>
        ) : null}
      </>
    )
  );
}

export default memo(ProductPopup);
