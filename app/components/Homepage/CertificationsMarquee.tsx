import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const certifications = Array.from({ length: 11 }, (_, i) => `/assets/images/certifications/${i + 1}.png`);

export const CertificationsMarquee = () => {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wider mb-2">Our Certifications</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 mx-auto rounded-full"></div>
      </div>
      
      <Marquee
        gradient={true}
        gradientColor="white"
        gradientWidth={100}
        speed={40}
        pauseOnHover={true}
        className="overflow-hidden py-4"
      >
        <div className="flex items-center gap-16 px-8">
          {certifications.map((src, index) => (
            <div 
              key={index} 
              className="relative h-20 w-32 md:h-24 md:w-40 flex items-center justify-center transition-all duration-300"
            >
              <Image
                src={src}
                alt={`Certification ${index + 1}`}
                fill
                unoptimized
                className="object-contain"
                sizes="(max-width: 768px) 150px, 200px"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};
