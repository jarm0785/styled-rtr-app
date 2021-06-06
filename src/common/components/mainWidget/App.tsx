import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import useTheme from '../../hooks/useTheme';
import WidgetRouter from '../widgetRouter/WidgetRouter';

const App: FunctionComponent = () => {
  const { theme, activeTheme } = useTheme();

  return (
    <ThemeProvider theme={ theme[activeTheme] }>
      <WidgetRouter />
    </ThemeProvider>
  );
};

export default App;
