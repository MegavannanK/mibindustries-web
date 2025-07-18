import { motion } from "framer-motion";
import headerImage from "../../assets/images/export.png";
import { ArrowRightIcon } from "@heroicons/react/outline";

export const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 p-4">
      {/* Background Aurora Glows */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-gradient-to-r from-primary-100/40 to-primary-200/30 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 pt-24 lg:pt-0">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left max-w-2xl"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
          >
            <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text text-transparent">
              MIB
            </span>{" "}
            Industries
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-4xl font-medium text-gray-700 mt-4 mb-6"
          >
            Excel Beyond Boundaries
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Your trusted partner in global exports and imports, delivering
            excellence and reliability with every shipment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px -10px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <span>Explore Services</span>
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-primary-700 font-semibold rounded-full transform transition-colors duration-300 w-full sm:w-auto"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative w-full max-w-sm sm:max-w-md lg:max-w-3xl mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <motion.div
            animate={{
              y: ["0%", "-4%", "0%"],
            }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <img
              src={headerImage.src}
              className="w-full h-auto object-contain"
              alt="Global Trade Illustration"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
