/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export const withRefresh = <P extends Record<string, unknown>>(Component: React.ComponentType<P>):
  React.FC<P> => ({ ...props }) => {

    // Needed for react-refresh to work
    if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
      const runtime = require('react-refresh/runtime');
      runtime.injectIntoGlobalHook(window);
      (window as any).$RefreshReg$ = () => {};
      (window as any).$RefreshSig$ = () => (type: any) => type;
    }

    return <Component {...props as P} />;
  };
