import React, { useState, props } from 'react';
import NavBarTop from '../../components/Header/NavBarTop';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabContainer from 'react-bootstrap/TabContainer';
import { Container, Row, Col } from 'react-bootstrap';
import coalimg from './coal.jpg';

function renderRenewable() {
  return (
    <div>
    <p>
      Renewable energy, often referred to as “clean energy”, comes from natural sources or processes that are constantly replenished. For example, sunlight or wind keep shining and blowing, even if their availability depends on time and weather.

    </p>
    </div>
  )
}
function renderNonrenewable() {
  return (
    <div>
    <p>
      Most of the energy consumed in the United States (89% in 2019) is from nonrenewable energy sources.
    </p>

    <img src={coalimg}/>
    </div>
  )
}
function FAQ() {
  const [key, setKey] = useState('home');
  return (
    <div>
      <NavBarTop />
      
      <h1>FAQ</h1>

      <p>When people use electricity in their homes, the electrical power may come from a mixture of energy sources. Energy sources can be categorized as renewable or Nonrenewable Renewable (an energy source that can be easily replenished).
      The major types of renewable energy sources are:
</p>
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
          {key ==="renewable" && renderRenewable() }
          {/* </Row>
          
        <Row> */}
          {key === "nonrenewable" && renderNonrenewable()}
        </Row>
      </>
     
        </div>
  )
};

export default FAQ;


