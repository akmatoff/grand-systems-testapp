import { useQuery } from "@tanstack/react-query";
import { getProductsList } from ".";
import { PRODUCT_ENDPOINTS } from "./endpoints";
import { QueryParams } from "./params";

export function useProductsList(params?: QueryParams) {
  const { data, isLoading } = useQuery({
    queryKey: [PRODUCT_ENDPOINTS.LIST, params?.search, params?.category],
    queryFn: () => getProductsList(params),
  });

  return {
    products: data,
    isProductsLoading: isLoading,
  };
}
