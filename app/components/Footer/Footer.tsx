import { PhoneIcon } from "./PhoneIcon";
import { EmailIcon } from "./EmailIcon";
import Logo from "@/app/assets/images/logo.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-sky-100 text-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row: Logo */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <Image
              src={Logo.src} // Replace with your logo's path
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
            {/* <p className="text-2xl font-semibold text-red-600 mt-2">MIB</p> */}
          </div>
        </div>

        {/* Second Row: Stay in Touch & Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Stay in Touch */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-3">Stay In Touch</p>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <PhoneIcon />

                <a
                  href="tel:+919600261109"
                  className="text-gray-600 hover:text-gray-800"
                >
                  +91 9600261109
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <EmailIcon />

                <a
                  href="mailto:Email@Email.com"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Email@Email.Com
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-right hidden md:block">
            <p className="text-lg font-semibold mb-3">Company</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Licenses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Products
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Third Row: Divider Line */}
        <div className="border-t border-sky-200 my-6"></div>

        {/* Fourth Row: Copyright */}
        <div className="text-center">
          <p className="text-gray-500">© 2025 MIB. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
