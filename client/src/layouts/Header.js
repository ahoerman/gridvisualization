import React from "react";
import '../App.css';
import AppleseedInitiativeRingTextLogo2 from '..//AppleseedInitiativeRingTextLogo2.png';
import { Navbar, Container, Row, Col} from 'react-bootstrap';

// get fontawesome imports
import { faCheckSquare, faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark" md={3}>
        <Navbar.Brand href="#home">
          <img src={AppleseedInitiativeRingTextLogo2} alt="Appleseed Logo"  className="headerLogo d-inline-block align-top"/>
        </Navbar.Brand>
        <Col md={4}>
          <h2 className="mainTitle"><FontAwesomeIcon icon={faBolt}/> Electric Grid Visualization <FontAwesomeIcon icon={faBolt}/></h2>
        </Col> 
      </Navbar>
    <div className = "HeaderDiv">
        <Row>
          <Col md={8}>
              <h3><FontAwesomeIcon icon={faCheckSquare} /> Click on one or more States to see and compare their energy profile</h3>
          </Col>
        </Row>
    </div>
    </Container>
  );
}

export default Header;