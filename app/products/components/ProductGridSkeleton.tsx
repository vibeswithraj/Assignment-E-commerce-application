const ProductGridSkeleton = ({ count = 12 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white border border-zinc-100 overflow-hidden"
        >
          <div className="skeleton aspect-square" />
          <div className="p-4 space-y-3">
            <div className="skeleton h-3 w-20" />
            <div className="skeleton h-5 w-4/5" />
            <div className="skeleton h-4 w-32" />
            <div className="skeleton h-6 w-24" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGridSkeleton;
