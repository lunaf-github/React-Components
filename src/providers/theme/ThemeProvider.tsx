import React, { useState, useCallback } from "react";
import ThemeContext from "./themeContext";
import { LIGHT, DARK, GREY, COLORS } from './colors'



function ThemeProvider({ children }: {children: React.ReactNode}): React.ReactNode {

  const [theme, setTheme] = useState(LIGHT);

  const toggleTheme = useCallback((event: React.ChangeEvent<HTMLSelectElement>): void => {
    setTheme(event.target.value);
  }, [])


  return (
    <ThemeContext.Provider value={{theme, toggleTheme, colors: COLORS}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;