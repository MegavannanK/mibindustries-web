"use client";

import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
// import { motion } from "framer-motion";

const Page = React.forwardRef<HTMLDivElement, { number: number; children: React.ReactNode }>((props, ref) => {
  return (
    <div className="bg-white shadow-2xl overflow-hidden border border-gray-200" ref={ref}>
      <div className="relative w-full h-full">
        {props.children}
        <div className="absolute bottom-4 right-4 text-xs text-gray-400 font-medium">
          {props.number}
        </div>
      </div>
    </div>
  );
});

Page.displayName = "Page";

export const AboutUsFlipbook = () => {
  const [images, setImages] = useState<string[]>([]);  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bookRef = useRef<any>(null);

  useEffect(() => {
    const imgList = Array.from({ length: 27 }, (_, i) => `/assets/images/about/${i + 1}.png`);
    setImages(imgList);
  }, []);

  if (images.length === 0) return null;

  return (
    <div className="flex flex-col items-center justify-center py-10 w-full max-w-4xl mx-auto">
      <div className="relative group cursor-pointer">
        {/* @ts-expect-error Disable strict checking for flipbook component library */}
        <HTMLFlipBook
          width={400}
          height={566}
          size="stretch"
          minWidth={250}
          maxWidth={1000}
          minHeight={350}
          maxHeight={1400}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="shadow-2xl rounded-sm overflow-hidden"
          ref={bookRef}
        >
          {images.map((src, index) => (
            <Page key={index} number={index + 1}>
              <div className="relative w-full h-full p-2 bg-white">
                 <Image
                  src={src}
                  alt={`About Page ${index + 1}`}
                  fill
                  className="object-contain"
                  priority={index < 4}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Page>
          ))}
        </HTMLFlipBook>

        {/* Navigation Hints */}
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
          <button 
            onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 hover:bg-white text-gray-600"
          >
            ←
          </button>
        </div>
        <div className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
          <button 
            onClick={() => bookRef.current?.pageFlip()?.flipNext()}
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 hover:bg-white text-gray-600"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <p className="text-gray-500 text-sm font-medium italic">Click or drag to turn pages</p>
        <div className="flex gap-2">
           <button 
            onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm transition-colors md:hidden"
          >
            Previous
          </button>
          <button 
            onClick={() => bookRef.current?.pageFlip()?.flipNext()}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm transition-colors md:hidden"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
