import { configureStore } from "@reduxjs/toolkit";
import likedReducer from "./slices/likedSlice"
import cartItemsReducer from "./slices/cartItemsSlice"
import  sneakerReducer  from "./slices/sneakerSlice";

export const store = configureStore({
    reducer:{
       liked: likedReducer,
       cartItems: cartItemsReducer,
       sneaker: sneakerReducer,
    }
})

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;