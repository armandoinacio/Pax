import {createSlice} from '@reduxjs/toolkit';
import {atmApi} from '../services/service';

const initialState = {
  status: 'idle',
  data: {},
  error: null,
};

const atmReducer = createSlice({
  name: 'atms',
  initialState,

  extraReducers: builder => {
    builder
      .addMatcher(
        atmApi.endpoints.getAtmAll.matchFulfilled,
        (state, action) => {
          state.data = action.payload;
          state.error = null; // Limpa qualquer erro anterior
          state.status = 'sucesso';
        },
      )
      .addMatcher(atmApi.endpoints.getAtmAll.matchPending, state => {
        state.status = 'loading';
      })
      .addMatcher(
        atmApi.endpoints.getAtmAll.matchRejected,
        (state, action) => {
          state.error = action.error;
          state.status = 'failed';
        },
      );
  },
});

export default atmReducer.reducer;

//Notem que agora uso addMatcher em vez de addCase.
//Além disso, usamos localizacoesApi.endpoints.getServicosAll.matchFulfilled para lidar com a ação de sucesso.
// Isso é possível porque createApi do redux-toolkit gera um conjunto de ações e redutores automatizados
//com o nome dos endpoints que você define em seu endpoints builder.
//Com isso, o reducer irá lidar com as ações automaticamente e
//alterar o status e os dados do estado de acordo com o resultado da requisição da API.
