import React, { useContext, useEffect, useState } from 'react';
import ChartContext from '../../Context/ChartContext';
import InitialStates from "../USAMap/InitialStates";
import API from '../../util/API';

import './toptenbuttons.css';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { faWind, faSun, faWater, faAtom, faBurn, faSnowplow, faOilCan, faLeaf, faTrashRestoreAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TopTenButtons() {
  const [mapColors, setMapColors] = useState(InitialStates())
  const { setChosenStates, chosenStates, mapState, mapDispatch } = useContext(ChartContext);
  useEffect(() => { console.log(chosenStates) }, [chosenStates]);
 
  const receiveConsumers = (type) => {
    API.getTopConsumers(type).then(res => {

      let topTenCurrent = res.data;
      console.log(topTenCurrent); 

    //making an array of the top ten state abbreviations then doing all ten API requests
    const topTenAbbrev = topTenCurrent.map( ( currentStateObj ) => API.getStateInfo(currentStateObj.abbrev))
      Promise.all (topTenAbbrev).then( res => {
          const eachTopTenData = {};
          const newMapColors = InitialStates();
          res.forEach( (eachState) => {
            console.log(eachState.data)

            // setChosenStates({
            //   ...chosenStates,
            //   [currentStateObj.abbrev]: res.data
            // })

            //setting the yellow color for each State
            newMapColors[eachState.data.stateAbbrev] = {
              ...newMapColors[eachState.data.stateAbbrev],
              fill: "#FFFF00" ,
              clicked: true
            }
          })

          mapDispatch ({
            type: "SET_TOPTEN_STATES",
            mapColors: newMapColors
          })
          console.log(eachTopTenData)
      })

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