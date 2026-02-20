'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowUpDown } from 'lucide-react';

interface SortSelectProps {
  sortBy: string;
  order: string;
}

const SORT_OPTIONS = [
  { value: '', label: 'Default' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'title-asc', label: 'Name: A-Z' },
  { value: 'title-desc', label: 'Name: Z-A' },
  { value: 'rating-desc', label: 'Highest Rated' },
  { value: 'rating-asc', label: 'Lowest Rated' },
];

const SortSelect = ({ sortBy, order }: SortSelectProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentValue = sortBy ? `${sortBy}-${order}` : '';

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', '1');

    const val = e.target.value;
    if (!val) {
      params.delete('sort');
      params.delete('order');
    } else {
      const [newSortBy, newOrder] = val.split('-');
      params.set('sort', newSortBy);
      params.set('order', newOrder);
    }

    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="relative flex items-center gap-2">
      <ArrowUpDown
        size={16}
        className="absolute left-3 text-gray-400 pointer-events-none"
      />
      <select
        value={currentValue}
        onChange={handleChange}
        className="input-field pl-10 h-10 appearance-none cursor-pointer min-w-50 bg-zinc-900 border-2 border-zinc-800 focus:outline-none focus:border-[#13daec] rounded-md"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortSelect;
