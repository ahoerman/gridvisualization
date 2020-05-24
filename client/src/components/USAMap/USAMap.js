import React, { useContext, useEffect } from 'react';
import ReactMap from "react-usa-map";
import { Col } from 'react-bootstrap';
import ChartContext from '../../util/ChartContext';
import API from "../../util/API";
import InitialStates from "./InitialStates";


const USAMap = () => {
    const { setChosenStates, chosenStates } = useContext(ChartContext);
    useEffect( () => {console.log(chosenStates)}, [chosenStates]);
    const handleStateClick = event => {
            // When the form is submitted, prevent its default behavior, get recipes update the recipes state
            event.preventDefault();
              // Update the appropriate state
            const value = event.target.dataset.name;
            API.getStateInfo(value)
              .then(res => console.log(res.data))
              .catch(err => console.log(err));
        };
    return (
          <Col xs={0} md={8}>
            <ReactMap customize={InitialStates()} onClick={handleStateClick} />
          </Col>
    )
}

export default USAMap;