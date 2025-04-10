import { createSlice } from "@reduxjs/toolkit"

interface CartItemsState {
    value:number
}

const initialState: CartItemsState = {
    value:0
}

export const cartItemsSlice = createSlice({
    name:"addToCart",
    initialState,
    reducers:{
        addtoCart:(state)=>{
           state.value+=1
        },
        removeFromCart:(state)=>{
            state.value-=1
        }
    }
});

export const { addtoCart ,removeFromCart} = cartItemsSlice.actions;
export default cartItemsSlice.reducer;