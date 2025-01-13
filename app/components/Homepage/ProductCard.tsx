import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  image: string; // Image source URL
  title: string;
  description: string;
}

interface ProductCardProps {
  products: Product[];
}

const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Services
      </h2>
      <div className="flex overflow-x-auto gap-6 scrollbar-hide lg:flex-wrap lg:justify-between">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-80 p-4 bg-blue-100 rounded-lg shadow-lg lg:flex-grow lg:w-1/3"
          >
            <div className="relative w-full h-40">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-blue-800">
                {product.title}
              </h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <button className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
