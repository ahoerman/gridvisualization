import React from "react";
import './header.css';
import { Row, Col} from 'react-bootstrap';
import NavbarTop from "./NavBarTop";

// get fontawesome imports
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <>
      <NavbarTop />
    <div className = "HeaderDiv">
        <Row>
          <Col>
            <Row>
              <h1 className="mx-auto">Electric Grid Visualization <FontAwesomeIcon icon={faBolt} /></h1>
            </Row> 
          </Col>
        </Row>
    </div>
    </>
  );
}

export default Header;
