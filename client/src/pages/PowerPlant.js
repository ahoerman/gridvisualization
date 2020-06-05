import React, { useState, useEffect } from "react";
import NavBarTop from "../components/Header/NavBarTop";
import Footer from "../components/Footer/Footer";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import "./PowerPlant.css";
import ScrollUpButton from "react-scroll-up-button";
import PowerPlantStateChooser from "../components/PowerPlantStateChooser";
import API from "../util/API";

// annualCO2: 728754
// annualCO2perMWH: 2652
// annualGeneration: 549623
// fuelCategory: "COAL"
// latitude: 43.1411
// longitude: -71.4692
// plantName: "Merrimack"
// primaryFuel: "BIT"

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
      <Table striped bordered hover size="sm" className="PowerplantTable">
        <thead>
          <tr>
            <th>Plant Name</th>
            <th>Primary Energy Source</th>
            <th>Fuel Category</th>
            <th>Annual Generation</th>
            <th>Annual CO2 Emission</th>
            <th>Annual CO2 Emission/mWh</th>
          </tr>
        </thead>
        <tbody>
          { selectedStateData.map((eachPlant, i) => (
          <tr key={eachPlant.plantName+i}>
            <td>{eachPlant.plantName}</td>
            <td>{eachPlant.primaryFuel}</td>
            <td>{eachPlant.annualCO2}</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
          </tr>
          ))}
        </tbody>
      </Table>
      </Container>
      <Footer />
    </div>
  );
}

export default PowerPlants;




