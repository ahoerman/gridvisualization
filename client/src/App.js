import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBarTop from "./components/Navigation/NavBarTop";
import Home from "./pages/Home";
import FAQ from "../src/pages/FAQ/FAQ";
import PowerPlants from "./pages/PowerPlant";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <NavBarTop />
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/powerplants" component={PowerPlants} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;