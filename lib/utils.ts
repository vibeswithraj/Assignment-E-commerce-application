import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function formatDiscount(price: number, discount: number): number {
  return price * (1 - discount / 100);
}

export function calculateTotal(
  items: Array<{
    product: { price: number; discountPercentage: number };
    quantity: number;
  }>,
): number {
  return items.reduce((total, item) => {
    const discountedPrice = formatDiscount(
      item.product.price,
      item.product.discountPercentage,
    );
    return total + discountedPrice * item.quantity;
  }, 0);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function buildQueryString(
  params: Record<string, string | number | undefined>,
): string {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.append(key, String(value));
    }
  });
  return searchParams.toString();
}
