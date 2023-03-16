import React from 'react';

import useThemeContext from './useThemeContext';

const Nav = () => {
  
  const { theme } = useThemeContext();

  return (
    <div className={`nav theme--${theme}`}>
      <span className='nav__menuItem'>Home</span>
      <span className='nav__menuItem'>Products</span>
      <span className='nav__menuItem'>About Us</span>
    </div>
  );
}

export default Nav;