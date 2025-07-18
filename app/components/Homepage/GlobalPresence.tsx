"use client";

import { motion } from "framer-motion";
import { LocationMarkerIcon, ClockIcon, OfficeBuildingIcon } from "@heroicons/react/outline";

interface Branch {
  id: number;
  country: string;
  city: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  timezone: string;
  established: string;
  primaryColor: string;
  accentColor: string;
  textColor: string;
  bgGlow: string;
  icon: string;
  countryCode: string;
  // stats: {
  //   employees: string;
  //   clients: string;
  //   projects: string;
  // };
  // contact: {
  //   phone: string;
  //   email: string;
  // };
}

const branches: Branch[] = [
  {
    id: 1,
    country: "Singapore",
    city: "Trade Hub",
    address: "21 BUKIT BATOK CRESENT, #12-75 SINGAPORE 658065",
    coordinates: { lat: 1.2833, lng: 103.8667 },
    timezone: "GMT+8",
    established: "2018",
    primaryColor: "from-primary-500 to-primary-700",
    accentColor: "bg-primary-100",
    textColor: "text-primary-700",
    bgGlow: "shadow-primary-500/20",
    icon: "🇸🇬",
    countryCode: "SG",
    // stats: {
    //   employees: "15+",
    //   clients: "Asia-Pacific",
    //   projects: "Strategic Location"
    // },
    // contact: {
    //   phone: "+65 8123 4567",
    //   email: "singapore@mib.com"
    // }
  },
  {
    id: 2,
    country: "India",
    city: "HeadQuarters",
    address: "37/17, Reddy St, Periyar Nagar, Korattur, Chennai-600080",
    coordinates: { lat: 13.0827, lng: 80.2707 },
    timezone: "GMT+5:30",
    established: "2013",
    primaryColor: "from-primary-700 to-primary-900",
    accentColor: "bg-primary-50",
    textColor: "text-primary-800",
    bgGlow: "shadow-primary-700/20",
    icon: "🇮🇳",
    countryCode: "IN",
    // stats: {
    //   employees: "25+",
    //   clients: "Manufacturing Hub",
    //   projects: "Export Gateway"
    // },
    // contact: {
    //   phone: "+91 44 1234 5678",
    //   email: "chennai@mib.com"
    // }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.9,
    rotateX: 15
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 1.2,
      ease: "easeOut"
    }
  }
};

const mobileCardVariants = {
  hidden: { 
    opacity: 0, 
    y: 100,
    scale: 0.85,
    rotateY: 10
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
      duration: 1.5,
      ease: "easeOut"
    }
  }
};

const headerVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 1.0
    }
  }
};

