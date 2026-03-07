"use client";
import { Footer } from "./Footer/Footer";
import { NavbarDesktop, NavbarMobile } from "./Navbar";
import { ChatAlt2Icon } from "@heroicons/react/solid";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="hidden md:block">
        <NavbarDesktop />
      </div>
      <div className="md:hidden">
        <NavbarMobile />
      </div>
      <main>{children}</main>
      <Footer />
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/919363291001"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-200"
        aria-label="Contact us on WhatsApp"
      >
        <ChatAlt2Icon className="w-6 h-6" />
      </a>
    </>
  );
}
