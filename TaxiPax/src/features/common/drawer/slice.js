import { createSlice } from "@reduxjs/toolkit";

const drawerSlice=createSlice({
     name:'drawer',
     initialState:false,
     reducers:{
        toggleButton:(state)=>!state
     }


})
export const {toggleButton}=drawerSlice.actions
export default drawerSlice.reducer