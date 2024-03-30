import {
  memo,
  useCallback,
  useDeferredValue,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import Category from "../components/Category";
import Header from "../components/Header";
import LanguageButton from "../components/LanguageButton";
import MobileCategories from "../components/MobileCategories";
import ProductPopup from "../components/ProductPopup";
import Sidebar from "../components/Sidebar";
import cartAtom from "../data/cartAtom";
import data from "../data/data.json";
import themeAtom from "../data/themeAtom";
import { useAtom } from "jotai";
import { useLanguage } from "../context/LanguageContext";

function Index() {
  const [language] = useLanguage();
  const [cart] = useAtom(cartAtom);
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useAtom(themeAtom);
  const parentScrollContainerRef = useRef(null);
  const scrollParentRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const deferredActiveCategory = useDeferredValue(activeCategory);

  const toggleTheme = useCallback(
    () => setTheme(theme === "light" ? "dark" : "light"),
    [theme]
  );

  const onPress = useCallback((e) => {
    e.preventDefault();
    const id = e.target.getAttribute("data-to-scrollSpy-id");
    const element = document.getElementById(id);
    console.log(element);
    const scrollParentRefCurrent = scrollParentRef.current;

    if (element && scrollParentRefCurrent) {
      const offsetTop = element.offsetTop;
      scrollParentRefCurrent.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const parentScrollContainer = parentScrollContainerRef.current;
    const scrollParentRefCurrent = scrollParentRef.current;

    const handleScroll = () => {
      const children = Array.from(parentScrollContainer.children);

      const itemsInView = [];

      for (const child of children) {
        const { top, bottom } = child.getBoundingClientRect();
        if (top <= 140 && bottom >= 140) {
          itemsInView.push(child.id);
        }
      }

      if (itemsInView.length > 0) {
        setActiveCategory(itemsInView[0]);
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(
          (entry) => {
            if (entry.isIntersecting) {
              setActiveCategory(entry.target.id);
            }
          },
          {
            root: scrollParentRefCurrent,
            threshold: 0.5,
          }
        );
      });

      children.forEach((child) => observer.observe(child));
    };

    scrollParentRefCurrent.addEventListener("scroll", handleScroll);

    return () =>
      scrollParentRefCurrent.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(
    () => document?.documentElement?.setAttribute("data-theme", theme),
    [theme]
  );

  return (
    <>
      <LanguageButton />
      <div className="menu__home__content">
        <Sidebar
          theme={theme}
          onPress={onPress}
          deferredActiveCategory={deferredActiveCategory}
        />
        <div className="menu__home__content__right" ref={scrollParentRef}>
          <Header
            query={query}
            setQuery={setQuery}
            toggleTheme={toggleTheme}
            theme={theme}
            cart={cart}
          />
          <MobileCategories
            activeCategory={activeCategory}
            onPress={onPress}
            data={data}
          />
          <div className="menu__home__content__right__content__bottom__wrapper fadeIn">
            <div
              ref={parentScrollContainerRef}
              className="menu__home__content__right__content__bottom"
            >
              {data.map((category, index) => (
                <Category
                  key={index}
                  index={index}
                  category={category}
                  products={category.products?.filter((product) =>
                    (language === "ar" ? product.nameAr : product.name)
                      .toLowerCase()
                      .includes(query.toLowerCase())
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <ProductPopup />
    </>
  );
}

export default memo(Index);
