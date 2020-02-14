import React from "react";
import { Navbar, Nav, NavDropdown }from 'react-bootstrap';
import "../styles/Header.css"


function Header(){
  return (
    <>
    <div id="header">
  <Navbar>
  <Navbar.Brand className="companyName" href="#home">Tap Room D</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#kegs">Available Kegs</Nav.Link>
      <Nav.Link href="#seasonal">Seasonal Produce</Nav.Link>
    </Nav>
  </Navbar>
  </div>
  </>
  );
}

export default Header;
