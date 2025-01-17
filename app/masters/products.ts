//this is to make array of products:

type Variant = {
  name: string;
  packs: number[];
};

type Product = {
  name: string;
  variants: Variant[];
  slug: string;
};

export const products: Product[] = [
  {
    name: "Rice",
    variants: [
      {
        name: "Basmati",
        packs: [1, 2, 3],
      },
      {
        name: "Sona Masuri",
        packs: [4, 5, 6],
      },
      {
        name: "Ponni",
        packs: [7, 8, 9],
      },
    ],
    slug: "rice",
  },
  {
    name: "Red Chilli",
    variants: [
      {
        name: "Byadgi",
        packs: [4, 5, 6],
      },
    ],
    slug: "red-chilli",
  },
];
