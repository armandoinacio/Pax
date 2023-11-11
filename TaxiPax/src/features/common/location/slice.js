// numericSlice.js
import { createSlice } from '@reduxjs/toolkit';

const currentLocationSlice = createSlice({
  name: 'currentLocation',
  initialState: 0, // Valor inicial da slice (um valor numérico, por exemplo, 0)
  reducers: {
    setCurrent: (state,action) => {
      return action.payload; // Define o valor numérico recebido da action
    },
  },
});

export const { setCurrent } = currentLocationSlice.actions;
export default currentLocationSlice.reducer;
