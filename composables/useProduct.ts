import type { Product } from '~/types'

const apiBaseURL = "https://fakestoreapi.com";

export default function useStoreAPI() {
  const fetchAllProducts = async (): Promise<Product[]> => {
    const response = await $fetch<Product[]>(`${apiBaseURL}/products`);
    return response;
  };

  const fetchProductById = async (productId: number): Promise<Product> => {
    const response = await $fetch<Product>(
      `${apiBaseURL}/products/${productId}`
    );
    return response;
  };

  const fetchProductsByCategory = async (
    categoryName: string
  ): Promise<Product[]> => {
    const response = await $fetch<Product[]>(
      `${apiBaseURL}/products/category/${categoryName}`
    );
    return response;
  };

  return {
    fetchAllProducts,
    fetchProductById,
    fetchProductsByCategory,
  };
}
