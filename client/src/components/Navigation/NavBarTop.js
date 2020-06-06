import { Navbar } from 'react-bootstrap';
import AppleseedInitiativeRingTextLogo2 from "./AppleseedInitiativeRingTextLogo2.png"
import React from "react";
import './Navigation.css';
import NavTabs from './NavTabs';

function NavbarTop() {
  return (
    <div className="NavBarDiv">
      <Navbar expand="lg" variant="dark" className="navbar">
        <Navbar.Brand href="#home">
          <img src={AppleseedInitiativeRingTextLogo2} alt="Appleseed Logo" className="headerLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <NavTabs />
        </Navbar.Collapse>


      </Navbar>
    </div>
  );
}

export default NavbarTop;
