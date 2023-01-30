import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Dropdown from './NestedMenu_Dropdown';

const MenuItems = ({items, depthLevel}) => {

  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

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

   const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
   };
   
   const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
   };


  return(
    <li 
      className="menuItems" 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
    >
      {items.submenu? (
        <>
          <button 
            className="menuItems__subMenu" 
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{' '}
            {depthLevel > 0? <span>&raquo;</span> : <span className="menuItems__arrow" />}
          </button>
          <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a className="menuItems__noSubMenu" href={items.url}>{items.title}</a>
      )}
    </li>
  )
}

export default MenuItems