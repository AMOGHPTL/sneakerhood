import { createSlice } from "@reduxjs/toolkit";

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

const initialState: SneakerState = {
  id: "",
  sku: "",
  brand: "",
  name: "",
  colorway: "",
  gender: "",
  silhouette: "",
  releaseYear: "",
  releaseDate: "",
  retailPrice: 0,
  estimatedMarketValue: 0,
  story: "",
  image: {
    original: "",
    small: "",
    thumbnail: "",
  },
  links: {
    stockX: "",
    goat: "",
    flightClub: "",
    stadiumGoods: "",
  },
  color: "",
};

export const sneakerSlice = createSlice({
  name: "sneaker",
  initialState,
  reducers: {
    selectSneaker: (state, action: { payload: SneakerState }) => {
      Object.assign(state, action.payload);
    },
    removeSneaker: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { selectSneaker, removeSneaker } = sneakerSlice.actions;
export default sneakerSlice.reducer;
