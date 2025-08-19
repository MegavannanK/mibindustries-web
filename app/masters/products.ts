//this is to make array of products:
// import { CLOUDINARY_BASE_URL } from "./cloudinary";
type Variant = {
  name: string;
};

type Product = {
  id: number;
  image: string;
  name: string;
  variants?: Variant[];
  slug: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Rice",
    variants: [
  { name: "Basmati Rice" },
  { name: "Ponni Raw Rice" },
  { name: "Ponni Parboiled Rice" },
  { name: "Sona Masoori Rice" },
  { name: "DIA Rice (Low Glycemic for Diabeties)" },
  { name: "Plakkad Matta Rice" },
  { name: "IR 64 Rice" },
  { name: "IR 8 Rice" }
    ],
    slug: "Rice",
    description: "Premium Grain Selection.",
    // image: `${CLOUDINARY_BASE_URL}/v1737311760/MIB-website/Homepage/Products/pjo8xfdpzkauayipda9v.png`,
    // image: "https://res.cloudinary.com/dd7bw6igp/image/upload/v1748661250/MIB-website/Homepage/Products/wnoc8vv2x9l6v2vj3nmh.png",
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752256247/rice_product_img_atnfyj.png",
  },
  {
    id: 2,
    name: "Indian Spices",
    variants: [
  { name: "Cloves" },
  { name: "Cinnamon" },
  { name: "Black Cardamom" },
  { name: "Green Cardamom" },
  { name: "Bay Leaf / Briyani Leaf" },
  { name: "Star Anise" },
  { name: "Coriander Seeds" },
  { name: "Black Pepper (Whole & Fine Ground)" },
  { name: "Cumin Seeds" },
  { name: "Fennel Seeds" },
  { name: "Fenugreek Seeds" },
  { name: "Mustard Seeds" },
  { name: "Turmeric" },
  { name: "Asafoetida (Hing)" },
  { name: "Ginger" }
    ],
    slug: "Indian Spices",
    description: "Aromatic & Authentic",
    // image: `${CLOUDINARY_BASE_URL}/v1737311763/MIB-website/Homepage/Products/vfsnl7s6rdzxowbivyxc.png`,
    // image:"https://res.cloudinary.com/dd7bw6igp/image/upload/v1748661250/MIB-website/Homepage/Products/tgh2fpy49jlcnx1aux4o.png",
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752256127/Spices_product_img_gs0qes.png",
  },
  {
    id: 3,
    name: "Red Chillies",
    variants: [
  { name: "Guntur Chillies" },
  { name: "Kashmiri Chilli" },
  { name: "Dry Red Chillies" },
  { name: "Teja Chillies (With & Without Stems)" },
  { name: "Sannam Chillies (With & Without Stems)" },
  { name: "Gundu Chillies (Round Chilli)" },
  { name: "Red Chillies Powder" }
    ],
    slug: "red-chillies",
    description: "Spicy and flavorful red chillies.",
    // image: `${CLOUDINARY_BASE_URL}/v1742585491/MIB-website/Homepage/Products/n4m0owzntgvcphjnkd2g.png`,
    image:"https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752256206/RedChilli_product_img_uam3un.png",
  },
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
    // image: `${CLOUDINARY_BASE_URL}/v1737311763/MIB-website/Homepage/Products/iee5javiettgkgpem4xm.jpg`,
    image:"https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752256173/Oil_product_img_e6smfw.png",
  },
  {
    id: 5,
    name: "Lentils & Pulses",
    variants: [
  { name: "Urad Dal" },
  { name: "Toor Daal" },
  { name: "Gram Daal" },
  { name: "Fried Gram Daal" },
  { name: "Moong Daal" },
  { name: "Green Gram Daal" },
  { name: "Kidney Peas" },
  { name: "Black Gram Peas" },
  { name: "Black Channa" },
  { name: "White Channa" }
    ],
    slug: "lentils-pulses",
    description: "Wholesome Protein",
    //image: `${CLOUDINARY_BASE_URL}/v1742586696/MIB-website/Homepage/Products/nsm2uzgf6nq5ppf7qohe.png`,
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752256144/Lentils_product_img_p8dv5z.png",
    

  },
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
    // image: `${CLOUDINARY_BASE_URL}/v1742585847/MIB-website/Homepage/Products/wcnurzsoviynizrrnki2.jpg`,
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752256200/IndainSnacks_product_img_ihevtu.png",
  },
     {
    id: 7,
    name: "Jaggery",
    variants: [
  { name: "Jaggery Cubes" },
  { name: "Jaggery Powder" },
  { name: "Jaggery Slaps/Blocks" },
  { name: "Sugarcane Jaggery" },
  { name: "Flavored Jaggery" },
  { name: "Date Palm Jaggery" },
  { name: "Coconut Palm Jaggery" },
  { name: "Liquid Jaggery (Syrup)" }
    ],
    slug: "essentials",
    description: "Natural Sweet Goodness",
    // image: `${CLOUDINARY_BASE_URL}/v1742585847/MIB-website/Homepage/Products/wcnurzsoviynizrrnki2.jpg`,
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752263406/jaggery_product_image.png",
  },
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
    // image: `${CLOUDINARY_BASE_URL}/v1742585847/MIB-website/Homepage/Products/wcnurzsoviynizrrnki2.jpg`,
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752260415/fruits_nuts_product_img_kju5au.png",
  },

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
    // image: `${CLOUDINARY_BASE_URL}/v1742585847/MIB-website/Homepage/Products/wcnurzsoviynizrrnki2.jpg`,
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752256312/poojaItem_products_img_mh6uzh.png",
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
    // image: `${CLOUDINARY_BASE_URL}/v1742585847/MIB-website/Homepage/Products/wcnurzsoviynizrrnki2.jpg`,
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752256185/BrassItem_product_img_nahszx.png",
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
    // image: `${CLOUDINARY_BASE_URL}/v1742585847/MIB-website/Homepage/Products/wcnurzsoviynizrrnki2.jpg`,
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752256195/Cookware_product_img_mas12k.png",
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
    // image: `${CLOUDINARY_BASE_URL}/v1742585847/MIB-website/Homepage/Products/wcnurzsoviynizrrnki2.jpg`,
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752260408/daily_need_product_img_bzgp6z.png",
  },


];
