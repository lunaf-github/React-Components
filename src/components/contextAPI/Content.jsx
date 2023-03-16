import React from 'react';
import useThemeContext from './useThemeContext';

const Content = () => {

  const { theme } = useThemeContext()

  return (
   <div className={`content theme--${theme}`}>
     <h2>Content</h2>
   </div>
  );
}

export default Content;