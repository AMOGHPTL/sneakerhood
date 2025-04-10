import { configureStore } from "@reduxjs/toolkit";
import likedReducer from "./slices/likedSlice"
import cartItemsReducer from "./slices/cartItemsSlice"

export const store = configureStore({
    reducer:{
       liked: likedReducer,
       addtoCart: cartItemsReducer,
    }
})

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;