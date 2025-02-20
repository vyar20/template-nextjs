import type { FC, ReactNode } from 'react';
import { ThemeSelectorRoot } from '../theme-selector';

type LayoutProps = {
  children?: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex h-screen'>
      <ThemeSelectorRoot />
      {children}
    </div>
  );
};

export default Layout;
