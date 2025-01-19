import React from "react";

interface ProductCardProps {
  title: string;
  description?: string;
  image: string;
  showDescription?: boolean;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  image,
  showDescription = true,
  onClick,
}) => {
  return (
    <div className="flex-shrink-0 p-4 cursor-pointer" onClick={onClick}>
      <div className="bg-primary-100 drop-shadow-secondary rounded-lg overflow-hidden p-4">
        {/* <div className="w-11/12 h-40 mx-auto">
          <img src={image} alt={title} className="w-full h-full object-fit" />
        </div> */}
        <div className="relative w-full h-56 overflow-hidden rounded-t-md">
          <img
            src={image}
            alt={`Image of ${title}`}
            className="w-full h-full object-cover"
          />
        </div>
        {showDescription ? (
          <div className="p-4 bg-primary-100 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-title-8 font-bold text-primary-800">
                {title}
              </h2>
              <p className="text-black text-body-2 mt-2">{description}</p>
            </div>

            <div className="px-8 w-10/12 mx-auto rounded-md bg-primary-900 py-2 text-white text-center">
              <p>Read More</p>
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
