import React from 'react';
import MenuItems from './NestedMenu_MenuItems';

const Dropdown = ({submenus, dropdown, depthLevel}) => {
  
  depthLevel += 1;
  const dropdownClass = depthLevel > 1? "dropdown__submenu" : "";

  return(
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "dropdown--show" : ""} `}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
}

export default Dropdown