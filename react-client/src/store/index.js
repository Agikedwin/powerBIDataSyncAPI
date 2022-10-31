import { configureStore } from "@reduxjs/toolkit";
import uiSlice from './ui-slice';
import cartSlice from "./card-slice";
import productSlice from "./product-slice";

const uiStore = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
        product: productSlice.reducer
    }
})

export default uiStore;