"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { products } from "@/app/masters/products";
import { motion } from "framer-motion";
import { SearchIcon, ChevronRightIcon } from "@heroicons/react/outline";

// Define types
type Product = {
  id: number;
  image: string;
  name: string;
  variants?: Variant[];
  slug: string;
  description: string;
  mainCategory: "Food Essentials" | "Home & Lifestyle";
};

type Variant = {
  name: string;
};

// Component that uses useSearchParams must be wrapped in Suspense
const ProductsContent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("all");
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get("category");

  // Handlers for setting URL state
  const setViewCategory = (category: string | null) => {
    if (category) {
      router.push(`/products?category=${encodeURIComponent(category)}`);
    } else {
      router.push(`/products`);
    }
  };

  // Derived state
  const isSegregatedView = !categoryParam;

  // Filter products for grid view
  const displayedProducts = products.filter((product) => {
    if (!isSegregatedView && categoryParam && product.mainCategory !== categoryParam) return false;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedSubCategory === "all" || product.name.toLowerCase().includes(selectedSubCategory);
    return matchesSearch && matchesCategory;
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const availableSubCategories = [
    "all",
    ...new Set(
      (isSegregatedView ? products : displayedProducts).map((p) => p.name.toLowerCase())
    ),
  ];

  const foodEssentials = products.filter((p) => p.mainCategory === "Food Essentials");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const homeLifestyle = products.filter((p) => p.mainCategory === "Home & Lifestyle");

  const openProductDetail = (product: Product) => {
    router.push(`/products/${encodeURIComponent(product.slug)}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO ─── */}
      <div className="relative flex flex-col pt-20 bg-white overflow-hidden">
        {/* Full-width Product Compilation Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-[25vh] md:h-[45vh] relative"
        >
          <Image
            src="/assets/images/our_products.png"
            alt="Our Products Compilation"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        {/* Text Content Below Image */}
        <div className="relative z-10 container mx-auto px-6 py-4 md:py-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight text-gray-900 leading-tight">
              {categoryParam ? categoryParam : "Our Products"}
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-4 rounded-full" />
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              {categoryParam
                ? `Explore our curated selection of ${categoryParam}`
                : "Authentic Indian goods — food, lifestyle, and more."}
            </p>
          </motion.div>
        </div>
      </div>

      {isSegregatedView ? (
        // ─── SEGREGATED VIEW ───
        <div className="pb-20">
          {/* ── Food Essentials ── */}
          {(!searchTerm ||
            foodEssentials.some(
              (p) =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.description.toLowerCase().includes(searchTerm.toLowerCase())
            )) && (
            <div className="mt-2 md:mt-4">
              {/* Section header — light band */}
              <div className="bg-slate-50 border-b border-gray-100 px-6 py-8 relative overflow-hidden">
                <div className="container mx-auto max-w-7xl relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Food Essentials</h2>
                    <p className="text-gray-500 text-sm mt-1">Purity in every grain, authenticity in every spice.</p>
                  </div>
                  <button
                    onClick={() => setViewCategory("Food Essentials")}
                    className="flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-2xl shadow-md hover:shadow-lg transition-all"
                  >
                    View All <ChevronRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Cards — transparent hover cards on white bg */}
              <div className="container mx-auto px-6 max-w-7xl py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                  {foodEssentials
                    .filter(
                      (p) =>
                        !searchTerm ||
                        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        p.description.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .slice(0, 8)
                    .map((product) => (
                      <motion.div
                        key={product.id}
                        whileHover={{ y: -4 }}
                        className="group cursor-pointer bg-white/70 backdrop-blur-sm border border-white hover:border-amber-100 hover:shadow-lg rounded-2xl p-3 transition-all duration-300"
                        onClick={() => openProductDetail(product)}
                      >
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white p-4 border border-gray-50 flex items-center justify-center">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="mt-3 px-1">
                          <h3 className="text-sm font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-xs text-gray-400 mt-0.5">{product.description}</p>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* ── Home & Lifestyle ── */}
          {/*
          {(!searchTerm ||
            homeLifestyle.some(
              (p) =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.description.toLowerCase().includes(searchTerm.toLowerCase())
            )) && (
            <div className="mt-10">
              <div className="bg-slate-50 border-y border-gray-100 px-6 py-8 relative overflow-hidden">
                <div className="container mx-auto max-w-7xl relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Home & Lifestyle</h2>
                    <p className="text-gray-500 text-sm mt-1">Elevate your living spaces with our curated collection.</p>
                  </div>
                  <button
                    onClick={() => setViewCategory("Home & Lifestyle")}
                    className="flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-2xl shadow-md hover:shadow-lg transition-all"
                  >
                    View All <ChevronRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="bg-[#f8fafc] py-10">
                <div className="container mx-auto px-6 max-w-7xl">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                    {homeLifestyle
                      .filter(
                        (p) =>
                          !searchTerm ||
                          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((product) => (
                        <motion.div
                          key={product.id}
                          whileHover={{ y: -4 }}
                          className="group cursor-pointer bg-white/70 backdrop-blur-sm border border-white hover:border-indigo-100 hover:shadow-lg rounded-2xl p-3 transition-all duration-300"
                          onClick={() => openProductDetail(product)}
                        >
                          <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white p-4 border border-gray-50 flex items-center justify-center">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="mt-3 px-1">
                            <h3 className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-xs text-gray-400 mt-0.5">{product.description}</p>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          */}
        </div>
      ) : (
        // ─── CATEGORY FULL GRID VIEW ───
        <div className="container mx-auto px-6 py-16 max-w-7xl">
          <p className="text-base text-gray-500 mb-8 border-l-4 border-amber-400 pl-4 font-medium">
            Showing <span className="text-gray-900 font-bold">{displayedProducts.length}</span> premium products
          </p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {displayedProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className={
                  categoryParam === "Food Essentials"
                    ? "group cursor-pointer"
                    : "group cursor-pointer bg-white/70 backdrop-blur-sm border border-white hover:border-indigo-100 hover:shadow-lg rounded-2xl p-3 transition-all duration-300"
                }
                onClick={() => openProductDetail(product)}
              >
                <div
                  className={
                    categoryParam === "Food Essentials"
                      ? "relative w-full aspect-square rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all bg-white p-4 flex items-center justify-center"
                      : "relative w-full aspect-square rounded-xl overflow-hidden bg-white p-4 border border-gray-50 flex items-center justify-center"
                  }
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                  {categoryParam === "Food Essentials" && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-xs font-semibold">View →</span>
                    </div>
                  )}
                </div>
                <div className="mt-3 px-1">
                  <h3
                    className={`text-sm font-bold text-gray-900 transition-colors ${
                      categoryParam === "Food Essentials"
                        ? "group-hover:text-amber-600"
                        : "group-hover:text-indigo-600"
                    }`}
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {displayedProducts.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <SearchIcon className="h-12 w-12 mx-auto text-gray-200 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">No Products Found</h3>
              <p className="text-gray-400 mb-6 text-sm">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedSubCategory("all");
                }}
                className="bg-gray-900 text-white px-6 py-2.5 rounded-xl text-sm hover:bg-gray-800 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export const ProductsPage = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900" />
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
};