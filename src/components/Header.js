import React from "react";
import { Link } from "react-router-dom";
import { 
  Container, 
  HeaderDiv, 
  Menu, 
  Row 
} from "./Header.components";
const Header = () => {
  return (
    <HeaderDiv>
      <Container>
        <Row className='space-between'>
          <div className='logo'>
            <Link to='/'>The Square.</Link>
          </div>
          <Menu>MENU</Menu>
        </Row>
      </Container>
    </HeaderDiv>
  );
};

export default Header;
