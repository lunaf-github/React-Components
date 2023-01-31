import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Dropdown from './NestedMenu_Dropdown';

const MenuItems = ({items, depthLevel}) => {

  const nestedMenuScreenSize = 300;

  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  // close menu when use clicks outside the menu. 
  useEffect(() => {
    const handler = (event) => {
     if (dropdown && ref.current && !ref.current.contains(event.target)) {
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
      {items.submenu? (
        <>
          <button 
            className="menu-items__submenu" 
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown? "true" : "false"}
            onClick={() => setDropdown((prevState) => !prevState)}
          >
            {items.title}{' '}
            {depthLevel > 0? <span>&raquo;</span> : <span className="menu-items--down-arrow" />}
          </button>
          <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a className="menu-items__no-submenu" href={items.url}>{items.title}</a>
      )}
    </li>
  )
}

export default MenuItems