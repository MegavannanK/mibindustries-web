import { Category } from "@/app/components/Catgeories";
import Layout from "@/app/components/Layout";
import { ModifiedBreadCrumb } from "@/app/components/ui/ModifiedBreadCrumb";
import { products } from "@/app/masters/products";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 👇 THIS IS THE IMPORTANT FIX
  const { slug } = await params;

  const selectedProduct = products.find(
    (p) => p.slug === slug
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary-100 via-primary-200 to-primary-700">
        <div className="p-6 w-11/12 mx-auto mt-[5rem] relative">
          <ModifiedBreadCrumb text={selectedProduct?.name} />
          <Category slug={slug} />
        </div>
      </div>
    </Layout>
  );
}