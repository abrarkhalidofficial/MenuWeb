import { cloneElement, memo, useEffect, useRef } from "react";

import gsap from "gsap";

function MagneticEffect({ children }) {
  const magnetic = useRef(null);

  useEffect(() => {
    const element = magnetic.current;
    const tl = gsap.timeline({ paused: true });

    tl.to(element, {
      duration: 1,
      x: 0,
      y: 0,
      ease: "elastic.out(1, 0.3)",
    });

    element.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      gsap.to(tl, {
        time: 0.2,
        x: x * 0.35,
        y: y * 0.35,
        overwrite: "auto",
      });
    });

    element.addEventListener("mouseleave", () => {
      tl.play();
    });

    return () => {
      element.removeEventListener("mousemove", () => {});
      element.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return cloneElement(children, { ref: magnetic });
}

export default memo(MagneticEffect);
