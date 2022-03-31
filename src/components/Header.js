import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { IconContext } from "react-icons/lib";
import Menu from "./Menu";
import styled from 'styled-components'
import { keyframes } from "styled-components";

const Header = () => {

  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const currentRoute = window.location.pathname;

  const handleClick = () => setClick(!click);

  if(currentRoute !== "/portfolio"){
    const changeBackground = () => {
      if(window.scrollY >= 80) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
    window.addEventListener('scroll', changeBackground)
  }

  return (
    <>
    	{/* PROPERTIES OF REACT ICONS */}
      <IconContext.Provider value={{ size: '1.8rem' }}>
        <HeaderDiv className={navbar ? 'actived' : ''} >
          <Container>
            <Row className='space-between'>
              <div className='logo'>
                <a href='/' >
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

const smooth = keyframes`
  0% { opacity: 0; }
  50% { opacity: .5; }
  100% {opacity: 1;}
`;

const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1560px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  &.space-between {
    justify-content: space-between;
  }
`;

const HeaderDiv = styled.header`
  font-size: 16px;
  position: fixed;
  z-index: 99;
  width: 100%;
  font-weight: "700";
  background: transparent;

  &.actived{
    animation: ${smooth} 1.2s ease-in;
    background: -moz-linear-gradient(top,  rgba(188,139,94,1) 0%, rgba(225,204,184,0) 81%, rgba(234,219,205,0) 100%);
    background: -webkit-linear-gradient(top,  rgba(188,139,94,1) 0%,rgba(225,204,184,0) 81%,rgba(234,219,205,0) 100%); 
    background: linear-gradient(to bottom,  rgba(188,139,94,1) 0%,rgba(225,204,184,0) 81%,rgba(234,219,205,0) 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bc8b5e', endColorstr='#00eadbcd',GradientType=0 );
  }

  > ${Container} {
    > ${Row} {
      height: 128px;
      .logo{
        a{
          img{
            width: 45px;
            height: auto;
            margin-right: 5px;
          }
        }
        @media screen and (max-width: 500px) {
          opacity: 0;
        }
      }
    }
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;
  border-radius: 100%;
  border: 1px solid var(--black-chocolate);
  height: 80px;
  width: 80px;
  display: flex;
  z-index: 2000;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--almond-bg);
    background: var(--black-chocolate);
  }

  
  @media screen and (max-width: 500px) {
    height: 50px;
    width: 50px;
    font-size: .7rem;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    position: absolute;
    top: 0;
    left: ${({click}) => (click ? '-12%' : '-135%')};
    opacity: ${({click}) =>(click ? '1' : 0)};
    transition: all 0.5s ease;
    background: var(--almond-bg);

    @media screen and (max-width: 1280px){
      width: 110vw;
    }

    @media screen and (max-width: 1024px) {
      left: ${({click}) => (click ? '-5%' : '-135%')};
    }

`;

export default Header;
