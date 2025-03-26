import { useState, useEffect } from "react";
import { flags } from "@/app/masters/flags";
import { motion, useAnimation } from "framer-motion";

export const Flags = () => {
  const [currentFlags, setCurrentFlags] = useState(flags.slice(0, 3));
  const controls = useAnimation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextFlags = flags.slice(3, 6); // Change the indices to display the next set of flags
      setCurrentFlags(nextFlags);

      controls.start({
        opacity: [0, 1],
        x: [100, 0],
        transition: { duration: 1 },
      });
    }, 3000); // Change flags every 3 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [controls]);

  return (
    <div className="bg-primary-100">
      <div className="w-full flex justify-center items-center p-8">
        <div className="flex w-full max-w-screen-xl gap-64 justify-center">
          {currentFlags.map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={controls}
              exit={{ opacity: 0, x: -100 }}
              className="flex-shrink-0 w-[250px] h-[150px] bg-cover rounded-lg shadow-lg" // Adjusted size for wider images
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover", // Prevent cropping by ensuring the image fits inside the div
                backgroundPosition: "center", // Center the image inside the div
                backgroundRepeat: "no-repeat", // Prevent repeating the background image
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
