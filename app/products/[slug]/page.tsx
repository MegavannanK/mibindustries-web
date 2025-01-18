"use client";

import { Category } from "@/app/components/Catgeories";
import Layout from "@/app/components/Layout";
import { useParams } from "next/navigation";
import pebbleImage from "@/app/assets/images/pebble.png";
import { ModifiedBreadCrumb } from "@/app/components/ui/ModifiedBreadCrumb";
import { products } from "@/app/masters/products";

const ProductDetails = () => {
  const params = useParams();
  const slug = params.slug;
  const selectedProduct = products.find((p) => p.slug === slug);

  return (
    <Layout>
      <div className="p-6 w-11/12 mx-auto mt-[5rem] relative">
        {/* Back button */}

        <ModifiedBreadCrumb text={selectedProduct?.name} />

        {/* Category Component */}
        <Category />

        {/* Background Images */}
        <div className="absolute inset-0 -z-50 -left-[18rem] -top-[35rem]">
          <img
            src={pebbleImage.src}
            alt="Pebble"
            className="object-cover rounded-lg blur-xl"
          />
        </div>
        <div className="absolute inset-0 -z-50 left-[75vw] top-[55vh]">
          <img
            src={pebbleImage.src}
            alt="Pebble"
            className="object-cover rounded-lg blur-md"
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
