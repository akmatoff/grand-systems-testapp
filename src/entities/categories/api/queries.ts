import { useQuery } from "@tanstack/react-query";
import { getCategories } from ".";
import { CATEGORIES_ENDPOINTS } from "./endpoints";

export function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: [CATEGORIES_ENDPOINTS.LIST],
    queryFn: getCategories,
  });

  return {
    categories: data,
    isCategoriesLoading: isLoading,
  };
}
