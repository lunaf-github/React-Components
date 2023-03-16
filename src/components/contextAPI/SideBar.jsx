import React from 'react';
import useThemeContext from './useThemeContext';

const SideBar = () => {
  const { theme } = useThemeContext();

  return (
    <div className={`sidebar theme--${theme}`}>
      <h2>Side</h2>
      <h2>Bar</h2>
    </div>
  );
}

export default SideBar;