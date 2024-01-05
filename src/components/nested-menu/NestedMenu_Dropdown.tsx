import React from 'react';
import MenuItems from './NestedMenu_MenuItems';
import { JSONMenuItem } from './types';

const Dropdown = ({submenus, dropdown, depthLevel}: {submenus: JSONMenuItem[], dropdown: boolean, depthLevel: number}) => {
  
  depthLevel += 1;
  const dropdownClass = depthLevel > 1? "dropdown__submenu" : "";

  return(
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "dropdown--show" : ""} `}>
      {submenus.map((submenu: JSONMenuItem, index: number) => (
        <MenuItems item={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
}

export default Dropdown