import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabContainer from 'react-bootstrap/TabContainer';
import StateDoughnutChart from "../charts/DoughnutChart";
import StateBarChart from "../charts/BarChart";
import { Container, Row, Col } from 'react-bootstrap';



function ControlledTabs() {
    const [key, setKey] = useState('home');

    return (
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
    );
}

export default ControlledTabs;