import { createContext } from "react";
import { ThemeContextType } from "./types";



const ThemeContext =  createContext<ThemeContextType>({
    theme:'', 
    toggleTheme: (event: React.ChangeEvent<HTMLSelectElement>) => {}, 
    colors: {}
});
 
export default ThemeContext;

