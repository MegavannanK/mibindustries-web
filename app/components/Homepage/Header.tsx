import { motion, easeOut, type Variants } from "framer-motion";
// import headerImage from "../../assets/images/export.png";
// import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { useRouter } from "next/navigation";


export const Header = () => {
  const router = useRouter();
  
  const containerVariants : Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        ease: easeOut
      },
    },
  };

  const itemVariants : Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: easeOut
      },
    },
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-start overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 pt-20 pb-10">
      {/* Background Aurora Glows */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-gradient-to-r from-primary-100/40 to-primary-200/30 rounded-full blur-3xl opacity-50"></div>

      {/* Video Section - Full Width Landscape */}
      <motion.div
        className="relative w-full overflow-hidden shadow-2xl border-b border-white/20 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto block"
        >
          <source src="/assets/videos/globe_video_cropped.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Subtle Overlay to make it feel premium */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent pointer-events-none"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-6 sm:gap-10 py-8 sm:py-16">
        {/* Text Content - Positioned just below the video */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
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
            className="text-xl sm:text-2xl lg:text-4xl font-medium text-gray-700 mt-2 sm:mt-4 mb-4 sm:mb-6"
          >
            Precision In Every Shipment
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Your trusted partner in global exports and imports, delivering
            excellence and reliability with every shipment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15, ease: easeOut }}
              onClick={() => router.push('/services')}
              className="px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-2xl shadow-xl w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer transition-shadow hover:shadow-primary-500/25"
            >
              <span>Explore Services</span>
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15, ease: easeOut }}
              onClick={() => router.push('/contact-us')}
              className="px-8 py-3.5 text-primary-700 font-bold rounded-2xl w-full sm:w-auto bg-white border border-primary-100 hover:bg-primary-50 cursor-pointer shadow-md transition-all"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>

  );
};
