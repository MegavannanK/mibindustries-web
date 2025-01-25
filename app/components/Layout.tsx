"use client";
import { Footer } from "./Footer/Footer";
import { NavbarDesktop, NavbarMobile } from "./Navbar";

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
    </>
  );
}
