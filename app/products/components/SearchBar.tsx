'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { useCallback, useRef, useState } from 'react';

interface SearchBarProps {
  defaultValue?: string;
}

const SearchBar = ({ defaultValue = '' }: SearchBarProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(defaultValue);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearch = useCallback(
    (searchValue: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', '1');

      if (searchValue.trim()) {
        params.set('search', searchValue.trim());
        params.delete('category');
      } else {
        params.delete('search');
      }

      router.push(`/products?${params.toString()}`);
    },
    [router, searchParams],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      handleSearch(newValue);
    }, 400);
  };

  const handleClear = () => {
    setValue('');
    handleSearch('');
    inputRef.current?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    handleSearch(value);
  };

  return (
    <form onSubmit={handleSubmit} className="relative" role="search">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search products..."
        className="w-full px-4 py-3 bg-zinc-900 border-2 border-zinc-800 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-[#13daec] rounded-md pl-10 pr-10 h-10"
      />
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-ink transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </form>
  );
};

export default SearchBar;
