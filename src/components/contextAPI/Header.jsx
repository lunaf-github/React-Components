import React from 'react';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';
import Nav from './Nav';

const Header = () => {
  const {theme, toggleTheme } = useContext(ThemeContext);
  
  return (
   <div className={`header theme--${theme}`}>
     <h1 className='header__title'>Small App</h1>
     <input type="checkbox" onClick={toggleTheme}/>
     <Nav />
   </div>
  );
}

export default Header;