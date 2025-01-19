import { IProduct } from "@/entities/products/model";
import { setFavoritesToLocalStorage } from "@/shared/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  products: IProduct[];
}

const initialState: FavoritesState = {
  products: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.products.push(action.payload);
      setFavoritesToLocalStorage(state.products);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      setFavoritesToLocalStorage(state.products);
    },
  },
});

export const { addProduct, removeProduct, setProducts } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
