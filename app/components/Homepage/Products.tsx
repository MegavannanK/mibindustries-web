"use client";

import React, { useState } from "react";
import { products } from "@/app/masters/products";
import ProductCard from "../ui/ProductCard";
import { motion } from "framer-motion";

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
        Products
      </h2>

      {/* Mobile View */}
      <div className="flex flex-col items-center gap-4 md:hidden px-4 mx-auto">
        {products.slice(0, 3).map((product, index) => (
          <ProductCard
            image={product.image}
            key={index}
            title={product.name}
            description={product.description}
          />
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex relative items-center">
        {/* Left Arrow */}
        <motion.button
          onClick={handleScrollLeft}
          aria-label="Scroll left"
          className="absolute left-4 z-10 bg-white text-blue-900 p-3 rounded-full shadow-md hover:bg-blue-700 hover:text-white transition-all duration-200 focus:ring-2 focus:ring-blue-500"
          whileHover={{ scale: 1.2 }} // Scale up on hover
          whileTap={{ scale: 0.9 }}
        >
          &lt;
        </motion.button>

        {/* Scrollable Container */}
        <motion.div
          className="flex justify-center space-x-4 px-4 w-full"
          initial={{ opacity: 0 }} // Start with opacity 0
          animate={{ opacity: 1 }} // Animate to opacity 1 (fade-in)
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          {visibleProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 50 }} // Animation for each product card
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard
                image={product.image}
                title={product.name}
                description={product.description}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Right Arrow */}
        <motion.button
          onClick={handleScrollRight}
          aria-label="Scroll right"
          className="absolute right-4 z-10 bg-white text-blue-900 p-3 rounded-full shadow-md hover:bg-blue-700 hover:text-white transition-all duration-200 focus:ring-2 focus:ring-blue-500"
          whileHover={{ scale: 1.2 }} // Scale up on hover
          whileTap={{ scale: 0.9 }}
        >
          &gt;
        </motion.button>
      </div>
    </div>
  );
};
