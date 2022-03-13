import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { 
  Container, 
  HeaderDiv, 
  MenuIcon, 
  NavMenu, 
  Row 
} from "./General.components";
import { IconContext } from "react-icons/lib";
import Menu from "./Menu";



const Header = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);



  return (
    <>
    	{/* PROPERTIES OF REACT ICONS */}
      <IconContext.Provider value={{ size: '1.8rem' }}>
        <HeaderDiv>
          <Container>
            <Row className='space-between'>
              <div className='logo'>
                <a href='/' >
                  {/* <img src='./assets/img/logo1.png' alt="logo the square"/> */}
                  The Square.
                </a>
              </div>

              <MenuIcon onClick={handleClick}>
                  {click ? <FaTimes /> : 'MENU' }
              </MenuIcon>

              <NavMenu onClick={handleClick} click={click} >
                <Menu/>
              </NavMenu>

            </Row>
          </Container>
        </HeaderDiv>
      </IconContext.Provider>
    </>
  );
};

export default Header;
