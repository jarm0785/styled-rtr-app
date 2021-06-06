import { ICustomTheme } from '../interface/ITheme';

export const darkTheme: ICustomTheme = {
  colors: {
    primary: '#FFF',
    secondary: '',
    primaryBackground: 'linear-gradient(to right, #000000, #434343)',
    secondaryBackground: '',
    textPrimary: '#FFFFFF',
    textSecondary: '#FAFAFA',
    border: '#1da1f2',
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
      backgroundColor: '#15202b',
      hoverBackgroundColor: '#162e42'
    }
  },
};
