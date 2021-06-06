/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './common/components/mainWidget/App';
import store from './common/store/store';
import './index.scss';

// Needed for react-refresh to work
if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const runtime = require('react-refresh/runtime');
  runtime.injectIntoGlobalHook(window);
  (window as any).$RefreshReg$ = () => {};
  (window as any).$RefreshSig$ = () => (type: any) => type;
}

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, document.getElementById('root')
);
