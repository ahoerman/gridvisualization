import React, { useState } from 'react';
import NavBarTop from '../../components/Header/NavBarTop';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './index.css';
import { Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import coalimg from './coal.jpg';
import biomass from './biomass-types.png';
import wind from './wind.jpg';
import solar from './solar.jpg';
import hydro from './hydro.jpg';
import nuclear from './nuclear.jpg';
import natural from './naturalgas.jpg';
import petroleum from './petroleum.jpg';



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
      <p>
        Biomass, and biofuels made from biomass, are renewable energy sources that are alternatives to fossil fuels. Burning either fossil fuels or biomass releases carbon dioxide (CO2), a greenhouse gas. However the plants that are the source of biomass for energy, capture almost the same amount of CO2 through photosynthesis while growing as is released when biomass is burned, This makes biomass a carbon-neutral energy source unlike fossil fuels.   
      </p>
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
      Most of the energy consumed in the United States (89% in 2019) is from non-renewable energy sources.
    </p>
    <p>
      Non-renewable energy comes from sources that will run out or will not be replenished for thousands or even millions of years. Most sources of non-renewable energy are fossil fuels. Fossil fuels were created as the remains of marine creatures decayed millions of years ago, under huge amounts of pressure and heat. Most fossil fuels are burned to create energy and electricity
    </p>
    <h4>Coal</h4>

    <img src={coalimg} alt="Coal Energy" />
    <br></br>
    <p>
      Coal is a combustible black or brownish-black sedimentary rock with a high amount of carbon and hydrocarbons. Coal is classified as a nonrenewable energy source because it takes millions of years to form. Coal contains the energy stored by plants that lived hundreds of millions of years ago in swampy forests.
    </p>
    <p>
      Layers of dirt and rock covered the plants over millions of years. The resulting pressure and heat turned the plants into the substance we call coal.
    </p>
    <br></br>
    <h4>Nuclear Energy</h4>
      <img src={nuclear} alt="Nuclear Energy" />
    <br></br>
    <p>
      Nuclear energy comes from splitting atoms in a reactor to heat water into steam, turn a turbine and generate electricity. Ninety-five nuclear reactors in 29 states generate nearly 20 percent of the nation’s electricity, all without carbon emissions because reactors use uranium, not fossil fuels. These plants are always on: well-operated to avoid interruptions and built to withstand extreme weather, supporting the grid 24/7.
    </p>
    <h4>Natural Gas</h4>
      <img src={natural} alt="Natural Gas" />
    <p>
      Natural gas is a fossil energy source that formed deep beneath the earth's surface. Natural gas contains many different compounds. The largest component of natural gas is methane, a compound with one carbon atom and four hydrogen atoms (CH4). Natural gas also contains smaller amounts of natural gas liquids (NGL, which are also hydrocarbon gas liquids), and nonhydrocarbon gases, such as carbon dioxide and water vapor. We use natural gas as a fuel and to make materials and chemicals.
    </p>
    <h4>Petroleum</h4>
    <img src={petroleum} alt="Petroleum Energy" />
    <p>
      Petroleum is a broad term that groups together a combination of organic liquids and gases that is formed after kerogen is heated and compressed over long periods of time. This mix can be fairly complex, but the main gaseous component of petroleum is natural gas - largely methane - whereas the main liquid component is crude oil. Crude oil itself is a complex mixture of hydrocarbons, so the exact composition of petroleum is never the same.[2] Secondary fuels such as gasoline, kerosene, heating oil, and diesel fuel are all included in the definition of "petroleum".[3] Petroleum traps energy, first originating from the Sun, that was captured by photosynthetic plankton in ancient oceans. Just like coal, petroleum is a type of fossil fuel.
    </p>

    </div>
  )
}
function renderSources() {
  return (
    <div>
      <p>
        Data sources will be linked to here
      </p>
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
          {key === "nonrenewable" && renderNonrenewable()}
          {key ==="sources" && renderSources()}
        </Row>
      </>
        </div>
  )
};

export default FAQ;