"use client";

import { Services } from "../components/Homepage/Services";
import { NavbarDesktop, NavbarMobile } from "../components/Navbar";
import { Footer } from "../components/Footer/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Desktop Navbar */}
      <div className="hidden lg:block">
        <NavbarDesktop />
      </div>
      
      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <NavbarMobile />
      </div>

      {/* Services Component with all animations */}
      <div className="pt-20"> {/* Add top padding to account for navbar */}
        <Services />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
