"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import logo from "@/app/assets/images/logo.png";

// Generate consistent star positions for SSR
const starPositions = [
  // Small stars (50)
  { x: 15, y: 20 }, { x: 85, y: 75 }, { x: 45, y: 12 }, { x: 70, y: 88 }, { x: 25, y: 60 },
  { x: 90, y: 35 }, { x: 10, y: 65 }, { x: 75, y: 15 }, { x: 55, y: 80 }, { x: 35, y: 45 },
  { x: 95, y: 70 }, { x: 20, y: 25 }, { x: 80, y: 90 }, { x: 40, y: 55 }, { x: 65, y: 10 },
  { x: 30, y: 85 }, { x: 85, y: 40 }, { x: 15, y: 75 }, { x: 60, y: 20 }, { x: 95, y: 95 },
  { x: 5, y: 50 }, { x: 75, y: 65 }, { x: 45, y: 30 }, { x: 25, y: 85 }, { x: 70, y: 5 },
  { x: 90, y: 60 }, { x: 10, y: 35 }, { x: 55, y: 95 }, { x: 35, y: 25 }, { x: 80, y: 70 },
  { x: 50, y: 45 }, { x: 20, y: 90 }, { x: 75, y: 55 }, { x: 40, y: 15 }, { x: 95, y: 30 },
  { x: 15, y: 80 }, { x: 65, y: 40 }, { x: 30, y: 70 }, { x: 85, y: 10 }, { x: 5, y: 85 },
  { x: 60, y: 25 }, { x: 90, y: 75 }, { x: 25, y: 35 }, { x: 70, y: 95 }, { x: 45, y: 60 },
  { x: 80, y: 20 }, { x: 10, y: 55 }, { x: 55, y: 85 }, { x: 35, y: 50 }, { x: 75, y: 30 },
  
  // Large stars (15)
  { x: 20, y: 40 }, { x: 80, y: 60 }, { x: 40, y: 80 }, { x: 60, y: 20 }, { x: 90, y: 85 },
  { x: 10, y: 15 }, { x: 70, y: 50 }, { x: 30, y: 90 }, { x: 85, y: 25 }, { x: 50, y: 75 },
  { x: 15, y: 65 }, { x: 75, y: 35 }, { x: 95, y: 55 }, { x: 25, y: 10 }, { x: 65, y: 95 },
  
  // Twinkling stars (20)  
  { x: 12, y: 30 }, { x: 88, y: 70 }, { x: 35, y: 15 }, { x: 72, y: 85 }, { x: 50, y: 40 },
  { x: 18, y: 95 }, { x: 65, y: 25 }, { x: 92, y: 60 }, { x: 28, y: 75 }, { x: 78, y: 10 },
  { x: 45, y: 90 }, { x: 8, y: 45 }, { x: 85, y: 55 }, { x: 32, y: 20 }, { x: 68, y: 80 },
  { x: 95, y: 35 }, { x: 22, y: 65 }, { x: 58, y: 5 }, { x: 82, y: 95 }, { x: 38, y: 50 }
];

