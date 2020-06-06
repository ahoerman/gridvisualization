import React from "react";
import './header.css';

// get fontawesome imports
// import { faBolt } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <>
    <div class="container">
    <div class="row">
        <div class="col">
            <h2 class = " gridTitle text-center">Electric Grid Visualization</h2>
        </div> 
    </div> 
      <div class = "row HeaderDiv">    
        <p className="HeaderParagraph">The first step towards a clean power grid is understanding where we are today and where we need to go in the years to come. A list of Power plants per state is available through our Power Plants page. For more information on renewable and non-renewable energy sources, please visit our FAQs.</p>
        <p className="HeaderParagraph"><strong> Click on the States to generate charts or Click on a Top Ten Button to see the 10 highest producers per capita per source.</strong></p>
      </div>
    </div>
    </>
  );
}

export default Header;
