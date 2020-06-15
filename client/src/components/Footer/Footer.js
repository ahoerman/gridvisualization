import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { useHistory } from "react-router-dom";


function FooterObj() {
  const history = useHistory();
  
  function handleClick() {
    history.push("/faq");
  };

  return (
    <>
    <div className = "footer FooterDiv">
        <a href="https://www.appleseedinitiative.org/" target="_blank" rel="noopener noreferrer">Appleseed Initiative
        </a>
    </div>
    <div className="footer FooterDiv">
          <a href="https://www.facebook.com/Appleseed-Initiative-101798068060276" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faFacebookF } /> 
          </a>
     </div>   
    <div className="footer FooterDiv">
        <a href="mailto:info@appleseedinitiative.org"><FontAwesomeIcon icon={ faEnvelope } />
        </a>
    </div>
    <div className = "footer FooterDiv">
        <p onClick={handleClick} className="sourcesLink">Sources</p>
    </div>
    </>
  );
}

export default FooterObj;

