import React from 'react';
import useThemeContext from './useThemeContext';

const Footer = () => {
  const { theme } = useThemeContext();

  return (
    <div className={`footer theme--${theme}`}>
      <h2>Footer</h2>
    </div>
  );
}

export default Footer;