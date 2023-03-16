import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeProvider({ children }) {
 const [theme, setTheme] = useState("light");

 function toggleTheme(e) {
   setTheme(e.target.checked? 'dark' : 'light');
 }
 
 return (
   <ThemeContext.Provider value={{theme, toggleTheme}}>
    {children}
   </ThemeContext.Provider>
 );
}

export default ThemeProvider;