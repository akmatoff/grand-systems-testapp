import { baseApi } from "@/shared/api/baseApi";
import { CATEGORIES_ENDPOINTS } from "./endpoints";
import { ICategory } from "../model";

export async function getCategories() {
  return baseApi
    .get<ICategory[]>(CATEGORIES_ENDPOINTS.LIST)
    .then(({ data }) => data);
}
