// Importando o createSlice e configureStore do Redux Toolkit
import { createSlice, configureStore } from '@reduxjs/toolkit';

// Definindo o estado inicial da slice
const initialState = {
  items: []
};

// Criando a slice usando o createSlice
const arraySlice = createSlice({
  name: 'array',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item !== action.payload);
    },
    clearItems: state => {
      state.items = [];
    }
  }
});

// Exportando as ações geradas automaticamente pelo createSlice
export const { addItem, removeItem, clearItems } = arraySlice.actions;
export default arraySlice.reducer