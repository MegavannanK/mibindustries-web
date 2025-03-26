import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "./useInView"; // Ensure this custom hook is typed
import Image, { StaticImageData } from "next/image"; // Import StaticImageData type for images using next/image
import experienceHeroImage from "../../assets/images/experience-hero.svg";
import customerExperienceImage from "../../assets/images/customer-satisfaction.png";
import customerImage from "../../assets/images/customer.png";
import shippingImage from "../../assets/images/shipping.png";

type Stat = {
  image: StaticImageData; // Use StaticImageData instead of string
  count: number;
  label: string;
};

const stats: Stat[] = [
  {
    image: shippingImage,
    count: 2150,
    label: "Consignments Done",
  },
  {
    image: customerImage,
    count: 500,
    label: "Happy Customers",
  },
  {
    image: customerExperienceImage,
    count: 20,
    label: "Years Experience",
  },
];

export const Experience = () => {
  const [isInView, elementRef] = useInView(); // Ensure this custom hook is typed

  return (
    <div
      ref={elementRef}
      className="bg-primary-800 px-4 py-6 h-[45vh] md:h-[50vh] overflow-hidden"
    >
      <div className="relative">
        {/* Replacing <img> with next/image */}
        <Image
          className="md:w-full absolute md:-top-[160px] opacity-10"
          src={experienceHeroImage}
          alt="Hero Background"
          layout="fill" // Ensures the image fills its parent container
          objectFit="cover" // Optional: to make sure the image is properly fitted
        />
      </div>
      <div className="w-full max-w-6xl mx-auto flex justify-center gap-10 sm:gap-14 lg:gap-24 mt-5 md:mt-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-between w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] lg:w-[300px] lg:h-[250px] ${
              index === 1 ? "transform translate-y-10" : ""
            }`}
          >
            <div className="bg-primary-700 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 flex items-center justify-center rounded-md">
              <Image
                src={stat.image}
                alt={stat.label}
                width={48} // Size of the image (adjust as needed)
                height={48} // Size of the image (adjust as needed)
                layout="intrinsic" // Ensures the image keeps its aspect ratio
              />
            </div>
            <div className="text-center mt-4">
              <AnimatedCount count={stat.count} isInView={isInView} />
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

interface AnimatedCountProps {
  count: number;
  isInView: boolean;
}

const AnimatedCount = ({ count, isInView }: AnimatedCountProps) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    if (isInView) {
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
    }
  }, [count, isInView]);

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
