import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./pages/NavTabs";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import PowerPlants from "./pages/PowerPlant";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/powerplants" component={PowerPlants} />
      </div>
    </Router>
  );
}

export default App;
