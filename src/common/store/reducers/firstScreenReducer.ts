import { createSlice } from '@reduxjs/toolkit';
import thunkActions from '../actions/thunkActions';
import initialState from '../initialState';

const firstScreenReducer = createSlice({
  name: 'firstScreen',
  initialState: initialState.firstScreen,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(thunkActions.getSampleData.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(thunkActions.getSampleData.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      };
    });
    builder.addCase(thunkActions.getSampleData.rejected,  (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    });
  },
});

export const currencyExchangeActions = firstScreenReducer.actions;

export default firstScreenReducer.reducer;
