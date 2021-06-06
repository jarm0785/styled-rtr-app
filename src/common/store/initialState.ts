import { ICustomTheme } from '../interface/ITheme';
import type { ThemeType } from '../interface/ITheme';
import { darkTheme } from '../theme/darkTheme';
import { defaultTheme } from '../theme/theme';
import { SerializedError } from '@reduxjs/toolkit';
import { ISampleResponse } from '../interface/IApi';

export interface IStoreState {
  globalTheme: {
    activeTheme: ThemeType;
    theme: {
      default: ICustomTheme,
      dark: ICustomTheme,
    }
  }
  firstScreen: {
    data: ISampleResponse | null;
    loading: boolean;
    error: SerializedError | null;
  };
  secondScreen: {
    whatever: string;
  };
}

export const initialState: IStoreState = {
  globalTheme: {
    activeTheme: 'default',
    theme: {
      default: defaultTheme,
      dark: darkTheme,
    }
  },
  firstScreen: {
    data: null,
    loading: false,
    error: null,
  },
  secondScreen: {
    whatever: '',
  },
};

export default initialState;
