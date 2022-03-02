import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';
import { 
  Container, 
  HeaderDiv, 
  Menu, 
  NavMenu, 
  Row 
} from "./Header.components";
import { IconContext } from "react-icons/lib";



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
                <Link to='/' >The Square.</Link>
              </div>

              <Menu onClick={handleClick}>
                  {click ? <FaTimes /> : 'MENU' }
              </Menu>

              <NavMenu onClick={handleClick} click={click}>
                <div className="menu__item">
                  <a href="/" className="menu__item-link">Accueil</a>
                  <div className="marquee">
                    <div className="marquee__inner-wrap">
                      <div className="marquee__inner" aria-hidden="true">
                        <span >Homepage</span>
                        <div className="marquee__img" style={{ background: 'url(../assets/img/1.jpg)' }}></div>
                        <span>Accueil</span>
                        <div className="marquee__img" style={{background: "url(../assets/img/2.jpg)"}}></div>
                        <span>Index</span>
                        <div className="marquee__img" style={{background: "url(../assets/img/3.jpg)"}}></div>
                        <span>Landing Page</span>
                        <div className="marquee__img" style={{background: "url(../assets/img/4.jpg)"}}></div>
                        <span>Homepage</span>
                        <div className="marquee__img" style={{background: "url(../assets/img/1.jpg)"}}></div>
                        <span>Accueil</span>
                        <div className="marquee__img" style={{background: "url(../assets/img/2.jpg)"}}></div>
                        <span>Index</span>
                        <div className="marquee__img" style={{background: "url(../assets/img/3.jpg)"}}></div>
                        <span>Landing Page</span>
                        <div className="marquee__img" style={{background: "url(../assets/img/4.jpg)"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </NavMenu>

            </Row>
          </Container>
        </HeaderDiv>
      </IconContext.Provider>
    </>
  );
};

export default Header;
