import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../../common/constants/theme';
import type { ThemeType } from '../../common/interface/ITheme';
import themes from './themes';

interface IThemeKnobProps {
  theme: ThemeType;
}

export default ({ children, theme }: PropsWithChildren<IThemeKnobProps>) => (
  <ThemeProvider theme={ themes.customThemes[theme || THEME.DEFAULT] }>
    { children }
  </ThemeProvider>
);
