import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const SideBar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`sidebar theme--${theme}`}>
      <h2>Side</h2>
      <h2>Bar</h2>
    </div>
  );
}

export default SideBar;