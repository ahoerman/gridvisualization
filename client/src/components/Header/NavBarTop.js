import { Navbar, Nav } from 'react-bootstrap';
import AppleseedInitiativeRingTextLogo2 from "./AppleseedInitiativeRingTextLogo2.png"
import React from "react";
import './header.css';

function NavbarTop() {
  return (
    <div className="NavBarDiv">
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"><img src={AppleseedInitiativeRingTextLogo2} alt="Appleseed Logo"  className="headerLogo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="NavBarStyle mr-auto">
      <Nav.Link href="#features">HOME</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default NavbarTop;
