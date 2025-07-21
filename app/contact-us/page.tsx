"use client";
import {
  MailIcon,
  PhoneOutgoingIcon,
  LocationMarkerIcon,
  ClockIcon,
} from "@heroicons/react/solid";
import { motion } from "framer-motion";
import Layout from "../components/Layout";


const Contactus = () => {
  return (
    <Layout>
      {/* Top Banner Section */}
      <div className="bg-gradient-to-br from-primary-300 via-primary-500 to-primary-800 text-white pt-20 md:pt-24">
        <div className="container mx-auto px-6 py-16 ">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              <span className="text-white">Contact Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Get in touch with MIB Industries - Your trusted partner in global trade and innovation
            </p>
          </motion.div>
        </div>
      </div>
      {/* <div className="bg-gradient-to-br from-primary-300 via-primary-500 to-primary-800 py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Get in touch with MIB Industries - Your trusted partner in global trade and innovation
          </p>
        </div>
      </div> */}

      {/* Aurora Background Content Section */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
        {/* Background Aurora Glows */}
        <div className="absolute top-20 -left-40 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-gradient-to-r from-primary-100/40 to-primary-200/30 rounded-full blur-3xl opacity-50"></div>
        
        <div className="p-6 w-11/12 mx-auto py-16 relative z-10">
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text text-transparent">MIB</span> <span className="text-gray-700 ">Industries</span>
            </h3>
            {/* <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Your trusted partner in innovation and excellence. We&apos;re here to help you succeed.
            </p> */}
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Address Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:transform hover:scale-105 hover:bg-white/90">
              <div className="bg-gradient-to-r from-primary-400 to-primary-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <LocationMarkerIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-title-8 font-semibold text-gray-800 mb-3 text-center">Our Location</h3>
              <p className="text-body-1 text-gray-600 text-center leading-relaxed">
                123 Innovation Street<br />
                Tech District<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:transform hover:scale-105 hover:bg-white/90">
              <div className="bg-gradient-to-r from-primary-500 to-primary-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <PhoneOutgoingIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-title-8 font-semibold text-gray-800 mb-3 text-center">Call Us</h3>
              <div className="text-center space-y-2">
                <p className="text-body-1 text-gray-600">
                  <span className="font-medium">Main:</span><br />
                  <a href="tel:+15551234567" className="text-primary-600 hover:text-primary-800 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </p>
                <p className="text-body-1 text-gray-600">
                  <span className="font-medium">Support:</span><br />
                  <a href="tel:+15559876543" className="text-primary-600 hover:text-primary-800 transition-colors">
                    +1 (555) 987-6543
                  </a>
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:transform hover:scale-105 hover:bg-white/90">
              <div className="bg-gradient-to-r from-primary-400 to-primary-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MailIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-title-8 font-semibold text-gray-800 mb-3 text-center">Email Us</h3>
              <div className="text-center space-y-2">
                <p className="text-body-1 text-gray-600">
                  <span className="font-medium">General:</span><br />
                  <a href="mailto:info@mibcompany.com" className="text-primary-600 hover:text-primary-800 transition-colors">
                    info@mibcompany.com
                  </a>
                </p>
                <p className="text-body-1 text-gray-600">
                  <span className="font-medium">Support:</span><br />
                  <a href="mailto:support@mibcompany.com" className="text-primary-600 hover:text-primary-800 transition-colors">
                    support@mibcompany.com
                  </a>
                </p>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:transform hover:scale-105 hover:bg-white/90">
              <div className="bg-gradient-to-r from-primary-500 to-primary-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <ClockIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-title-8 font-semibold text-gray-800 mb-3 text-center">Business Hours</h3>
              <div className="text-center space-y-2 text-gray-600">
                <p className="text-body-1">
                  <span className="font-medium">Mon - Fri:</span><br />
                  9:00 AM - 6:00 PM
                </p>
                <p className="text-body-1">
                  <span className="font-medium">Saturday:</span><br />
                  10:00 AM - 4:00 PM
                </p>
                <p className="text-body-1">
                  <span className="font-medium">Sunday:</span><br />
                  Closed
                </p>
              </div>
            </div>
          </div>

          {/* Company Description */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg mb-12 border border-white/20">
            <div className="text-center">
              <h2 className="text-title-5 font-bold text-gray-800 mb-6">About MIB Company</h2>
              <p className="text-body-1 text-gray-600 leading-relaxed max-w-4xl mx-auto">
                MIB Company has been at the forefront of innovation for over a decade. We specialize in 
                delivering cutting-edge solutions that drive business growth and transform industries. 
                Our team of experts is dedicated to providing exceptional service and building lasting 
                partnerships with our clients worldwide.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white shadow-lg border border-primary-500/20">
              <h3 className="text-title-6 font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-body-1 text-primary-100 mb-6">
                Contact us today and let&apos;s discuss how we can help your business thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+15551234567" 
                  className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors text-body-1"
                >
                  Call Now
                </a>
                <a 
                  href="mailto:info@mibcompany.com" 
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors text-body-1"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contactus;