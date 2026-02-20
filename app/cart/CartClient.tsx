'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
  Package,
} from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import {
  selectCartItems,
  selectCartTotal,
  removeFromCart,
  updateQuantity,
  clearCart,
} from '@/store/cartSlice';
import { formatPrice, formatDiscount } from '@/lib/utils';
import toast from 'react-hot-toast';

const CartPageClient = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);

  const handleRemove = (productId: number, productTitle: string) => {
    dispatch(removeFromCart(productId));
    toast.success(`Removed from cart`);
  };

  const handleQuantityChange = (
    productId: number,
    newQuantity: number,
    stock: number,
  ) => {
    if (newQuantity < 1) {
      dispatch(removeFromCart(productId));
    } else if (newQuantity > stock) {
      toast.error(`Only ${stock} items available`);
    } else {
      dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success('Cart cleared');
  };

  const subtotal = items.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);
  const savings = subtotal - total;
  const shipping = total > 50 ? 0 : 9.99;
  const finalTotal = total + shipping;

  if (items.length === 0) {
    return (
      <div className="w-7xl py-12">
        <div className="max-w-md mx-auto text-center py-20">
          <div className="w-20 h-20 bg-gray-100 flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-8 h-8 text-gray-300" />
          </div>
          <h1 className="font-display text-3xl text-ink font-light mb-3">
            Your cart is empty
          </h1>
          <p className="text-gray-500 font-body text-sm mb-8">
            Looks like you haven&apos;t added any products yet.
          </p>
          <Link href="/products" className="btn-primary">
            <ShoppingBag className="w-4 h-4" />
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container py-8 lg:py-12 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href="/products"
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-ink font-body transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Continue Shopping
          </Link>
          <h1 className="font-display text-4xl text-ink font-light">
            Shopping Cart
          </h1>
          <p className="text-gray-500 font-body text-sm mt-1">
            {items.length} item{items.length !== 1 ? 's' : ''}
          </p>
        </div>
        <button
          onClick={handleClearCart}
          className="text-xs text-gray-400 hover:text-red-500 font-body flex items-center gap-1 transition-colors"
          aria-label="Clear all items from cart"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Clear cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-3">
          {items.map((item) => {
            const discountedPrice = formatDiscount(
              item.product.price,
              item.product.discountPercentage,
            );
            const hasDiscount = item.product.discountPercentage > 0.5;
            const itemTotal = discountedPrice * item.quantity;

            return (
              <div
                key={item.product.id}
                className="bg-white border border-gray-100 p-4 flex gap-4 animate-slide-up"
              >
                {/* Image */}
                <Link href={`/products/${item.product.id}`}>
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-gray-50 overflow-hidden">
                    <Image
                      src={item.product.thumbnail}
                      alt={item.product.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform"
                      sizes="96px"
                    />
                  </div>
                </Link>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs text-gray-400 font-body tracking-wider uppercase">
                        {item.product.brand || item.product.category}
                      </p>
                      <Link href={`/products/${item.product.id}`}>
                        <h3 className="font-display text-base text-ink font-medium hover:text-brand-600 transition-colors leading-snug">
                          {item.product.title}
                        </h3>
                      </Link>
                    </div>
                    <button
                      onClick={() =>
                        handleRemove(item.product.id, item.product.title)
                      }
                      className="text-gray-300 hover:text-red-400 transition-colors p-0.5 shrink-0"
                      aria-label={`Remove ${item.product.title} from cart`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity Control */}
                    <div className="flex items-center border border-gray-200">
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item.product.id,
                            item.quantity - 1,
                            item.product.stock,
                          )
                        }
                        className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-ink hover:bg-gray-50 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 h-7 flex items-center justify-center font-body text-sm border-x border-gray-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item.product.id,
                            item.quantity + 1,
                            item.product.stock,
                          )
                        }
                        className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-ink hover:bg-gray-50 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <div className="font-display text-lg text-ink font-semibold">
                        {formatPrice(itemTotal)}
                      </div>
                      {hasDiscount && (
                        <div className="text-xs text-gray-400 font-body line-through">
                          {formatPrice(item.product.price * item.quantity)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-100 p-6 sticky top-24">
            <h2 className="font-display text-xl text-ink font-medium mb-5">
              Order Summary
            </h2>

            <div className="space-y-3 pb-5 border-b border-gray-100">
              <div className="flex justify-between font-body text-sm">
                <span className="text-gray-500">
                  Subtotal ({items.reduce((a, i) => a + i.quantity, 0)} items)
                </span>
                <span className="text-ink">{formatPrice(subtotal)}</span>
              </div>

              {savings > 0.01 && (
                <div className="flex justify-between font-body text-sm">
                  <span className="text-brand-600">Savings</span>
                  <span className="text-brand-600">
                    -{formatPrice(savings)}
                  </span>
                </div>
              )}

              <div className="flex justify-between font-body text-sm">
                <span className="text-gray-500">Shipping</span>
                {shipping === 0 ? (
                  <span className="text-green-600 font-medium">Free</span>
                ) : (
                  <span className="text-ink">{formatPrice(shipping)}</span>
                )}
              </div>

              {shipping > 0 && (
                <div className="text-xs text-gray-400 font-body bg-gray-50 p-2">
                  Add {formatPrice(50 - total)} more for free shipping
                </div>
              )}
            </div>

            <div className="flex justify-between font-display text-xl text-ink font-semibold py-5">
              <span>Total</span>
              <span>{formatPrice(finalTotal)}</span>
            </div>

            <button
              className="btn-primary w-full justify-center h-12 text-sm"
              onClick={() => toast.success('Checkout coming soon!')}
            >
              Proceed to Checkout
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400 font-body">
              <Package className="w-3.5 h-3.5" />
              <span>Free returns on all orders</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageClient;
