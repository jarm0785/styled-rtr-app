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
    color: '#14171a',
    borderColor: '#14171a',
    backgroundColor: 'none',
    hoverColor: '#FFFFFF',
    hoverBackgroundColor: 'rgba(33,150,243, 0.3)'
  },
};
