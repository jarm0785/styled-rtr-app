import type { ThemeType } from '../interface/ITheme';

type ThemeConstant = Record<string, ThemeType>;

export const THEME: ThemeConstant = {
  DEFAULT: 'default',
  DARK: 'dark',
};
