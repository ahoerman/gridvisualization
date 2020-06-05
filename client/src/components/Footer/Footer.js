import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 


function FooterObj() {
  return (
    <div className = "footer FooterDiv">
      <div>
      <p className="footercontent">
        <a href="https://www.appleseedinit.org/" target="_blank" rel="noopener noreferrer">Appleseed Initiative</a>
        
          <a href="https://www.facebook.com/Appleseed-Initiative-101798068060276" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faFacebookF } /> </a>
        
        <a href="mailto:info@appleseedinitiative.org"><FontAwesomeIcon icon={ faEnvelope } /></a>
        </p>
      
      </div>
    </div>
  );
}

export default FooterObj;

