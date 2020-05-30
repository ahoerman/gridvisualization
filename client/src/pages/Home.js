import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import StateDoughnutChart from "../components/charts/DoughnutChart";
import StateBarChart from "../components/charts/BarChart";
import '../App.css';
import { Container, Row, Col} from 'react-bootstrap';
import TopTenButtons from '../components/TopTenButtons/TopTenButtons';
import MobileInputStateDropdown from '../components/MobileInput/MobileInputStateDropdown';
import ChartContextProvider from "../components/contextProviders/ChartContextProvider";
import USAMap from '../components/USAMap';
import useWindowSize from "../hooks/useWindowSize";
import ChartContainer from "../components/ChartContainer";

  function Home() {
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
          < MobileInputStateDropdown />
        </Row>
        } 
        <ChartContainer>
          
        </ChartContainer>
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

export default Home;
