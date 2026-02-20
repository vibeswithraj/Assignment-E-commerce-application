export const dynamic = 'force-dynamic';

import Layout from '@/components/layout/Layout';
import { fetchProductById, fetchProducts } from '@/lib/api';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetail from './ProductDetail';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id } = await params;
    const product = await fetchProductById(Number(id));
    return {
      title: product.title,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        images: [product.thumbnail],
      },
    };
  } catch {
    return { title: 'Product Not Found' };
  }
}

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const data = await fetchProducts({ limit: 20 });
    return data.products.map((p) => ({ id: String(p.id) }));
  } catch {
    return [];
  }
}

const page = async ({ params }: Props) => {
  const { id } = await params;
  const productId = Number(id);

  if (isNaN(productId)) {
    notFound();
  }

  let product;
  try {
    product = await fetchProductById(productId);
  } catch {
    notFound();
  }

  return (
    <Layout>
      <ProductDetail product={product} />
    </Layout>
  );
};

export default page;
