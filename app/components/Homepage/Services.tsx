"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, easeOut, easeInOut, type Variants } from "framer-motion";
import { useInView } from "./useInView";
import {
  CogIcon,
  ArchiveIcon,
  TruckIcon,
  DocumentIcon,
  SwitchHorizontalIcon,
  OfficeBuildingIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "@heroicons/react/outline";

const steps = [
  { 
    title: "Sourcing / Manufacturing", 
    icon: CogIcon,
    description: "We source the finest quality products from trusted manufacturers worldwide",
    color: "bg-blue-500"
  },
  { 
    title: "Packing", 
    icon: ArchiveIcon,
    description: "Professional packaging ensuring product safety during transit",
    color: "bg-green-500"
  },
  { 
    title: "Logistics", 
    icon: TruckIcon,
    description: "Efficient transportation and supply chain management",
    color: "bg-orange-500"
  },
  { 
    title: "Customs Clearance", 
    icon: DocumentIcon,
    description: "Seamless customs documentation and clearance processes",
    color: "bg-purple-500"
  },
  { 
    title: "Exporting & Importing", 
    icon: SwitchHorizontalIcon,
    description: "Complete export-import solutions with global reach",
    color: "bg-red-500"
  },
  { 
    title: "Warehousing", 
    icon: OfficeBuildingIcon,
    description: "Secure storage and inventory management facilities",
    color: "bg-indigo-500"
  },
];

export const Services = () => {
  const router = useRouter();
  const [isInView, ref] = useInView();
  const [cardsInView, cardsRef] = useInView();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Individual viewport detection for each mobile card
  const [mobileCard0InView, mobileCard0Ref] = useInView();
  const [mobileCard1InView, mobileCard1Ref] = useInView();
  const [mobileCard2InView, mobileCard2Ref] = useInView();
  const [mobileCard3InView, mobileCard3Ref] = useInView();
  const [mobileCard4InView, mobileCard4Ref] = useInView();
  const [mobileCard5InView, mobileCard5Ref] = useInView();

  const mobileCardRefs = [
    mobileCard0Ref,
    mobileCard1Ref,
    mobileCard2Ref,
    mobileCard3Ref,
    mobileCard4Ref,
    mobileCard5Ref,
  ];

  const mobileCardInViewStates = [
    mobileCard0InView,
    mobileCard1InView,
    mobileCard2InView,
    mobileCard3InView,
    mobileCard4InView,
    mobileCard5InView,
  ];

  const containerVariants : Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants : Variants = {
    hidden: { opacity: 0, y: 80, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8,
        type: "spring",
        stiffness: 80,
        damping: 20
      } 
    },
  };

  // Individual card variants for mobile (no stagger needed)
  const mobileCardVariants : Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15
      } 
    },
  };

  const arrowVariants : Variants = {
    hidden: { opacity: 0, scale: 0, rotate: -45 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.6,
        delay: 0.3,
        type: "spring",
        stiffness: 150
      } 
    },
  };

  const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
      ease: easeInOut,
    },
  },
} satisfies Variants;

  return (
    <div ref={ref} className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOut }}
          className="text-center mb-20"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="inline-block mb-4"
          >
            <SparklesIcon className="h-12 w-12 text-primary-500 mx-auto" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-semiabold bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Our Export Process
          </h2>
          <p className="text-xl md:text-2xl text-primary-600 max-w-4xl mx-auto leading-relaxed">
            Experience seamless export solutions with our cutting-edge process that transforms your business journey
          </p>
        </motion.div>

        {/* Cards Container - Trigger animations when cards are visible */}
        <div ref={cardsRef}>
          {/* Modern Process Chain - Large Desktop View (1775px+) */}
          <div className="hidden min-[1775px]:block">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={cardsInView ? "visible" : "hidden"}
              className="flex items-center justify-center gap-2"
            >
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                {/* Enhanced Process Card */}
                <motion.div
                  variants={cardVariants}
                  className="group relative"
                  onHoverStart={() => setHoveredCard(idx)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 border border-white/20 hover:border-primary-200/50 transform hover:-translate-y-2 hover:scale-105 w-56 h-72 overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Left Corner Decoration */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full shadow-lg"></div>
                    
                    {/* Enhanced Icon */}
                    <motion.div 
                      className={`${step.color} rounded-2xl p-5 mb-4 inline-block shadow-lg relative overflow-hidden`}
                      animate={{
                        scale: hoveredCard === idx ? 1.1 : 1,
                        rotate: hoveredCard === idx ? 5 : 0
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <step.icon className="h-9 w-9 text-white relative z-10" />
                    </motion.div>
                    
                    {/* Enhanced Content */}
                    <motion.div
                      animate={{
                        y: hoveredCard === idx ? -3 : 0
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <h3 className="text-base font-bold text-primary-800 mb-3 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm text-primary-600 leading-relaxed group-hover:text-primary-700 transition-colors duration-300">
                        {step.description}
                      </p>
                    </motion.div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary-400/10 to-blue-400/10 rounded-2xl transition-opacity duration-500"></div>
                  </div>
                </motion.div>

                {/* Arrow Between Cards */}
                {idx < steps.length - 1 && (
                  <motion.div
                    variants={arrowVariants}
                    className="mx-3 flex-shrink-0"
                  >
                    <motion.div
                      animate={{
                        x: [0, 8, 0],
                        scale: hoveredCard === idx || hoveredCard === idx + 1 ? 1.2 : 1
                      }}
                      transition={{
                        x: { duration: 2, repeat: Infinity, ease: easeInOut },
                        scale: { type: "spring", stiffness: 300 }
                      }}
                      className="relative"
                    >
                      <ArrowRightIcon className="h-8 w-8 text-primary-400" />
                      <div className="absolute inset-0 bg-primary-400 rounded-full opacity-20 blur-sm animate-pulse"></div>
                    </motion.div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
          </div>

          {/* Medium Screen Layout - Optimized for laptops and smaller desktops (1024px - 1774px) */}
          <div className="hidden lg:block min-[1775px]:hidden">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={cardsInView ? "visible" : "hidden"}
              className="max-w-7xl mx-auto"
            >
            {/* First Row - 3 Cards */}
            <div className="flex items-center justify-center gap-3 w-full mb-8">
              {steps.slice(0, 3).map((step, idx) => (
                <React.Fragment key={idx}>
                  {/* Enhanced Process Card */}
                  <motion.div
                    variants={cardVariants}
                    className="group relative"
                    onHoverStart={() => setHoveredCard(idx)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <div className="relative bg-white/80 backdrop-blur-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-5 border border-white/20 hover:border-primary-200/50 transform hover:-translate-y-2 hover:scale-105 w-60 h-72 overflow-hidden">
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Left Corner Decoration */}
                      <div className="absolute -top-1 -left-1 w-5 h-5 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full shadow-lg"></div>
                      
                      {/* Enhanced Icon */}
                      <motion.div 
                        className={`${step.color} rounded-xl p-4 mb-4 inline-block shadow-lg relative overflow-hidden`}
                        animate={{
                          scale: hoveredCard === idx ? 1.1 : 1,
                          rotate: hoveredCard === idx ? 5 : 0
                        }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                        <step.icon className="h-8 w-8 text-white relative z-10" />
                      </motion.div>
                      
                      {/* Enhanced Content */}
                      <motion.div
                        animate={{
                          y: hoveredCard === idx ? -3 : 0
                        }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <h3 className="text-sm font-bold text-primary-800 mb-3 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-sm text-primary-600 leading-relaxed group-hover:text-primary-700 transition-colors duration-300">
                          {step.description}
                        </p>
                      </motion.div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary-400/10 to-blue-400/10 rounded-xl transition-opacity duration-500"></div>
                    </div>
                  </motion.div>

                  {/* Arrow Between Cards */}
                  {idx < 2 && (
                    <motion.div
                      variants={arrowVariants}
                      className="mx-2 flex-shrink-0"
                    >
                      <motion.div
                        animate={{
                          x: [0, 6, 0],
                          scale: hoveredCard === idx || hoveredCard === idx + 1 ? 1.2 : 1
                        }}
                        transition={{
                          x: { duration: 2, repeat: Infinity, ease: easeInOut },
                          scale: { type: "spring", stiffness: 300 }
                        }}
                        className="relative"
                      >
                        <ArrowRightIcon className="h-7 w-7 text-primary-400" />
                        <div className="absolute inset-0 bg-primary-400 rounded-full opacity-20 blur-sm animate-pulse"></div>
                      </motion.div>
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Connecting Arrow Down */}
            <div className="flex justify-center w-full mb-6">
              <motion.div
                variants={arrowVariants}
                className="transform rotate-90"
              >
                <motion.div
                  animate={{
                    y: [0, 6, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: easeInOut
                  }}
                  className="relative"
                >
                  <ArrowRightIcon className="h-7 w-7 text-primary-400" />
                  <div className="absolute inset-0 bg-primary-400 rounded-full opacity-20 blur-sm animate-pulse"></div>
                </motion.div>
              </motion.div>
            </div>

            {/* Second Row - 3 Cards */}
            <div className="flex items-center justify-center gap-3 w-full">
              {steps.slice(3, 6).map((step, idx) => (
                <React.Fragment key={idx + 3}>
                  {/* Enhanced Process Card */}
                  <motion.div
                    variants={cardVariants}
                    className="group relative"
                    onHoverStart={() => setHoveredCard(idx + 3)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <div className="relative bg-white/80 backdrop-blur-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-5 border border-white/20 hover:border-primary-200/50 transform hover:-translate-y-2 hover:scale-105 w-60 h-72 overflow-hidden">
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Left Corner Decoration */}
                      <div className="absolute -top-1 -left-1 w-5 h-5 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full shadow-lg"></div>
                      
                      {/* Enhanced Icon */}
                      <motion.div 
                        className={`${step.color} rounded-xl p-4 mb-4 inline-block shadow-lg relative overflow-hidden`}
                        animate={{
                          scale: hoveredCard === idx + 3 ? 1.1 : 1,
                          rotate: hoveredCard === idx + 3 ? 5 : 0
                        }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                        <step.icon className="h-8 w-8 text-white relative z-10" />
                      </motion.div>
                      
                      {/* Enhanced Content */}
                      <motion.div
                        animate={{
                          y: hoveredCard === idx + 3 ? -3 : 0
                        }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <h3 className="text-sm font-bold text-primary-800 mb-3 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-sm text-primary-600 leading-relaxed group-hover:text-primary-700 transition-colors duration-300">
                          {step.description}
                        </p>
                      </motion.div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary-400/10 to-blue-400/10 rounded-xl transition-opacity duration-500"></div>
                    </div>
                  </motion.div>

                  {/* Arrow Between Cards */}
                  {idx < 2 && (
                    <motion.div
                      variants={arrowVariants}
                      className="mx-2 flex-shrink-0"
                    >
                      <motion.div
                        animate={{
                          x: [0, 6, 0],
                          scale: hoveredCard === idx + 3 || hoveredCard === idx + 4 ? 1.2 : 1
                        }}
                        transition={{
                          x: { duration: 2, repeat: Infinity, ease: easeInOut },
                          scale: { type: "spring", stiffness: 300 }
                        }}
                        className="relative"
                      >
                        <ArrowRightIcon className="h-7 w-7 text-primary-400" />
                        <div className="absolute inset-0 bg-primary-400 rounded-full opacity-20 blur-sm animate-pulse"></div>
                      </motion.div>
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
          </div>

          {/* Enhanced Mobile/Tablet View */}
          <div className="lg:hidden">
            <div className="space-y-6">
            {steps.map((step, idx) => (
              <div key={idx} ref={mobileCardRefs[idx]}>
                <motion.div
                  variants={mobileCardVariants}
                  initial="hidden"
                  animate={mobileCardInViewStates[idx] ? "visible" : "hidden"}
                  className="group relative"
                  onHoverStart={() => setHoveredCard(idx)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 border border-white/20 hover:border-primary-200/50 overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex items-start space-x-4 relative z-10">
                    {/* Enhanced Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <motion.div 
                          className={`${step.color} rounded-2xl p-4 shadow-lg relative overflow-hidden`}
                          animate={{
                            scale: hoveredCard === idx ? 1.1 : 1,
                            rotate: hoveredCard === idx ? 5 : 0
                          }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                          <step.icon className="h-8 w-8 text-white relative z-10" />
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Enhanced Content */}
                    <motion.div 
                      className="flex-1"
                      animate={{
                        y: hoveredCard === idx ? -3 : 0
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <h3 className="text-lg font-bold text-primary-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm text-primary-600 leading-relaxed group-hover:text-primary-700 transition-colors duration-300">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary-400/10 to-blue-400/10 rounded-2xl transition-opacity duration-500"></div>
                </div>
                </motion.div>

                {/* Enhanced Connecting Line */}
                {idx < steps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <motion.div 
                      className="w-1 h-8 bg-gradient-to-b from-primary-400 via-blue-400 to-purple-400 rounded-full relative"
                      animate={{
                        scaleY: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: easeInOut
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-primary-400 to-purple-400 rounded-full blur-sm opacity-50"></div>
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="relative bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
              <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
              <div className="absolute top-8 right-8 w-12 h-12 border-2 border-white/20 rounded-full"></div>
              <div className="absolute bottom-4 left-1/3 w-6 h-6 border-2 border-white/25 rounded-full"></div>
            </div>
            
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative z-10"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                <span className="hidden sm:inline">Ready to Transform Your Export Journey?</span>
                <span className="sm:hidden">Ready to Export?</span>
              </h3>
              <p className="text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
                <span className="hidden sm:inline">Join thousands of satisfied clients who trust our innovative export solutions. Let&apos;s revolutionize your business together.</span>
                <span className="sm:hidden">Join our export solutions. Let&apos;s grow your business together.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.button 
                  className="bg-white text-primary-600 px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/60"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push('/contact-us')}
                  aria-label="Go to contact page"
                >
                  <span className="hidden sm:inline">Start Your Journey</span>
                  <span className="sm:hidden">Get Started</span>
                </motion.button>
                <motion.button 
                  className="border-2 border-white/50 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/60"
                  whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.8)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push('/products')}
                  aria-label="View products"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
