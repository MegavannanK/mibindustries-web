import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, easeOut } from "framer-motion";
import Container from "../ui/Container";

export const AboutUs = () => {
  const controls = useAnimation();
  const isMountedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    isMountedRef.current = true;

    const handleScroll = () => {  
      if (!isMountedRef.current) return;
      
      const scrollPosition = window.scrollY;
      const shouldBeVisible = scrollPosition > 825;
      
      setIsVisible(prev => {
        if (prev !== shouldBeVisible) {
          return shouldBeVisible;
        }
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      isMountedRef.current = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMountedRef.current) return;
    
    if (isVisible) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [isVisible, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: easeOut
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-200/15 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Content - About Us */}
          <motion.div variants={itemVariants} className="md:col-span-7 space-y-8">
            {/* Header Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"></div>
                <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                  About MIB Industries
                </span>
              </div>
              
              <motion.h2 
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold leading-tight"
              >
                <span className="text-transparent bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 bg-clip-text">
                  Excellence
                </span>{" "}
                <span className="text-gray-800">in Global Trade</span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-xl lg:text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Transforming agricultural excellence into{" "}
                <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text font-semibold">
                  global opportunities
                </span>{" "}
                since our inception.
              </motion.p>
            </div>

            {/* Content Paragraphs */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-base md:prose-lg max-w-none">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed text-base md:text-medium">
                    <span className="font-semibold text-primary-700">MIB Industries</span>, is a trusted name in the field of export and import, proudly serving global markets for over 13 years. Headquartered in India, we specialize in sourcing and exporting a wide range of authentic Indian products across the globe. With a strong and reliable supply network spread across India, we ensure consistent quality and timely delivery of goods to our clients worldwide.
                  </p>
                  
                  <p className="hidden lg:block text-gray-700 leading-relaxed text-base md:text-medium">
                    We make international trade feel local. Whether you&apos;re based in Asia, Africa, Europe, the Americas, or the Middle East, our efficient logistics and customs clearance teams ensure seamless operations. We have dedicated import and clearance offices in major global ports to provide you with a hassle-free experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Modern Image Display */}
          <motion.div variants={itemVariants} className="md:col-span-5">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white border border-gray-100">
                {/* Image Display */}
                <div className="relative bg-white p-4">
                  <div className="relative aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-inner border border-gray-200/30">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: easeOut }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src="https://res.cloudinary.com/dd7bw6igp/image/upload/v1754844250/mib_aboutus_img_dkyiwy.png"
                        alt="MIB Industries - Modern Agricultural Excellence"
                        className="object-cover w-full h-full rounded-xl"
                        fill
                        priority={true}
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 40vw"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating Quality Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -15 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-3 z-10"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">ISO Certified</p>
                    <p className="text-xs text-gray-600">Quality Assured</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>


      </Container>
    </section>
  );
};
