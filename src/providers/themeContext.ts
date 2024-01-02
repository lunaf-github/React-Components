import { createContext } from "react";

const ThemeContext =  createContext({theme:'', toggleTheme: (event: React.ChangeEvent<HTMLSelectElement>) => {}});
 
export default ThemeContext;

