import Layout from "@/app/components/Layout";
import { products } from "@/app/masters/products";
import { ProductDetailPage } from "@/app/ProductsPage/ProductDetailPage";
import { notFound } from "next/navigation";

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
  const { slug } = await params;

  const selectedProduct = products.find((p) => p.slug === slug);

  if (!selectedProduct) {
    notFound();
  }

  return (
    <Layout>
      <ProductDetailPage product={selectedProduct} />
    </Layout>
  );
}