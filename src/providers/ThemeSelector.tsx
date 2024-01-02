import React from 'react';
import { COLORS } from "./colors";
import useThemeContext from './useThemeContext';

const ThemeSelector = () => {

    const { theme, toggleTheme } = useThemeContext();

    const options = Object.keys(COLORS).map(color => {
        return <option key={color} value={color}>{color}</option>
    });

    return (
        <select value={theme} onChange={toggleTheme}>
            {options}
        </select>
    );
}

export default ThemeSelector;