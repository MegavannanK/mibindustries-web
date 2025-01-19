"use client";

import React, { useState } from "react";
import { products } from "@/app/masters/products";
import ProductCard from "../ui/ProductCard";

export const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 3)); // Initial set of 3 products

  const handleScrollRight = () => {
    const nextProducts = [...visibleProducts];
    const firstIndex = products.findIndex(
      (p) => p.id === visibleProducts[2].id
    );
    for (let i = 1; i <= 3; i++) {
      const nextIndex = (firstIndex + i) % products.length; // Wrap around
      nextProducts[i - 1] = products[nextIndex];
    }
    setVisibleProducts(nextProducts);
  };

  const handleScrollLeft = () => {
    const nextProducts = [...visibleProducts];
    const firstIndex = products.findIndex(
      (p) => p.id === visibleProducts[0].id
    );
    for (let i = 1; i <= 3; i++) {
      const prevIndex = (firstIndex - i + products.length) % products.length; // Wrap around
      nextProducts[3 - i] = products[prevIndex];
    }
    setVisibleProducts(nextProducts);
  };

  return (
    <div className="bg-blue-900 py-8 w-full mx-auto">
      <h2 className="text-center text-2xl font-bold text-white mb-6">
        Services
      </h2>

      {/* Mobile View */}
      <div className="flex flex-col items-center gap-4 md:hidden px-4 mx-auto">
        {products.slice(0, 3).map((product, index) => (
          <ProductCard
            key={index}
            title={product.name}
            description={product.description}
          />
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex relative items-center">
        {/* Left Arrow */}
        <button
          onClick={handleScrollLeft}
          aria-label="Scroll left"
          className="absolute left-4 z-10 bg-white text-blue-900 p-3 rounded-full shadow-md hover:bg-blue-700 hover:text-white transition-all duration-200 focus:ring-2 focus:ring-blue-500"
        >
          &lt;
        </button>

        {/* Scrollable Container */}
        <div className="flex justify-center space-x-4 px-4 w-full">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              description={product.description}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleScrollRight}
          aria-label="Scroll right"
          className="absolute right-4 z-10 bg-white text-blue-900 p-3 rounded-full shadow-md hover:bg-blue-700 hover:text-white transition-all duration-200 focus:ring-2 focus:ring-blue-500"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
