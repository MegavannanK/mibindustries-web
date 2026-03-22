"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { MailIcon, PhoneIncomingIcon, XIcon } from "@heroicons/react/solid";
import { ArrowRightIcon } from "@heroicons/react/outline";
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <footer className="bg-sky-50 text-gray-700 pt-16 pb-8 border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="relative h-[100px] w-[100px]">
              <Image
                src={Logo}
                alt="MIB Industries Logo"
                fill
                className="object-contain mix-blend-multiply"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 tracking-wide">MIB Industries</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Your global partner in premium agricultural sourcing and export. Delivering excellence, consistency, and trust across borders.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => router.push("/")} className="hover:text-primary-600 transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => router.push("/about-us")} className="hover:text-primary-600 transition-colors">About Us</button>
              </li>
              <li>
                <button onClick={() => router.push("/services")} className="hover:text-primary-600 transition-colors">Services</button>
              </li>
              <li>
                <button 
                  onClick={() => setOpen(true)} 
                  className="hover:text-primary-600 transition-colors flex items-center gap-2"
                >
                  Licenses & Certifications
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Top Categories */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6 uppercase tracking-wider text-sm">Our Products</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => router.push("/products")} className="hover:text-primary-600 transition-colors">Premium Rice</button>
              </li>
              <li>
                <button onClick={() => router.push("/products")} className="hover:text-primary-600 transition-colors">Whole Spices</button>
              </li>
              <li>
                <button onClick={() => router.push("/products")} className="hover:text-primary-600 transition-colors">Lentils & Pulses</button>
              </li>
              <li>
                <button onClick={() => router.push("/products")} className="hover:text-primary-600 font-medium transition-colors flex items-center gap-1">
                  View All Products <ArrowRightIcon className="w-4 h-4 ml-1" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <PhoneIncomingIcon className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <a href="tel:+919363291001" className="hover:text-gray-900 transition-colors">
                  +91 93632 91001
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@mibindustries.in" className="hover:text-gray-900 transition-colors">
                  info@mibindustries.in
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                {/* Placeholder for Address Icon - could use generic SVG if no MapIcon */}
                <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  37/17, Reddy St,<br/>
                  Periyar Nagar, Korattur,<br/>
                  Chennai-600080
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Details */}
        <div className="border-t border-sky-200 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} MIB Industries. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-gray-800 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-800 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Licenses Modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          id="licenses-modal"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
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
    </footer>
  );
};
