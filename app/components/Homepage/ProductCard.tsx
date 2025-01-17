import React from "react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="flex-shrink-0 w-80 p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={image} alt={title} className="h-40 w-full object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 text-sm mt-2">{description}</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
