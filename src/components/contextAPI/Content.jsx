import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
   <div className={`content theme--${theme}`}>
     <h2>Content</h2>
   </div>
  );
}

export default Content;