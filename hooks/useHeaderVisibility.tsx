import { Dispatch, SetStateAction, useEffect, useRef } from "react";

function useHeaderVisibility(
  setShowHeader: Dispatch<SetStateAction<boolean>>,
  setWidth: Dispatch<SetStateAction<number>>
) {
  const lastScrollY = useRef(0);
  useEffect(() => {
    let activeEvent: "scroll" | "wheel" =
      window.innerWidth < 1024 ? "scroll" : "wheel";

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY.current) {
        setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;
    };

    const handleResize = () => {
      setWidth(window.innerWidth);
      const newEvent = window.innerWidth < 1024 ? "scroll" : "wheel";
      if (newEvent !== activeEvent) {
        window.removeEventListener(activeEvent, handleScroll);
        activeEvent = newEvent;
        window.addEventListener(activeEvent, handleScroll, { passive: true });
      }
    };

    const handleScrollToTop = () => {
      if (window.scrollY === 0) setShowHeader(true);
    };

    setWidth(window.innerWidth);
    window.addEventListener(activeEvent, handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScrollToTop);

    return () => {
      window.removeEventListener(activeEvent, handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScrollToTop);
    };
  }, [setShowHeader, setWidth]);
}

export default useHeaderVisibility;
