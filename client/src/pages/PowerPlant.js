import React, { useState } from "react";
import NavBarTop from "../components/Header/NavBarTop";
import Footer from "../components/Footer/Footer";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import "./PowerPlant.css";
import ScrollUpButton from "react-scroll-up-button";
import PowerPlantStateChooser from "../components/PowerPlantStateChooser";
import API from "../util/API";
import _ from "lodash";

function PowerPlants() {

  const [ selectedStateData, setSelectedStateData ] = useState([]);

  const stateForPlant = event => {
    API.getPlantInfo(event)
    .then(({ data }) => {
      console.log(data);
      setSelectedStateData(data.plants);
    })
    .catch(err => console.log(err));
  }

  return (
    <div>
      <NavBarTop />
      <Container>
      <ScrollUpButton />
      <div className="PowerplantTitle">
      <h1>Power Plants Page</h1>
      <p>
        Select a state from the dropdown below to see a list of power plants in the area.
      </p>
        <PowerPlantStateChooser stateForPlant={stateForPlant} />
      </div>
      {!(_.isEmpty(selectedStateData)) &&
      <Table striped bordered hover size="sm" className="PowerplantTable">
        <thead>
          <tr>
            <th>Plant Name</th>
            <th>Fuel Category</th>
            <th>Primary Fuel Source</th>
            <th>Annual Generation</th>
            <th>Annual CO2 Emission</th>
            <th>Annual CO2 Emission/mWh</th>
            <th>Click To See Plant Location</th>
          </tr>
        </thead>
        <tbody>
          { selectedStateData.map((eachPlant, i) => (
          <tr key={eachPlant.plantName+i}>
            <td>{eachPlant.plantName}</td>
            <td>{eachPlant.fuelCategory}</td>
            <td>{eachPlant.primaryFuel}</td>
            <td>{eachPlant.annualGeneration}</td>
            <td>{eachPlant.annualCO2}</td>
            <td>{eachPlant.annualCO2perMWH}</td>
            <td><a href={`https://maps.google.com/?q=${eachPlant.latitude},${eachPlant.longitude}`} target="_blank" alt="powerplant location">Location</a></td>
          </tr>
          ))}
        </tbody>
      </Table>
        }   
      </Container>
      <Footer />
    </div>
  );
}

export default PowerPlants;




