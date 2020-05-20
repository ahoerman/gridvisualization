import React from 'react';
import USAMap from "react-usa-map";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import statesCustomConfig from "./layouts/StateCustomConfig";
import StateDoughnutChart from "./layouts/charts/DoughnutChart";
import StateBarChart from "./layouts/charts/BarChart";
import './App.css';

function App() {

  const mapHandler = (event) => {
    console.log('You clicked on ' + event.target.dataset.name);
  };

  return (
    <div className="App">
      <Header className="header" />
      <div className="MapDiv">
        <div className="d-none d-flex-md justify-content-center">
          <h4>Click on a State to see their energy profile</h4>
        <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
        </div>
        <StateDoughnutChart />
        <StateBarChart />
        <Footer />
      </div>
    </div>
  );
}

export default App;
