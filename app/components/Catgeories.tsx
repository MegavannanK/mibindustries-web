import { useParams } from "next/navigation";
import { products } from "../masters/products";
import { ProductCategoryCard } from "./ui/CategoriesCard";

export const Category = () => {
  const params = useParams();
  const slug = params.slug;
  const categoryData = products.find(
    (product) => product.slug === slug
  )?.variants;

  const imageUrl = products.find((product) => product.slug === slug)?.image;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {categoryData?.map((category, index) => (
        <ProductCategoryCard
          imageUrl={imageUrl}
          key={index}
          name={category.name}
          packs={category.packs}
        />
      ))}
    </div>
  );
};
