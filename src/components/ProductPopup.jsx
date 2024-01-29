import { Crosshair, Minus, Plus, X } from "react-feather";
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
        {" "}
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
                <button></button>
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
                        <div className="menu__home__content__popup__content__qauntity__and__price__price__name">
                          {selectedLanguage === "ar"
                            ? variant.nameAr
                            : variant.name}
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
        <div className="imagespopup">
          <div className="imagespopup__img">
            <button className="imagespopup__img__closebutton">
              <X />
            </button>
            <img
              src="https://res.cloudinary.com/dhg7c7ypc/image/upload/v1706512598/menuwebsite/upload/img2_txrx2j.webp"
              alt=""
            />
          </div>
        </div>
      </>
    )
  );
}

export default memo(ProductPopup);
