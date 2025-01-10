"use client";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* Mega footer comes here */}
      <div>
        <Footer />
      </div>
    </>
  );
}
