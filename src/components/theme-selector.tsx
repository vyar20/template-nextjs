'use client';

import type { FC, ReactNode } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from './ui/dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Button } from './ui/button';
import { Laptop, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useRender } from '@/hooks/use-render';

type ThemeSelectorProps = {
  children?: ReactNode;
};

const themeIcon = {
  dark: <Moon />,
  light: <Sun />,
  system: <Laptop />,
};

export const getIcon = (key: keyof typeof themeIcon) => themeIcon[key];

export const ThemeSelectorRoot: FC<ThemeSelectorProps> = () => {
  const { theme, setTheme } = useTheme();
  const isRendered = useRender();

  if (!isRendered) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='fixed right-4 top-4'>
        <Button variant='outline'>
          {getIcon(theme as keyof typeof themeIcon)}Theme
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {['light', 'dark', 'system'].map((theme) => (
          <DropdownMenuItem
            key={theme}
            onClick={() => setTheme(theme)}
            className='capitalize'
          >
            {theme}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
