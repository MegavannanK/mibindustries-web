"use client";

import { Category } from "@/app/components/Catgeories";
import Layout from "@/app/components/Layout";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useParams } from "next/navigation";
import pebbleImage from "@/app/assets/images/pebble.png";

const ProductDetails = () => {
  const params = useParams();
  const slug = params.slug;

  return (
    <Layout>
      <div className="p-6 w-11/12 mx-auto mt-[5rem] relative">
        {/* Back button */}
        <div className="flex gap-20 items-center py-5">
          <div className="bg-primary-900 px-8 py-1 rounded-lg drop-shadow-primary cursor-pointer">
            <ArrowLeftIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-title-4 font-semibold text-primary-900">
            {slug?.toString().toLocaleUpperCase()}
          </h1>
        </div>

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
