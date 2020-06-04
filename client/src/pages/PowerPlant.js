import React from "react";
import NavBarTop from "../components/Header/NavBarTop";
import Footer from "../components/Footer/Footer";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import "./PowerPlant.css";
import ScrollUpButton from "react-scroll-up-button";
import Dropdown from "react-bootstrap/Dropdown";

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

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select A State
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">New Hampshire</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Maine</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Vermont</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

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
            <td>filler data</td>
          </tr>
          <tr>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
          </tr>
          <tr>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
          </tr>
          <tr>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
          </tr>
          <tr>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
          </tr>
          <tr>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
            <td>filler data</td>
          </tr>
          <tr>
            <td>filler data</td>
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




