import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import '../App.css';
import { Container, Row, Col} from 'react-bootstrap';
import TopTenButtons from '../components/TopTenButtons/TopTenButtons';
import MobileInputStateDropdown from '../components/MobileInput/MobileInputStateDropdown';
import ChartContextProvider from "../components/contextProviders/ChartContextProvider";
import USAMap from '../components/USAMap';
import useWindowSize from "../hooks/useWindowSize";
import ChartContainer from "../components/ChartContainer";
import ScrollUpButton from "react-scroll-up-button";

  function Home() {
  const { width} = useWindowSize();
  return (
    <div className="App">
      <ScrollUpButton />
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
        </>
        
        </ChartContextProvider>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
