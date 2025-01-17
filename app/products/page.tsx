"use client";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { ProductPage } from "../components/Products";
import Layout from "../components/Layout";
import pebbleImage from "@/app/assets/images/pebble.png";
import { ModifiedBreadCrumb } from "../components/ui/ModifiedBreadCrumb";

const ProductsView = () => {
  return (
    <Layout>
      <div className="p-6 w-11/12 mx-auto mt-[5rem] relative">
        {/* Back button */}
        <ModifiedBreadCrumb text="Products" />

        {/* Product Component */}
        <ProductPage />

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

export default ProductsView;
