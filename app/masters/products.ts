//this is to make array of products:

type Variant = {
  name: string;
  packs: number[];
};

type Product = {
  id: number;
  image?: string;
  name: string;
  variants?: Variant[];
  slug: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Steel",
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
    slug: "steel",
    description: "High-quality steel products.",
  },
  {
    id: 2,
    name: "Plastic",
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
    slug: "plastic",
    description: "Durable plastic products.",
  },
  {
    id: 3,
    name: "Cement",
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
    slug: "cement",
    description: "Premium cement products.",
  },
  {
    id: 4,
    name: "Timber",
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
    slug: "timber",
    description: "Sustainable timber solutions.",
  },
  {
    id: 5,
    name: "Glass",
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
    slug: "glass",
    description: "Premium glass materials.",
  },
  {
    id: 6,
    name: "Iron",
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
    slug: "iron",
    description: "Reliable iron products.",
  },
];
