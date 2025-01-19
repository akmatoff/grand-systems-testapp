import { IProduct } from "@/entities/products/model";

export function getFavoritesFromLocalStorage(): IProduct[] {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
}

export function setFavoritesToLocalStorage(favorites: IProduct[]) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}
