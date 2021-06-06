/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare const window: any;
