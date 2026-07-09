import { useEffect } from "react";

export const useFadeIn = (ref, options = { threshold: 0.1 }) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-active");
          observer.unobserve(entry.target); // trigger once
        }
      });
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref, options]);
};
