import { products } from "@/app/masters/products";
import { useRouter } from "next/navigation";
import ProductCard from "../ui/ProductCard";

export const ProductPage = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard
          image={product.image}
          key={index}
          title={product.name}
          onClick={() => router.push(`/products/${product.slug}`)}
          showDescription={false}
          variant="products"
        />
      ))}
    </div>
  );
};
