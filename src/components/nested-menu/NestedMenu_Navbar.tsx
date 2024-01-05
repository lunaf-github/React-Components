import React from 'react';
import { menuItems } from './NestedMenu_MenuItemsData';
import MenuItems from './NestedMenu_MenuItems'

const Navbar = () => {

  const depthLevel = 0;

  return (
    <nav className="navbar">
      <ul className="navbar__menus">
        {menuItems.map((menu, index) => {
            return <MenuItems item={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  )
}
export default Navbar