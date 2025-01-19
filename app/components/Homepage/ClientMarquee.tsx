import Marquee from "react-fast-marquee";
import { Brands } from "@/app/masters/brands";

export const PartnersMarquee = () => {
  return (
    <div className="bg-white">
      <h2 className="pb-4 text-title-7 md:text-title-4 text-primary-700 text-center font-bold">
        Our Partners
      </h2>
      <Marquee>
        <div className="flex gap-10 justify-between">
          {Brands.map((brand) => (
            <img
              key={brand.id}
              src={brand.image} // Use the `image` property here
              alt={brand.name} // Use `name` for the alt text
              className="w-[120px] h-[120px] object-contain"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};
