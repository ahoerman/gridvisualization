import React, { useState, useContext } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import TabContainer from 'react-bootstrap/TabContainer';
import StateDoughnutChart from "../charts/DoughnutChart";
import StateBarChart from "../charts/BarChart";
import { Row } from 'react-bootstrap';
import ChartContext from '../../Context/ChartContext';
import _ from "lodash";




function ControlledTabs() {
    const [key, setKey] = useState('state');
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
            <Tab eventKey="state" title="c02 Emissions Per State">      
            </Tab>
            <Tab eventKey="person" title="c02 Emissions Per Person">
             </Tab>
            {/* <Tab eventKey="contact" title="Contact">
             </Tab>
             <Tab eventKey="co2" title="C02"> */}

             {/* </Tab> */}
        </Tabs>

        <Row>
          { key==="state" && <StateDoughnutChart /> }
        {/* </Row>
        <Row> */}
          { key==="person" &&  <StateBarChart /> }
        </Row>
        </>
        )}
        </>
    );
}

export default ControlledTabs;