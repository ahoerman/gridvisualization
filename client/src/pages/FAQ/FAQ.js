import React, { useState, props } from 'react';
import NavBarTop from '../../components/Header/NavBarTop';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabContainer from 'react-bootstrap/TabContainer';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import coalimg from './coal.jpg';
import biomass from './biomass-types.png';
import wind from './wind.jpg';
import solar from './solar.jpg';
import hydro from './hydro.jpg';

function renderRenewable() {
  return (
    <div>
    <h2>Renewable Energy</h2>
    <br></br>
    <p>
      Renewable energy, often referred to as “clean energy”, comes from natural sources or processes that are constantly replenished. For example, sunlight or wind keep shining and blowing, even if their availability depends on time and weather.
    </p>
    <p>
       While renewable energy is often thought of as a new technology, harnessing nature’s power has long been used heating, transportation, lighting, and more. Wind has powered boats to sail the seas and windmills to grind grain. The sun has provided warmth during the day and helped kindle fires to last into the evening. But over the past 500 years or so, humans increasingly turned to cheaper, dirtier energy sources such as coal and fracked gas. 
    </p>
    <p>
      Did you know that some renewable energy sources emit greenhouse gases during the generation of electricity?
    </p>
    <br></br>
      <h4>Biomass - Energy from plants</h4>
      <br></br>
      <img src={biomass} alt="Biomass Energy" />
      <br></br>
      <p>Biomass, and biofuels made from biomass, are renewable energy sources that are alternatives to fossil fuels. Burning either fossil fuels or biomass releases carbon dioxide (CO2), a greenhouse gas. However the plants that are the source of biomass for energy, capture almost the same amount of CO2 through photosynthesis while growing as is released when biomass is burned, This makes biomass a carbon-neutral energy source unlike fossil fuels.</p>
    
      <br></br>
      <h4>Wind</h4>
      <img src={wind} alt="Wind Energy" />
      <br></br>
      <p>
        Wind energy (or wind power) refers to the process of creating electricity using the wind, or air flows that occur naturally in the earth’s atmosphere. Modern wind turbines are used to capture kinetic energy from the wind and generate electricity.
        </p>
        <p>
        There are three main types of wind energy:
        </p>
        <p>
        1.	Utility-scale wind: Wind turbines that range in size from 100 kilowatts to several megawatts, where the electricity is delivered to the power grid and distributed to the end user by electric utilities or power system operators.
        </p>
        <p>
        2.  Distributed or "small" wind:  Single small wind turbines below 100 kilowatts that are used to directly power a home, farm or small business and are not connected to the grid.
        </p>
        <p>
        Offshore wind: Wind turbines that are erected in large bodies of water, usually on the continental shelf. Offshore wind turbines are larger than land-based turbines and can generate more power.
        </p>
      <h4>Solar - Energy From The Sun</h4>
      <img src={solar} alt="Solar Energy" />
      <br></br>
      <p>
        Solar power is energy from the sun that is converted into thermal or electrical energy. Solar energy is the cleanest and most abundant renewable energy source available, and the U.S. has some of the richest solar resources in the world. Solar technologies can harness this energy for a variety of uses, including generating electricity, providing light or a comfortable interior environment, and heating water for domestic, commercial, or industrial use.
      </p>
      <h4>Hydro - Energy From Flowing Water</h4>
      <img src={hydro} alt="Hydro Energy" />
      <p>
        Pumped-storage hydropower facilities are a type of hydroelectric storage system where water is pumped from a water source up to a storage reservoir at a higher elevation and is released from the upper reservoir to power hydro turbines located below the upper reservoir. The electricity for pumping may be supplied by hydro turbines or by other types of power plants including fossil fuel or nuclear power plants. They usually pump water to storage when electricity demand and generation costs, and/or when wholesale electricity prices are relatively low and release the stored water to generate electricity during peak electricity demand periods when wholesale electricity prices are relatively high. Pumped-storage hydroelectric systems generally use more electricity to pump water to the upper water storage reservoirs than they produce with the stored water. Therefore, pumped-storage facilities have net negative electricity generation balances.
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
function renderSources() {
  return (
    <div>
      <p>
        Data sources will be linked to here
      </p>

=
    </div>
  )
}
function FAQ() {
  const [key, setKey] = useState('home');
  return (
    <div>
      <NavBarTop />
      
      <h1>FAQ</h1>

      <p>
        When people use electricity in their homes, the electrical power may come from a mixture of energy sources. Energy sources can be categorized as renewable (energy source that can be replenished) or non-renewable (an energy source that can't be easily replenished).
      </p>
      <p>
        To learn more about each type covered in the data, click on the tabs below.
      </p>
      <p>
        To understand the data we used to create this page, click on the "Source" tab for links to data sources we used.  

        Caveat:  In order to present as accurate a picture as possible, we based our statistics on the last data year available for the generated energy and population data, which was 2017.
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
          <Tab eventKey="sources" title="Sources">

          </Tab>
        </Tabs>

        <Row>
          {key ==="renewable" && renderRenewable() }
          {/* </Row>
          
        <Row> */}
          {key === "nonrenewable" && renderNonrenewable()}

          {key ==="sources" && renderSources()}
        </Row>
      </>
     
        </div>
  )
};

export default FAQ;


