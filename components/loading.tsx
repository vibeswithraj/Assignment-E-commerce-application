import ProductGridSkeleton from '../app/products/components/ProductGridSkeleton';

const ProductsLoading = () => {
  return (
    <div className="w-full py-8 lg:py-12">
      <div className="mb-8">
        <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-shimmer rounded h-10 w-64 mb-2" />
        <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-shimmer rounded h-4 w-32" />
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-shimmer rounded h-10 flex-1" />
        <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-shimmer rounded h-10 w-48" />
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-64">
          <div className="space-y-2">
            <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-shimmer rounded h-4 w-20 mb-4" />
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-shimmer rounded h-8"
              />
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
