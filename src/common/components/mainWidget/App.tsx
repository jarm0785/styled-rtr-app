import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import useCustomTheme from '../../hooks/useCustomTheme';
import WidgetRouter from '../widgetRouter/WidgetRouter';

const App: FunctionComponent = () => {
  const { theme, activeTheme } = useCustomTheme();

  return (
    <ThemeProvider theme={ theme[activeTheme] }>
      <WidgetRouter />
    </ThemeProvider>
  );
};

export default App;
