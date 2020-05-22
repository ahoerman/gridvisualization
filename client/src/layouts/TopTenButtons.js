import React from "react";
import '../App.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Navbar, Container, Row, Col} from 'react-bootstrap';

// get fontawesome imports
import { faWind, faSun, faWater, faAtom, faBurn, faSnowplow, faOilCan, faLeaf, faTrashRestoreAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TopTenButtons() {
  return (
    <div className = "ButtonDiv">
    <Row>
      <Col>
        <Row>
          <h3 className="buttonTitle"> or click to see the top 10 for each power source</h3>
        </Row> 
        <ButtonGroup vertical>
            <Button className="button"><FontAwesomeIcon icon={faWind} /> Wind</Button>
            <Button className="button"><FontAwesomeIcon icon={faSun} /> Solar</Button>
            <Button className="button"><FontAwesomeIcon icon={faWater} /> Hydro</Button>
            <Button className="button"><FontAwesomeIcon icon={faAtom} /> Nuclear</Button>
            <Button className="button"><FontAwesomeIcon icon={faBurn} /> Natural Gas</Button>
            <Button className="button"><FontAwesomeIcon icon={faOilCan} /> Petroleum</Button>
            <Button className="button"><FontAwesomeIcon icon={faSnowplow} /> Coal</Button>
            <Button className="button"><FontAwesomeIcon icon={faLeaf} /> Other Biomass</Button>
            <Button className="button"><FontAwesomeIcon icon={faTrashRestoreAlt} /> Reset Colors</Button>
        </ButtonGroup>
      </Col>
    </Row>
</div>

  );
}

export default TopTenButtons;