import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function FooterObj() {
  return (
    <div className = "footer FooterDiv">
      <div>
      <p className="footercontent">Copyright 2020 Appleseed Initiative</p>
        <a href="https://www.appleseedinit.org/" target="_blank" rel="noopener noreferrer">Appleseed Initiative</a>
        <FontAwesomeIcon icon={ faEnvelope } />
      
      </div>
    </div>
  );
}

export default FooterObj;

