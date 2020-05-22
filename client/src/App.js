import React, { useState } from 'react';
import USAMap from "react-usa-map";
import InitialStates from "./layouts/InitialStates";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import StateDoughnutChart from "./layouts/charts/DoughnutChart";
import StateBarChart from "./layouts/charts/BarChart";
import './App.css';
import ClickHandler from './layouts/ClickHandler';


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
      <div className="MapDiv">
        <div className="d-none d-flex-md justify-content-center">
        <USAMap customize={InitialStates()} onClick={mapHandler} />
        </div>
        <StateDoughnutChart />
        <StateBarChart />
        <Footer />
      </div>
    </div>
  );
}

export default App;
