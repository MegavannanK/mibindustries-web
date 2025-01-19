"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/app/assets/images/logo.png";
import Image from "next/image";
const navItems = [
  { label: "Home", target: "/" },
  { label: "Products", target: "/products" },
  { label: "Contact Us", target: "/contact" },
  { label: "Partners", target: "/partners" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get the current route

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

  const isHomePage = pathname === "/";
  const router = useRouter();

  return (
    <>
      {/* Navbar */}
      <div
        className={`h-20 rounded-md transition-all duration-300 z-50 ${
          isHomePage
            ? isScrolled
              ? "fixed top-0 left-0 right-0 shadow-md w-full bg-primary-400"
              : "absolute top-4 left-1/2 -translate-x-1/2 w-11/12 bg-primary-400"
            : "fixed top-0 left-0 right-0 shadow-md w-full bg-white"
        }`}
      >
        <div className="grid grid-cols-4 text-blue-900 justify-between items-center h-full px-10">
          <div className="col-span-2">
            <img
              onClick={() => router.push("/")}
              src={logo.src}
              alt="Logo"
              className="h-14 cursor-pointer col"
            />
          </div>

          <div className="cursor-pointer flex gap-4 items-center justify-between col-span-2">
            {navItems.map((item, index) => (
              <p
                className="cursor-pointer text-title-7 font-semibold"
                key={index}
                onClick={() => {
                  router.push(item.target);
                }}
              >
                {item.label}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer to prevent content shift on scroll */}
      {/* {isHomePage && (
        <div
          className={`transition-all duration-300 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        />
      )} */}
    </>
  );
};
