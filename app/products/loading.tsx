import ProductGridSkeleton from './components/ProductGridSkeleton';

const ProductsLoading = () => {
  return (
    <div className="w-full py-8 lg:py-12">
      <div className="mb-8">
        <div className="skeleton h-10 w-64 mb-2" />
        <div className="skeleton h-4 w-32" />
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="skeleton h-10 flex-1" />
        <div className="skeleton h-10 w-48" />
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-64">
          <div className="space-y-2">
            <div className="skeleton h-4 w-20 mb-4" />
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="skeleton h-8" />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <ProductGridSkeleton />
        </div>
      </div>
    </div>
  );
};

export default ProductsLoading;
