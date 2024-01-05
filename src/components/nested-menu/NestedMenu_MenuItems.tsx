import React, { EventHandler } from 'react';
import { useState, useEffect, useRef } from 'react';
import { JSONMenuItem } from './types';
import Dropdown from './NestedMenu_Dropdown';

const MenuItems = ({item, depthLevel}: {item: JSONMenuItem, depthLevel: number}) => {

  const nestedMenuScreenSize = 300;

  const [dropdown, setDropdown] = useState(false);
  let ref = useRef<HTMLLIElement>(null);

  // close menu when use clicks outside the menu. 
  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent): void => {
     if (dropdown && ref.current && !ref.current.contains(event.target as Element)) {
      setDropdown(false);
     }
    };


    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     // Cleanup the event listener
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
   }, [dropdown]);

   // open and close menu if mouse enters or leaves element

   const onMouseEnter = () => {
      setDropdown(true);
   };
   
   const onMouseLeave = () => {
      setDropdown(false);
   };


  return(
    <li 
      className="menu-items" 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
    >
      {item.submenu? (
        <>
          <button 
            className="menu-items__submenu" 
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown? "true" : "false"}
            onClick={() => setDropdown((prevState) => !prevState)}
          >
            {item.title}{' '}
            {depthLevel > 0? <span>&raquo;</span> : <span className="menu-items--down-arrow" />}
          </button>
          <Dropdown depthLevel={depthLevel} submenus={item.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a className="menu-items__no-submenu" href={item.url}>{item.title}</a>
      )}
    </li>
  )
}

export default MenuItems