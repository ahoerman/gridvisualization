import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import AppleseedInitiativeRingTextLogo2 from "./AppleseedInitiativeRingTextLogo2.png"
import React from "react";
import './header.css';

function NavbarTop() {
  return (
    <div className="NavBarDiv">
      <Navbar expand="lg" bg="dark" variant="dark" className="navbar">
        <Navbar.Brand href="#home"><img src={AppleseedInitiativeRingTextLogo2} alt="Appleseed Logo" className="headerLogo" /></Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default NavbarTop;
