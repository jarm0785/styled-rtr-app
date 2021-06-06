import { ICustomTheme } from '../interface/ITheme';

export const defaultTheme: ICustomTheme = {
  colors: {
    primary: '#14171a',
    secondary: '#657786',
    primaryBackground: 'linear-gradient(to right, #E3F2FD, #FFF);',
    secondaryBackground: '',
    textPrimary: '#14171a',
    textSecondary: '#657786',
  },
  button: {
    primary: {
      color: '#fff',
      borderColor: '#1da1f2',
      backgroundColor: '#1da1f2',
      hoverBackgroundColor: '#1991da'
    },
    secondary: {
      color: '#1da1f2',
      borderColor: '#1da1f2',
      backgroundColor: '#fff',
      hoverBackgroundColor: '#ebf5fd'
    }
  },
};
