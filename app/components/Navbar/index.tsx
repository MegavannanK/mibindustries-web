"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Image from next/image
import logo from "@/app/assets/images/logo.png"; // Import the logo image
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const navItems = [
  { label: "Home", target: "/" },
  { label: "Products", target: "/products" },
  { label: "Contact Us", target: "/contact-us" },
  { label: "Brands", target: "brands" },
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
    if (target === "brands") {
      // Check if we're already on the Brands section
      const brandsSection = document.getElementById("brands");
      if (brandsSection) {
        brandsSection.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to the homepage and scroll to the Brands section
        router.push("/#brands");
      }
    } else {
      router.push(target); // Navigate to other routes
    }
  };

  return (
    <div
      className={`h-20 rounded-md transition-all duration-300 z-50 ${
        // isHomePage
          isScrolled
            ? "fixed top-0 left-0 right-0 shadow-md w-full bg-primary-400"
            : "absolute top-4 left-1/2 -translate-x-1/2 w-11/12 bg-primary-300"
          // : "fixed top-0 left-0 right-0 shadow-md w-full bg-white"
      }`}
    >
      <div className="grid grid-cols-4 text-primary-800 justify-between items-center h-full px-10">
        <div className="col-span-2 md:col-span-1 ">
          <Image
            onClick={() => router.push("/")}
            className="cursor-pointer"
            src={logo.src} // Use the imported logo.src here
            alt="Logo"
            width={56} // Define the width for the image
            height={56} // Define the height for the image
            
          />
        </div>

        <div className="cursor-pointer flex gap-10 items-center justify-between col-span-2">
          {navItems.map((item, index) => (
            <p
              className="cursor-pointer text-title-7 font-semibold whitespace-nowrap"
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
    if (target === "brands") {
      // Check if we're already on the Brands section
      const brandsSection = document.getElementById("brands");
      if (brandsSection) {
        brandsSection.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to the homepage and scroll to the Brands section
        router.push("");
      }
    } else {
      router.push(target); // Navigate to other routes
    }
  };

  return (
    <div
      className={`h-20 rounded-md transition-all duration-300 z-50 ${
        // isHomePage
          isScrolled
            ? "fixed top-0 left-0 right-0 shadow-md w-full bg-primary-400"
            : "absolute top-4 left-1/2 -translate-x-1/2 w-11/12 bg-primary-300"
          // : "fixed top-0 left-0 right-0 shadow-md w-full bg-white"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-full px-4 sm:px-6 md:px-10">
        <div>
          <Image
            onClick={() => router.push("/")}
            src={logo.src} // Use the imported logo.src here
            alt="Logo"
            width={56} // Define the width for the image
            height={56} // Define the height for the image
            className="cursor-pointer"
          />
        </div>

        {/* Conditional rendering of the MenuIcon and XIcon */}
        <div className="w-10 h-10 flex items-center justify-center">
        {isMenuOpen ? (
          <XIcon
            className="h-8 w-8 text-primary-800 cursor-pointer"
            onClick={() => setIsMenuOpen(false)} // Close the menu on click
          />
        ) : (
          <MenuIcon
            className="h-8 w-8 text-primary-800 cursor-pointer"
            onClick={() => setIsMenuOpen(true)} // Open the menu on click
          />
        )}
      </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-primary-300 text-primary-800 p-5">
          <div className="flex flex-col items-center">
            {navItems.map((item, index) => (
              <p
                key={index}
                className="py-2 text-center text-title-7 font-semibold cursor-pointer"
                onClick={() => {
                  handleNavItemClick(item.target); // Updated click handler
                  setIsMenuOpen(false); // Close the menu after clicking an item
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