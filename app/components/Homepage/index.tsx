import { AboutUs } from "./AboutUs";
import { PartnersMarquee } from "./ClientMarquee";
import { Experience } from "./Experience";
import { Header } from "./Header";
import { OurClients } from "./OurClients";
import { OurWork } from "./OurWork";

export const Homepage = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <PartnersMarquee />
      <Experience />
      <OurWork />
      <OurClients />
    </div>
  );
};