export const SplashScreen = ({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void;
}) => {
  const controls = useAnimation();
  const [isClient, setIsClient] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState(0);
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Add a small delay to ensure hydration is complete before showing stars
    const timer = setTimeout(() => {
      setShowStars(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      controls.stop();
      onAnimationComplete();
    };

    window.addEventListener("scroll", handleScroll);

    // Falcon Loading Sequence
    const falconLoadingSequence = async () => {
      // Phase 1: Falcon appears and spreads wings
      await controls.start({ opacity: 1 });
      setLoadingPhase(1);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Phase 2: Falcon takes flight
      setLoadingPhase(2);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Phase 3: Color flows through wings
      setLoadingPhase(3);
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Phase 4: Falcon soars and company name appears
      setLoadingPhase(4);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Phase 5: Exit with falcon flying away
      setLoadingPhase(5);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      controls
        .start({
          opacity: 0,
          scale: 1.5,
          y: -100,
          transition: { duration: 1.5, ease: "easeInOut" },
        })
        .then(() => {
          onAnimationComplete();
        });
    };

    falconLoadingSequence();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, onAnimationComplete, isClient]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 z-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      {/* Dynamic Sky Background with Starry Effects and Color Percolation */}
      <div className="absolute inset-0">
        {/* Full Background Color Percolation Effect - Smoother */}
        <motion.div
          className="absolute inset-0"
          animate={
            loadingPhase >= 3
              ? {
                  background: [
                    "conic-gradient(from 0deg at 50% 50%, rgba(30, 41, 59, 1) 0deg, rgba(59, 130, 246, 0.2) 90deg, rgba(30, 41, 59, 1) 180deg, rgba(147, 51, 234, 0.2) 270deg, rgba(30, 41, 59, 1) 360deg)",
                    "conic-gradient(from 90deg at 50% 50%, rgba(30, 41, 59, 1) 0deg, rgba(59, 130, 246, 0.2) 90deg, rgba(30, 41, 59, 1) 180deg, rgba(147, 51, 234, 0.2) 270deg, rgba(30, 41, 59, 1) 360deg)",
                    "conic-gradient(from 180deg at 50% 50%, rgba(30, 41, 59, 1) 0deg, rgba(59, 130, 246, 0.2) 90deg, rgba(30, 41, 59, 1) 180deg, rgba(147, 51, 234, 0.2) 270deg, rgba(30, 41, 59, 1) 360deg)",
                    "conic-gradient(from 270deg at 50% 50%, rgba(30, 41, 59, 1) 0deg, rgba(59, 130, 246, 0.2) 90deg, rgba(30, 41, 59, 1) 180deg, rgba(147, 51, 234, 0.2) 270deg, rgba(30, 41, 59, 1) 360deg)",
                  ],
                }
              : loadingPhase >= 1
              ? {
                  background: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08) 0%, rgba(30, 41, 59, 1) 70%)",
                }
              : {}
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Layered Radial Gradient Effects - Smoother */}
        <motion.div
          className="absolute inset-0"
          animate={
            loadingPhase >= 2
              ? {
                  background: [
                    "radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.06) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)",
                    "radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.06) 0%, transparent 60%), radial-gradient(circle at 30% 70%, rgba(147, 51, 234, 0.08) 0%, transparent 60%)",
                    "radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.06) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)",
                  ],
                  opacity: [0.6, 0.9, 0.6],
                }
              : {}
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated Stars Background - Only render after hydration */}
        {showStars && (
          <>
            {starPositions.slice(0, 50).map((pos, index) => (
              <motion.div
                key={`star-${index}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.05,
                }}
              />
            ))}
            
            {/* Larger accent stars */}
            {starPositions.slice(50, 65).map((pos, index) => (
              <motion.div
                key={`large-star-${index}`}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.1, 0.6, 0.1],
                  scale: [0.8, 1.5, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
              />
            ))}

            {/* Subtle twinkling stars */}
            {starPositions.slice(65, 85).map((pos, index) => (
              <motion.div
                key={`twinkle-star-${index}`}
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15,
                }}
              />
            ))}
          </>
        )}

        {/* Moving Clouds */}
        <motion.div
          className="absolute top-20 left-0 w-96 h-24 bg-white/5 rounded-full blur-xl"
          animate={{
            x: [-100, 1200],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-40 right-0 w-64 h-16 bg-white/3 rounded-full blur-lg"
          animate={{
            x: [1200, -100],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Twinkling Stars */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

      </div>

      {/* Main Falcon Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Falcon Logo with Advanced Animations */}
        <motion.div
          className="relative"
          initial={{ scale: 0.3, y: 100, rotate: -15 }}
          animate={
            loadingPhase >= 1
              ? {
                  scale: 1,
                  y: 0,
                  rotate: 0,
                  transition: { duration: 2, ease: "easeOut" },
                }
              : {}
          }
        >
          {/* Wing Beat Animation Container */}
          <motion.div
            className="relative"
            animate={
              loadingPhase >= 2
                ? {
                    rotateY: [0, -10, 10, 0],
                    rotateX: [0, 5, -5, 0],
                  }
                : {}
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Falcon Wing Gradient Overlays */}
            {loadingPhase >= 3 && (
              <>
                {/* Left Wing Color Flow */}
                <motion.div
                  className="absolute left-0 top-1/2 w-20 h-20 -translate-y-1/2 rounded-full blur-lg"
                  animate={{
                    background: [
                      "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(59, 130, 246, 0.7) 50%, transparent 100%)",
                      "radial-gradient(circle, rgba(59, 130, 246, 0.9) 0%, rgba(255, 255, 255, 0.7) 50%, transparent 100%)",
                      "radial-gradient(circle, rgba(147, 51, 234, 0.9) 0%, rgba(59, 130, 246, 0.7) 50%, transparent 100%)",
                      "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(59, 130, 246, 0.7) 50%, transparent 100%)",
                    ],
                    scale: [0.8, 1.4, 1.1, 0.8],
                    x: [-10, 10, -5, -10],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Right Wing Color Flow */}
                <motion.div
                  className="absolute right-0 top-1/2 w-20 h-20 -translate-y-1/2 rounded-full blur-lg"
                  animate={{
                    background: [
                      "radial-gradient(circle, rgba(147, 51, 234, 0.9) 0%, rgba(255, 255, 255, 0.7) 50%, transparent 100%)",
                      "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(59, 130, 246, 0.7) 50%, transparent 100%)",
                      "radial-gradient(circle, rgba(59, 130, 246, 0.9) 0%, rgba(147, 51, 234, 0.7) 50%, transparent 100%)",
                      "radial-gradient(circle, rgba(147, 51, 234, 0.9) 0%, rgba(255, 255, 255, 0.7) 50%, transparent 100%)",
                    ],
                    scale: [1.1, 0.8, 1.4, 1.1],
                    x: [10, -10, 5, 10],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />

                {/* Wing Tip Color Pulses */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 rounded-full"
                    style={{
                      left: `${20 + (i % 3) * 20}%`,
                      top: `${15 + Math.floor(i / 3) * 70}%`,
                    }}
                    animate={{
                      background: [
                        "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, transparent 70%)",
                        "radial-gradient(circle, rgba(59, 130, 246, 1) 0%, transparent 70%)",
                        "radial-gradient(circle, rgba(147, 51, 234, 1) 0%, transparent 70%)",
                        "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, transparent 70%)",
                      ],
                      scale: [0, 1.5, 0.8, 0],
                      opacity: [0, 1, 0.7, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  />
                ))}
              </>
            )}

          {/* Falcon Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-full blur-2xl"
            animate={
              loadingPhase >= 1
                ? {
                    background: [
                      "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
                      "radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)",
                      "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
                    ],
                    scale: [1, 1.4, 1],
                  }
                : {}
            }
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

            {/* Main Falcon Logo - No Container, Natural Look */}
            <motion.div
              className="relative"
              animate={
                loadingPhase >= 2
                  ? {
                      y: [-8, 8, -8],
                      rotate: [-2, 2, -2],
                    }
                  : {}
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Falcon with Dynamic Color Moderation */}
              <motion.img
                src={logo.src}
                alt="MIB Falcon Logo"
                className="w-32 h-32 md:w-40 md:h-40 relative z-10"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))",
                }}
                animate={
                  loadingPhase >= 3
                    ? {
                        filter: [
                          // Natural blue falcon with white highlights
                          "hue-rotate(0deg) brightness(1) saturate(1) drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))",
                          // White energy flowing through blue wings
                          "hue-rotate(-20deg) brightness(1.4) saturate(0.8) drop-shadow(0 0 25px rgba(255, 255, 255, 0.9))",
                          // Blue energy pulsing through
                          "hue-rotate(10deg) brightness(1.2) saturate(1.6) drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))",
                          // Back to natural with white glow
                          "hue-rotate(0deg) brightness(1) saturate(1) drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))",
                        ],
                      }
                    : loadingPhase >= 1
                    ? {
                        filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.4))",
                      }
                    : {}
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Wing Color Moderation Overlays */}
              {loadingPhase >= 3 && (
                <>
                  {/* Left Wing White-Blue Flow */}
                  <motion.div
                    className="absolute left-2 top-1/2 w-16 h-12 -translate-y-1/2 rounded-full"
                    style={{
                      background: "radial-gradient(ellipse, rgba(255, 255, 255, 0.7) 0%, transparent 70%)",
                      mixBlendMode: "soft-light",
                    }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.3, 0.8],
                      x: [-5, 5, -5],
                      background: [
                        "radial-gradient(ellipse, rgba(255, 255, 255, 0.7) 0%, transparent 70%)",
                        "radial-gradient(ellipse, rgba(59, 130, 246, 0.6) 0%, transparent 70%)",
                        "radial-gradient(ellipse, rgba(255, 255, 255, 0.7) 0%, transparent 70%)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Right Wing White-Blue Flow */}
                  <motion.div
                    className="absolute right-2 top-1/2 w-16 h-12 -translate-y-1/2 rounded-full"
                    style={{
                      background: "radial-gradient(ellipse, rgba(59, 130, 246, 0.6) 0%, transparent 70%)",
                      mixBlendMode: "soft-light",
                    }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1.1, 0.7, 1.1],
                      x: [5, -5, 5],
                      background: [
                        "radial-gradient(ellipse, rgba(59, 130, 246, 0.6) 0%, transparent 70%)",
                        "radial-gradient(ellipse, rgba(255, 255, 255, 0.7) 0%, transparent 70%)",
                        "radial-gradient(ellipse, rgba(59, 130, 246, 0.6) 0%, transparent 70%)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                  />

                  {/* Wing Tip Energy Points */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        left: `${25 + (i % 2) * 50}%`,
                        top: `${30 + Math.floor(i / 2) * 40}%`,
                        mixBlendMode: "soft-light",
                      }}
                      animate={{
                        background: [
                          "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, transparent 100%)",
                          "radial-gradient(circle, rgba(59, 130, 246, 1) 0%, transparent 100%)",
                          "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, transparent 100%)",
                        ],
                        scale: [0, 1.5, 0],
                        opacity: [0, 0.9, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.6,
                      }}
                    />
                  ))}

                  {/* Central Energy Core */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      mixBlendMode: "soft-light",
                    }}
                    animate={{
                      background: [
                        "radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 100%)",
                        "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 100%)",
                        "radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 100%)",
                      ],
                      scale: [0.5, 1.2, 0.5],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </>
              )}
            </motion.div>
          </motion.div>

          {/* Wing Energy Particles */}
          {loadingPhase >= 2 && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full"
                  style={{
                    left: `${30 + (i % 4) * 15}%`,
                    top: `${25 + Math.floor(i / 4) * 50}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    x: [0, (i % 2 ? 1 : -1) * 20],
                    y: [0, (i % 3 ? 1 : -1) * 15],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </>
          )}
        </motion.div>

        {/* Company Branding */}
        {loadingPhase >= 4 && (
          <motion.div
            className="text-center space-y-4 mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 via-blue-100 to-purple-300 bg-clip-text text-transparent"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                scale: { duration: 0.6, ease: "easeOut" },
                opacity: { duration: 0.6, ease: "easeOut" },
                backgroundPosition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              {"MIB EXPORTS".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.div
              className="flex items-center justify-center space-x-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.9, duration: 1.5, ease: "easeOut" }}
              />
              <motion.span 
                className="text-blue-200 font-medium px-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
              >
                {"Leading Exporters from India".split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 1.3 + index * 0.1,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.9, duration: 1.5, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Loading Phase Text - Positioned at bottom to avoid overlap */}
      <motion.div
        className="absolute bottom-16 text-center w-full px-4"
        key={loadingPhase}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-blue-200 text-lg font-medium mb-2"
          animate={{
            textShadow: [
              "0 0 10px rgba(59, 130, 246, 0.5)",
              "0 0 20px rgba(147, 51, 234, 0.8)",
              "0 0 10px rgba(59, 130, 246, 0.5)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {loadingPhase === 1 && "Falcon awakens from the sky..."}
          {loadingPhase === 2 && "Stretching mighty wings..."}
          {loadingPhase === 3 && "Energy flows through falcon wings..."}
          {loadingPhase === 4 && "Preparing for majestic flight..."}
          {loadingPhase === 5 && "Welcome to MIB Exports"}
        </motion.p>
        
        {/* Wing beat indicator */}
        {loadingPhase >= 2 && loadingPhase <= 3 && (
          <motion.div
            className="flex justify-center space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-blue-300 rounded-full"
                animate={{
                  height: [4, 16, 4],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};
