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
import NavBarTop from "../../src/components/Header/NavBarTop"

  function Home() {
  const { width} = useWindowSize();
  return (
    <div className="App">
      <div class="container-fluid">
        <NavBarTop />
        <Header/>
      </div>
      <div class="container-lg">
        <ChartContextProvider>
        <>
        { width > 750 ? 
        <div class="container-lg">
          <div class="row mx-auto">
            <div class="col-12 col-md-10">
              <TopTenButtons />
            </div>
          </div>
          <div class="row mx-auto">
            <div class="col-12 col-md-10 ">
              <USAMap/>
            </div>
          </div>
        </div>
        : <Row>
            < MobileInputStateDropdown />
          </Row>
        } 
        <ChartContainer>
        </ChartContainer>
        </>
        </ChartContextProvider>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
