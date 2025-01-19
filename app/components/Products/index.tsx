import { products } from "@/app/masters/products";
import { ProductCategoryCard } from "../ui/CategoriesCard";
import { useRouter } from "next/navigation";
import ProductCard from "../ui/ProductCard";

export const ProductPage = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((product, index) => (
        <ProductCard
          image={product.image}
          key={index}
          title={product.name}
          onClick={() => router.push(`/products/${product.slug}`)}
          showDescription={false}
        />
      ))}
    </div>
  );
};
