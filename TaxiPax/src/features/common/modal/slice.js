import { createSlice } from "@reduxjs/toolkit";

const modalSlice=createSlice({
     name:'modal',
     initialState:false,
     reducers:{
        toggleButton:(state)=>!state
     }


})
export const {toggleButton}=modalSlice.actions
export default modalSlice.reducer