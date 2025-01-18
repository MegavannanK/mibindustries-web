"use client";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
