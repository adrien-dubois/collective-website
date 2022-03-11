import React from "react";
import { MenuWrapper } from "../General.components";
import MenuItem from "./MenuItem";
// import "./index.css"

const menus = [
    {
        link: {
            name: "Accueil",
            url: "/model/the-square"
        },
        marquee: [
            {
                name: "Homepage",
                url: "1.jpg"
            },

            {
                name: "Accueil",
                url: "2.jpg"
            },

            {
                name: "Index",
                url: "3.jpg"
            },
            
            {
                name: "Landing Page",
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
                name: "Équipe",
                url: "2.jpg"
            },

            {
                name: "Team",
                url: "3.jpg"
            },
            
            {
                name: "About us",
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
                name: "Projets",
                url: "1.jpg"
            },

            {
                name: "Portfolio",
                url: "2.jpg"
            },

            {
                name: "Réalisations",
                url: "3.jpg"
            },
            
            {
                name: "Exemples",
                url: "4.jpg"
            }
        ]
    }, 

    {
        link: {
            name: "Contact",
            url: "#"
        },
        marquee: [
            {
                name: "Écrivez nous",
                url: "1.jpg"
            },

            {
                name: "Contact",
                url: "2.jpg"
            },

            {
                name: "The Square",
                url: "3.jpg"
            },
            
            {
                name: "E-Mail",
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