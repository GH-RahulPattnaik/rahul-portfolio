'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
interface Ctx { theme: Theme; toggleTheme: () => void; }
const ThemeContext = createContext<Ctx>({ theme: 'light', toggleTheme: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme]   = useState<Theme>('light');
  const [ready, setReady]   = useState(false);

  useEffect(() => {
    const stored  = localStorage.getItem('theme') as Theme | null;
    const system  = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const init    = stored || system;
    setTheme(init);
    document.documentElement.setAttribute('data-theme', init);
    setReady(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  if (!ready) return null;
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);