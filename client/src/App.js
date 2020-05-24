import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StateDoughnutChart from "./components/charts/DoughnutChart";
import StateBarChart from "./components/charts/BarChart";
import './App.css';
// import ClickHandler from './layouts/ClickHandler';
import { Container, Row, Col} from 'react-bootstrap';
import TopTenButtons from './components/TopTenButtons/TopTenButtons';
import ChartContextProvider from "./components/contextProviders/ChartContextProvider";
import USAMap from './components/USAMap';

  function App() {

  console.log("render app")
  return (
    <div className="App">
      <Header className="header" />
      <Container fluid>
        <ChartContextProvider>
        <>
        <Row className="MapDiv justify-content-center">
        <USAMap/>
          <Col xs={2} md={2} className="float-content-right">
            <TopTenButtons />
          </Col>
        </Row>
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
