"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { products as allProducts } from "@/app/masters/products";

type Variant = {
  name: string;
  image?: string;
  description?: string;
};

type Product = {
  id: number;
  image: string;
  name: string;
  variants?: Variant[];
  slug: string;
  description: string;
  mainCategory: "Food Essentials" | "Home & Lifestyle";
};

type Props = {
  product: Product;
};

// Rich structured details per variant
type VariantDetail = {
  description: string;
  origin: string;
  usage: string;
  packaging: string;
};

const variantDetails: Record<string, VariantDetail> = {
  // ── Rice ──
  "Basmati Rice":              { description: "The \"King of Rice\" — prized for its exquisite aroma and slender long grains that double in length when cooked.", origin: "Punjab & Haryana, India", usage: "Biryani, pulao, fried rice, and premium restaurant dishes.", packaging: "5 kg, 10 kg, 25 kg, 50 kg bags; custom export packaging available." },
  "Ponni Raw Rice":            { description: "A popular South Indian variety with soft texture and mild flavour, perfect for everyday meals.", origin: "Cauvery Delta, Tamil Nadu", usage: "Daily meals, idli, soft-cooked rice dishes.", packaging: "5 kg, 10 kg, 25 kg, 50 kg bags." },
  "Ponni Parboiled Rice":      { description: "Low glycemic index staple South Indian rice offering a firm texture — ideal for daily use.", origin: "Tamil Nadu, India", usage: "Steam-cooked meals, hospital diets, everyday South Indian cooking.", packaging: "5 kg, 10 kg, 25 kg, 50 kg bags." },
  "Sona Masoori Rice":         { description: "A lightweight aromatic medium-grain rice ideal for biryanis, idli batter, and daily cooking.", origin: "Andhra Pradesh & Karnataka", usage: "Biryani, idli batter, daily rice, weight-conscious meals.", packaging: "5 kg, 10 kg, 25 kg, 50 kg bags." },
  "DIA Rice (Low Glycemic for Diabeties)": { description: "Specially cultivated for diabetes-friendly diets, offering a low glycemic index and rich nutrition.", origin: "Tamil Nadu, India", usage: "Diabetic-friendly daily meals; recommended by nutritionists.", packaging: "1 kg, 2 kg, 5 kg health packs." },
  "Palakad Matta Rice":        { description: "Bold, earthy-flavored red rice from Kerala — rich in fiber and micronutrients.", origin: "Palakkad, Kerala", usage: "Kerala meals, red rice poha, health-conscious daily use.", packaging: "5 kg, 10 kg, 25 kg bags." },
  "IR 64 Rice":                { description: "Long-grain rice known for consistent quality and wide commercial use worldwide.", origin: "Various states, India", usage: "Commercial kitchens, restaurants, large-scale food processing.", packaging: "25 kg, 50 kg bulk bags; custom export pallets." },
  "IR 8 Rice":                 { description: "Short-statured high-yielding variety with excellent milling quality.", origin: "India", usage: "Bulk food production, industrial milling, export distribution.", packaging: "25 kg, 50 kg bulk bags." },
  // ── Spices ──
  "Cloves":                    { description: "Intensely aromatic dried flower buds — one of the most prized spices in Indian and global cuisines.", origin: "Kerala, India", usage: "Biryani, masalas, baked goods, mulled drinks, dental care preparations.", packaging: "100 g, 500 g, 1 kg, 5 kg; bulk 25 kg export bags." },
  "Cinnamon":                  { description: "Warm, sweet spice from bark — a cornerstone of Indian and Middle Eastern cooking.", origin: "Kerala & Sri Lanka", usage: "Biryani, desserts, chai, spice blends, baked goods.", packaging: "100 g, 500 g, 1 kg, 5 kg; bulk 25 kg export bags." },
  "Black Cardamom":            { description: "Smoky and bold in character — adds unmistakable depth to biryanis, curries, and chai.", origin: "Sikkim & Eastern Himalayas", usage: "Biryani, slow-cooked curries, smoked meats, masala chai.", packaging: "100 g, 500 g, 1 kg; bulk export available." },
  "Green Cardamom":            { description: "Aromatic pods with a sweet, floral flavor — essential in Indian sweets, tea, and spice blends.", origin: "Kerala & Karnataka, India", usage: "Chai, kheer, gulab jamun, biryanis, and mouth fresheners.", packaging: "100 g, 500 g, 1 kg; bulk 25 kg export bags." },
  "Bay Leaf / Briyani Leaf":   { description: "Adds a distinctive, subtle fragrance to slow-cooked dishes — a biryani staple.", origin: "Tamil Nadu & Uttar Pradesh", usage: "Biryani, curries, stocks, rice dishes, and slow-cooked stews.", packaging: "100 g, 500 g, 1 kg packs; bulk export bags." },
  "Star Anise":                { description: "Star-shaped spice with a strong anise / licorice flavor, indispensable in biryani and garam masala.", origin: "Tamil Nadu, India", usage: "Biryani, masalas, Chinese five-spice, herbal teas.", packaging: "100 g, 500 g, 1 kg; bulk 25 kg export bags." },
  "Coriander Seeds":           { description: "Citrusy and earthy whole seeds — a foundational element in virtually every Indian spice blend.", origin: "Rajasthan & Andhra Pradesh", usage: "Spice blends, pickling, grinding for chutneys and curries.", packaging: "250 g, 500 g, 1 kg, 5 kg, 25 kg bags." },
  "Black Pepper (Whole & Fine Ground)": { description: "The \"King of Spices\" — available whole or ground, pungent and sharp.", origin: "Malabar Coast, Kerala", usage: "Seasoning, spice blends, marinades, soups, sauces.", packaging: "100 g, 500 g, 1 kg, 5 kg; bulk 25 kg export bags." },
  "Cumin Seeds":               { description: "Earthy and warm — essential for tempering dals, curries, and rice dishes across South Asia.", origin: "Rajasthan & Gujarat, India", usage: "Tempering, spice blends, jeera rice, chutneys, yogurt raita.", packaging: "250 g, 500 g, 1 kg, 5 kg, 25 kg bags." },
  "Fennel Seeds":              { description: "Sweet and aromatic green seeds — used as a digestive and in marinades.", origin: "Rajasthan & Gujarat, India", usage: "After-meal digestive, spice blends, baked goods, fish marinades.", packaging: "250 g, 500 g, 1 kg, 5 kg bags." },
  "Fenugreek Seeds":           { description: "Slightly bitter seeds packed with nutrients — a key ingredient in curries and pickles.", origin: "Rajasthan, India", usage: "Curries, pickles, methi dal, hair care preparations.", packaging: "250 g, 500 g, 1 kg, 5 kg bags." },
  "Mustard Seeds":             { description: "Small but mighty — pop in hot oil to release a nutty, pungent flavor essential to South Indian cooking.", origin: "Rajasthan & Uttar Pradesh", usage: "Tempering, pickles, mustard oil, salad dressings.", packaging: "250 g, 500 g, 1 kg, 5 kg, 25 kg bags." },
  "Turmeric":                  { description: "Golden anti-inflammatory spice that colors and flavors virtually every Indian dish.", origin: "Erode & Salem, Tamil Nadu", usage: "Curries, milk (golden milk), pickles, natural dye, Ayurvedic medicine.", packaging: "100 g, 500 g, 1 kg (powder); 5 kg, 25 kg bulk." },
  "Asafoetida (Hing)":         { description: "Pungent resin that transforms into a savory, umami depth when cooked.", origin: "Afghanistan & Kashmir", usage: "Dal tempering, digestive spice blend, Jain cooking substitute for onion/garlic.", packaging: "50 g, 100 g, 250 g packs; bulk available." },
  "Ginger":                    { description: "Warm and spicy rhizome — used fresh, dried, or powdered in countless preparations.", origin: "Kerala & Himachal Pradesh", usage: "Chai, curries, chutneys, marinades, herbal medicine.", packaging: "500 g, 1 kg fresh; 250 g, 500 g powder packs." },
  // ── Chillies ──
  "Guntur Chillies":           { description: "Fiery red chillies from Guntur — one of the hottest and most sought-after varieties globally.", origin: "Guntur, Andhra Pradesh", usage: "Spice blends, red chilli powder, pickles, curries.", packaging: "5 kg, 10 kg, 25 kg, 50 kg bulk export bags." },
  "Kashmiri Chilli":           { description: "Deep red, mildly spicy chilli prized for its brilliant color more than heat.", origin: "Kashmir, India", usage: "Tandoori dishes, curry bases, food coloring in masalas.", packaging: "500 g, 1 kg, 5 kg, 25 kg bags." },
  "Dry Red Chillies":          { description: "Versatile whole dried red chillies for tempering and spice blends.", origin: "Andhra Pradesh & Karnataka", usage: "Tempering, grinding into powder, chutneys, sambhar.", packaging: "500 g, 1 kg, 5 kg, 25 kg bags." },
  "Teja Chillies (With & Without Stems)": { description: "High-heat variety widely exported — used in hot sauces and spice blends globally.", origin: "Guntur, Andhra Pradesh", usage: "Hot sauces, spice blends, restaurant-grade chilli powder.", packaging: "10 kg, 25 kg, 50 kg export bags." },
  "Sannam Chillies (With & Without Stems)": { description: "Medium-heat chillies with rich red color — a popular export variety.", origin: "Andhra Pradesh", usage: "Spice blends, chilli powder, food processing.", packaging: "10 kg, 25 kg, 50 kg export bags." },
  "Gundu Chillies (Round Chilli)": { description: "Round, fat chillies with moderate heat and deep flavor.", origin: "Tamil Nadu & Andhra Pradesh", usage: "Chettinad curries, sambar, traditional South Indian cooking.", packaging: "500 g, 1 kg, 5 kg, 10 kg bags." },
  "Red Chillies Powder":       { description: "Fine-ground premium red chilli powder — vibrant color and consistent heat level.", origin: "Andhra Pradesh, India", usage: "Cooking, marinades, spice blends, seasoning.", packaging: "500 g, 1 kg, 5 kg, 25 kg bags." },
  // ── Oils ──
  "Peanut Oil":                { description: "Cold-pressed groundnut oil with a mild nutty flavor — high smoke point ideal for frying.", origin: "Rajasthan & Gujarat", usage: "Deep frying, stir-frying, salad dressings.", packaging: "1 L, 2 L, 5 L tins or bottles; 15 L, 30 L bulk tins." },
  "Coconut Oil":               { description: "Pure cold-pressed coconut oil — a South Indian kitchen staple with rich flavor.", origin: "Kerala, India", usage: "Cooking, hair & skin care, traditional South Indian recipes.", packaging: "500 ml, 1 L, 2 L, 5 L; bulk 15 L tins." },
  "Sesame Oil":                { description: "Cold-pressed sesame (gingelly) oil with a distinctive rich, nutty aroma.", origin: "Tamil Nadu & Andhra Pradesh", usage: "Tempering, marinades, pickles, South Indian rice dishes.", packaging: "200 ml, 500 ml, 1 L, 5 L bottles." },
  "Sunflower Oil":             { description: "Light, refined sunflower oil — neutral flavour suitable for all cooking styles.", origin: "India", usage: "General cooking, baking, frying, salad dressings.", packaging: "1 L, 2 L, 5 L; 15 L, 30 L bulk tins." },
  "Pure Cow Ghee":             { description: "Traditional slow-cooked clarified butter from cow milk — rich aroma and golden colour.", origin: "India", usage: "Dal, rotis, rice, sweets, Ayurvedic preparations.", packaging: "250 g, 500 g, 1 kg tins or glass jars; 5 kg, 15 kg bulk." },
  "Buffalo Ghee":              { description: "Rich, creamy clarified butter from buffalo milk — higher fat content than cow ghee.", origin: "India", usage: "Sweets, halwa, ceremonial cooking, restaurant kitchens.", packaging: "500 g, 1 kg tins; 5 kg, 15 kg bulk." },
};

