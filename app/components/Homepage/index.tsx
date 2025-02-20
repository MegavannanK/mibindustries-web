"use client";

import { AboutUs } from "./AboutUs";
import { Products } from "./Products";
import { BrandsMarquee } from "./BrandsMarquee";
import { Experience } from "./Experience";
import { Header } from "./Header";
// import { OurClients } from "./OurClients";
import { OurWork } from "./OurWork";

export const Homepage = () => {
  return (
    <div>
      <Header />
      <Products />
      <AboutUs />
      <Experience />
      <OurWork />
      <BrandsMarquee />
      {/* <OurClients /> */}
    </div>
  );
};
