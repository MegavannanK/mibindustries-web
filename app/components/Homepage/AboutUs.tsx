import aboutUsImage from "../../assets/images/about-us.svg";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const AboutUs = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        controls.start({ opacity: 1 });
      } else {
        controls.start({ opacity: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div className="bg-primary-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center px-4 sm:px-6 md:px-10">
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <img
            src={aboutUsImage.src}
            alt="About Us"
            className="w-full object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col gap-5 md:mt-10 mx-auto">
            <div className="text-title-5 md:text-title-2 font-bold text-center md:text-left">
              <p className="text-primary-800">About</p>
              <h2 className="ml-0 md:ml-6 text-primary-700">TradeLinkGlobal</h2>
            </div>
            <p className="text-black text-body-1 md:text-title-5 font-semibold text-center md:text-left">
              Insights and Resources to help drive your Business Forward Faster.
            </p>
            <p className="text-black text-body-3 md:text-title-8 text-center md:text-left">
              We build results-oriented brand strategy and continually refine
              the campaign for the greatest outcome. From full-scale branding
              strategy, we are reaching almost desired buyers throughout the
              world.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
