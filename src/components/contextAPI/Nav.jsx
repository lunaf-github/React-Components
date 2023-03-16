import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Nav = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`nav theme--${theme}`}>
      <span className='nav__menuItem'>Home</span>
      <span className='nav__menuItem'>Products</span>
      <span className='nav__menuItem'>About Us</span>
    </div>
  );
}

export default Nav;