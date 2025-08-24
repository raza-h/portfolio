import { Dispatch, SetStateAction, useEffect } from "react";
import { debounce } from "lodash";

const updateURL = debounce((newHash) => {
  if (window.location.hash !== newHash) {
    history.replaceState(
      null,
      "",
      window.location.origin + window.location.pathname + newHash
    );
  }
}, 500);

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
          updateURL(newHash);
          setHash(newHash);
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionSelector, setHash]);
}
