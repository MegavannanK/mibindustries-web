import { MailIcon, PhoneIncomingIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Logo from "@/app/assets/images/logo.png";

const contactData = [
  {
    icon: PhoneIncomingIcon,
    text: "+91 9363291001",
    link: "tel:+919363291001",
  },
  {
    icon: MailIcon,
    text: "info@mibindustries.in",
    href: "mailto:info@mibindustries.in",
  },
];

const companyData = [
  {
    text: "Licenses",
    href: "#",
  },
  {
    text: "Products",
    href: "#",
  },
];
export const Footer = () => {
  return (
    <div className="bg-sky-100 text-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row: Logo */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="relative h-[100px] w-[100px]">
              <Image
                src={Logo}
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            {/* <h4 className="text-2xl font-semibold text-primary-600 mt-2">MIB INDUSTRIES</h4> */}
          </div>
        </div>

        {/* Second Row: Stay in Touch & Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Stay in Touch */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-3">Stay In Touch</p>
            <ul className="space-y-2">
              {contactData.map((contact, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center md:justify-start space-x-2"
                >
                  <contact.icon
                    width={24}
                    height={24}
                    className="text-blue-300"
                  />
                  <a
                    href={contact.link}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {contact.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-right hidden md:block">
            <p className="text-lg font-semibold mb-3">Company</p>
            <ul className="space-y-2">
              {companyData.map((company, index) => (
                <li key={index}>
                  <a
                    href={company.href}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {company.text}
                  </a>
                </li>
              ))}
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
    </div>
  );
};
