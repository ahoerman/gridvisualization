import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './header.css';
import useWindowSize from "../../hooks/useWindowSize";

//get fontawesome imports
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  
  const { width} = useWindowSize();
  return (
    <>
    { width > 750 ? 
    <Container>
    <Row>
        <Col>
            <h2 className = " gridTitle text-center"><FontAwesomeIcon icon={faBolt}/> Electric Grid Visualization</h2>
        </Col> 
    </Row> 
      <div className = "row HeaderDiv">    
        <p className="HeaderParagraph">The first step towards a clean power grid is understanding where we are today and where we need to go in the years to come. A list of Power plants per state is available through our Power Plants page. For more information on renewable and non-renewable energy sources, please visit our FAQs.</p>
        <p className="HeaderParagraph"><strong> Click on the States to generate charts or Click on a Top Ten Button to see the 10 highest producers per capita per source.</strong></p>
      </div>
    </Container>
    :
    <Container>
    <Row>
        <Col>
            <h4 className = " gridTitle text-center"><FontAwesomeIcon icon={faBolt}/> Electric Grid Visualization</h4>
        </Col> 
    </Row> 
      <div className = "row HeaderDiv">    
        <p className="HeaderParagraph"> The first step towards a clean power grid is understanding where we are today and where we need to go in the years to come. A list of Power plants per state is available through our Power Plants page. For more information on renewable and non-renewable energy sources, please visit our FAQs.</p>
        <p className="HeaderParagraph"> Use the Pulldown to select a State to see it's energy profile. For full functionality of this site, use a desktop size device.</p>
      </div>
    </Container>
      }
    </>
  );
}

export default Header;
