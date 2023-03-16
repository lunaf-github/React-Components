import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Footer = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`footer theme--${theme}`}>
      <h2>Footer</h2>
    </div>
  );
}

export default Footer;