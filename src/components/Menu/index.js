import React from "react";
import { MenuWrapper } from "../General.components";
import MenuItem from "./MenuItem";
import { menus } from '../../datas/menusData'
// import "./index.css"



const Menu = () => {
    return (
      <MenuWrapper>
        <nav className="menu">
          {menus.map((menu, index) => (
            <MenuItem link={menu.link} marquee={menu.marquee} key={index} />
          ))}
        </nav>
      </MenuWrapper>
    );
  };
  
  export default Menu;