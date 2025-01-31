"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import logo from "@/app/assets/images/logo.png";

export const SplashScreen = ({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      controls.stop();
      onAnimationComplete();
    };

    window.addEventListener("scroll", handleScroll);

    controls.start({ opacity: 1 }).then(() => {
      setTimeout(() => {
        controls
          .start({
            opacity: 0,
            x: "-50vw",
            y: "-50vh",
            scale: 0.5,
            rotate: 360,
            transition: { duration: 1.5, ease: "easeInOut" },
          })
          .then(() => {
            onAnimationComplete();
          });
      }, 1000);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, onAnimationComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <motion.img
        src={logo.src}
        alt="Logo"
        className="w-32 h-32"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
    </motion.div>
  );
};
