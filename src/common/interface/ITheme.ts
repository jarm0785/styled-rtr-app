import { Theme } from 'styled-system';

interface IButtonTheme {
  color: string;
  borderColor: string;
  backgroundColor: string;
  hoverColor: string;
  hoverBackgroundColor: string;
}

export interface ICustomTheme extends Theme {
  button?: IButtonTheme;
}

export type ThemeType = 'default' | 'dark';
