import { configureStore } from "@reduxjs/toolkit";
import likedReducer from "./slices/likedSlice";
import cartItemsReducer from "./slices/cartItemsSlice";
import sneakerReducer from "./slices/sneakerSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    liked: likedReducer,
    cartItems: cartItemsReducer,
    sneaker: sneakerReducer,
    user: userReducer,
  },
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
