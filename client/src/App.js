import React from 'react';
import USAMap from "react-usa-map";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import statesCustomConfig from "./layouts/StateCustomConfig";
import handleDataFetch from "./layouts/StatePopulation";
import './App.css';

function App() {
  
  const mapHandler = async (event) => {
    const targetState = event.target.dataset.name;
    const population = await handleDataFetch(event.target.dataset.name);
    console.log('You clicked on ' + targetState + ' and the population is: ' + population);
  };

  return (
    <div className="App">
      <Header className="header" />
      <div className="MapDiv">
        <div className="d-none d-flex-md justify-content-center">
          <h4>Click on a State to see their energy profile</h4>
        <USAMap customize={statesCustomConfig()} onClick={(e) => mapHandler(e)} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
