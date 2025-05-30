import type { Product } from "@products/types/product";
import { createSlice } from "@reduxjs/toolkit";

type ProductsState = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

const slice = createSlice({
    name: "products",
    initialState,
    reducers: {}
})

export default slice.reducer;
export const { actions } = slice;





