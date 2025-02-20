'use client';

import type { FC } from 'react';
import {
  ThemeProvider as NEXTThemeProvider,
  ThemeProviderProps,
} from 'next-themes';

const ThemeProvider: FC<ThemeProviderProps> = ({ children, ...props }) => {
  return (
    <NEXTThemeProvider
      {...props}
      attribute='class'
      defaultTheme='system'
      enableSystem
    >
      {children}
    </NEXTThemeProvider>
  );
};

export default ThemeProvider;
