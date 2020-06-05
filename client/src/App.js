import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/Navigation/NavTabs";
import Home from "./pages/Home";
import FAQ from "../src/pages/FAQ/FAQ";
import PowerPlants from "./pages/PowerPlant";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/powerplants" component={PowerPlants} />
      </div>
    </Router>
  );
}

export default App;