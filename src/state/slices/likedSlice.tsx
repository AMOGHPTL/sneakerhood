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

interface LikedListState {
  list: string[];
}

const initialState: LikedListState = {
  list: [],
};

const likedSlice = createSlice({
  name: "Liked",
  initialState,
  reducers: {
    assingLike: (state, action: PayloadAction<SneakerState>) => {
      state.list.push(action.payload.image.original);
      // Better logging - create a copy of the current values
    },
    removeLike: (state, action: PayloadAction<SneakerState>) => {
      state.list = state.list.filter(url => url !== action.payload.image.original);
      // Better logging
      console.log("Remaining liked images:", [...state.list]);
    },
  },
});

export const { assingLike, removeLike } = likedSlice.actions;
export default likedSlice.reducer;