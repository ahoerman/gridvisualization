import React, { useState, useContext } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import TabContainer from 'react-bootstrap/TabContainer';
import StateDoughnutChart from "../charts/TotalGenerationsDoughnut";
import TotalCo2EmissionsBarChart from "../charts/TotalCo2EmissionsBar";
import CO2perKWHChart from "../charts/CO2perKWHBar";
import CO2perPersonChart from "../charts/CO2perPersonBar";
import { Row } from 'react-bootstrap';
import ChartContext from '../../Context/ChartContext';
import _ from "lodash";




function ControlledTabs() {
    const [key, setKey] = useState('totalCo2Emissions');
    const chartContext = useContext(ChartContext);

    return (
        <>
        {!(_.isEmpty(chartContext.chosenStates)) &&
        (
        <>
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="totalGenerations" title="Types of Generation Per State">      
            </Tab>
            <Tab eventKey="totalCo2Emissions" title="Total cO2 Emissions Per State Comparison">
             </Tab>
             <Tab eventKey="co2EmissionsPerKWH" title="c02 Emissions Per KWH Per State">
             </Tab>
             <Tab eventKey="co2EmissionsPerPerson" title="c02 Emissions Per Person Per State">
             </Tab>
        </Tabs>

        <Row>
          { key==="totalGenerations" && <StateDoughnutChart /> }
          { key==="totalCo2Emissions" &&  <TotalCo2EmissionsBarChart /> }
          { key==="co2EmissionsPerKWH" &&  <CO2perKWHChart /> }
          { key==="co2EmissionsPerPerson" &&  <CO2perPersonChart /> }
        </Row>
        </>
        )}
        </>
    );
}

export default ControlledTabs;