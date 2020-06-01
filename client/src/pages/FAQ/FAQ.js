import React, { useState, props } from 'react';
import NavBarTop from '../../components/Header/NavBarTop';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabContainer from 'react-bootstrap/TabContainer';
import { Container, Row, Col } from 'react-bootstrap';


function FAQ() {
  const [key, setKey] = useState('home');
  return (
    <div>
      <NavBarTop />
      <>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="renewable" title="Renewable Energy">
          </Tab>
          <Tab eventKey="nonrenewable" title="Non-Renewable Energy">
          </Tab>
        </Tabs>

        <Row>
          {key === "renewable"}
          {/* </Row>
          
        <Row> */}
          {key === "nonrenewable"}
        </Row>
      </>
      <h1>FAQ</h1>

          <p></p>
        </div>
    </div>
  )
  )
};

export default FAQ;


