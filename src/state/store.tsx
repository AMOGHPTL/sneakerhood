import { configureStore } from "@reduxjs/toolkit";
import likedReducer from "./slices/LikedSlice"

export const store = configureStore({
    reducer:{
       liked: likedReducer
    }
})

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;