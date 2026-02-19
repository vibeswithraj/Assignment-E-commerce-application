import { ProductCategory } from '@/types/Product';

const FilterSidebar = async () => {
  const res = await fetch('https://dummyjson.com/products/categories', {
    method: 'GET',
  });
  const categories: ProductCategory[] = await res.json();

  return (
    <aside className="w-80 space-y-8">
      <span className="text-2xl font-semibold block mb-6">Filters</span>
      <form className="space-y-6">
        <div className="space-y-3 flex flex-col">
          <label
            htmlFor="category"
            className="text-sm font-bold uppercase tracking-wider text-zinc-400"
          >
            CATEGORIES
          </label>
          <select name="category" id="category" className="w-full">
            {categories.map((category: ProductCategory) => (
              <option
                key={category.name}
                value={category.slug}
                className="text-sm text-zinc-800 font-medium cursor-pointer"
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-3 flex flex-col">
          <label
            htmlFor="sort"
            className="text-sm font-bold uppercase tracking-wider text-zinc-400"
          >
            SORT
          </label>
          <div className="flex items-center gap-7.5">
            <label htmlFor="asc">Ascending</label>
            <input type="radio" name="order" id="asc" value={'asc'} />
          </div>
          <div className="flex items-center gap-5">
            <label htmlFor="desc">Descending</label>
            <input type="radio" name="order" id="desc" value={'desc'} />
          </div>
          <select name="sortBy" id="sortBy" className="w-full mt-1">
            {categories.map((category: ProductCategory) => (
              <option
                key={category.name}
                value={category.slug}
                className="text-sm text-zinc-800 font-medium cursor-pointer"
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </aside>
  );
};

export default FilterSidebar;
