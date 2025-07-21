//this is to make array of products:
// import { CLOUDINARY_BASE_URL } from "./cloudinary";
type Variant = {
  name: string;
  packs: number[];
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
      {
        name: "Ponni Raw",
        packs: [10, 20, 50],
      },
      {
        name: "Basmati",
        packs: [15, 30, 60],
      },
      {
        name: "Sona Masoori",
        packs: [15, 30, 60],
      },
      {
        name: "Ponni Parboiled Rice",
        packs: [15, 30, 60],
      },
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
      {
        name: "Cloves",
        packs: [5, 10, 25],
      },
      {
        name: "Cinnamon",
        packs: [8, 16, 32],
      },
      {
        name: "Cardamom",
        packs: [8, 16, 32],
      },
            {
        name: "Cardamom",
        packs: [8, 16, 32],
      },
    ],
    slug: "Indian Spices",
    description: "Aromatic & Authentic",
    // image: `${CLOUDINARY_BASE_URL}/v1737311763/MIB-website/Homepage/Products/vfsnl7s6rdzxowbivyxc.png`,
    // image:"https://res.cloudinary.com/dd7bw6igp/image/upload/v1748661250/MIB-website/Homepage/Products/tgh2fpy49jlcnx1aux4o.png",
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752256127/Spices_product_img_gs0qes.png",
  },
  {
    id: 3,
    name: "Red chillies",
    variants: [
      {
        name: "Dry Red Chillies",
        packs: [50, 100, 200],
      },
      {
        name: "Red Chilli Powder",
        packs: [25, 50, 75],
      },
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
      {
        name: "Peanut Oil",
        packs: [50, 100, 150],
      },
      {
        name: "Coconut Oil",
        packs: [75, 125, 175],
      },
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
      {
        name: "Urad Dal",
        packs: [10, 20, 30],
      },
      {
        name: "Toor Daal",
        packs: [15, 25, 35],
      },
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
      {
        name: "Butter Murukku",
        packs: [5, 10, 15],
      },
      {
        name: "Madras Mixture",
        packs: [7, 14, 21],
      },
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
      {
        name: "Kitchen Towels",
        packs: [5, 10, 15],
      },
      {
        name: "Stationary Items",
        packs: [7, 14, 21],
      },
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
      {
        name: "Cashews",
        packs: [5, 10, 15],
      },
      {
        name: "Almonds",
        packs: [7, 14, 21],
      },
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
      {
        name: "Diya",
        packs: [5, 10, 15],
      },
      {
        name: "Incense Sticks",
        packs: [7, 14, 21],
      },
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
      {
        name: "Idols",
        packs: [5, 10, 15],
      },
      {
        name: "Brass Pooja Items",
        packs: [7, 14, 21],
      },
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
      {
        name: "Idli Pot",
        packs: [5, 10, 15],
      },
      {
        name: "All Cooking Utensils",
        packs: [7, 14, 21],
      },
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
      {
        name: "Kitchen Towels",
        packs: [5, 10, 15],
      },
      {
        name: "Stationary Items",
        packs: [7, 14, 21],
      },
    ],
    slug: "essentials",
    description: "Everyday Household Needs",
    // image: `${CLOUDINARY_BASE_URL}/v1742585847/MIB-website/Homepage/Products/wcnurzsoviynizrrnki2.jpg`,
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/w_450,h_340,c_fill,f_auto,q_auto:good/v1752260408/daily_need_product_img_bzgp6z.png",
  },


];
