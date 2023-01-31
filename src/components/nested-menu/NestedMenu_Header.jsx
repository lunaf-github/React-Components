import React from 'react';
import Navbar from "./NestedMenu_Navbar";
import "./NestedMenu.css"


const Header = () => {
  return(
   <header className="header">
    <div className="header__navbar-area">
      <a href="/" className="header__logo">
        Logo
      </a>
      <Navbar />
    </div>
   </header>
  )
}

export default Header;