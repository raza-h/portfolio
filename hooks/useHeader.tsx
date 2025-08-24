import { useEffect, useState } from "react";
import useHashUpdate from "./useHashUpdate";
import useHeaderVisibility from "./useHeaderVisibility";

const useHeader = (sectionSelector: string = "section") => {
  const [left, setLeft] = useState("-100%");
  const [width, setWidth] = useState(0);
  const [hash, setHash] = useState("");
  const [showHeader, setShowHeader] = useState(true);

  useHashUpdate(sectionSelector, setHash);
  useHeaderVisibility(setShowHeader, setWidth);

  useEffect(() => {
    if (left[0] !== "-" && width < 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [left, width]);

  const toggleSidebar = (_e: unknown, base = false) => {
    if (window.innerWidth < 1024) {
      if (left[0] === "-") setLeft("0%");
      else setLeft("-100%");
    } else {
      if (!base) {
        setShowHeader(!showHeader);
      }
    }
  };

  return { left, width, hash, showHeader, toggleSidebar };
};

export default useHeader;
