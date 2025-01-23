import Marquee from "react-fast-marquee";
import { brands } from "@/app/masters/brands";
import Image from "next/image";

export const PartnersMarquee = () => {
  return (
    <div className="bg-white">
      <h2 className="pb-4 text-title-7 md:text-title-4 text-primary-700 text-center font-bold">
        Brands
      </h2>
      <Marquee className="py-5">
        <div className="flex gap-10 justify-between">
          {brands.map((brand) => (
            <Image
              key={brand.id}
              src={brand.image}
              alt={brand.name}
              width={120}
              height={100}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};
