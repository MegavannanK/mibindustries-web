"use client";
import {
  MailIcon,
  PhoneOutgoingIcon,
  LocationMarkerIcon,
  ClockIcon,
} from "@heroicons/react/solid";
import Layout from "../components/Layout";


const Contactus = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary-100 via-primary-200 to-primary-700">
        <div className="p-6 w-11/12 mx-auto pt-[5rem] relative">
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h3 className="text-title-1 md:text-title-2 font-bold bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 bg-clip-text text-transparent mb-4">
              MIB INDUSTRIES
            </h3>
            <p className="text-title-8 text-primary-800 max-w-2xl mx-auto font-medium">
              Your trusted partner in innovation and excellence. We&apos;re here to help you succeed.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-500 hover:transform hover:scale-105 drop-shadow-primary">
              <div className="bg-gradient-to-r from-primary-400 to-primary-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <LocationMarkerIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-title-8 font-semibold text-primary-800 mb-3 text-center">Our Location</h3>
              <p className="text-body-1 text-primary-700 text-center leading-relaxed">
                123 Innovation Street<br />
                Tech District<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-500 hover:transform hover:scale-105 drop-shadow-secondary">
              <div className="bg-gradient-to-r from-primary-300 to-primary-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <PhoneOutgoingIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-title-8 font-semibold text-primary-800 mb-3 text-center">Call Us</h3>
              <div className="text-center space-y-2">
                <p className="text-body-1 text-primary-700">
                  <span className="font-medium">Main:</span><br />
                  <a href="tel:+15551234567" className="text-primary-600 hover:text-primary-800 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </p>
                <p className="text-body-1 text-primary-700">
                  <span className="font-medium">Support:</span><br />
                  <a href="tel:+15559876543" className="text-primary-600 hover:text-primary-800 transition-colors">
                    +1 (555) 987-6543
                  </a>
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-600 hover:transform hover:scale-105 drop-shadow-primary">
              <div className="bg-gradient-to-r from-primary-400 to-primary-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MailIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-title-8 font-semibold text-primary-800 mb-3 text-center">Email Us</h3>
              <div className="text-center space-y-2">
                <p className="text-body-1 text-primary-700">
                  <span className="font-medium">General:</span><br />
                  <a href="mailto:info@mibcompany.com" className="text-primary-600 hover:text-primary-800 transition-colors">
                    info@mibcompany.com
                  </a>
                </p>
                <p className="text-body-1 text-primary-700">
                  <span className="font-medium">Support:</span><br />
                  <a href="mailto:support@mibcompany.com" className="text-primary-600 hover:text-primary-800 transition-colors">
                    support@mibcompany.com
                  </a>
                </p>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-light hover:transform hover:scale-105 drop-shadow-secondary">
              <div className="bg-gradient-to-r from-primary-300 to-primary-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <ClockIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-title-8 font-semibold text-primary-800 mb-3 text-center">Business Hours</h3>
              <div className="text-center space-y-2 text-primary-700">
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
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12 drop-shadow-primary">
            <div className="text-center">
              <h2 className="text-title-5 font-bold text-primary-800 mb-6">About MIB Company</h2>
              <p className="text-body-1 text-primary-700 leading-relaxed max-w-4xl mx-auto">
                MIB Company has been at the forefront of innovation for over a decade. We specialize in 
                delivering cutting-edge solutions that drive business growth and transform industries. 
                Our team of experts is dedicated to providing exceptional service and building lasting 
                partnerships with our clients worldwide.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-400 to-primary-700 rounded-2xl p-8 text-white drop-shadow-primary">
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