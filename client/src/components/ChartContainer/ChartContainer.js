import React, { useState, useContext } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import StateDoughnutChart from "../charts/TotalGenerationsDoughnut";
import TotalCo2EmissionsBarChart from "../charts/TotalCo2EmissionsBar";
import CO2perKWHChart from "../charts/CO2perKWHBar";
import CO2perPersonChart from "../charts/CO2perPersonBar";
import GenerationsPerPerson from "../charts/GenerationsPerPerson";
import { Row } from 'react-bootstrap';
import ChartContext from '../../Context/ChartContext';
import useWindowSize from "../../hooks/useWindowSize";
import _ from "lodash";
import "./chartContainer.css";

function ControlledTabs() {
    const [key, setKey] = useState('totalCo2Emissions');
    const chartContext = useContext(ChartContext);
    const { width} = useWindowSize();

    return (
        <>
        {!(_.isEmpty(chartContext.chosenStates)) &&
        (
        <>
        { width > 750 ? 
        <>
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="totalGenerations" title="Total Generation">      
            </Tab>
            <Tab eventKey="totalCo2Emissions" title="CO2 Emissions">
             </Tab>
             <Tab eventKey="co2EmissionsPerMWH" title="CO2 Emissions/mWh">
             </Tab>
             <Tab eventKey="GenerationsPerPerson" title="Generation Per Capita">
             </Tab>
             <Tab eventKey="co2EmissionsPerPerson" title="CO2 Emissions Per Capita">
             </Tab>
        </Tabs>

        <Row>
          { key==="totalGenerations" && <StateDoughnutChart /> }
          { key==="totalCo2Emissions" &&  <TotalCo2EmissionsBarChart /> }
          { key==="co2EmissionsPerMWH" &&  <CO2perKWHChart /> }
          { key==="GenerationsPerPerson" &&  <GenerationsPerPerson /> }
          { key==="co2EmissionsPerPerson" &&  <CO2perPersonChart /> }
        </Row>
        </>
        : 
        <>
        <Tabs
            className="mobileCharts"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="totalCo2Emissions" title="CO2 Emissions">
             </Tab>
             <Tab eventKey="co2EmissionsPerMWH" title="CO2 Emissions/mWh">
             </Tab>
             <Tab eventKey="co2EmissionsPerPerson" title="CO2 Emissions Per Capita">
             </Tab>
        </Tabs>

        <Row>
          { key==="totalCo2Emissions" &&  <TotalCo2EmissionsBarChart /> }
          { key==="co2EmissionsPerMWH" &&  <CO2perKWHChart /> }
          { key==="co2EmissionsPerPerson" &&  <CO2perPersonChart /> }
        </Row>
        </>
        } 
        </>
        )}
        </>
    );
}

export default ControlledTabs;