import React, { useContext } from 'react';
import './smallApp.css'
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import ThemeContext from './ThemeContext';

const SmallApp = () => {
  const { theme } = useContext(ThemeContext);

  return (
      <div className={`smallapp theme--${theme}`}>
        <Header />
        <Main />
        <Footer />
      </div>
  );
}

export default SmallApp;