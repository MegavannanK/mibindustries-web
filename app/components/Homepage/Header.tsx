import { motion } from "framer-motion";
import headerImage from "../../assets/images/export.png";

export const Header = () => {
  return (
    <div className="bg-primary-200 h-auto md:h-[90vh] pt-40 md:pt-20 overflow-hidden">
      <div className="px-10 flex flex-col md:flex-row gap-5 h-[50vh] md:h-full items-center relative">
        {/* Text Section with chunky fall-down animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col gap-5"
        >
          {/* Wrapping text elements inside motion.div to make them animate separately */}
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-primary-800 text-title-5 md:text-title-1 font-bold"
          >
            MIB Industries
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-primary-700 text-body-1 md:text-title-5"
          >
            Connecting Worlds, Exporting Opportunities!!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="text-primary-600 text-title-8 md:text-title-4 mt-10"
          >
            Boost global business with our highly recommended trading company.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, x: 100 }} // Image slides in from the right
          animate={{ opacity: 1, x: 0 }} // Image comes to its normal position
          transition={{ duration: 1 }}
        >
          <img
            src={headerImage.src}
            className="w-full absolute md:-top-[40vh] -right-28"
            alt="Hero"
          />
        </motion.div>
      </div>
    </div>
  );
};
