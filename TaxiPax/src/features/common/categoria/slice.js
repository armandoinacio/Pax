// numericSlice.js
import { createSlice } from '@reduxjs/toolkit';

const numericSlice = createSlice({
  name: 'numeric',
  initialState: 0, // Valor inicial da slice (um valor numérico, por exemplo, 0)
  reducers: {
    setNumericValue: (state, action) => {
      return action.payload; // Define o valor numérico recebido da action
    },
  },
});

export const { setNumericValue } = numericSlice.actions;
export default numericSlice.reducer;
