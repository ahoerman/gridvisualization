import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "./PowerPlant.css";
import ScrollUpButton from "react-scroll-up-button";
import PowerPlantStateChooser from "../components/PowerPlantStateChooser";
import PowerPlantTable from "../components/PowerPlantTable";
import API from "../util/API";
import _ from "lodash";

function PowerPlants() {

  const [ selectedStateData, setSelectedStateData ] = useState([]);

  const stateForPlant = event => {
    API.getPlantInfo(event)
    .then(({ data }) => {
      //console.log(data);
      setSelectedStateData(data);
    })
    .catch(err => console.log(err));
  }

  return (
    <div>
      <Container>
        <ScrollUpButton />

        <div className="PowerplantTitle">
          <h1>Power Plants Page</h1>
          <p>
            Select a state from the dropdown to see a list of power plants in that state.
          </p>
            <PowerPlantStateChooser stateForPlant={stateForPlant} />
        </div>
        
        {
          !(_.isEmpty(selectedStateData)) &&
          <PowerPlantTable {...selectedStateData} />
        }   
      </Container>
    </div>
  );
}

export default PowerPlants;




