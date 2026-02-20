import { Product } from '@/types';
import Image from 'next/image';
import { Star, StarHalf } from 'lucide-react';
import Link from 'next/link';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="rounded-xl shadow border border-zinc-800 flex flex-col justify-between"
    >
      <div>
        <div className="bg-zinc-300 rounded-t-xl flex items-center justify-center">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={120}
            height={120}
            className="w-40 h-40 xl:w-44 xl:h-44 rounded-t-xl"
          />
        </div>
        <div className="p-4 pt-2 pb-2 flex flex-col">
          <span className="text-sm font-semibold font-manrope text-zinc-500">
            {product.brand}
          </span>
          <div className="space-y-3 flex flex-col">
            <span className="text-md font-manrope font-semibold">
              {product.title}
            </span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star
                  size={16}
                  fill="oklch(83.7% 0.128 66.29)"
                  strokeWidth={0}
                />
                <Star
                  size={16}
                  fill="oklch(83.7% 0.128 66.29)"
                  strokeWidth={0}
                />
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
      <div className="px-3 mb-3">
        <button className="w-full py-2 text-black/80 text-center font-semibold bg-primary rounded-lg hover:bg-primary/80 transition-colors ease-linear cursor-pointer">
          Add to cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
