"use client";

import { Category } from "@/app/components/Catgeories";
import Layout from "@/app/components/Layout";
import { useParams } from "next/navigation";
import { ModifiedBreadCrumb } from "@/app/components/ui/ModifiedBreadCrumb";
import { products } from "@/app/masters/products";

const ProductDetails = () => {
  const params = useParams();
  const slug = params.slug;
  const selectedProduct = products.find((p) => p.slug === slug);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary-100 via-primary-200 to-primary-700">
      <div className="p-6 w-11/12 mx-auto mt-[5rem] relative">

        <ModifiedBreadCrumb text={selectedProduct?.name} />

        {/* Category Component */}
        <Category />

      </div>
    </div>
  </Layout>
  );
};

export default ProductDetails;
