import React from "react";
import './header.css';
import { Row, Col} from 'react-bootstrap';
import NavbarTop from "./NavBarTop";

// get fontawesome imports
import { faCheckSquare, faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <>
      <NavbarTop />
    <div className = "HeaderDiv">
        <Row>
          <Col>
            <Row>
              <h1 className="mainTitle">Electric Grid Visualization <FontAwesomeIcon icon={faBolt} /></h1>
            </Row> 
            <Row>
              <h3><FontAwesomeIcon icon={faCheckSquare} /> Click on one or more States to see and compare their energy profile</h3>
            </Row>
          </Col>
        </Row>
    </div>
    </>
  );
}

export default Header;
