import React from "react";
import { Navbar, Nav, NavDropdown }from 'react-bootstrap';
import "../styles/Header.css"


function Header(){
  return (
    <>
    <div id="header">
  <Navbar>
  <Navbar.Brand className="companyName" href="/">Tap Room D</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#kegs">Available Kegs</Nav.Link>
    </Nav>
  </Navbar>
  </div>
  </>
  );
}

export default Header;
