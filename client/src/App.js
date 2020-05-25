import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StateDoughnutChart from "./components/charts/DoughnutChart";
import StateBarChart from "./components/charts/BarChart";
import './App.css';
import ClickHandler from './util/ClickHandler';
import { Container, Row, Col} from 'react-bootstrap';
import TopTenButtons from './components/TopTenButtons/TopTenButtons';
import ChartContextProvider from "./components/contextProviders/ChartContextProvider";
import USAMap from './components/USAMap';
import useWindowSize from "./hooks/useWindowSize";

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
        <Row>
          <Col md={10}>
            <USAMap/>
          </Col>
          <Col md={2}>
            <TopTenButtons />
          </Col>
        </Row>
        : <Row>
          <h1 className = "text-center">This will be the Mobile Application</h1>
        </Row>
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
