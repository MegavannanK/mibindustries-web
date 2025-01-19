//this is to make array of products:

import { CLOUDINARY_BASE_URL } from "./cloudinary";

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
        name: "Carbon Steel",
        packs: [10, 20, 50],
      },
      {
        name: "Alloy Steel",
        packs: [15, 30, 60],
      },
    ],
    slug: "Rice",
    description: "High-quality steel products.",
    image: `${CLOUDINARY_BASE_URL}/v1737311760/MIB-website/Homepage/Products/pjo8xfdpzkauayipda9v.png`,
  },
  {
    id: 2,
    name: "Red chillies",
    variants: [
      {
        name: "Polyethylene",
        packs: [5, 10, 25],
      },
      {
        name: "Polypropylene",
        packs: [8, 16, 32],
      },
    ],
    slug: "red-chillies",
    description: "Durable plastic products.",
    image: `${CLOUDINARY_BASE_URL}/v1737311763/MIB-website/Homepage/Products/vfsnl7s6rdzxowbivyxc.png`,
  },
  {
    id: 3,
    name: "Urid dhall / dhalls",
    variants: [
      {
        name: "Portland Cement",
        packs: [50, 100, 200],
      },
      {
        name: "White Cement",
        packs: [25, 50, 75],
      },
    ],
    slug: "urid-dhall",
    description: "Premium cement products.",
    image: `https://res.cloudinary.com/dd7bw6igp/image/upload/v1737313818/MIB-website/Homepage/Products/bxzhd3s4zbsbqpqf09a6.jpg`,
  },
  {
    id: 4,
    name: "Spices",
    variants: [
      {
        name: "Softwood",
        packs: [10, 20, 30],
      },
      {
        name: "Hardwood",
        packs: [15, 25, 35],
      },
    ],
    slug: "spices",
    description: "Sustainable timber solutions.",
    image: `${CLOUDINARY_BASE_URL}/v1737311761/MIB-website/Homepage/Products/tdhmeimhzyhlniqqm8st.jpg`,
  },
  {
    id: 5,
    name: "Pooja items",
    variants: [
      {
        name: "Tempered Glass",
        packs: [5, 10, 15],
      },
      {
        name: "Laminated Glass",
        packs: [7, 14, 21],
      },
    ],
    slug: "pooja-items",
    description: "Premium glass materials.",
    image: `${CLOUDINARY_BASE_URL}/v1737311763/MIB-website/Homepage/Products/vfsnl7s6rdzxowbivyxc.png`,
  },
  {
    id: 6,
    name: "Oil",
    variants: [
      {
        name: "Wrought Iron",
        packs: [50, 100, 150],
      },
      {
        name: "Cast Iron",
        packs: [75, 125, 175],
      },
    ],
    slug: "oil",
    description: "Reliable iron products.",
    image: `${CLOUDINARY_BASE_URL}/v1737311763/MIB-website/Homepage/Products/iee5javiettgkgpem4xm.jpg`,
  },
];
