import ProductCard from '@/app/products/components/ProductCard';
import { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
}

const AllProducts = async ({ products }: ProductGridProps) => {
  return (
    <section className="w-full h-full grid grid-cols-1 md:grid-cols-4 gap-3">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default AllProducts;
