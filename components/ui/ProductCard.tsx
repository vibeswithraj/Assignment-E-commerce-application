import { Product } from '@/types/Product';
import Image from 'next/image';
import { Star, StarHalf } from 'lucide-react';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="rounded-xl shadow border border-zinc-800">
      <div className="w-full h-60 bg-zinc-900 rounded-t-xl flex items-center justify-center">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={120}
          height={120}
          className="w-40 h-40 xl:w-44 xl:h-44 rounded-t-xl"
        />
      </div>
      <div className="p-4 flex flex-col">
        <span className="text-md font-semibold font-mono text-zinc-500">
          {product.brand}
        </span>
        <div className="space-y-3 flex flex-col">
          <span className="text-md font-semibold">{product.title}</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star size={16} fill="oklch(83.7% 0.128 66.29)" strokeWidth={0} />
              <Star size={16} fill="oklch(83.7% 0.128 66.29)" strokeWidth={0} />
              <StarHalf
                size={16}
                fill="oklch(83.7% 0.128 66.29)"
                strokeWidth={0}
              />
              <Star size={16} className="text-orange-300" />
              <Star size={16} className="text-orange-300" />
            </div>
            <span className="text-sm text-zinc-500 font-mono font-medium">{`(${product.rating})`}</span>
          </div>
          <span className="text-lg font-semibold font-sans">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
