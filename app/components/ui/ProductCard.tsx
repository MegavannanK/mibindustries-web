import React from "react";
//importing image as of now
import ExportImage from "@/app/assets/images/export.png";
interface ProductCardProps {
  title: string;
  description: string;
  image?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="flex-shrink-0 w-80 p-4">
      <div className="bg-white drop-shadow-secondary rounded-lg overflow-hidden">
        <img
          src={ExportImage.src}
          alt={title}
          className="h-40 w-full object-cover"
        />
        <div className="p-4 bg-primary-100 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-title-8 font-bold text-primary-800">{title}</h2>
            <p className="text-black text-body-2 mt-2">{description}</p>
          </div>

          <div className="px-8 w-10/12 mx-auto rounded-md bg-primary-900 py-2 text-white text-center">
            <p>Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
