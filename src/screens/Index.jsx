import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import item from "../assets/itemimg.png";
import star from "../assets/star.png";
export default function Index() {
  return (
    <>
      <section className="MenuHome">
        <div className="menu__home__content">
          <div className="menu__home__content__left">
            <div className="menu__home__content__left__links">
              <Link className="menu__home__content__left__link" to="#">
                Arabic Food
              </Link>
              <Link className="menu__home__content__left__link" to="#">
                Fastfood
              </Link>
              <Link className="menu__home__content__left__link" to="#">
                Arabic Cousine
              </Link>
              <Link className="menu__home__content__left__link" to="#">
                Halal Food
              </Link>
              <Link className="menu__home__content__left__link" to="#">
                Halal Food
              </Link>
              <Link className="menu__home__content__left__link" to="#">
                Halal Food
              </Link>
              <Link className="menu__home__content__left__link" to="#">
                Halal Food
              </Link>
              <Link className="menu__home__content__left__link" to="#">
                Halal Food
              </Link>
              <Link className="menu__home__content__left__link" to="#">
                Halal Food
              </Link>
              <Link className="menu__home__content__left__link" to="#">
                Halal Food
              </Link>
              <Link className="menu__home__content__left__link" to="#">
                Halal Food
              </Link>
              <Link className="menu__home__content__left__link" to="#">
                Halal Food
              </Link>
            </div>
          </div>
          <div className="menu__home__content__right">
            <div className="menu__home__content__right__content">
              <div className="menu__home__content__right__content__top">
                <div className="menu__home__content__right__content__top__logo">
                  <img src={logo} alt="" />
                </div>
                <div className="menu__home__content__right__content__top__content">
                  <div className="menu__home__content__right__content__top__search">
                    <div className="menu__home__content__right__content__top__search__input">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.58144 17.1629C3.85118 17.1629 0 13.3117 0 8.58144C0 3.85118 3.85118 0 8.58144 0C13.3117 0 17.1629 3.85118 17.1629 8.58144C17.1629 13.3117 13.3117 17.1629 8.58144 17.1629ZM8.58144 1.25582C4.5377 1.25582 1.25582 4.54607 1.25582 8.58144C1.25582 12.6168 4.5377 15.9071 8.58144 15.9071C12.6252 15.9071 15.9071 12.6168 15.9071 8.58144C15.9071 4.54607 12.6252 1.25582 8.58144 1.25582Z"
                          fill="#9BA8B7"
                        />
                        <path
                          d="M17.3725 18C17.2134 18 17.0544 17.9414 16.9288 17.8158L15.2544 16.1414C15.0116 15.8986 15.0116 15.4967 15.2544 15.2539C15.4972 15.0111 15.899 15.0111 16.1418 15.2539L17.8162 16.9284C18.059 17.1712 18.059 17.573 17.8162 17.8158C17.6906 17.9414 17.5316 18 17.3725 18Z"
                          fill="#9BA8B7"
                        />
                      </svg>

                      <input type="text" placeholder="Search the items here" />
                    </div>
                  </div>
                  <div className="menu__home__content__right__content__top__cart">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1H2.65301C3.67901 1 4.4865 1.8835 4.401 2.9L3.6125 12.362C3.4795 13.9105 4.70499 15.2405 6.26299 15.2405H16.3805C17.7485 15.2405 18.9455 14.1195 19.05 12.761L19.563 5.636C19.677 4.059 18.48 2.7765 16.8935 2.7765H4.62901"
                        stroke="#FB7D37"
                        stroke-width="1.425"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.5374 20C15.1932 20 15.7249 19.4684 15.7249 18.8125C15.7249 18.1566 15.1932 17.625 14.5374 17.625C13.8815 17.625 13.3499 18.1566 13.3499 18.8125C13.3499 19.4684 13.8815 20 14.5374 20Z"
                        stroke="#FB7D37"
                        stroke-width="1.425"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.9375 20C7.59334 20 8.125 19.4684 8.125 18.8125C8.125 18.1566 7.59334 17.625 6.9375 17.625C6.28166 17.625 5.75 18.1566 5.75 18.8125C5.75 19.4684 6.28166 20 6.9375 20Z"
                        stroke="#FB7D37"
                        stroke-width="1.425"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.6499 6.70001H19.0499"
                        stroke="#FB7D37"
                        stroke-width="1.425"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="menu__home__content__right__content__top__cart__count">
                      0 Items
                    </div>
                  </div>
                  <div className="menu__home__content__right__content__top__darklightmood">
                    <svg
                      width="17"
                      height="19"
                      viewBox="0 0 17 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.35487 18.7097C12.2403 18.7097 14.8757 17.397 16.6216 15.2458C16.8799 14.9276 16.5983 14.4627 16.1991 14.5387C11.6604 15.4031 7.49241 11.9232 7.49241 7.34153C7.49241 4.70236 8.90522 2.27546 11.2014 0.968741C11.5554 0.767319 11.4663 0.230693 11.0641 0.156402C10.5003 0.0524359 9.9282 8.53756e-05 9.35487 0C4.19109 0 0 4.18452 0 9.35487C0 14.5187 4.18452 18.7097 9.35487 18.7097Z"
                        fill="#002350"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="menu__home__content__right__content__bottom"></div>
            </div>
            <div className="menu__home__content__right__content__bottom">
              <div className="menu__home__content__right__content__bottom__content">
                <div className="menu__home__content__right__content__bottom__content__heading">
                  <h2>Arabic Food</h2>
                </div>
                <div className="menu__home__content__right__content__bottom__content__items">
                  <div className="menu__home__content__right__content__bottom__content__items__card">
                    <div className="menu__home__content__right__content__bottom__content__items__card__foodimg">
                      <img src={item} alt="item" />
                    </div>
                    <div className="menu__home__content__right__content__bottom__content__items__card__ratingimg">
                      <img src={star} alt="star" />
                    </div>
                    <div className="menu__home__content__right__content__bottom__content__items__card__name">
                      Malang Jaan Beef
                    </div>
                    <div className="menu__home__content__right__content__bottom__content__items__card__weight">
                      500g
                    </div>
                    <div className="menu__home__content__right__content__bottom__content__items__card__price">
                      AED 600
                    </div>
                    <button className="menu__home__content__right__content__bottom__content__items__card__button">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
