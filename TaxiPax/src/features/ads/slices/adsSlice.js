import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: {},
  error: {},
};

const adsReducer = createSlice({
  name: 'ads',
  initialState,
});

export default adsReducer.reducer;
