'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn('icon-button', className)}
      aria-label={
        mounted ? `Switch to ${isDark ? 'light' : 'dark'} mode` : 'Toggle theme'
      }
    >
      <Sun
        className={cn(
          'absolute h-5 w-5 transition-[opacity,transform,filter] duration-200 [transition-timing-function:cubic-bezier(0.2,0,0,1)]',
          isDark
            ? 'scale-100 opacity-100 blur-0'
            : 'scale-25 opacity-0 blur-[4px]'
        )}
        aria-hidden="true"
      />
      <Moon
        className={cn(
          'absolute h-5 w-5 transition-[opacity,transform,filter] duration-200 [transition-timing-function:cubic-bezier(0.2,0,0,1)]',
          isDark
            ? 'scale-25 opacity-0 blur-[4px]'
            : 'scale-100 opacity-100 blur-0'
        )}
        aria-hidden="true"
      />
    </button>
  );
}
