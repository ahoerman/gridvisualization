import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import AppleseedInitiativeRingTextLogo2 from "./AppleseedInitiativeRingTextLogo2.png"
import React from "react";
import './header.css';

function NavbarTop() {
  return (
    <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"><img src={AppleseedInitiativeRingTextLogo2} alt="Appleseed Logo"  className="headerLogo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="NavBarStyle mr-auto">
      <Nav.Link href="#features">HOME</Nav.Link>
      <NavDropdown title="COMMUNITY" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Here to Help</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Site Assistant</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="CLIMATE" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Here to Help</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Site Assistant</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="GET INVOLVED" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Here to Help</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Site Assistant</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
  );
}

export default NavbarTop;
