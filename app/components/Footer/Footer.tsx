"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { MailIcon, PhoneIncomingIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Logo from "@/app/assets/images/logo.png";

interface ContactItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  link?: string; // tel: or mailto:
  href?: string;
  label?: string;
}

interface CompanyItem {
  text: string;
  href?: string; // route (products) or undefined for modal trigger
}

const contactData: ContactItem[] = [
  {
    icon: PhoneIncomingIcon,
    text: "+919363291001",
    link: "tel:+919363291001",
    label: "Call MIB Industries main line"
  },
  {
    icon: MailIcon,
    text: "info@mibindustries.in",
    link: "mailto:info@mibindustries.in",
    label: "Email MIB Industries"
  },
];

const companyData: CompanyItem[] = [
  {
    text: "Licenses",
    href: undefined,
  },
  {
    text: "Products",
  href: "/products",
  },
];
export const Footer = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Close on ESC
  const escHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", escHandler);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", escHandler);
    }
    return () => document.removeEventListener("keydown", escHandler);
  }, [open, escHandler]);
  
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
              {contactData.map((contact, index) => {
                const url = contact.link || contact.href || '#';
                return (
                  <li
                    key={index}
                    className="flex items-center justify-center md:justify-start space-x-2"
                  >
                    <contact.icon
                      width={24}
                      height={24}
                      aria-hidden="true"
                      className="text-blue-300 flex-shrink-0"
                    />
                    <a
                      href={url}
                      aria-label={contact.label || contact.text}
                      className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded underline decoration-transparent hover:decoration-current transition-colors cursor-pointer"
                    >
                      {contact.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-right hidden md:block">
            <p className="text-lg font-semibold mb-3">Company</p>
            <ul className="space-y-2">
              {companyData.map((company, index) => (
                <li key={index}>
                  {company.text === "Licenses" ? (
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
                      aria-haspopup="dialog"
                      aria-expanded={open}
                      aria-controls="licenses-modal"
                    >
                      {company.text}
                    </button>
                  ) : company.text === "Products" ? (
                    <button
                      type="button"
                      onClick={() => router.push("/products")}
                      className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
                      aria-label="Go to Products"
                    >
                      {company.text}
                    </button>
                  ) : null}
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

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          id="licenses-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-5xl">
            <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-slate-700/50" >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded"
                aria-label="Close"
              >
                <XIcon className="w-6 h-6" />
              </button>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-6 py-2 mb-6 border border-green-400/30">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span className="text-green-300 font-semibold text-sm uppercase tracking-wide">Government Registered</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Verified Business Credentials</h2>
              <p className="text-center text-lg opacity-90 max-w-2xl mx-auto mb-8 hidden lg:block">
                Our business is officially registered and compliant with all government regulations for international trade operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "GST Registration", value: "33ITKPM7611C1ZQ", description: "Goods & Services Tax", icon: "📋" },
                  { label: "Import Export License", value: "ITKPM7611C", description: "Authorized Import & Export Operations", icon: "🌍" },
                  { label: "FSSAI  Certified", value: "12424999000212", description: "Quality Management", icon: "🏆" }
                ].map((c) => (
                  <div key={c.label} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                    <div className="text-2xl mb-3">{c.icon}</div>
                    <div className="text-sm text-white/70 uppercase tracking-wider font-semibold mb-2">{c.label}</div>
                    <div className="text-lg font-bold text-white mb-2 font-mono tracking-wide">{c.value}</div>
                    <div className="text-xs text-white/60">{c.description}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-6 mt-10 text-sm text-white/80 flex-wrap">
                <div className="flex items-center gap-2"><span className="w-3 h-3 bg-green-400 rounded-full" /> Government Verified</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 bg-blue-400 rounded-full" /> Export Authorized</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 bg-yellow-400 rounded-full" /> Quality Certified</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
