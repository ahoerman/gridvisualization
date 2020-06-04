import React from "react";
import './header.css';

// get fontawesome imports
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <>
    <div class="container">
    <div class="row">
        <div class="col">
            <h2 class = " gridTitle text-center">Electric Grid Visualization <FontAwesomeIcon icon={faBolt} /></h2>
        </div> 
    </div> 
      <div class = "row HeaderDiv">    
              <p class="text-center">The first step towards a clean power grid is understanding where we are today and where we need to go in the years to come.  Click on a State to see the energy sources
              or click on several States to compare them. Click on the FAQ tab above for further information. <strong>Charts for 
              Generation and CO2 will appear below.</strong></p>
              <p class ="text-center">Another option: Click on these Top Ten Button to see the 10 highest for type of energy source.</p>
      </div>
    </div>
    </>
  );
}

export default Header;
