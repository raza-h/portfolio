import { Dispatch, SetStateAction, useEffect, useRef } from "react";

function useHeaderVisibility(
  setShowHeader: Dispatch<SetStateAction<boolean>>,
  setWidth: Dispatch<SetStateAction<number>>
) {
  const lastScrollY = useRef(0);

  useEffect(() => {
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
    };

    const handleScrollToTop = () => {
      if (window.scrollY === 0) setShowHeader(true);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScrollToTop);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollToTop);
      window.removeEventListener("resize", handleResize);
    };
  }, [setShowHeader, setWidth]);
}

export default useHeaderVisibility;