const getVariantDetail = (name: string, productName: string): VariantDetail =>
  variantDetails[name] ?? {
    description: `Premium quality ${name} from our curated ${productName} selection.`,
    origin: "India",
    usage: `Best used in traditional ${productName} preparations.`,
    packaging: "Available in standard and custom bulk packaging for export.",
  };

const getVariantDesc = (name: string, productName: string): string =>
  getVariantDetail(name, productName).description;

// Hero accent colors — premium light palette
const categoryStyle = {
  "Food Essentials": {
    hero: "bg-white",
    accent: "#f59e0b",       // amber
    accentLight: "#fef3c7",
    accentText: "text-amber-500",
    accentBadge: "bg-amber-400/10 text-amber-600 border border-amber-400/20",
    buttonPrimary: "bg-gradient-to-r from-primary-600 to-primary-700 text-white",
    buttonSecondary: "border border-amber-400/40 text-amber-600 hover:bg-amber-400/5",
    cardAccent: "border-amber-400/30",
    sectionBg: "bg-[#f8fafc]",
    filterBorder: "border-gray-200 text-gray-600",
    variantBtn: "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-sm hover:shadow-md",
    breadcrumbText: "text-gray-400 hover:text-gray-900",
    descriptionText: "text-gray-500",
    heroPattern: "opacity-[0.03]",
  },
  "Home & Lifestyle": {
    hero: "bg-white",
    accent: "#818cf8",       // indigo
    accentLight: "#eef2ff",
    accentText: "text-indigo-500",
    accentBadge: "bg-indigo-400/10 text-indigo-600 border border-indigo-400/20",
    buttonPrimary: "bg-gradient-to-r from-primary-600 to-primary-700 text-white",
    buttonSecondary: "border border-indigo-400/40 text-indigo-600 hover:bg-indigo-400/5",
    cardAccent: "border-indigo-400/30",
    sectionBg: "bg-[#f8fafc]",
    filterBorder: "border-gray-200 text-gray-600",
    variantBtn: "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-sm hover:shadow-md",
    breadcrumbText: "text-gray-400 hover:text-gray-900",
    descriptionText: "text-gray-500",
    heroPattern: "opacity-[0.03]",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

export const ProductDetailPage = ({ product }: Props) => {
  const router = useRouter();
  const style = categoryStyle[product.mainCategory];
  const [searchTerm, setSearchTerm] = useState("");
  const [activeVariant, setActiveVariant] = useState<Variant | null>(null);

  const filteredVariants = (product.variants || []).filter((v) =>
    v.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO SECION (Full-Width Image) ─── */}
      <div className="relative flex flex-col pt-20 bg-white overflow-hidden">
        {/* Full-width Product Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-[25vh] md:h-[45vh] relative bg-gray-50 flex-shrink-0"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        {/* Text Content Below Image */}
        <div className="relative z-10 container mx-auto px-6 pt-4 pb-10 md:pt-6 md:pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Badge */}
            <span
              className={`inline-block text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-6 ${style.accentBadge}`}
            >
              {product.mainCategory}
            </span>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-none">
              {product.name}
            </h1>
            
            <div className={`h-1.5 w-24 mx-auto mb-6 rounded-full ${style.hero === 'bg-white' ? (product.mainCategory === 'Food Essentials' ? 'bg-amber-400' : 'bg-indigo-400') : 'bg-gray-300'}`} />

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              {product.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/contact-us")}
                className={`${style.buttonPrimary} px-10 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg active:scale-95`}
              >
                Request a Quote
              </button>
              <a
                href={`https://calendly.com/mibindustriesindia/30min?product=${encodeURIComponent(product.slug)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${style.buttonSecondary} px-10 py-3.5 rounded-xl font-bold text-sm transition-all bg-white active:scale-95`}
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ───── VARIANT GRID ───── */}
      {product.variants && product.variants.length > 0 && (
        <div className={`${style.sectionBg} py-14`}>
          <div className="container mx-auto px-6 max-w-7xl">
            {/* Header row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-1">Premium Varieties</h2>
                <p className="text-gray-400 text-sm">Cultivated with care, processed with precision.</p>
              </div>
            </div>

            {/* Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredVariants.map((variant, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-56 bg-[#f8fafc] flex items-center justify-center p-6 overflow-hidden border-b border-gray-50">
                    <Image
                      src={variant.image || product.image}
                      alt={variant.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1.5 leading-snug">{variant.name}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">
                      {variant.description || getVariantDesc(variant.name, product.name)}
                    </p>
                    <button
                      onClick={() => setActiveVariant(variant)}
                      className={`w-full ${style.variantBtn} py-2.5 px-4 rounded-xl text-xs font-semibold transition-all`}
                    >
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredVariants.length === 0 && (
              <div className="text-center py-20 text-gray-400">
                <p className="text-lg mb-3">No varieties match &ldquo;{searchTerm}&rdquo;</p>
                <button onClick={() => setSearchTerm("")} className="text-sm underline">
                  Clear
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ───── SIMILAR PRODUCTS ───── */}
      <div className="bg-gray-50 py-20 relative overflow-hidden border-t border-gray-100">
        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">Similar Products</h2>
              <p className="text-gray-500 text-sm font-medium">Explore related items in {product.mainCategory}.</p>
            </div>
            <button
              onClick={() => router.push("/products")}
              className="hidden md:block border border-gray-200 text-gray-500 px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-100 hover:text-gray-900 transition-all text-sm"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts
              .filter(p => p.mainCategory === product.mainCategory && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <div 
                  key={relatedProduct.id}
                  onClick={() => router.push(`/products/${relatedProduct.slug}`)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer"
                >
                  <div className="relative h-48 bg-[#f8fafc] flex items-center justify-center p-6 overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500 max-h-40 my-auto"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1 text-center">
                    <h3 className="font-bold text-gray-900 mb-1 truncate">{relatedProduct.name}</h3>
                    <p className="text-xs text-gray-500 mb-4 line-clamp-2">{relatedProduct.description}</p>
                    <div className="mt-auto">
                       <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${style.accentBadge}`}>
                         View Details
                       </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <button
              onClick={() => router.push("/products")}
              className="border border-gray-200 text-gray-500 px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-100 hover:text-gray-900 transition-all text-sm w-full"
            >
              View All
            </button>
          </div>
        </div>
      </div>

      {/* ───── VARIANT DETAIL MODAL ───── */}
      <AnimatePresence>
        {activeVariant && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVariant(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Card */}
            <motion.div
              className="relative bg-white rounded-3xl overflow-hidden max-w-5xl w-full shadow-2xl flex flex-col md:flex-row h-auto max-h-[90vh]"
              initial={{ scale: 0.95, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 24, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Section - Light background and NO dark overlays for maximum clarity */}
              <div className="relative w-full md:w-1/2 min-h-[300px] md:h-auto bg-[#f8fafc] flex items-center justify-center p-8 lg:p-12">
                <div className="relative w-full h-full min-h-[300px]">
                  <Image 
                    src={activeVariant.image || product.image} 
                    alt={activeVariant.name} 
                    fill 
                    className="object-contain drop-shadow-xl" 
                    priority
                  />
                </div>
                
                {/* Close (Mobile Only) */}
                <button
                  onClick={() => setActiveVariant(null)}
                  className="md:hidden absolute top-4 right-4 w-9 h-9 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center text-gray-500 transition-colors z-20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Name overlay */}
                <div className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-widest text-gray-400 bg-white/80 px-4 py-1.5 rounded-full shadow-sm">
                  {product.mainCategory}
                </div>
              </div>

              {/* Body Section */}
              <div className="w-full md:w-1/2 p-7 lg:p-10 overflow-y-auto flex flex-col bg-white">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-1 leading-tight">{activeVariant.name}</h2>
                    {/* Collection tag */}
                    <p className="text-xs text-gray-400 flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Part of <span className="font-semibold text-gray-600 ml-1">{product.name}</span>
                    </p>
                  </div>
                  
                  {/* Close (Desktop) */}
                  <button
                    onClick={() => setActiveVariant(null)}
                    className="hidden md:flex w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full items-center justify-center text-gray-400 hover:text-gray-600 transition-all border border-gray-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="h-px w-12 bg-gray-200 mb-8" />

                <p className="text-gray-500 leading-relaxed text-base mb-8">
                  {activeVariant?.description || getVariantDetail(activeVariant?.name || "", product.name).description}
                </p>

                {/* Info grid */}
                <div className="space-y-4 mb-10">
                  {[
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                        </svg>
                      ),
                      label: "Origin",
                      value: getVariantDetail(activeVariant?.name || "", product.name).origin,
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                        </svg>
                      ),
                      label: "Best Used For",
                      value: getVariantDetail(activeVariant?.name || "", product.name).usage,
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"/>
                        </svg>
                      ),
                      label: "Packaging",
                      value: getVariantDetail(activeVariant?.name || "", product.name).packaging,
                    },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className="flex gap-4 p-4 bg-[#f8fafc] rounded-2xl group transition-colors hover:bg-gray-100">
                      <div className="text-gray-400 mt-0.5 flex-shrink-0">{icon}</div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{label}</p>
                        <p className="text-sm text-gray-700 leading-snug font-medium">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto pt-4">
                  <button
                    onClick={() => { setActiveVariant(null); router.push("/contact-us"); }}
                    className={`flex-1 ${style.buttonPrimary} py-4 rounded-2xl text-sm font-bold transition-all shadow-md active:scale-95`}
                  >
                    Request Quote
                  </button>
                  <a
                    href={`https://calendly.com/mibindustriesindia/30min?product=${encodeURIComponent(activeVariant?.name || "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-gray-100 text-gray-600 py-4 rounded-2xl text-sm font-bold hover:bg-gray-50 transition-all text-center active:scale-95"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
