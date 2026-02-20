'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  total: number;
  limit: number;
}

export default function ProductPagination({
  currentPage,
  totalPages,
  total,
  limit,
}: ProductPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const navigateTo = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));
    router.push(`/products?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const start = (currentPage - 1) * limit + 1;
  const end = Math.min(currentPage * limit, total);

  // Generate page numbers
  const getPageNumbers = () => {
    const pages: (number | '...')[] = [];
    const delta = 2;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }
    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-8 border-t border-zinc-800">
      <p className="text-sm text-zinc-500 font-body">
        Showing {start}–{end} of {total} products
      </p>

      <nav className="flex items-center gap-1">
        <button
          onClick={() => navigateTo(currentPage - 1)}
          disabled={currentPage === 1}
          className={cn(
            'w-9 h-9 flex items-center justify-center border transition-colors font-body text-sm',
            currentPage === 1
              ? 'border-zinc-700 text-zinc-300 cursor-not-allowed'
              : 'border-zinc-400 hover:bg-zinc-900 hover:text-white',
          )}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {getPageNumbers().map((page, idx) =>
          page === '...' ? (
            <span
              key={page}
              className="w-9 h-9 flex items-center justify-center text-zinc-400 font-body text-sm"
            >
              …
            </span>
          ) : (
            <button
              key={page}
              onClick={() => navigateTo(page as number)}
              className={cn(
                'w-9 h-9 flex items-center justify-center border font-body text-sm transition-colors',
                currentPage === page
                  ? 'bg-zinc-900 text-white border-primary'
                  : 'border-zinc-700 text-ink hover:bg-zinc-900 hover:text-white',
              )}
            >
              {page}
            </button>
          ),
        )}

        <button
          onClick={() => navigateTo(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={cn(
            'w-9 h-9 flex items-center justify-center border transition-colors font-body text-sm',
            currentPage === totalPages
              ? 'border-zinc-700 text-zinc-300 cursor-not-allowed'
              : 'border-zinc-400 hover:bg-zinc-900 hover:text-white',
          )}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </nav>
    </div>
  );
}
