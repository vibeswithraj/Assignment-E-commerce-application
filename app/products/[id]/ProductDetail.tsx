'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShoppingBag,
  Check,
  Star,
  ArrowLeft,
  Package,
  Shield,
  Truck,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { addToCart, updateQuantity, selectCartItems } from '@/store/cartSlice';
import type { Product } from '@/types';
import { formatPrice, formatDiscount, cn } from '@/lib/utils';
import toast from 'react-hot-toast';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const cartItem = cartItems.find((item) => item.product.id === product.id);
  const isInCart = !!cartItem;

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const discountedPrice = formatDiscount(
    product.price,
    product.discountPercentage,
  );
  const hasDiscount = product.discountPercentage > 0.5;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
    }
    toast.success(`${quantity}× ${product.title} added to cart`);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length,
    );
  };

  return (
    <div className="page-container w-full px-16 py-8 lg:py-12 animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 mb-8 text-sm font-body text-gray-400">
        <Link
          href="/products"
          className="hover:text-ink transition-colors flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Products
        </Link>
        <span>/</span>
        <Link
          href={`/products?category=${product.category}`}
          className="hover:text-ink transition-colors capitalize"
        >
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-ink truncate max-w-48">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Images */}
        <div className="space-y-3">
          <div className="relative aspect-square bg-gray-50 overflow-hidden">
            <Image
              src={product.images[selectedImage] || product.thumbnail}
              alt={`${product.title} - Image ${selectedImage + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />

            {hasDiscount && (
              <div className="absolute top-4 left-4 bg-brand-500 text-white px-2.5 py-1 text-xs font-body font-medium">
                -{Math.round(product.discountPercentage)}% OFF
              </div>
            )}

            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    'relative w-16 h-16 shrink-0 overflow-hidden transition-all',
                    selectedImage === idx
                      ? 'ring-2 ring-ink'
                      : 'ring-1 ring-gray-200 opacity-60 hover:opacity-100',
                  )}
                  aria-label={`View image ${idx + 1}`}
                  aria-pressed={selectedImage === idx}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-xs text-gray-400 font-body tracking-widest uppercase mb-2">
              {product.brand || product.category}
            </p>
            <h1 className="font-display text-3xl lg:text-4xl text-ink font-light leading-tight mb-3">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < Math.round(product.rating)
                        ? 'fill-brand-400 text-brand-400'
                        : 'fill-gray-200 text-gray-200',
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500 font-body">
                {product.rating.toFixed(1)} ({product.reviews.length} reviews)
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 pb-6 border-b border-gray-100">
            <span className="font-display text-4xl text-ink font-semibold">
              {formatPrice(discountedPrice)}
            </span>
            {hasDiscount && (
              <span className="text-lg text-gray-400 font-body line-through">
                {formatPrice(product.price)}
              </span>
            )}
            {hasDiscount && (
              <span className="text-sm text-brand-600 font-body font-medium">
                Save {formatPrice(product.price - discountedPrice)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="font-body text-gray-600 leading-relaxed text-sm">
            {product.description}
          </p>

          {/* Stock Status */}
          <div className="flex items-center gap-2">
            <div
              className={cn(
                'w-2 h-2 rounded-full',
                product.stock > 10
                  ? 'bg-green-400'
                  : product.stock > 0
                    ? 'bg-yellow-400'
                    : 'bg-red-400',
              )}
            />
            <span className="font-body text-sm text-gray-600">
              {product.stock > 10
                ? 'In Stock'
                : product.stock > 0
                  ? `Only ${product.stock} left`
                  : 'Out of Stock'}
            </span>
          </div>

          {/* Quantity & Add to Cart */}
          {product.stock > 0 && (
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-200">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-ink hover:bg-gray-50 transition-colors font-body text-lg"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-12 h-10 flex items-center justify-center font-body text-sm font-medium border-x border-gray-200">
                  {quantity}
                </span>
                <button
                  onClick={() =>
                    setQuantity((q) => Math.min(product.stock, q + 1))
                  }
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-ink hover:bg-gray-50 transition-colors font-body text-lg"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={cn(
                  'flex-1 h-12 flex items-center justify-center gap-2 font-body text-sm font-medium transition-colors',
                  isInCart
                    ? 'bg-brand-500 text-white hover:bg-brand-600'
                    : 'bg-ink text-cream hover:bg-brand-700',
                )}
                aria-label={`Add ${quantity} to cart`}
              >
                {isInCart ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <ShoppingBag className="w-4 h-4" />
                )}
                {isInCart ? 'Add More' : 'Add to Cart'}
              </button>
            </div>
          )}

          {isInCart && (
            <Link
              href="/cart"
              className="btn-secondary w-full justify-center h-11 text-sm"
            >
              View Cart ({cartItem?.quantity} in cart)
            </Link>
          )}

          {/* Product Details */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {[
              { icon: Truck, label: product.shippingInformation },
              { icon: RotateCcw, label: product.returnPolicy },
              { icon: Shield, label: product.warrantyInformation },
              { icon: Package, label: product.availabilityStatus },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-start gap-2 p-3 bg-gray-50"
              >
                <Icon className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                <span className="font-body text-xs text-gray-500 leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* SKU */}
          <p className="text-xs text-gray-400 font-mono">SKU: {product.sku}</p>
        </div>
      </div>

      {/* Reviews Section */}
      {product.reviews.length > 0 && (
        <div className="mt-16 pt-12 border-t border-gray-100">
          <h2 className="font-display text-2xl text-ink font-light mb-6">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.reviews.map((review, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-5">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'w-3 h-3',
                        i < review.rating
                          ? 'fill-brand-400 text-brand-400'
                          : 'fill-gray-200 text-gray-200',
                      )}
                    />
                  ))}
                </div>
                <p className="font-body text-sm text-gray-600 leading-relaxed mb-3">
                  &ldquo;{review.comment}&rdquo;
                </p>
                <p className="font-body text-xs text-gray-400">
                  — {review.reviewerName}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
