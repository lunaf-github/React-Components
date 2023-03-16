import React, { useState } from 'react';
import './smallApp.css'
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import ThemeContext from './ThemeContext';

const SmallApp = () => {
  const [theme, setTheme] = useState("dark");

  function toggleTheme(e) {
    setTheme(e.target.checked? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className= {`smallapp theme--${theme}`}>
        <h1 className='title'>Small App</h1>
        <input type="checkbox" onClick={toggleTheme}/>
        <Nav />
        <Main />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default SmallApp;