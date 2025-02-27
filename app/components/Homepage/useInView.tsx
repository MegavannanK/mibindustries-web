import { useEffect, useState } from "react";

export const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold, // The percentage of the element visible before triggering the animation
      }
    );

    const element = document.querySelector(".experience-section"); // Add a class for the target
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  return isInView;
};
