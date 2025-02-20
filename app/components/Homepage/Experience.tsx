import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import experienceHeroImage from "../../assets/images/experience-hero.svg";
import customerExperienceImage from "../../assets/images/customer-satisfaction.png";
import customerImage from "../../assets/images/customer.png";
import shippingImage from "../../assets/images/shipping.png";

const stats = [
  {
    image: shippingImage,
    count: 2000,
    label: "Consignments Done",
  },
  {
    image: customerImage,
    count: 500,
    label: "Happy Users",
  },
  {
    image: customerExperienceImage,
    count: 20,
    label: "Years Experience",
  },
];

export const Experience = () => {
  return (
    <div className="bg-primary-800 px-4 py-6 h-[45vh] md:h-[50vh] overflow-hidden">
      <div className="relative">
        <img
          className="md:w-full absolute md:-top-[160px] opacity-10"
          src={experienceHeroImage.src}
          alt="Hero Background"
        />
      </div>
      <div
        className={`w-8/12 mx-auto z-100 grid grid-cols-2 ${
          stats.length > 1 ? "md:grid-cols-3" : "justify-center"
        } gap-10 mt-5 md:mt-10 items-center`}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-[0px_4px_10px_rgba(255,255,255,0.3)] p-4 flex flex-col gap-4 xl:w-[300px] xl:h-56 items-center justify-between ${
              stat.label === "Happy Users" ? "md:mt-16" : ""
            }`}
          >
            <div className="bg-primary-700 h-10 w-10 md:h-16 md:w-16 xl:h-20 xl:w-20 flex items-center justify-center rounded-md">
              <img src={stat.image.src} alt={stat.label} className="w-12" />
            </div>
            <div className="text-center">
              <AnimatedCount count={stat.count} />
              <p className="text-body-3 md:text-body-1 text-primary-500 font-medium">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AnimatedCount = ({ count }: { count: number }) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = count;
    const duration = 2000; // Duration of the animation in ms
    const increment = end / (duration / 100);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCurrentCount(end);
        clearInterval(interval);
      } else {
        setCurrentCount(Math.floor(start));
      }
    }, 100);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [count]);

  return (
    <motion.h2
      className="text-primary-900 text-body-1 md:text-title-7 font-semibold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.span
        key={count}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {currentCount} +
      </motion.span>
    </motion.h2>
  );
};
