import {
  ProductsQueryParams,
  ProductsResponse,
  Product,
  Category,
} from '@/types';
import { buildQueryString } from '@/lib/utils';
import { getAuthToken } from '@/lib/auth';

const BASE_URL =
  process.env.NEXT_PUBLIC_DUMMYJSON_BASE_URL || 'https://dummyjson.com';

async function getAuthHeaders(): Promise<HeadersInit> {
  const token = await getAuthToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function fetchProducts(
  params: ProductsQueryParams = {},
): Promise<ProductsResponse> {
  const { category, search, ...restParams } = params;

  let url: string;
  if (search) {
    url = `${BASE_URL}/products/search?q=${encodeURIComponent(search)}&${buildQueryString(restParams)}`;
  } else if (category) {
    url = `${BASE_URL}/products/category/${encodeURIComponent(category)}?${buildQueryString(restParams)}`;
  } else {
    url = `${BASE_URL}/products?${buildQueryString(restParams)}`;
  }

  const headers = await getAuthHeaders();
  const response = await fetch(url, {
    headers,
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }

  return response.json();
}

export async function fetchProductById(id: number): Promise<Product> {
  const headers = await getAuthHeaders();
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    headers,
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch product ${id}: ${response.statusText}`);
  }

  return response.json();
}

export async function fetchCategories(): Promise<Category[]> {
  const response = await fetch(`${BASE_URL}/products/categories`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.statusText}`);
  }

  return response.json();
}
