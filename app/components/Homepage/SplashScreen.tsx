"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import logo from "@/app/assets/images/logo.png";

export const SplashScreen = ({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void;
}) => {
  const controls = useAnimation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      controls.stop();
      onAnimationComplete();
    };

    window.addEventListener("scroll", handleScroll);

    // Animate the splash screen opacity when the page loads
    controls.start({ opacity: 1 }).then(() => {
      setTimeout(() => {
        controls
          .start({
            opacity: 0,
            x: "-50vw",
            y: "-50vh",
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
  }, [controls, onAnimationComplete, isClient]);

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
        animate={{
          scale: [0.7, 1.2, 0.7, 1], // Zoom in and out (scale from smaller to larger, then back)
          boxShadow:
            "0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop", // Loop the animation
          duration: 1.5, // Duration for each cycle (zoom in or out)
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};
