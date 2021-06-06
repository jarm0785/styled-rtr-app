import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../src/common/store/store';

const StoreProvider: FC = ({ children }) => {
  return (
    <Provider store={ store }>
      {children}
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: StoreProvider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
