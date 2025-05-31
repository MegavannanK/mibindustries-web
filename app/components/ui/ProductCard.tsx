import Image from "next/image";
import React from "react";

interface ProductCardProps {
  title: string;
  description?: string;
  image: string;
  showDescription?: boolean;
  onClick?: () => void;
  variant?: "homepage" | "products";
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  image,
  showDescription = true,
  onClick,
  variant = "homepage", // Default to "Homepage"
}) => {
  const imageContainerClass = 
    variant === "products"
      ? "relative w-[180px] h-[150px] sm:w-[210] sm:h-[200px] xl:w-[300px] xl:h-[250px] overflow-hidden rounded-t-md justify-center mx-auto"
      : "relative w-full sm:w-[470px] sm:h-[250px] h-[200px] lg:w-[280px] lg:h-56 xl:w-[350px] xl:h-[250px] overflow-hidden rounded-t-md sm:align-center mx-auto";
  return (
    <div className="p-4 " onClick={onClick}>
      <div className="bg-primary-100 drop-shadow-secondary rounded-lg overflow-hidden p-4 mx-auto">
        {/* <div className="w-11/12 h-40 mx-auto">
          <img src={image} alt={title} className="w-full h-full object-fit" />
        </div> */}
        <div className={imageContainerClass}>
          <Image
            unoptimized
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        {showDescription ? (
          <div className="p-4 bg-primary-100 flex flex-col gap-4">
            <div className="lg:flex flex-col gap-2">
              <h2 className="text-title-6 font-semibold text-primary-800 text-center">
                {title}
              </h2>
              <p className= "text-black text-body-1 mt-1 text-center">{description}</p>
            </div>

            <div className="px-8 w-10/12 lg:w-10/12 sm:w-[500px] mx-auto rounded-md bg-primary-800 py-2 text-white text-center hover:bg-primary-700 font-semibold cursor-pointer">
              <p>See More</p>
            </div>
          </div>
        ) : (
          <div className="pt-4 bg-primary-100">
            <div className="px-8 w-full mx-auto rounded-md bg-primary-900 py-2 text-white text-center">
              <p>{title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;