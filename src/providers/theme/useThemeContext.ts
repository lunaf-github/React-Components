import { useContext } from 'react';
import { ThemeContextType } from './types';
import ThemeContext from './themeContext';


export default function useThemeContext(): ThemeContextType {
  const theme: ThemeContextType = useContext(ThemeContext);

  if (!theme) {
    throw new Error("useThemeContext must be used withing ThemeProvider")
  }

  return theme;
}