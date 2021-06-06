import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';

export const secondScreenReducer = createSlice({
  name: 'account',
  initialState: initialState.secondScreen,
  reducers: { },
});

export const accountActions = secondScreenReducer.actions;

export default secondScreenReducer.reducer;
