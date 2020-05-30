<<<<<<< HEAD
import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StateDoughnutChart from "./components/charts/DoughnutChart";
import StateBarChart from "./components/charts/BarChart";
import './App.css';
import { Container, Row, Col} from 'react-bootstrap';
import TopTenButtons from './components/TopTenButtons/TopTenButtons';
import MobileInputStateDropdown from './components/MobileInput/MobileInputStateDropdown';
import ChartContextProvider from "./components/contextProviders/ChartContextProvider";
import USAMap from './components/USAMap';
import useWindowSize from "./hooks/useWindowSize";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
=======
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./pages/NavTabs";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import PowerPlants from "./pages/PowerPlant";
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 53445a87ae72ed3e3eccab17629b294b18aa2d17

  function App() {
  const { width} = useWindowSize();
  console.log("render app")
  return (
    <div className="App">
      <Header/>
      <Container fluid>
        <ChartContextProvider>
        <>

        { width > 900 ?
        <>
        <Row>
        <h3><FontAwesomeIcon icon={faCheckSquare} /> Click on one or more States to see and compare their energy profile</h3>
        </Row>
        <Row>
          <Col md={10}>
            <USAMap/>
          </Col>
          <Col md={2}>
            <TopTenButtons />
          </Col>
        </Row>
        </>
        :  <>
        <Row>
          < MobileInputStateDropdown />
        </Row>
        </>
        } 

        <Row>
          <StateDoughnutChart/>
        </Row>
        <Row>
          <StateBarChart />
        </Row>
        </>
        
        </ChartContextProvider>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
