import React from "react";
import { MenuWrapper } from "../General.components";
import MenuItem from "./MenuItem";
// import "./index.css"

const menus = [
    {
        link: {
            name: "Accueil",
            url: window.innerWidth > 1100 ? "/model/the-square" : "/"
        },
        marquee: [
            {
                name: "Accueil",
                url: "1.jpg"
            },

            {
                name: "Accueil",
                url: "2.jpg"
            },

            {
                name: "Accueil",
                url: "3.jpg"
            },
            
            {
                name: "Accueil",
                url: "4.jpg"
            }
        ]
    }, 

    {
        link: {
            name: "Le Collectif",
            url: "/collectif"
        },
        marquee: [
            {
                name: "Collectif",
                url: "1.jpg"
            },

            {
                name: "Collectif",
                url: "2.jpg"
            },

            {
                name: "Collectif",
                url: "3.jpg"
            },
            
            {
                name: "Collectif",
                url: "4.jpg"
            }
        ]
    },

    {
        link: {
            name: "Portfolio",
            url: "/portfolio"
        },
        marquee: [
            {
                name: "Portfolio",
                url: "1.jpg"
            },

            {
                name: "Portfolio",
                url: "2.jpg"
            },

            {
                name: "Portfolio",
                url: "3.jpg"
            },
            
            {
                name: "Portfolio",
                url: "4.jpg"
            }
        ]
    }, 

    {
        link: {
            name: "Contact",
            url: "/contact"
        },
        marquee: [
            {
                name: "Contact",
                url: "1.jpg"
            },

            {
                name: "Contact",
                url: "2.jpg"
            },

            {
                name: "Contact",
                url: "3.jpg"
            },
            
            {
                name: "Contact",
                url: "4.jpg"
            }
        ]
    }

]

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