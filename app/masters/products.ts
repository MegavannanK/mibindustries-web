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
    // image: `${CLOUDINARY_BASE_URL}/v1737311760/MIB-website/Homepage/Products/pjo8xfdpzkauayipda9v.png`,
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/v1748661250/MIB-website/Homepage/Products/wnoc8vv2x9l6v2vj3nmh.png",
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
    // image: `${CLOUDINARY_BASE_URL}/v1737311763/MIB-website/Homepage/Products/vfsnl7s6rdzxowbivyxc.png`,
    image:"https://res.cloudinary.com/dd7bw6igp/image/upload/v1748661250/MIB-website/Homepage/Products/tgh2fpy49jlcnx1aux4o.png",
  },
  {
    id: 3,
    name: "Indian Spices",
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
    slug: "Indian Spices",
    description: "Special Aromatic spices.",
    // image: `${CLOUDINARY_BASE_URL}/v1742585491/MIB-website/Homepage/Products/n4m0owzntgvcphjnkd2g.png`,
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/v1748661250/MIB-website/Homepage/Products/qc0can5un6uve6qxl64o.png",
  },
  {
    id: 4,
    name: "Lentils & Pulses",
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
    slug: "lentils-pulses",
    description: "Premium lentils for good health",
    // image: `${CLOUDINARY_BASE_URL}/v1742586696/MIB-website/Homepage/Products/nsm2uzgf6nq5ppf7qohe.png`,
    image: " https://res.cloudinary.com/dd7bw6igp/image/upload/v1748661250/MIB-website/Homepage/Products/j7mkfhesydtv5kzum94a.png",
    
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
    description: "Traditional & Holy Pooja products.",
    // image: `${CLOUDINARY_BASE_URL}/v1742585847/MIB-website/Homepage/Products/wcnurzsoviynizrrnki2.jpg`,
    image: "https://res.cloudinary.com/dd7bw6igp/image/upload/v1748661251/MIB-website/Homepage/Products/ue9lfva8gnvnjvg4dxqh.png",
  },
  {
    id: 6,
    name: "Cooking Oil",
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
    // image: `${CLOUDINARY_BASE_URL}/v1737311763/MIB-website/Homepage/Products/iee5javiettgkgpem4xm.jpg`,
    image:" https://res.cloudinary.com/dd7bw6igp/image/upload/v1748661250/MIB-website/Homepage/Products/h0ucpr6cqrlnjcwmlk4d.png",
  },
];
