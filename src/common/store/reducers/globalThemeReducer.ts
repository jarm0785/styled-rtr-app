import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ThemeType } from '../../interface/ITheme';
import initialState from '../initialState';

const globalThemeReducer = createSlice({
  name: 'globalTheme',
  initialState: initialState.globalTheme,
  reducers: {
    setActiveTheme: (state, { payload }: PayloadAction<ThemeType>) => {
      state.activeTheme = payload;
    },
  },
});

export const gobalThemeActions = globalThemeReducer.actions;

export default globalThemeReducer.reducer;
