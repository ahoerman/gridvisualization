import { Navbar } from 'react-bootstrap';
import AppleseedInitiativeRingTextLogo2 from "./AppleseedInitiativeRingTextLogo2.png"
import React from "react";
import './header.css';
// get fontawesome imports
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBarTop() {
  return (
    <div class="container-fuid navBarTop">
    <div class="row">
        <div class="col">
            <img src={AppleseedInitiativeRingTextLogo2} alt="Appleseed Logo" class="headerLogo background-color: #FFFFFF; " />
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h2 >Electric Grid Visualization <FontAwesomeIcon icon={faBolt} /></h2>
        </div> 
    </div> 
    </div> 
  );
}

export default NavBarTop;
