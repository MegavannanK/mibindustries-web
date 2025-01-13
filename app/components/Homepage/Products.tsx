import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
}

const productList: Product[] = [
  {
    id: 1,
    image: "/export.png",
    title: "Steel Products",
    description: "High-quality steel for various applications.",
  },
  {
    id: 2,
    image: "/export.png",
    title: "Plastic Products",
    description: "Durable and eco-friendly plastic materials.",
  },
  {
    id: 3,
    image: "/export.png",
    title: "Cement Products",
    description: "Premium-grade cement for construction.",
  },
  {
    id: 4,
    image: "/export.png",
    title: "Wood Products",
    description: "Sustainable and durable wood supplies.",
  },
];

const ProductCard: React.FC<Product> = ({ image, title, description }) => {
  return (
    <div className="flex-shrink-0 w-full max-w-xs p-4 bg-blue-100 rounded-lg shadow-lg md:w-[48%] lg:w-[32%]">
      <div className="relative w-full h-40">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-blue-800">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700">
          Read more
        </button>
      </div>
    </div>
  );
};

export const Products = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="max-w-screen-xl mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Services
        </h2>
        <div className="flex flex-col md:flex-row overflow-x-auto gap-6 scrollbar-hide">
          {productList.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
