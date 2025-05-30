import { PRODUCTS } from "@products/data/products.data";
import type { Product } from "@products/types/product";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

const initialState: CartState = {
  products: [PRODUCTS[0]], // Initial product in the cart
  loading: false,
  error: null,
};

const slice = createSlice({
    name: "cartProducts",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        }, 
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<Product>) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload.id
            );
        },
        updateProduct: (state, action: PayloadAction<Product>) => {
            const index = state.products.findIndex(
                (product) => product.id === action.payload.id
            );
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        }
    }
})

export default slice.reducer;
export const { actions } = slice;





