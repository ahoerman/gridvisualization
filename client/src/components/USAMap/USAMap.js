import React, { useContext, useEffect, useState } from 'react';
import ReactMap from "react-usa-map";
import { Col } from 'react-bootstrap';
import ChartContext from '../../Context/ChartContext';
import API from "../../util/API";
import InitialStates from "./InitialStates";


const USAMap = () => {

    const [ mapColors, setMapColors] = useState(InitialStates())
    const { setChosenStates, chosenStates } = useContext(ChartContext);
    useEffect( () => {console.log(chosenStates)}, [chosenStates]);
    const handleStateClick = event => {
            // When the form is submitted, prevent its default behavior, get recipes update the recipes state
            event.preventDefault();
              // Update the appropriate state
            const value = event.target.dataset.name;
            const isSelected = !mapColors[value].clicked;
            setMapColors({
              ...mapColors, 
              [value]: {
                ...mapColors[value],
                fill: isSelected ? "#FFFF00" : mapColors[value].originalFill,
                clicked: isSelected
              }
            })
            console.log(value);
            API.getStateInfo(value)
              .then(res => console.log(res.data))
              .catch(err => console.log(err));
        };
    return (
          <Col>
            <ReactMap customize={mapColors} onClick={handleStateClick} />
          </Col>
    )
}

export default USAMap;