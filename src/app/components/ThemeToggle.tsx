'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const selectedTheme =
    mounted && (theme === 'light' || theme === 'dark') ? theme : 'system';

  return (
    <label className={cn('theme-control', className)}>
      <span>Theme</span>
      <select
        className="theme-select"
        value={selectedTheme}
        onChange={(event) => setTheme(event.currentTarget.value)}
        disabled={!mounted}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
}
