"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Image from next/image
import logo from "@/app/assets/images/MIBIndustries.png"; // Import the logo image
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const navItems = [
  { label: "Home", target: "/" },
  { label: "About Us", target: "/about-us" },
  { label: "Products", target: "/products" },
  { label: "Contact Us", target: "/contact-us" },
  { label: "Services", target: "/services" },
];

export const NavbarDesktop = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const pathname = usePathname(); // Get the current route
  const router = useRouter();

  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // const isHomePage = pathname === "/";

  const handleNavItemClick = (target: string) => {
    router.push(target); // Navigate to target route
  };

  return (
    <div
      className={`h-20 transition-all duration-500 z-50 ${
        // isHomePage
          isScrolled
            ? "fixed top-0 left-0 right-0 shadow-xl w-full bg-white/80 backdrop-blur-md border-b border-primary-200/50 rounded-none"
            : "absolute top-4 left-1/2 -translate-x-1/2 w-11/12 bg-transparent rounded-md"
          // : "fixed top-0 left-0 right-0 shadow-md w-full bg-white"
      }`}
    >
      <div className={`grid grid-cols-4 justify-between items-center h-full px-10 transition-colors duration-500 ${
        isScrolled ? "text-primary-800" : "text-primary-800"
      }`}>
        <div className="col-span-2 md:col-span-1 ">
          <Image
            onClick={() => router.push("/")}
            className="cursor-pointer"
            src={logo.src}
            alt="MIB Industries Logo"
            width={120}
            height={48}
            style={{ objectFit: "contain", height: "48px", width: "auto" }}
            priority
          />
        </div>

        <div className="cursor-pointer flex gap-10 items-center justify-between col-span-2">
          {navItems.map((item, index) => (
            <p
              className={`cursor-pointer text-title-7 font-semibold whitespace-nowrap transition-colors duration-500 hover:text-primary-600 ${
                isScrolled ? "text-primary-800" : "text-primary-800"
              }`}
              key={index}
              onClick={() => handleNavItemClick(item.target)} // Updated click handler
            >
              {item.label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export const NavbarMobile = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility
  // const pathname = usePathname(); // Get the current route
  const router = useRouter();

  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // const isHomePage = pathname === "/";

  const handleNavItemClick = (target: string) => {
    router.push(target); // Navigate to target route
  };

  return (
    <div
      className={`h-20 transition-all duration-400 z-50 ${
        // isHomePage
          isScrolled
            ? "fixed top-0 left-0 right-0 shadow-xl w-full bg-white/80 backdrop-blur-md border-b border-primary-200/50 rounded-none"
            : "absolute top-4 left-1/2 -translate-x-1/2 w-11/12 bg-transparent rounded-md"
          // : "fixed top-0 left-0 right-0 shadow-md w-full bg-white"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-full px-4 sm:px-6 md:px-10">
        <div>
          <Image
            onClick={() => router.push("/")}
            src={logo.src}
            alt="MIB Industries Logo"
            width={120}
            height={48}
            style={{ objectFit: "contain", height: "48px", width: "auto" }}
            className="cursor-pointer"
            priority
          />
        </div>

        {/* Conditional rendering of the MenuIcon and XIcon */}
        <div className="w-10 h-10 flex items-center justify-center">
        {isMenuOpen ? (
          <XIcon
            className={`h-8 w-8 cursor-pointer transition-colors duration-500 ${
              isScrolled ? "text-primary-800" : "text-primary-800"
            }`}
            onClick={() => setIsMenuOpen(false)} // Close the menu on click
          />
        ) : (
          <MenuIcon
            className={`h-8 w-8 cursor-pointer transition-colors duration-500 ${
              isScrolled ? "text-primary-800" : "text-primary-800"
            }`}
            onClick={() => setIsMenuOpen(true)} // Open the menu on click
          />
        )}
      </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`absolute top-20 left-0 right-0 p-5 rounded-b-2xl shadow-xl transition-all duration-500 bg-white/85 backdrop-blur-lg border-b border-primary-100/50 text-primary-900 z-[100]`}>
          <div className="flex flex-col items-center">
            {navItems.map((item, index) => (
              <p
                key={index}
                className="py-3 text-center text-title-7 font-bold cursor-pointer hover:text-primary-600 transition-colors duration-300"
                onClick={() => {
                  handleNavItemClick(item.target);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};