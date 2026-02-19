"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="font-display text-8xl text-brand-200 font-light mb-4">!</div>
        <h1 className="font-display text-3xl text-ink font-light mb-3">
          Something went wrong
        </h1>
        <p className="text-gray-500 font-body text-sm mb-8 leading-relaxed">
          We encountered an unexpected error. Please try again or return to the homepage.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button onClick={reset} className="btn-primary">
            Try Again
          </button>
          <Link href="/products" className="btn-secondary">
            Go Home
          </Link>
        </div>
        {error.digest && (
          <p className="mt-6 text-xs text-gray-300 font-mono">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
