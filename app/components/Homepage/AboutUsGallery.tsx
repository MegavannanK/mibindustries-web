"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Container from "../ui/Container";

const images = Array.from({ length: 27 }, (_, i) => `/assets/images/about/${i + 1}.jpg`);

export const AboutUsGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 3) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentBatch = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  return (
    <section className="py-16 bg-white overflow-hidden border-t border-gray-100">
      <Container className="max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"></div>
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Our Journey
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-primary-700 to-primary-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">A Glimpse into Excellence</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover our rich heritage and our commitment to providing the finest authentic Indian products to the global market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 min-h-[500px] items-center perspective-[1200px]">
          {currentBatch.map((src, idx) => (
            <div key={idx} className="relative w-full aspect-[4/5] bg-transparent rounded-[2rem]" style={{ perspective: "1200px" }}>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={src}
                  initial={{ rotateY: -180, opacity: 0, scale: 0.9 }}
                  animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                  exit={{ rotateY: 180, opacity: 0, scale: 0.9 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeInOut",
                    // Stagger the flip slightly for a nicer effect
                    delay: idx * 0.15 
                  }}
                  className="absolute inset-0 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] rounded-3xl border-[12px] border-white overflow-hidden flex items-center justify-center p-2"
                  style={{ 
                    transformStyle: "preserve-3d", 
                    backfaceVisibility: "hidden",
                    transformOrigin: "center center"
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image 
                      src={src} 
                      alt={`Gallery Image ${idx + 1}`} 
                      fill 
                      className="object-contain" 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized={src.includes('.jpg')} // Help with performance if they are still somewhat large
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
