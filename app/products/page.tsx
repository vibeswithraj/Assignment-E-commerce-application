import Layout from '@/components/layout/Layout';
import ProductFilters from './components/ProductFilters';
import AllProducts from './AllProducts';
import { fetchCategories, fetchProducts } from '@/lib/api';
import { Metadata } from 'next';
import ProductPagination from './components/ProductPagination';
import SearchBar from './components/SearchBar';
import SortSelect from './components/SortSelect';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our curated collection of exceptional products',
};

interface ProductsPageProps {
  searchParams: Promise<{
    page?: string;
    limit?: string;
    category?: string;
    sort?: string;
    order?: string;
    search?: string;
  }>;
}

const ITEMS_PER_PAGE = 12;

const page = async ({ searchParams }: ProductsPageProps) => {
  const params = await searchParams;
  const page = Math.max(1, Number.parseInt(params.page || '1'));
  const limit = Math.min(
    Number.parseInt(params.limit || String(ITEMS_PER_PAGE)),
    50,
  );
  const skip = (page - 1) * limit;
  const category = params.category || '';
  const search = params.search || '';
  const sortBy = params.sort || '';
  const order = (params.order as 'asc' | 'desc') || 'asc';

  const [productsData, categories] = await Promise.all([
    fetchProducts({
      limit,
      skip,
      sortBy: sortBy || undefined,
      order: sortBy ? order : undefined,
      category: category || undefined,
      search: search || undefined,
    }).catch(() => ({ products: [], total: 0, skip: 0, limit })),
    fetchCategories().catch(() => []),
  ]);

  const totalPages = Math.ceil(productsData.total / limit);

  return (
    <Layout>
      <div className="w-7xl h-full mx-auto py-8 lg:py-12">
        <div className="mb-8">
          <h1 className="font-manrope text-4xl lg:text-5xl font-light mb-2">
            {search
              ? `Results for "${search}"`
              : category
                ? categories.find((c) => c.slug === category)?.name || category
                : 'All Products'}
          </h1>
          <p className="text-gray-500 font-body text-sm">
            {productsData.total > 0
              ? `${productsData.total} product${productsData.total !== 1 ? 's' : ''} found`
              : 'No products found'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="flex-1">
            <SearchBar defaultValue={search} />
          </div>
          <SortSelect sortBy={sortBy} order={order} />
        </div>

        <div className="flex w-full h-full gap-12">
          <ProductFilters categories={categories} selectedCategory={category} />
          <div className="w-full overflow-y-scroll scroll-smooth scroll-hidden">
            <AllProducts products={productsData.products} />
            <ProductPagination
              currentPage={page}
              totalPages={totalPages}
              total={productsData.total}
              limit={limit}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
