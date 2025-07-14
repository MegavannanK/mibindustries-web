"use client";

import { BrandScroll } from "./BrandScroll";
import { AboutUs } from "./AboutUs";
import { Products } from "./Products";
import { Flags } from "./Flags";
import { BrandsMarquee } from "./BrandsMarquee";
import { Experience } from "./Experience";
import { Header } from "./Header";
// import { OurClients } from "./OurClients"; 
import { OurWork } from "./OurWork";
import { Services } from "./Services";


export const Homepage = () => {
  return (
    <div>
      <Header />
      <Products />
      <AboutUs />
      <Flags />
      <Experience />
      <Services />
      <OurWork />
      <BrandsMarquee />
      <BrandScroll />
      {/* <OurClients /> */}
    </div>
  );
};