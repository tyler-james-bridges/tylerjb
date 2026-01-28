'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className={cn(
          'relative p-2 rounded-lg transition-colors duration-200',
          'hover:bg-muted',
          className
        )}
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'relative p-2 rounded-lg transition-all duration-300',
        'hover:bg-muted hover:text-accent',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        className
      )}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <Sun
        className={cn(
          'h-5 w-5 transition-all duration-300',
          theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0 absolute'
        )}
      />
      <Moon
        className={cn(
          'h-5 w-5 transition-all duration-300',
          theme === 'dark'
            ? '-rotate-90 scale-0 absolute'
            : 'rotate-0 scale-100'
        )}
      />
    </button>
  );
}
