import { useState, useEffect } from "react";
import { flags } from "@/app/masters/flags";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image"; // Import Next.js Image component
import { g } from "framer-motion/client";

export const Flags = () => {
  const [currentFlags, setCurrentFlags] = useState<string[]>(flags.slice(0, 3));
  const[startIndex, setStartIndex] = useState(0); // Display 3 flags initially
  const [index, setIndex] = useState(0); // Track which set of flags to show
  const controls = useAnimation(); // Controls for animation

  // Update flags every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {

      const start = index * 3;
      const end = start + 3;
      const nextFlags = flags.slice(start, end);
      setCurrentFlags(nextFlags);
  
      const nextIndex = (index + 1) % Math.ceil(flags.length / 3);
      setIndex(nextIndex);

      // Optionally animate the transition of flags if necessary
      controls.start({
        opacity: [0, 1],
        x: [100, 0],
        transition: { duration: 1.0 },
      });

    }, 2000); // Change flags every 2 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [index, controls]);

  return (
    <div className="bg-primary-100">
      <div className="w-full flex justify-center items-center p-8">
        <div className="flex w-full max-w-screen-xl flex-col items-center gap-8">
          <div className="text-title-5 md:text-title-2 font-bold text-center md:text-left">
            {/* Title Section */}
            <h2 className="ml-0 md:ml-6 text-primary-800">
              Countries We Export
            </h2>
          </div>
          <div className="flex w-full flex-wrap gap-16 justify-center">
            {currentFlags.map((url, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={controls}
                exit={{ opacity: 0, x: -100 }}
                // className="flex-shrink-0 w-full sm:w-[200px] h-auto sm:h-auto rounded-lg shadow-lg overflow-hidden"
                // className="w-[200px] h-[120px] overflow-hidden rounded-lg shadow-lg bg-white relative"
                // className="w-[200px] h-[120px] flex items-center justify-center bg-white overflow-hidden rounded-lg shadow-lg"
                className="w-[200px] h-[120px] rounded-lg overflow-hidden shadow-lg bg-white flex items-center justify-center"
              >
                <Image
                  src={url}
                  alt={`Flag ${index}`}
                  // layout="responsive" // Makes the image responsive
                  width={300} // Intentionally larger than container
                  height={200} // Aspect ratio height (container height)
                  // fill
                  className="object-cover"// Ensure the image is fully visible
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
