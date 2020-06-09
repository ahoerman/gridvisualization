import { Navbar } from 'react-bootstrap';
import AppleseedInitiativeRingTextLogo2 from "./AppleseedInitiativeRingTextLogo2.png"
import React from "react";
import './Navigation.css';
import NavTabs from './NavTabs';
import { useHistory } from "react-router-dom";

function NavbarTop() {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  };

  return (
    <div className="NavBarDiv">
      <Navbar expand="lg" variant="dark" className="navbar navbar-custom">
        <Navbar.Brand href="#home">
        <div onClick={handleClick}>
          <img src={AppleseedInitiativeRingTextLogo2} alt="Appleseed Logo" className="headerLogo img-fluid" />
        </div>
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
