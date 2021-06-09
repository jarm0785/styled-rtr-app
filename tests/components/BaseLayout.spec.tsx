/**
 * @jest-environment jsdom
 */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { fireEvent, queryByTestId } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import useCustomTheme from '../../src/common/hooks/useCustomTheme';
import { render } from '../utils/test-utils';
import ScreenOne from '../../src/ScreenOne/ScreenOne';
import BaseLayout from '../../src/common/components/baseLayout/BaseLayout';
import { defaultTheme } from '../../src/common/theme/theme';

describe('Base Layout display and theme toggle', () => {
  const ThemedBaseLayout = () =>
    <ThemeProvider theme={ defaultTheme }>
      <BaseLayout />
    </ThemeProvider>;

  const ThemedScreen = () => {
    const { theme, activeTheme } = useCustomTheme();

    return (
      <ThemeProvider theme={ theme[activeTheme]}>
        <ScreenOne />
      </ThemeProvider>
    );
  };

  // Sample snapshot test with styled components.
  it('should render base layout component properly', () => {
    const componentRenderer = renderer.create(<ThemedBaseLayout/>);
    const tree = componentRenderer.toJSON();

    expect(tree).toMatchSnapshot();
  });

  // Sample Component test using providers and jsdom
  it('Should toggle between light and dark theme.', () => {
    const { container } = render(<ThemedScreen/>);
    const header = queryByTestId(container, 'base_layout:header');
    const main = queryByTestId(container, 'base_layout:header');
    const footer = queryByTestId(container, 'base_layout:header');
    const toggle = queryByTestId(container, 'switch:toggle_wrapper');
    const layoutElements = [header, main, footer];

    fireEvent.click(toggle);
    layoutElements.forEach((el) => {
      expect(el).toHaveStyle('background: linear-gradient(to right,#000000,#434343)');
    });
    fireEvent.click(toggle);
    layoutElements.forEach((el) => {
      expect(el).toHaveStyle('background: linear-gradient(to right,#E3F2FD,#FFF)');
    });
  });
});
