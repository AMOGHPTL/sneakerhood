import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SneakerState {
  id: string;
  sku: string;
  brand: string;
  name: string;
  colorway: string;
  gender: string;
  silhouette: string;
  releaseYear: string;
  releaseDate: string;
  retailPrice: number;
  size: number;
  estimatedMarketValue: number;
  story: string;
  image: {
    original: string;
    small: string;
    thumbnail: string;
  };
  links: {
    stockX: string;
    goat: string;
    flightClub: string;
    stadiumGoods: string;
  };
  color?: string;
}

interface CartItemsState {
  list: string[];
}

const initialState: CartItemsState = {
  list: [],
};

const cartItemsSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<SneakerState>) => {
      state.list.push(action.payload.image.original);
      // Better logging - create a copy of the current values
      console.log("Current liked images:", [...state.list]);
    },
    removeFromCart: (state, action: PayloadAction<SneakerState>) => {
      state.list = state.list.filter(url => url !== action.payload.image.original);
      // Better logging
      console.log("Remaining liked images:", [...state.list]);
      console.log("Count:", state.list.length);
    },
  },
});

export const { addToCart, removeFromCart } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;