const floatingVariants = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [-15, 15, -15],
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const GlobalPresence = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-100/40 to-primary-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600/10 to-primary-700/10 rounded-full px-6 py-2 mb-6 border border-primary-200/50"
          >
            <OfficeBuildingIcon className="w-5 h-5 text-primary-600" />
            <span className="text-primary-700 font-semibold text-sm uppercase tracking-wide">Global Operations</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.0, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Strategic Trade
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text text-transparent"
            > Locations</motion.span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Positioned at key international trade routes, our strategic offices enable seamless 
            export operations and global supply chain management across continents.
          </motion.p>
        </motion.div>

        {/* Branches Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              variants={window.innerWidth < 768 ? mobileCardVariants : cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.3 }}
              whileHover={{ 
                y: -12,
                scale: 1.03,
                rotateY: window.innerWidth < 768 ? 2 : 0,
                transition: { type: "spring", stiffness: 300, damping: 25 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              {/* Ultra Modern Card Design */}
              <div className="relative overflow-hidden">
                {/* Main Card Container */}
                <div className={`relative bg-gradient-to-br from-white/95 via-white/90 to-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl hover:shadow-3xl ${branch.bgGlow} transition-all duration-700 border-0 overflow-hidden group-hover:shadow-primary-500/25`}>
                  
                  {/* Modern Header with Floating Elements */}
                  <div className={`relative h-40 bg-gradient-to-br ${branch.primaryColor} overflow-hidden`}>
                    {/* Dynamic Background Pattern */}
                    <div className="absolute inset-0">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                        className="absolute top-4 right-6 w-20 h-20 bg-white/10 rounded-full blur-2xl"
                      ></motion.div>
                      <motion.div 
                        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
                        transition={{ duration: 5, repeat: Infinity, delay: index * 0.7 }}
                        className="absolute bottom-4 left-6 w-16 h-16 bg-white/15 rounded-full blur-xl"
                      ></motion.div>
                      <motion.div 
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-3xl"
                      ></motion.div>
                      
                      {/* Geometric Shapes */}
                      <motion.div 
                        animate={{ rotate: [12, 25, 12], scale: [1, 1.1, 1] }}
                        transition={{ duration: 6, repeat: Infinity, delay: index * 0.3 }}
                        className="absolute top-6 left-8 w-8 h-8 border-2 border-white/20 rounded-lg"
                      ></motion.div>
                      <motion.div 
                        animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 4, repeat: Infinity, delay: index * 0.4 }}
                        className="absolute bottom-8 right-8 w-6 h-6 bg-white/20 rounded-full"
                      ></motion.div>
                    </div>
                    
                    {/* Country Info - Modern Layout */}
                    <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <motion.div 
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                          className="flex items-center gap-4"
                        >
                          <div className="relative">
                            <motion.div 
                              animate={{ rotate: [0, 5, 0, -5, 0] }}
                              transition={{ duration: 8, repeat: Infinity, delay: index * 0.5 }}
                              className="text-4xl filter drop-shadow-lg"
                            >{branch.icon}</motion.div>
                            <motion.div 
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                              className="absolute -bottom-1 -right-1 w-3 h-3 bg-white/30 rounded-full"
                            ></motion.div>
                          </div>
                          <div className="text-white">
                            <motion.h3 
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                              className="text-xl font-bold tracking-wide"
                            >{branch.country}</motion.h3>
                            <motion.p 
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                              className="text-white/80 text-sm font-medium"
                            >{branch.city}</motion.p>
                          </div>
                        </motion.div>
                        
                        {/* Modern Badge */}
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8, x: 30 }}
                          whileInView={{ opacity: 1, scale: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-4 py-2 shadow-lg"
                        >
                          <span className="text-white font-bold text-sm tracking-wider">{branch.countryCode}</span>
                        </motion.div>
                      </div>
                      
                      {/* Floating Timeline */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        className="flex items-center gap-2 text-white/90"
                      >
                        <motion.div 
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                          className="w-2 h-2 bg-white/50 rounded-full"
                        ></motion.div>
                        <span className="text-sm font-medium">Established {branch.established}</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Modern Content Section */}
                  <div className="p-8 space-y-6">
                    {/* Location with Modern Styling */}
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                      className="space-y-4"
                    >
                      <div className="flex items-start gap-4">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className={`p-3 rounded-2xl ${branch.accentColor} border-0 shadow-md`}
                        >
                          <LocationMarkerIcon className="w-5 h-5 text-primary-600" />
                        </motion.div>
                        <div className="flex-1 pt-1">
                          <motion.p 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            className="text-gray-700 font-medium text-lg leading-relaxed"
                          >{branch.address}</motion.p>
                          <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            className="flex items-center gap-2 mt-2 text-primary-600"
                          >
                            <ClockIcon className="w-4 h-4" />
                            <span className="text-sm font-semibold">{branch.timezone}</span>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Modern Statistics Cards */}
                    {/* <motion.div 
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                      className="grid grid-cols-3 gap-4"
                    >
                      {[
                        // { value: branch.stats.employees, label: "Countries" },
                        // { value: "500+", label: "Products" },
                        // { value: "24/7", label: "Operations" }
                      ].map((stat, statIndex) => (
                        <motion.div
                          key={statIndex}
                          initial={{ opacity: 0, scale: 0.8, y: 20 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.6, 
                            delay: 0.5 + index * 0.1 + statIndex * 0.1,
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{ 
                            scale: 1.05, 
                            y: -5,
                            transition: { duration: 0.2 }
                          }}
                          className="group/stat relative overflow-hidden"
                        >
                          <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-2xl border-0 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                            <motion.div 
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 + statIndex * 0.1 }}
                              className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"
                            ></motion.div>
                            <div className="relative z-10 text-center">
                              <motion.div 
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 + statIndex * 0.1 }}
                                className={`text-2xl font-bold ${branch.textColor} mb-1`}
                              >{stat.value}</motion.div>
                              <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 + statIndex * 0.1 }}
                                className="text-xs text-gray-500 uppercase tracking-wider font-semibold"
                              >{stat.label}</motion.div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div> */}

                    {/* Modern Status Indicators */}
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                      className="flex items-center justify-center gap-8 pt-6"
                    >
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="relative">
                          <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                            className="w-4 h-4 bg-green-500 rounded-full"
                          ></motion.div>
                          <motion.div 
                            animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                            className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full"
                          ></motion.div>
                        </div>
                        <span className="text-sm font-semibold text-gray-700 tracking-wide">Live Operations</span>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <motion.div 
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: index * 2 }}
                          className="w-4 h-4 bg-primary-500 rounded-full shadow-lg"
                        ></motion.div>
                        <span className="text-sm font-semibold text-gray-700 tracking-wide">Verified Hub</span>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Floating Corner Decoration */}
                  <motion.div
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute bottom-6 right-6 w-4 h-4 bg-primary-400/60 rounded-full blur-sm"
                  />
                  
                  {/* Top Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent"></div>
                </div>

                {/* Enhanced Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),transparent)]"
              ></motion.div>
            </div>

            <div className="relative z-10">
              <motion.h3 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Connecting Global Markets
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
              >
                Bridging continents through strategic trade operations, ensuring seamless 
                export-import solutions across international borders.
              </motion.p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "25+", label: "Export Countries" },
                  { value: "500+", label: "Product Lines" },
                  { value: "1000+", label: "Shipments/Year" },
                  { value: "24/7", label: "Trade Support" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.6 + index * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    className="text-center"
                  >
                    <motion.div 
                      animate={{ 
                        y: [-5, 5, -5],
                        rotate: [0, 2, 0, -2, 0]
                      }}
                      transition={{ 
                        duration: 6 + index, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                      className="text-3xl md:text-4xl font-bold mb-2"
                    >{stat.value}</motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      className="text-sm opacity-80 uppercase tracking-wide"
                    >{stat.label}</motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1], 
                opacity: [0.2, 0.4, 0.2],
                x: [0, 20, 0],
                y: [0, -15, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-8 w-16 h-16 bg-white/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2], 
                opacity: [0.1, 0.3, 0.1],
                x: [0, -25, 0],
                y: [0, 20, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-8 left-8 w-24 h-24 bg-white/10 rounded-full blur-xl"
            />
          </div>
        </motion.div>

        {/* GST Credibility Section */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-slate-700/50">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),transparent)]"
              ></motion.div>
            </div>

            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-6 py-2 mb-6 border border-green-400/30"
              >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-green-400 rounded-full"
                ></motion.div>
                <span className="text-green-300 font-semibold text-sm uppercase tracking-wide">Government Registered</span>
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold mb-4"
              >
                Verified Business Credentials
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg opacity-90 mb-8 max-w-2xl mx-auto"
              >
                Our business is officially registered and compliant with all government regulations for international trade operations.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { 
                    label: "GST Registration", 
                    value: "33ITKPM7611C1ZQ", 
                    description: "Goods & Services Tax",
                    icon: "📋"
                  },
                  { 
                    label: "Import Export License", 
                    value: "ITKPM7611C", 
                    description: "Authorized Import & Export Operations",
                    icon: "🌍"
                  },
                  { 
                    label: "ISO Certified", 
                    value: "ISO 22000:2005", 
                    description: "Quality Management",
                    icon: "🏆"
                  }
                ].map((credential, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.03,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                  >
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="text-2xl mb-3"
                    >
                      {credential.icon}
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="text-sm text-white/70 uppercase tracking-wider font-semibold mb-2"
                    >
                      {credential.label}
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="text-lg font-bold text-white mb-2 font-mono tracking-wide"
                    >
                      {credential.value}
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="text-xs text-white/60"
                    >
                      {credential.description}
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-8 mt-8 pt-6 border-t border-white/20">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                  whileHover={{ scale: 1.03, y: -2, transition: { type: "tween", ease: "easeOut", duration: 0.3 } }}
                  className="flex items-center gap-2"
                >
                  <motion.div 
                    className="w-3 h-3 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="text-sm font-semibold text-white/90 tracking-wide">Government Verified</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                  whileHover={{ scale: 1.03, y: -2, transition: { type: "tween", ease: "easeOut", duration: 0.3 } }}
                  className="flex items-center gap-2"
                >
                  <motion.div 
                    className="w-3 h-3 bg-blue-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  />
                  <span className="text-sm font-semibold text-white/90 tracking-wide">Export Authorized</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
                  whileHover={{ scale: 1.03, y: -2, transition: { type: "tween", ease: "easeOut", duration: 0.3 } }}
                  className="flex items-center gap-2"
                >
                  <motion.div 
                    className="w-3 h-3 bg-yellow-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  />
                  <span className="text-sm font-semibold text-white/90 tracking-wide">Quality Certified</span>
                </motion.div>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1], 
                opacity: [0.1, 0.3, 0.1],
                x: [0, 15, 0],
                y: [0, -10, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-8 w-12 h-12 bg-white/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2], 
                opacity: [0.1, 0.2, 0.1],
                x: [0, -20, 0],
                y: [0, 15, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-8 left-8 w-16 h-16 bg-white/10 rounded-full blur-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
