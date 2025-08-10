import { motion } from "framer-motion";
import headerImage from "../../assets/images/export.png";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        ease: "easeOut"
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 p-10 mt-2">
      {/* Background Aurora Glows */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-gradient-to-r from-primary-100/40 to-primary-200/30 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px sm:px-6 relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 pt-24 pb-12 lg:py-0 min-h-screen lg:min-h-0">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left max-w-2xl flex-shrink-0"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text text-transparent">
              MIB
            </span>{" "}
            <span className="bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 bg-clip-text text-transparent">
              Industries
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-3xl font-medium text-gray-700 mt-3 mb-4 lg:mt-4 lg:mb-6"
          >
            Excel Beyond Boundaries
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0"
          >
            Your trusted partner in global exports and imports, delivering
            excellence and reliability with every shipment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-6 lg:mt-10 px-4 sm:px-0"
          >
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              onClick={() => router.push('/services')}
              className="px-6 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full shadow-lg w-full sm:w-auto flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              <span>Explore Services</span>
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              onClick={() => router.push('/contact-us')}
              className="px-6 py-2.5 sm:px-8 sm:py-3 text-primary-700 font-semibold rounded-full w-full sm:w-auto hover:bg-primary-50 text-sm sm:text-base cursor-pointer"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative w-full max-w-sm sm:max-w-md md:max-w-md lg:max-w-3xl flex-1 min-h-0 lg:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src={headerImage}
            alt="Global Trade Illustration"
            className="w-full h-auto object-contain"
            priority
            sizes="(max-width: 1024px) 90vw, 600px"
          />
        </motion.div>
      </div>
    </div>
  );
};
