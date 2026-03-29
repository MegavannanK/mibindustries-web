"use client";

import dynamic from "next/dynamic";
import { Header } from "./Header";

// Dynamically import below-the-fold components to improve initial load time and optimize asset loading
const Products = dynamic(() => import("./Products").then((mod) => mod.Products));
const OurWork = dynamic(() => import("./OurWork").then((mod) => mod.OurWork));
const AboutUsGallery = dynamic(() => import("./AboutUsGallery").then((mod) => mod.AboutUsGallery));
const GlobalPresence = dynamic(() => import("./GlobalPresence").then((mod) => mod.GlobalPresence));
const Flags = dynamic(() => import("./Flags").then((mod) => mod.Flags));
const Services = dynamic(() => import("./Services").then((mod) => mod.Services));
const CertificationsMarquee = dynamic(() => import("./CertificationsMarquee").then((mod) => mod.CertificationsMarquee));

export const Homepage = () => {
  return (
    <div>
      <Header />
      <Products />
      <OurWork />
      <AboutUsGallery />
      <GlobalPresence />
      <Flags />
      {/* <Experience /> */}
      <Services />
      <CertificationsMarquee />
      {/* <BrandsMarquee />
      <BrandScroll /> */}
      {/* <OurClients /> */}
    </div>
  );
};