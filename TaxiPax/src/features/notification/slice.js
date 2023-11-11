import {createSlice} from '@reduxjs/toolkit';
import { notificationApi } from './service';

const initialState = {
  status: 'idle',
  data: {},
  error: null,
};

const notificationReducer = createSlice({
  name: 'notification',
  initialState,

  extraReducers: builder => {
    builder
      .addMatcher(
        notificationApi.endpoints.getNotification.matchFulfilled,
        (state, action) => {
          state.data = action.payload;
          state.error = null; // Limpa qualquer erro anterior
          state.status = 'sucesso';
        },
      ) 
      .addMatcher(     
        notificationApi.endpoints.getNotification.matchPending, state => {
        state.status = 'loading';
      })
      .addMatcher(
        notificationApi.endpoints.getNotification.matchRejected,
        (state, action) => {
          state.error = action.error;
          state.status = 'failed';
        },
      )
      .addMatcher(
        notificationApi.endpoints.getNotiQuantity.matchFulfilled,
        (state, action) => {
          state.data = action.payload;
          state.error = null; // Limpa qualquer erro anterior
          state.status = 'sucesso';
        },
      ) 
      .addMatcher(     
        notificationApi.endpoints.getNotiQuantity.matchPending, state => {
        state.status = 'loading';
      })
      .addMatcher(
        notificationApi.endpoints.getNotiQuantity.matchRejected,
        (state, action) => {
          state.error = action.error;
          state.status = 'failed';
        },
      )
     
  },
});

export default notificationReducer.reducer;

//Notem que agora uso addMatcher em vez de addCase.
//Além disso, usamos localizacoesApi.endpoints.getServicosAll.matchFulfilled para lidar com a ação de sucesso.
// Isso é possível porque createApi do redux-toolkit gera um conjunto de ações e redutores automatizados
//com o nome dos endpoints que você define em seu endpoints builder.
//Com isso, o reducer irá lidar com as ações automaticamente e
//alterar o status e os dados do estado de acordo com o resultado da requisição da API.
