import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { success_story } from "@/app/masters/sucess_story";
import { motion } from "framer-motion";

export const OurWork: React.FC = () => {
  const images = success_story;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut"
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
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-200/15 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Content - Takes 7 columns */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6 mb-8 lg:mb-0">
            {/* Header Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"></div>
                <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                  Our Success Story
                </span>
              </div>
              
              <motion.h2 
                variants={itemVariants}
                className="text-3xl sm:text-3xl lg:text-4xl font-semibold leading-tight"
              >
                <span className="text-transparent bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 bg-clip-text">
                  Blue Elephant
                </span>
                <br />
                <span className="text-gray-800 text-xl">Premium Heritage</span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Our signature brand, crafted to represent the{" "}
                <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text font-semibold">
                  finest quality
                </span>{" "}
                in Indian staples.
              </motion.p>
            </div>

            {/* Content Paragraphs */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="prose prose-lg max-w-none">
                {/* Desktop content - full paragraphs */}
                <div className="hidden sm:block space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Specializing in <span className="font-semibold text-primary-700">premium-grade rice</span>, we take pride in delivering authenticity, purity, and tradition in every grain. Our commitment to excellence has made Blue Elephant a trusted name across global markets.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    With a focus on <span className="font-semibold text-primary-700">Thanjavur Ponni and Idli rice</span>, our offerings are naturally aged and lab-tested for excellence. Trusted by chefs and homes alike.</p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Blue Elephant is truly:
                  </p>
                  
                  {/* Highlighted Slogan */}
                  <div className="text-center py-3">
                    <p className="italic font-bold text-2xl text-transparent bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text">
                      &ldquo;The Soul of Indian Meals&rdquo;
                    </p>
                    <p className="text-sm text-gray-600 mt-2 italic">
                      A testament to quality, tradition, and the essence of authentic Indian cuisine
                    </p>
                  </div>
                </div>

                {/* Mobile content - single condensed highlight */}
                <div className="block sm:hidden text-center space-y-4">
                  <p className="text-xs text-primary-500 font-bold mb-3 uppercase tracking-wider">
                    Our Signature Brand
                  </p>
                  <p className="text-2xl font-bold text-gray-800 mb-4">
                    Blue Elephant
                  </p>
                  <div className="bg-white border-2 border-primary-200 rounded-xl p-4 mb-4 shadow-sm">
                    <p className="text-sm leading-relaxed">
                      <span className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                        Crafted by MIB
                      </span>
                      <br />
                      <span className="text-emerald-600 font-semibold text-base">
                        Thanjavur Ponni & Idli Rice
                      </span>
                    </p>
                  </div>
                  <p className="italic font-bold text-xl text-transparent bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text leading-tight">
                    &ldquo;The Soul of Indian Meals&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quality Features Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { label: "Lab Tested", icon: "🔬" },
                { label: "Premium Quality", icon: "⭐" },
                { label: "Naturally Aged", icon: "🌾" },
                { label: "Traditionally Harvested", icon: "🚜" }
              ].map((feature) => (
                <motion.div
                  key={feature.label}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-primary-100/50 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span className="text-lg sm:text-xl flex-shrink-0">{feature.icon}</span>
                  <span className="font-medium text-gray-700 text-xs sm:text-base leading-tight">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Clean Image Display */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white border border-gray-100">
                {/* Header with Brand Info */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-xl">Blue Elephant</h3>
                      <p className="text-primary-100 text-sm">Premium Rice Collection</p>
                    </div>
                  </div>
                </div>

                {/* Image Display */}
                <div className="relative bg-white p-4">
                  <div className="relative aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-inner border border-gray-200/30">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="relative w-full h-full p-3"
                    >
                      <Image
                        src={images[0]}
                        alt="Blue Elephant Premium Rice Product"
                        className="object-contain w-full h-full drop-shadow-2xl"
                        fill
                        priority={true}
                        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 40vw"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -bottom-6 sm:-bottom-8 -left-3 sm:-left-6 bg-white/98 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200/50 p-3 sm:p-4 z-10"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm sm:text-base">100% Authentic</p>
                    <p className="text-xs sm:text-sm text-gray-600">Lab Certified Premium</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -30, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -top-4 sm:-top-8 -right-3 sm:-right-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl sm:rounded-2xl shadow-2xl p-2 sm:p-4 z-10"
              >
                <div className="text-center">
                  <div className="flex items-center justify-center gap-0.5 sm:gap-1 mb-1 sm:mb-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        className="text-yellow-300 text-xs sm:text-sm"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <p className="font-bold text-xs sm:text-base">Premium Rated</p>
                  <p className="text-xs text-primary-100 opacity-90 hidden sm:block">Trusted Quality</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
