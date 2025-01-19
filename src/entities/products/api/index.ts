import { baseApi } from "@/shared/api/baseApi";
import { PRODUCT_ENDPOINTS } from "./endpoints";
import { IProduct } from "../model";
import { QueryParams } from "./params";

export async function getProductsList(params?: QueryParams) {
  return baseApi
    .get<IProduct[]>(PRODUCT_ENDPOINTS.LIST, {
      params: {
        name_like: params?.search?.trim(),
        category: params?.category,
      },
    })
    .then(({ data }) => data);
}
