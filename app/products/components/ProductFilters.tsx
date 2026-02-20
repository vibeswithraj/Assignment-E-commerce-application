'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Category } from '@/types';
import { cn } from '@/lib/utils';
import { Filter, X } from 'lucide-react';

interface ProductFiltersProps {
  categories: Category[];
  selectedCategory: string;
}

export default function ProductFilters({
  categories,
  selectedCategory,
}: ProductFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (categorySlug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', '1');

    if (categorySlug === selectedCategory) {
      params.delete('category');
    } else {
      params.set('category', categorySlug);
    }

    router.push(`/products?${params.toString()}`);
  };

  const clearFilters = () => {
    const params = new URLSearchParams();
    const search = searchParams.get('search');
    if (search) params.set('search', search);
    router.push(`/products?${params.toString()}`);
  };

  const hasActiveFilters = selectedCategory;

  return (
    <div className="space-y-4 w-96 h-fit">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="w-3.5 h-3.5 text-gray-500" />
          <span className="font-body text-sm font-medium text-ink tracking-wide">
            Filters
          </span>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700 font-body transition-colors"
          >
            <X className="w-3 h-3" />
            Clear
          </button>
        )}
      </div>

      <div>
        <h3 className="font-body text-xs font-medium text-gray-400 tracking-widest uppercase mb-3">
          Category
        </h3>
        <div className="space-y-0.5 max-h-100 overflow-y-auto scroll-smooth scroll-thin pr-1">
          <button
            onClick={() => handleCategoryChange('')}
            className={cn(
              'w-full text-left px-3 py-2 font-body text-sm transition-colors',
              !selectedCategory
                ? 'bg-zinc-900 text-primary'
                : 'text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300',
            )}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => handleCategoryChange(category.slug)}
              className={cn(
                'w-full text-left px-3 py-2 font-body text-sm transition-colors',
                selectedCategory === category.slug
                  ? 'bg-zinc-900 text-primary'
                  : 'text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300',
              )}
              aria-pressed={selectedCategory === category.slug}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
