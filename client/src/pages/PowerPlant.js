import React from "react";
import NavBarTop from "../components/Header/NavBarTop";
import Footer from "../components/Footer/Footer";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import "./PowerPlant.css";
import ScrollUpButton from "react-scroll-up-button";
import PowerPlantStateChooser from "./PowerPlantStateChooser"


function PowerPlants() {
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
        <PowerPlantStateChooser/>
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
          <tr>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
          </tr>
        </tbody>
      </Table>
      </Container>
      <Footer />
    </div>
  );
}

export default PowerPlants;




