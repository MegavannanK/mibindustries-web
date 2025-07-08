"use client";
import { ProductPage } from "../components/Products";
import Layout from "../components/Layout";
import { ModifiedBreadCrumb } from "../components/ui/ModifiedBreadCrumb";

const ProductsView = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary-100 via-primary-200 to-primary-700">
        <div className="p-6 w-11/12 mx-auto pt-[5rem] relative">
          {/* Back button */}
          <ModifiedBreadCrumb text="Products" />
          {/* Product Component */}
          <ProductPage />
        </div>
      </div>
    </Layout>
  );
};

export default ProductsView;
