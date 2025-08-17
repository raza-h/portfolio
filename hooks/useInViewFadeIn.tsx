import { useEffect, useRef, useState } from "react";

export default function useInViewFadeIn(
  options?: IntersectionObserverInit & { transition?: string }
) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref?.current) return;
    const obs = new IntersectionObserver(
      ([entry], o) => {
        if (entry.isIntersecting) {
          setVisible(true);
          o.unobserve(entry.target);
        }
      },
      { threshold: 0.25, ...options }
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [options]);

  return {
    ref,
    props: {
      willChange: "auto",
      opacity: visible ? 1 : 0,
      ...(options?.transition ? { transition: options.transition } : {}),
    },
  };
}
