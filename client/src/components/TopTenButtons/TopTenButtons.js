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
  const { setChosenStates, chosenStates } = useContext(ChartContext);
  useEffect(() => { console.log(chosenStates) }, [chosenStates]);
 
  const receiveConsumers = (type) => {
    API.getTopConsumers(type).then(res => {

      let topTenCurrent = res.data;
      console.log(topTenCurrent);

      //first resetting all the states to the original colors
      Object.keys(mapColors).forEach(function (item) {
        // console.log(item); // key
        if (mapColors[item].fill !== mapColors[item].originalFill) {
          setMapColors({
            ...mapColors,
            [item]: {
              ...mapColors[item],
              fill: mapColors[item].originalFill,
            }
          })
        }
      });

      //setting the top ten states to yellow
      Object.keys(topTenCurrent).forEach(function (item) {
        console.log(topTenCurrent[item].abbrev)
        setMapColors({
          ...mapColors,
          [topTenCurrent[item].abbrev]: {
            ...mapColors[topTenCurrent[item].abbrev],
            fill: "#FFFF00",
          }
        })
      })

      //getting the data for each of the top ten states picked
      Object.keys(topTenCurrent).forEach(function (item) {
      API.getStateInfo(topTenCurrent[item].abbrev)
        .then(res => setChosenStates({
          ...chosenStates,
          [topTenCurrent[item].abbrev]: res.data
        }))
        .catch(err => console.log(err));
      })


      })
    }
    //   console.log(`the ${type} button was clicked`);
    //   console.log(res.data)
    // })
  

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