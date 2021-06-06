import { Theme } from 'styled-system';

interface IButtonTheme {
  color: string;
  borderColor: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
}

export interface ICustomTheme extends Theme {
  button?: {
    primary: IButtonTheme;
    secondary: IButtonTheme;
  }
}

export type ThemeType = 'default' | 'dark';
