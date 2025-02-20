import type { FC, ReactNode } from 'react';
import '@/styles/globals.css';
import ThemeProvider from '@/components/theme-provider';

type LayoutProps = {
  children?: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
