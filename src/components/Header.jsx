import React from "react";
import { Navbar, Nav, NavDropdown }from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../styles/Header.css"


function Header(){
  return (
    <>
    <div id="header">
  <Navbar>
  <Link to='/' className="companyName" >Tap Room D</Link>
  
    <Nav className="mr-auto">
      <Link className='navLink' to="kegs">Beers Always Available</Link>
      <Link className='navLink' to="kegsadded">New Arivals</Link>
    </Nav>
  </Navbar>
  </div>
  </>
  );
}

export default Header;
