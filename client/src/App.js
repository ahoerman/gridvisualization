import React, { useState } from 'react';
import USAMap from "react-usa-map";
import InitialStates from "./layouts/InitialStates";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import StateDoughnutChart from "./layouts/charts/DoughnutChart";
import StateBarChart from "./layouts/charts/BarChart";
import './App.css'
// import ClickHandler from './layouts/ClickHandler';
import { Container, Row, Col} from 'react-bootstrap';
import TopTenButtons from './layouts/TopTenButtons';
import API from "./util/API";

// function App() {

//   const [state, setState] = useState(InitialStates);

//   const mapHandler = (event) => {
//     console.log('You clicked on ' + event.target.dataset.name);
//     let currentState = event.target.dataset.name
//     ClickHandler(currentState, state);

//   };

  function App() {

    // const [states, setStates] = useState([]);
    // const [stateInfoSearch, setStateSearch] = useState("");
  
    const handleStateClick = event => {
      // When the form is submitted, prevent its default behavior, get recipes update the recipes state
      event.preventDefault();
            // Update the appropriate state
      const value = event.target.dataset.name;
      // setStateSearch(value);
      API.getStateInfo(value)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
      // console.log(states);
    };

  console.log("render app")
  return (
    <div className="App">
      <Header className="header" />
      <Container fluid>

        <Row className="MapDiv justify-content-center">
          <Col xs={0} md={8}>
            <USAMap customize={InitialStates()} onClick={handleStateClick} />
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
