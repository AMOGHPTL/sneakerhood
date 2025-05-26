import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  email: string;
  password: string;
  liked: Array<string>;
  cart: Array<string>;
}

const initialState: UserState = {
  email: "",
  password: "",
  liked: [],
  cart: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    selectUser: (state, action: { payload: UserState }) => {
      Object.assign(state, action.payload);
    },
    removeUser: (state) => {
      Object.assign(state, initialState);
    },
    addCart: (state, action: { payload: string }) => {
      state.cart.push(action.payload);
      
    },
    removeCart: (state, action: { payload: string }) => {
      state.cart = state.cart.filter((id) => id !== action.payload);
     
    },
  },
});

export const { selectUser, removeUser, addCart, removeCart } =
  userSlice.actions;
export default userSlice.reducer;
