import { createSlice } from "@reduxjs/toolkit";

const alertSlice=createSlice({
     name:'alert',
     initialState:false,
     reducers:{
        toggleButton:(state)=>!state
     }


})
export const {toggleButton}=alertSlice.actions
export default alertSlice.reducer