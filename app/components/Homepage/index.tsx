"use client";

// import { BrandScroll } from "./BrandScroll";
// import { AboutUs } from "./AboutUs";
import { Products } from "./Products";
import { Flags } from "./Flags";
// import { BrandsMarquee } from "./BrandsMarquee";
import { Header } from "./Header";
// import { OurClients } from "./OurClients"; 
import { OurWork } from "./OurWork";
import { Services } from "./Services";
import { GlobalPresence } from "./GlobalPresence";
import { CertificationsMarquee } from "./CertificationsMarquee";
import { AboutUsGallery } from "./AboutUsGallery";

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