import { useEffect, useState, useRef } from "react";

export const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null); // Ensure the ref is typed properly

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    const element = elementRef.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  return [isInView, elementRef] as const; // Ensure that the return is properly typed
};
