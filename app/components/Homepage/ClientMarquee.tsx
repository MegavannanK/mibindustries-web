import Marquee from "react-fast-marquee";
import { Brands } from "@/app/masters/brands";

export const PartnersMarquee = () => {
  return (
    <div className="bg-white">
      <h2 className="pb-4 text-title-7 md:text-title-4 text-primary-700 text-center font-bold">
        Brands
      </h2>
      <Marquee>
        <div className="flex gap-10 justify-between">
          {Brands.map((brand) => (
            <img
              key={brand.id}
              src={brand.image} // Use the `image` property here
              alt={brand.name} // Use `name` for the alt text
              className={`${
                brand.name === "Lulu" ? "w-48 h-48" : "w-40 h-40"
              } mb-10 object-contain ${brand.name === "Anil" ? "mr-20" : ""}`}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};
