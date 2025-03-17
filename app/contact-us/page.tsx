"use client";
import {
  MailIcon,
  PhoneOutgoingIcon,
  LocationMarkerIcon,
  ChatIcon,
} from "@heroicons/react/solid";
import Layout from "../components/Layout";
import { ModifiedBreadCrumb } from "../components/ui/ModifiedBreadCrumb";

const Contactus = () => {
  return (
    <Layout>
      <div className="p-6 w-11/12 mx-auto mt-[5rem] relative">
        {/* Back button */}
        <ModifiedBreadCrumb text="Contact Us" />
        <div className="min-h-screen bg-blue-900 flex items-center justify-center p-6">
          <div className="lg:w-1/2 md:w-8/12 w-10/12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-title-5 font-bold text-gray-900 mb-4">
              Get In <span className="text-blue-300">Touch</span>
            </h2>

            {/* Contact Info Section */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex items-center gap-3">
                <PhoneOutgoingIcon className="h-6 w-6 text-blue-300" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-3">
                <LocationMarkerIcon className="h-6 w-6 text-blue-300" />
                <span>New York, USA</span>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon className="h-6 w-6 text-blue-300" />
                <span>info@example.com</span>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone No."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all"
              >
                Submit
              </button>
            </form>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-4 mt-6">
              {/* WhatsApp - Chat Icon as a substitute */}
              <a href="#" className="text-green-500">
                <ChatIcon className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contactus;
