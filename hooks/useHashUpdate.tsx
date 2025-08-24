import { Dispatch, SetStateAction, useEffect } from "react";
import { debounce } from "lodash";

export default function useHashUpdate(
  sectionSelector: string,
  setHash: Dispatch<SetStateAction<string>>
) {
  useEffect(() => {
    const sections = document.querySelectorAll(sectionSelector);

    const onScroll = () => {
      if (sections?.length) {
        let currentSection: Element = sections[0];

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = section;
          }
        });

        if (currentSection) {
          const newHash =
            currentSection?.id === "home" ? "#" : `#${currentSection.id}`;
          if (window.location.hash !== newHash) {
            history.replaceState(null, "", window.location.origin + window.location.pathname + newHash);
          }
          setHash(newHash);
        }
      }
    };

    const scrollEvent = debounce(onScroll, 100);
    window.addEventListener("scroll", scrollEvent);

    return () => window.removeEventListener("scroll", scrollEvent);
  }, [sectionSelector, setHash]);
}
