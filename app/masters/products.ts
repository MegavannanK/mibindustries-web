//this is to make array of products:
// import { CLOUDINARY_BASE_URL } from "./cloudinary";
type Variant = {
  name: string;
  image?: string;
  description?: string;
};

type Product = {
  id: number;
  image: string;
  homeImage?: string;  // Optional image used only on homepage product cards
  name: string;
  variants?: Variant[];
  slug: string;
  description: string;
  mainCategory: "Food Essentials" | "Home & Lifestyle";
};

export const products: Product[] = [
  {
    id: 1,
    name: "Rice",
    variants: [
      {
        name: "Ponni Parboiled Rice",
        image: "/assets/images/rice/Ponni_Parboiled_Rice.png",
        description: "Firm, non-sticky rice for daily meals."
      },
      {
        name: "Ponni Raw Rice",
        image: "/assets/images/rice/Ponni_Raw_Rice.png",
        description: "Soft and light for everyday cooking."
      },
      {
        name: "Andhra Sona Masoori Steamed Rice",
        image: "/assets/images/rice/Andhra_Sona_Masoori_Steamed_Rice.png",
        description: "Lightweight, aromatic, non-sticky rice."
      },
      {
        name: "Andhra Sona Masoori Raw Rice",
        image: "/assets/images/rice/Andhra_Sona_Masoori_Raw_Rice.png",
        description: "Soft, fine rice with easy digestion."
      },
      {
        name: "Idli Rice",
        image: "/assets/images/rice/Idli_Rice.png",
        description: "Ideal for soft idlis and crispy dosas."
      },
      {
        name: "Palakkad Matta Rice",
        image: "/assets/images/rice/Palakad_Matta_Rice.png",
        description: "Nutritious Kerala red rice."
      },
      {
        name: "Jeeraga Samba Dindugal Biriyani Rice",
        image: "/assets/images/rice/Jeeraga_Samba_Dindugal_Biriyani_Rice.png",
        description: "Aromatic small grain for biryani."
      },
      {
        name: "Basmati Long Grain",
        image: "/assets/images/rice/Basmati_Long_Grain_Rice.png",
        description: "Long, aromatic grains with great elongation."
      },
      {
        name: "Basmati Short Grain Rice",
        image: "/assets/images/rice/Basmati_Short_Grain_Rice.png",
        description: "Fragrant, soft, slightly sticky rice."
      },
      {
        name: "DIA Rice",
        image: "/assets/images/rice/DIA_Rice.png",
        description: "Low glycemic rice ideal for diabetic-friendly diets."
      },
      {
        name: "IR64 Parboiled Rice",
        image: "/assets/images/rice/IR64_Parboiled_Rice.png",
        description: "Durable rice with consistent cooking."
      },
      {
        name: "IR64 Raw Rice",
        image: "/assets/images/rice/IR64_Raw_Rice.png",
        description: "Affordable, versatile everyday rice"
      },
      {
        name: "Karuppu Gavuni Rice",
        image: "/assets/images/rice/Karuppu_Gavuni_Rice.png",
        description: "Nutritious black rice rich in antioxidants."
      },
      {
        name: "Broken Rice",
        image: "/assets/images/rice/Broken_Rice.png",
        description: "Cost-effective for processing and bulk use."
      }
    ],
    slug: "Rice",
    description: "Finest Indian rice varieties with superior taste and quality. Carefully processed to meet global standards and expectations.",
    image: "/assets/images/rice/Rice_Banner.png",
    homeImage: "/assets/images/home_products/RICE.png",
    mainCategory: "Food Essentials",
  },
  {
    id: 2,
    name: "Whole Spices",
    variants: [
      { name: "Turmeric", image: "/assets/images/spices/Turmeric.png" },
      { name: "Coriander Seeds", image: "/assets/images/spices/Coriander.png" },
      { name: "Cloves", image: "/assets/images/spices/Cloves.png" },
      { name: "Cinnamon", image: "/assets/images/spices/Cinnamon.png" },
      // { name: "Black Cardamom", image: "/assets/images/spices/Cardamom.png" },
      { name: "Green Cardamom", image: "/assets/images/spices/Cardamom.png" },
      // { name: "Bay Leaf / Briyani Leaf" },
      { name: "Star Anise", image: "/assets/images/spices/Star_Anise.png" },
      { name: "Black Pepper (Whole & Fine Ground)", image: "/assets/images/spices/Black_Pepper.png" },
      { name: "Cumin Seeds", image: "/assets/images/spices/Cumin_Seeds.png" },
      { name: "Fennel Seeds", image: "/assets/images/spices/Fennel_Seeds.png" },
      { name: "Fenugreek Seeds", image: "/assets/images/spices/Fenugreek.png" },
      { name: "Mustard Seeds", image: "/assets/images/spices/Mustard.png" },
      // { name: "Asafoetida (Hing)" },
      // { name: "Ginger" }
    ],
    slug: "whole-spices",
    description: "Aromatic & Authentic",
    image: "/assets/images/spices/Whole_Spices_Banner.png",
    homeImage: "/assets/images/home_products/WHOLE SPICES.png",
    mainCategory: "Food Essentials",
  },
  /*
  {
    id: 18,
    name: "Spice Powders",
    variants: [
      { name: "Black Pepper Powder", description: "Bold, aromatic spice with a sharp kick." },
      { name: "Coriander Powder", description: "Mild, citrusy flavor for balanced seasoning." },
      { name: "Jeera (Cumin) Powder", description: "Warm, earthy spice with rich aroma." },
      { name: "Red Chilli Powder", description: "Fiery heat with vibrant color." },
      { name: "Turmeric Powder", description: "Pure, golden spice with natural goodness." },
    ],
    slug: "spice-powders",
    description: "Authentic Indian Spices, Rich in Aroma & Flavor",
    image: "/assets/images/spices/Whole_Spices_Banner.png",
    homeImage: "/assets/images/home_products/WHOLE SPICES.png",
    mainCategory: "Food Essentials",
  },
  */
  {
    id: 3,
    name: "Dry Chillies",
    variants: [
      { 
        name: "Kashmiri Chilli", 
        image: "/assets/images/chillies/Kashmiri_Chilli.png",
        description: "Vibrant red colour with mild heat, perfect for rich curries." 
      },
      { 
        name: "Teja S17 Chilli", 
        image: "/assets/images/chillies/Teja_S17.png",
        description: "Intense pungency and strong flavour, best for spicy food lovers." 
      },
      { 
        name: "Sannam S4 Chilli", 
        image: "/assets/images/chillies/Sannam_S4.png",
        description: "High heat with deep colour, widely used for everyday cooking and exports." 
      },
      { 
        name: "Ramnad Round Chilli", 
        image: "/assets/images/chillies/Ramnad_Round_Chilli.png",
        description: "Bold aroma and balanced spice, ideal for traditional South Indian dishes." 
      },
    ],
    slug: "red-chillies",
    description: "Premium Indian chillies delivering bold heat, rich color, and authentic flavor.",
    image: "/assets/images/chillies/Dry_Chilli_Banner.png",
    homeImage: "/assets/images/home_products/DRY CHILIES.png",
    mainCategory: "Food Essentials",
  },
  /*
  {
    id: 4,
    name: "Cooking Oil",
    variants: [
      { name: "Peanut Oil" },
      { name: "Coconut Oil" },
      { name: "Sesame Oil" },
      { name: "Sunflower Oil" },
      { name: "Pure Cow Ghee" },
      { name: "Buffalo Ghee" }
    ],
    slug: "oil",
    description: "Cold-pressed cooking oil",
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752256173/Oil_product_img_e6smfw.png",
    homeImage: "/assets/images/home_products/COOKING OIL.png",
    mainCategory: "Food Essentials",
  },
  */
  {
    id: 5,
    name: "Lentils & Pulses",
    variants: [
      { 
        name: "Toor Daal", 
        image: "/assets/images/pulses/TOOR_DHAAL.png",
        description: "Classic everyday yellow lentils." 
      },
      { 
        name: "Urad Dal", 
        image: "/assets/images/pulses/URAD_DHAAL.png",
        description: "Creamy lentils for idli & dosa." 
      },
      { 
        name: "Moong Daal", 
        image: "/assets/images/pulses/MOONG_DHAAL.png",
        description: "Light and easy-to-digest lentils." 
      },
      { 
        name: "Gram Daal", 
        image: "/assets/images/pulses/GRAM_DHAAL.png",
        description: "Protein-rich split chickpeas." 
      },
      { 
        name: "Fried Gram Daal", 
        image: "/assets/images/pulses/FRIED_GRAM_DHAAL.png",
        description: "Crunchy roasted gram for snacks." 
      },
      { 
        name: "Green Gram Daal", 
        image: "/assets/images/pulses/Green_Gram.png",
        description: "Nutritious, slightly sweet lentil for salads and curries." 
      },
      { 
        name: "Masoor Daal", 
        image: "/assets/images/pulses/MASOOR_DHAAL.png",
        description: "Soft, quick-cooking red lentils." 
      },
      // { name: "Kidney Peas", image: "/assets/images/pulses/URAD_DHAAL.png" },
      // { name: "Black Gram Peas", image: "/assets/images/pulses/URAD_DHAAL.png" },
      // { name: "Black Channa", image: "/assets/images/pulses/URAD_DHAAL.png" },
      // { name: "White Channa", image: "/assets/images/pulses/URAD_DHAAL.png" }
    ],
    slug: "lentils-pulses",
    description: "Naturally Grown, Globally Delivered Pulses",
    image: "/assets/images/pulses/PULSES_BANNER.png",
    homeImage: "/assets/images/home_products/PULSES.png",
    // image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752256144/Lentils_product_img_p8dv5z.png",
    mainCategory: "Food Essentials",
  },
  /*
  {
    id: 6,
    name: "South Indian Snacks",
    variants: [
      { name: "Butter Murukku" },
      { name: "Madras Mixture" },
      { name: "Kadalai Mittai / Peanut Candy" },
      { name: "Nendhiram Chips / Kerala Bannana Chips" },
      { name: "Karasev" },
      { name: "Masala Peanuts" },
      { name: "Thattai" },
      { name: "Mixture" },
      { name: "Jackfruit Chips" },
      { name: "Bhujia" },
      { name: "Sweets & Desserts" },
      { name: "Fried & Baked Snacks - Samosa, Kachoris.." }
    ],
    slug: "indian-snacks",
    description: "Traditional Crunchy Delights",
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752256200/IndainSnacks_product_img_ihevtu.png",
    mainCategory: "Food Essentials",
  },
  */
  {
    id: 7,
    name: "Jaggery",
    variants: [
      { name: "Jaggery Blocks", image: "/assets/images/jaggery/Jaggery_Blocks.png", description: "Natural sweetener with rich, earthy flavor." },
      { name: "Jaggery Powder", image: "/assets/images/jaggery/Jaggery_Powder.png", description: "Fine, easy-to-use traditional sweetness." },
      { name: "Palm Jaggery Blocks", image: "/assets/images/jaggery/Palm_Jaggery_Blocks.png", description: "Mineral-rich, deep caramel sweetness." },
      { name: "Palm Jaggery Powder", image: "/assets/images/jaggery/Palm_Jaggery_Powder.png", description: "Pure palm sweetness in fine form." },
      { name: "Liquid Jaggery", image: "/assets/images/jaggery/Liquid_Jaggery.png", description: "Smooth, ready-to-pour natural sweetener." }
    ],
    slug: "jaggery",
    description: "Pure, Natural Sweetness from Traditional Jaggery",
    image: "/assets/images/jaggery/Jaggery_Banner.png",
    // image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752263406/jaggery_product_image.png",
    mainCategory: "Food Essentials",
  },
  /*
  {
    id: 8,
    name: "Dry Fruits & Nuts",
    variants: [
      { name: "Cashews" },
      { name: "Almonds" },
      { name: "Yellow Raisins" },
      { name: "Black Raisins" },
      { name: "Peanut/Groundnut with & without Shell" },
      { name: "Kashiri Hazalnut" }
    ],
    slug: "dry-fruits-nuts",
    description: "Nutritious & Handpicked",
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752260415/fruits_nuts_product_img_kju5au.png",
    mainCategory: "Food Essentials",
  },
  */
  /*
  {
    id: 13,
    name: "Indian Beverages",
    variants: [
      { name: "Filter Coffee Powder" },
      { name: "Tea Dust" },
      { name: "Health Mixes" }
    ],
    slug: "indian-beverages",
    description: "Classic tea and traditional mixes",
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752260415/fruits_nuts_product_img_kju5au.png", // Reusing image as placeholder
    mainCategory: "Food Essentials",
  },
  */
  /* 
  {
    id: 9,
    name: "Pooja Items",
    variants: [
      { name: "Thanjavur Paintings" },
      { name: "Deity Idols" },
      { name: "Diya" },
      { name: "Incense Sticks" },
      { name: "Kum-Kum" },
      { name: "Vibuthi" },
      { name: "Loban-Sambrani" },
      { name: "Rudraksha beads & malas" },
      { name: "Decorative & festive items" },
      { name: "Pooja clothing & accessories" },
      { name: "Puja thalis & utensils" }
    ],
    slug: "pooja-items",
    description: "Sacred Spiritual Essentials",
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752256312/poojaItem_products_img_mh6uzh.png",
    mainCategory: "Home & Lifestyle",
  },
  {
    id: 10,
    name: "Brass Items",
    variants: [
      { name: "Deity Idols" },
      { name: "All Brass Pooja Items" },
      { name: "Industrial Brass Items (Plumbing and Hardware)" }
    ],
    slug: "brass-items",
    description: "Heritage in Metal",
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752256185/BrassItem_product_img_nahszx.png",
    mainCategory: "Home & Lifestyle",
  },
  {
    id: 11,
    name: "Cooking Utensils",
    variants: [
      { name: "Idli Pot" },
      { name: "All Cooking Utensils" },
      { name: "Commercial-Restaurant Cookware" }
    ],
    slug: "cookwares",
    description: "Reliable Cookware Range",
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752256195/Cookware_product_img_mas12k.png",
    mainCategory: "Home & Lifestyle",
  },
  {
    id: 12,
    name: "Essentials",
    variants: [
      { name: "Home Items" },
      { name: "Kitchen Items" },
      { name: "Stationery Items" },
      { name: "Cleaning Essentials" },
      { name: "Handmade Indian Traditional Music Instruments" },
      { name: "Bharathanatiyam Accessories" }
    ],
    slug: "essentials",
    description: "Everyday Household Needs",
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752260408/daily_need_product_img_bzgp6z.png",
    mainCategory: "Home & Lifestyle",
  },
  {
    id: 14,
    name: "Apparels",
    variants: [
      { name: "Cotton Wear" },
      { name: "Traditional Dresses" },
      { name: "Sarees" }
    ],
    slug: "apparels",
    description: "Comfortable daily wear",
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752260408/daily_need_product_img_bzgp6z.png", // Reusing image as placeholder
    mainCategory: "Home & Lifestyle",
  },
  {
    id: 15,
    name: "Imitation Jewellery",
    variants: [
      { name: "Necklace Sets" },
      { name: "Bangles" },
      { name: "Earrings" }
    ],
    slug: "imitation-jewellery",
    description: "Elegant designer pieces",
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752256312/poojaItem_products_img_mh6uzh.png", // Reusing image as placeholder
    mainCategory: "Home & Lifestyle",
  },
  {
    id: 16,
    name: "Mats & Screens",
    variants: [
      { name: "Handloom Mats" },
      { name: "Window Screens" },
      { name: "Floor Mats" }
    ],
    slug: "mats-screens",
    description: "Home décor & Flooring",
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752260408/daily_need_product_img_bzgp6z.png", // Reusing image as placeholder
    mainCategory: "Home & Lifestyle",
  }
  */
];
