import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '@products/redux/products.slice';
import cartReducer from '@products/redux/cart.slice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
})

// Exporting the store to be used in the application
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// store.getState()
// store.subscribe()
// useSelector()
// store.dispatch()
// useDispatch()
