import React, { useContext, useEffect } from 'react';
import ChartContext from '../../Context/ChartContext';
import InitialStates from "../USAMap/InitialStates";
import API from '../../util/API';

import './toptenbuttons.css';
import Button from 'react-bootstrap/Button'
// import ButtonGroup from 'react-bootstrap/ButtonGroup'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import { faWind, faSun, faWater, faAtom, faBurn, faSnowplow, faOilCan, faLeaf, faTrashRestoreAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TopTenButtons() {

  const { setChosenStates, chosenStates, mapDispatch } = useContext(ChartContext);
  useEffect(() => { console.log(chosenStates) }, [chosenStates]);

const receiveConsumers = (type) => {
  if (type === "Reset") {
    setChosenStates({});
    mapDispatch({
      type: "RESET"
    })   
    return
  }
  API.getTopConsumers(type).then(res => {

      let topTenCurrent = res.data;
      console.log(topTenCurrent); 

    //making an array of the top ten state abbreviations then doing all ten API requests
    const topTenAbbrev = topTenCurrent.map( ( currentStateObj ) => API.getStateInfo(currentStateObj.abbrev))
      Promise.all (topTenAbbrev).then( res => {
          const chosenTenStates= {};
          const newMapColors = InitialStates();

          res.forEach( (eachState) => {

            chosenTenStates[eachState.data.stateAbbrev] = eachState.data

            //setting the yellow color for each State
            newMapColors[eachState.data.stateAbbrev] = {
              ...newMapColors[eachState.data.stateAbbrev],
              fill: "#FFFF00" ,
              clicked: true
            }
          })
          console.log(chosenTenStates);

          setChosenStates( chosenTenStates)

          mapDispatch ({
            type: "SET_TOPTEN_STATES",
            mapColors: newMapColors
          })
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
    { name: 'Reset States', icon: faTrashRestoreAlt, apiName: 'Reset'},
    { name: 'Total for United States', icon: faTrashRestoreAlt, apiName: 'US'},
  ];

  return (
    <div>
      <div class="mt-0 mb-0 ">
          {buttons.map(btn => (
              <Button variant="success" class="btn btn-success" key={btn.apiName} onClick={() => receiveConsumers(btn.apiName)}><FontAwesomeIcon icon={btn.icon} /> {btn.name}</Button>
          ))}
      </div>
    </div>

  );
}

export default TopTenButtons;