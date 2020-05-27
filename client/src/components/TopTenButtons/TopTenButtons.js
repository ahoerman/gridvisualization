import React from "react";
import './toptenbuttons.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Row, Col} from 'react-bootstrap';
import API from '../../util/API';

// get fontawesome imports
import { faWind, faSun, faWater, faAtom, faBurn, faSnowplow, faOilCan, faLeaf, faTrashRestoreAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TopTenButtons() {
  const receiveConsumers = (type) => {
    API.getTopConsumers(type).then(res => {
      console.log(res.data)
    })
  }

  const buttons = [
    { name: 'Wind', icon: faWind, apiName: 'Wind' },
    { name: 'Solar', icon: faSun, apiName: 'Solar Thermal and Photovoltaic' },
    { name: 'Hydro', icon: faWater, apiName: 'Hydroelectric Conventional' },
    { name: 'Nuclear', icon: faAtom, apiName: 'Nuclear' },
    { name: 'Natural Gas', icon: faBurn, apiName: 'Natural Gas' },
    { name: 'Petroleum', icon: faOilCan, apiName: 'Petroleum' },
    { name: 'Coal', icon: faSnowplow, apiName: 'Coal' },
    { name: 'Other Biomass', icon: faLeaf, apiName: 'Other Biomass' },
    { name: 'Reset Colors', icon: faTrashRestoreAlt, apiName: 'Reset Colors'},
  ];

  return (
    <div className = "ButtonDiv">
    <Row>
      <Col>
        <Row>
          <h3 className="buttonTitle"> or click to see the top 10 for each power source</h3>
        </Row> 
        <ButtonGroup vertical>
            {buttons.map(btn => (
              <Button key={btn.apiName} onClick={() => receiveConsumers(btn.apiName)} className="button"><FontAwesomeIcon icon={btn.icon} /> {btn.name}</Button>
            ))}
        </ButtonGroup>
      </Col>
    </Row>
</div>

  );
}

export default TopTenButtons;