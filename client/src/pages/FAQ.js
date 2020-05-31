import React, { useState } from 'react';
import NavBarTop from '../components/Header/NavBarTop';
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
          {key==="renewable"}
          {/* </Row>
          
        <Row> */}
          {key==="nonrenewable"}
        </Row>
      </>
      <h1>FAQ</h1>
      <p>
        When people use electricity in their homes, the electrical power may come from a mixture of energy sources.  Energy sources can be categorized as renewable or nonrenewable Renewable (an energy source that can be easily replenished). 
      </p> 
      <p>
        The major types of renewable energy sources are:
      </p>
      <p>   •	Biomass - Energy from plants</p>
      <p>   •	Wood and wood waste</p>
      <p>   •	Municipal solid waste</p>
      <p>   •	Landfill gas and biogas</p>
      <p>   •	Ethanol</p>
      <p>   •	Biodiesel</p>
      <p>   •	Hydropower - energy from flowing water</p>
      <p>   •	Geothermal - energy heat inside the earth</p>
      <p>   •	Wind - energy from wind</p>
      <p>   •	Solar - energy from the sun</p>
         
      <p>
        Nonrenewable is an energy source that cannot be easily replenished.
      </p>
      <p>
        The major types of nonrenewable energy sources are:
      </p>
      <p>   •	Petroleum products</p>
      <p>   •	Hydrocarbon gas liquids</p>
      <p>   •	Natural gas</p>
      <p>   •	Coal</p>
      <p>   •	Nuclear energy</p>

      <p>
          Most of the energy consumed in the United States (89% in 2019) is from nonrenewable energy sources.  
      </p>
      <p>

          Crude oil, natural gas, and coal are called fossil fuels because they were formed over millions of years by the action of heat from the earth's core and pressure from rock and soil on the remains (or fossils) of dead plants and creatures such as microscopic diatoms. 
      </p>
      <p>

          Fossil fuels consist mainly of carbon and hydrogen. When fossil fuels are burned, oxygen combines with carbon to form CO2 and with hydrogen to form water (H2O). These reactions release heat, which we use for energy. The amount of CO2 produced depends on the carbon content of the fuel, and the amount of heat produced depends on the carbon and hydrogen content. Because natural gas, which is mostly CH4, has a high hydrogen content, combustion of natural gas produces less CO2 for the same amount of heat produced from burning other fossil fuels. For example, for the same amount of energy produced, burning natural gas produces about half of the amount of CO2 produced by burning coal.
      </p>
      <p>
          Nuclear energy is produced from uranium, a nonrenewable energy source whose atoms are split (through a process called nuclear fission) to create heat and, eventually, electricity.  Unlike fossil fuel-fired power plants, nuclear reactors do not produce air pollution or carbon dioxide while operating. A major environmental concern related to nuclear power is the creation of radioactive wastes such as uranium mill tailings, spent (used) reactor fuel, and other radioactive wastes. These materials can remain radioactive and dangerous to human health for thousands of years. Radioactive wastes are subject to special regulations that govern their handling, transportation, storage, and disposal to protect human health and the environment. 
      </p>
      <p>
          A large area surrounding a nuclear power plant is restricted and guarded by armed security teams.  An uncontrolled nuclear reaction in a nuclear reactor could result in widespread contamination of air and water. The risk of this happening at nuclear power plants in the United States is small because of the diverse and redundant barriers and safety systems in place at nuclear power plants, the training and skills of the reactor operators, testing and maintenance activities, and the regulatory requirements and oversight of the U.S. Nuclear Regulatory Commission. 
      </p>
      <p>
          Did you know that some renewable energy sources emit greenhouse gases during the generation of electricity?  
      </p>
      <p>
          Biomass, and biofuels made from biomass, are renewable energy sources that are alternatives to fossil fuels. Burning either fossil fuels or biomass releases carbon dioxide (CO2), a greenhouse gas. However the plants that are the source of biomass for energy, capture almost the same amount of CO2 through photosynthesis while growing as is released when biomass is burned, This makes biomass a carbon-neutral energy source unlike fossil fuels.
      </p>
      <p>
          Glossary:
      </p>
      <p>
          Hydroelectric power:  The use of flowing water to produce electrical energy.
      </p>
      <p>
          Pumped-storage hydropower facilities are a type of hydroelectric storage system where water is pumped from a water source up to a storage reservoir at a higher elevation and is released from the upper reservoir to power hydro turbines located below the upper reservoir. The electricity for pumping may be supplied by hydro turbines or by other types of power plants including fossil fuel or nuclear power plants. They usually pump water to storage when electricity demand and generation costs, and/or when wholesale electricity prices are relatively low and release the stored water to generate electricity during peak electricity demand periods when wholesale electricity prices are relatively high. Pumped-storage hydroelectric systems generally use more electricity to pump water to the upper water storage reservoirs than they produce with the stored water. Therefore, pumped-storage facilities have net negative electricity generation balances.
      </p>
      <p>
          Wind energy:  Kinetic energy present in wind motion that can be converted to mechanical energy for driving pumps, mills, and electric power generators.
      </p>
  </div>
)};

export default FAQ;