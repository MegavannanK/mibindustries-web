"use client";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <main>{children}</main>
      {/* Mega footer comes here */}
      <div>
        <Footer />
      </div>
    </>
  );
}
