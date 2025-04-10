import { createSlice } from "@reduxjs/toolkit";


interface LikedState{
  value:number;
}

const initialState: LikedState = {
    value:0,
}

const likedSice = createSlice({
    name:"Liked",
    initialState,
    reducers:{
       increament:(state) => {
        state.value+=1;
       },
       decerement:(state)=>{
        state.value-=1;
       }
    }
})

export const {increament,decerement} = likedSice.actions;
export default likedSice.reducer