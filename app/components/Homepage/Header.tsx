import { motion } from "framer-motion";
import headerImage from "../../assets/images/export.png";

export const Header = () => {
  return (
    <div className="bg-primary-200 h-auto md:h-[90vh] pt-40 md:pt-20 overflow-hidden">
      <div className="px-10 flex flex-col md:flex-row gap-5 h-[50vh] md:h-full items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-primary-800 text-title-5 md:text-title-1 font-bold">
            MIB Industries
          </h1>
          <p className="text-primary-700 text-body-1 md:text-title-5">
            Connecting Worlds, Exporting Opportunities!!
          </p>
          <p className="text-primary-600 text-title-8 md:text-title-4 mt-10">
            Boost global business with our highly recommended trading company.
          </p>
        </motion.div>
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
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
