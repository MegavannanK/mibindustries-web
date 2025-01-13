import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", target: "/" },
  { label: "Products", target: "/products" },
  { label: "Contact Us", target: "/contact" },
  { label: "Partners", target: "/partners" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        className={` h-20 bg-primary-400 rounded-md transition-all duration-300 z-50 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 shadow-md w-full"
            : "absolute top-4 left-1/2 -translate-x-1/2 w-11/12"
        }`}
      >
        <div className="grid grid-cols-4 text-blue-900 justify-between items-center h-full px-10">
          <p className="cursor-pointer text-title-4 font-bold col-span-2">
            Logo
          </p>
          <div className="cursor-pointer flex gap-4 items-center justify-between col-span-2">
            {navItems.map((item, index) => (
              <p
                className="cursor-pointer text-title-7 font-semibold"
                key={index}
              >
                {item.label}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer */}
      {/* <div
        className={`transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        }`}
      /> */}
    </>
  );
};
