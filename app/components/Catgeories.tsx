"use client";

import { products } from "../masters/products";
import ProductCard from "./ui/ProductCard";

type Props = {
  slug: string;
};

const Category = ({ slug }: Props) => {
  const filteredProducts = products.filter(
    (product) => product.slug === slug
  );

  return (
    <>
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.slug}
          title={product.name}
          description={product.description}
          image={product.image}
          variant="products"
        />
      ))}
    </>
  );
};

export { Category };