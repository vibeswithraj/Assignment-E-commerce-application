import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="font-display text-[120px] leading-none text-brand-100 font-light mb-2">
          404
        </div>
        <h1 className="font-display text-3xl text-ink font-light mb-3">
          Page not found
        </h1>
        <p className="text-gray-500 font-body text-sm mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-manrope font-medium rounded-md tracking-wide text-sm transition-all duration-200 hover:bg-primary/70 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
}
