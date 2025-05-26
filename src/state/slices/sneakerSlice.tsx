import { createSlice } from "@reduxjs/toolkit";

interface SneakerState {
  _id: string;
  id: string;
  brand: string;
  name: string;
  colorway: string;
  gender: string;
  silhouette: string;
  releaseYear: string;
  retailPrice: number;
  size: number;
  story: string;
  image: string;
}

const initialState: SneakerState = {
  _id: "",
  id: "",
  brand: "",
  name: "",
  colorway: "",
  gender: "",
  silhouette: "",
  releaseYear: "",
  retailPrice: 0,
  size: 0,
  story: "",
  image: "",
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
