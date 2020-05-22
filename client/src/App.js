import React, { useState } from 'react';
import USAMap from "react-usa-map";
import InitialStates from "./layouts/InitialStates";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import StateDoughnutChart from "./layouts/charts/DoughnutChart";
import StateBarChart from "./layouts/charts/BarChart";
import './App.css';
import ClickHandler from './layouts/ClickHandler';
import { Grid, Container, Row, Col} from 'react-bootstrap';
import TopTenButtons from './layouts/TopTenButtons';

function App() {

  const [state, setState] = useState(InitialStates);

  const mapHandler = (event) => {
    console.log('You clicked on ' + event.target.dataset.name);
    let currentState = event.target.dataset.name
    ClickHandler(currentState, state);

  };

  console.log("render app")
  return (
    <div className="App">
      <Header className="header" />
      <Container fluid>
        <Row className="MapDiv justify-content-center">
          <Col xs={8} md={6}>
            <USAMap customize={InitialStates()} onClick={mapHandler} />
          </Col>
          <Col xs={2} md={2} className="float-content-right">
            <TopTenButtons />
          </Col>
        </Row>
        <Row>
          <StateDoughnutChart />
        </Row>
        <Row>
          <StateBarChart />
        </Row>


      </Container>
      <Footer />
    </div>
  );
}

export default App;
