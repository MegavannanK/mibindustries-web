"use client";

import { AboutUs } from "./AboutUs";
import { Products } from "./Products";
import { BrandsMarquee } from "./BrandsMarquee";
import { Experience } from "./Experience";
import { Header } from "./Header";
import { OurClients } from "./OurClients";
import { OurWork } from "./OurWork";

export const Homepage = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Products />
      <BrandsMarquee />
      <Experience />
      <OurWork />
      <OurClients />
    </div>
  );
};
