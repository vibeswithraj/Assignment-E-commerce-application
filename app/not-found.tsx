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
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/products" className="btn-primary">
          Back to Products
        </Link>
      </div>
    </div>
  );
}
