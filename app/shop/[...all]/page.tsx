import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ui/ProductCard';
import { Product, ProductsRes } from '@/types/Product';
import FilterSidebar from '../FilterSidebar';

const data1: ProductsRes = {
  limit: 0,
  skip: 0,
  total: 0,
  products: [
    {
      id: 1,
      title: 'Essence Mascara Lash Princess',
      description:
        'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
      category: 'beauty',
      price: 9.99,
      discountPercentage: 10.48,
      rating: 2.56,
      stock: 99,
      tags: ['beauty', 'mascara'],
      brand: 'Essence',
      sku: 'BEA-ESS-ESS-001',
      weight: 4,
      dimensions: {
        width: 15.14,
        height: 13.08,
        depth: 22.99,
      },
      warrantyInformation: '1 week warranty',
      shippingInformation: 'Ships in 3-5 business days',
      availabilityStatus: 'In Stock',
      reviews: [
        {
          rating: 3,
          comment: 'Would not recommend!',
          date: '2025-04-30T09:41:02.053Z',
          reviewerName: 'Eleanor Collins',
          reviewerEmail: 'eleanor.collins@x.dummyjson.com',
        },
        {
          rating: 4,
          comment: 'Very satisfied!',
          date: '2025-04-30T09:41:02.053Z',
          reviewerName: 'Lucas Gordon',
          reviewerEmail: 'lucas.gordon@x.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Highly impressed!',
          date: '2025-04-30T09:41:02.053Z',
          reviewerName: 'Eleanor Collins',
          reviewerEmail: 'eleanor.collins@x.dummyjson.com',
        },
      ],
      returnPolicy: 'No return policy',
      minimumOrderQuantity: 48,
      meta: {
        createdAt: '2025-04-30T09:41:02.053Z',
        updatedAt: '2025-04-30T09:41:02.053Z',
        barcode: '5784719087687',
        qrCode: 'https://cdn.dummyjson.com/public/qr-code.png',
      },
      images: [
        'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
      ],
      thumbnail:
        'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
    },
    {
      id: 1,
      title: 'Essence Mascara Lash Princess',
      description:
        'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
      category: 'beauty',
      price: 9.99,
      discountPercentage: 10.48,
      rating: 2.56,
      stock: 99,
      tags: ['beauty', 'mascara'],
      brand: 'Essence',
      sku: 'BEA-ESS-ESS-001',
      weight: 4,
      dimensions: {
        width: 15.14,
        height: 13.08,
        depth: 22.99,
      },
      warrantyInformation: '1 week warranty',
      shippingInformation: 'Ships in 3-5 business days',
      availabilityStatus: 'In Stock',
      reviews: [
        {
          rating: 3,
          comment: 'Would not recommend!',
          date: '2025-04-30T09:41:02.053Z',
          reviewerName: 'Eleanor Collins',
          reviewerEmail: 'eleanor.collins@x.dummyjson.com',
        },
        {
          rating: 4,
          comment: 'Very satisfied!',
          date: '2025-04-30T09:41:02.053Z',
          reviewerName: 'Lucas Gordon',
          reviewerEmail: 'lucas.gordon@x.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Highly impressed!',
          date: '2025-04-30T09:41:02.053Z',
          reviewerName: 'Eleanor Collins',
          reviewerEmail: 'eleanor.collins@x.dummyjson.com',
        },
      ],
      returnPolicy: 'No return policy',
      minimumOrderQuantity: 48,
      meta: {
        createdAt: '2025-04-30T09:41:02.053Z',
        updatedAt: '2025-04-30T09:41:02.053Z',
        barcode: '5784719087687',
        qrCode: 'https://cdn.dummyjson.com/public/qr-code.png',
      },
      images: [
        'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
      ],
      thumbnail:
        'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
    },
    {
      id: 1,
      title: 'Essence Mascara Lash Princess',
      description:
        'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
      category: 'beauty',
      price: 9.99,
      discountPercentage: 10.48,
      rating: 2.56,
      stock: 99,
      tags: ['beauty', 'mascara'],
      brand: 'Essence',
      sku: 'BEA-ESS-ESS-001',
      weight: 4,
      dimensions: {
        width: 15.14,
        height: 13.08,
        depth: 22.99,
      },
      warrantyInformation: '1 week warranty',
      shippingInformation: 'Ships in 3-5 business days',
      availabilityStatus: 'In Stock',
      reviews: [
        {
          rating: 3,
          comment: 'Would not recommend!',
          date: '2025-04-30T09:41:02.053Z',
          reviewerName: 'Eleanor Collins',
          reviewerEmail: 'eleanor.collins@x.dummyjson.com',
        },
        {
          rating: 4,
          comment: 'Very satisfied!',
          date: '2025-04-30T09:41:02.053Z',
          reviewerName: 'Lucas Gordon',
          reviewerEmail: 'lucas.gordon@x.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Highly impressed!',
          date: '2025-04-30T09:41:02.053Z',
          reviewerName: 'Eleanor Collins',
          reviewerEmail: 'eleanor.collins@x.dummyjson.com',
        },
      ],
      returnPolicy: 'No return policy',
      minimumOrderQuantity: 48,
      meta: {
        createdAt: '2025-04-30T09:41:02.053Z',
        updatedAt: '2025-04-30T09:41:02.053Z',
        barcode: '5784719087687',
        qrCode: 'https://cdn.dummyjson.com/public/qr-code.png',
      },
      images: [
        'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
      ],
      thumbnail:
        'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
    },
    {
      id: 1,
      title: 'Essence Mascara Lash Princess',
      description:
        'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
      category: 'beauty',
      price: 9.99,
      discountPercentage: 10.48,
      rating: 2.56,
      stock: 99,
      tags: ['beauty', 'mascara'],
      brand: 'Essence',
      sku: 'BEA-ESS-ESS-001',
      weight: 4,
      dimensions: {
        width: 15.14,
        height: 13.08,
        depth: 22.99,
      },
      warrantyInformation: '1 week warranty',
      shippingInformation: 'Ships in 3-5 business days',
      availabilityStatus: 'In Stock',
      reviews: [
        {
          rating: 3,
          comment: 'Would not recommend!',
          date: '2025-04-30T09:41:02.053Z',
          reviewerName: 'Eleanor Collins',
          reviewerEmail: 'eleanor.collins@x.dummyjson.com',
        },
        {
          rating: 4,
          comment: 'Very satisfied!',
          date: '2025-04-30T09:41:02.053Z',
          reviewerName: 'Lucas Gordon',
          reviewerEmail: 'lucas.gordon@x.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Highly impressed!',
          date: '2025-04-30T09:41:02.053Z',
          reviewerName: 'Eleanor Collins',
          reviewerEmail: 'eleanor.collins@x.dummyjson.com',
        },
      ],
      returnPolicy: 'No return policy',
      minimumOrderQuantity: 48,
      meta: {
        createdAt: '2025-04-30T09:41:02.053Z',
        updatedAt: '2025-04-30T09:41:02.053Z',
        barcode: '5784719087687',
        qrCode: 'https://cdn.dummyjson.com/public/qr-code.png',
      },
      images: [
        'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
      ],
      thumbnail:
        'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
    },
    {
      id: 1,
      title: 'Essence Mascara Lash Princess',
      description:
        'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
      category: 'beauty',
      price: 9.99,
      discountPercentage: 10.48,
      rating: 2.56,
      stock: 99,
      tags: ['beauty', 'mascara'],
      brand: 'Essence',
      sku: 'BEA-ESS-ESS-001',
      weight: 4,
      dimensions: {
        width: 15.14,
        height: 13.08,
        depth: 22.99,
      },
      warrantyInformation: '1 week warranty',
      shippingInformation: 'Ships in 3-5 business days',
      availabilityStatus: 'In Stock',
      reviews: [
        {
          rating: 3,
          comment: 'Would not recommend!',
          date: '2025-04-30T09:41:02.053Z',
          reviewerName: 'Eleanor Collins',
          reviewerEmail: 'eleanor.collins@x.dummyjson.com',
        },
        {
          rating: 4,
          comment: 'Very satisfied!',
          date: '2025-04-30T09:41:02.053Z',
          reviewerName: 'Lucas Gordon',
          reviewerEmail: 'lucas.gordon@x.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Highly impressed!',
          date: '2025-04-30T09:41:02.053Z',
          reviewerName: 'Eleanor Collins',
          reviewerEmail: 'eleanor.collins@x.dummyjson.com',
        },
      ],
      returnPolicy: 'No return policy',
      minimumOrderQuantity: 48,
      meta: {
        createdAt: '2025-04-30T09:41:02.053Z',
        updatedAt: '2025-04-30T09:41:02.053Z',
        barcode: '5784719087687',
        qrCode: 'https://cdn.dummyjson.com/public/qr-code.png',
      },
      images: [
        'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
      ],
      thumbnail:
        'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
    },
  ],
};

const page = async () => {
  const res = await fetch('https://dummyjson.com/products', {
    method: 'GET',
  });
  const data: ProductsRes = await res.json();
  console.log(data);

  return (
    <Layout>
      <div className="flex p-6 w-full h-full gap-12">
        <FilterSidebar />
        <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-scroll scroll-smooth scroll-hidden">
          {data.products.map((product: Product, index) => (
            <ProductCard key={product.title + index} product={product} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default page;
