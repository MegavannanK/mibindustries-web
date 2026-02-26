  import { useState, useEffect } from "react";
  import { flags } from "@/app/masters/flags";
  import { motion, AnimatePresence, easeIn, easeOut , type Variants } from "framer-motion";
  import Image from "next/image";

  export const Flags = () => {
    const [currentFlags, setCurrentFlags] = useState<string[]>(flags.slice(0, 3));
    const [index, setIndex] = useState(0);
  // removed unused state to satisfy lint

    // Update flags every 2 seconds with smooth transition
    useEffect(() => {
      const intervalId = setInterval(() => {
        // Delay the flag change to allow fade out
        setTimeout(() => {
          const nextIndex = (index + 1) % Math.ceil(flags.length / 3);
          const start = nextIndex * 3;
          const end = start + 3;
          const nextFlags = flags.slice(start, end);
          
          setCurrentFlags(nextFlags);
          setIndex(nextIndex);
        }, 300); // Fade out duration

      }, 2000); // Back to 2 seconds for faster transitions

      return () => clearInterval(intervalId);
    }, [index]);

    // Animation variants for smoother transitions
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          duration: 0.5
        }
      },
      exit: { 
        opacity: 0,
        transition: {
          duration: 0.3
        }
      }
    };

    const flagVariants : Variants= {
      hidden: { 
        opacity: 0, 
        y: 20,
        scale: 0.9
      },
      visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: easeOut
        }
      },
      exit: { 
        opacity: 0, 
        y: -20,
        scale: 0.9,
        transition: {
          duration: 0.3,
          ease: easeIn
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex w-full flex-col items-center gap-12">
            {/* Header Section */}
            <div className="space-y-6 text-center">
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"></div>
                <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                  Global Presence
                </span>
                <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"></div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight">
                <span className="text-transparent bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 bg-clip-text">
                  Countries We Export To
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto hidden lg:block">
                Connecting markets across continents with our premium products, 
                establishing trust in international trade.
              </p>
            </div>
            
            <div className="flex w-full gap-3 justify-center sm:gap-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex w-full gap-3 justify-center sm:gap-16"
                >
                  {currentFlags.map((url, flagIndex) => (
                    <motion.div
                      key={`${index}-${flagIndex}`}
                      variants={flagVariants}
                      className="w-[30%] sm:w-[200px] aspect-[3/2] rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg border border-gray-100/50"
                    >
                      <Image
                        src={url}
                        alt={`Flag ${flagIndex + 1}`}
                        width={300}
                        height={200}
                        className="object-cover"
                        priority={flagIndex < 3}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    );
  };
