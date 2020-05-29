import React from "react";
import ReactDOM from 'react-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MobileInputStateDropdown from '../components/MobileInput/MobileInputStateDropdown';
import useWindowSize from "../hooks/useWindowSize";

// const renewable = ['Biomass - Energy from plants', 'Wood and wood waste', 'Municipal solid waste', 'Biomass - energy from plants', 'Wood and wood waste', 'Municipal solid waste', 'Landfill gas and biogas', 'Ethanol', 'Biodiesel', 'Hydropower - energy from flowing water', 
// 'Geothermal - energy heat inside the earth', 'Wind - energy from wind', 'Solar - energy from the sun'];

// const renewableLis = renewable.map(person =>
//   // expression goes here:
//   <li>{person}</li>
// );

// // ReactDOM.render goes here:
// ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));

function FAQ() {
  return (
    <div>
      <h1>FAQ</h1>
      <p>
        When people use electricity in their homes, the electrical power may come from a mixture of energy sources.  Energy sources can be categorized as renewable or nonrenewable.
      </p>
      <p>
        Renewable (an energy source that can be easily replenished).  The major types of renewable energy sources are:
      </p>
      const renewable = ['Biomass - Energy from plants', 'Wood and wood waste', 'Municipal solid waste', ];


// ReactDOM.render goes here:
{/* ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app')); */}
        <p>
        Biomass - energy from plants
        Wood and wood waste
        Municipal solid waste
        Landfill gas and biogas
        Ethanol
        Biodiesel
        Hydropower - energy from flowing water
        Geothermal - energy heat inside the earth
        Wind - energy from wind
        Solar - energy from the sun
         
        Nonrenewable (an energy source that cannot be easily replenished)
        The major types of nonrenewable energy sources are:
        Petroleum products
        Hydrocarbon gas liquids
        Natural gas
        Coal
        Nuclear energy


        Most of the energy consumed in the United States (89% in 2019) is from nonrenewable energy sources.  

        Crude oil, natural gas, and coal are called fossil fuels because they were formed over millions of years by the action of heat from the earth's core and pressure from rock and soil on the remains (or fossils) of dead plants and creatures such as microscopic diatoms. 

        Fossil fuels consist mainly of carbon and hydrogen. When fossil fuels are burned, oxygen combines with carbon to form CO2 and with hydrogen to form water (H2O). These reactions release heat, which we use for energy. The amount of CO2 produced depends on the carbon content of the fuel, and the amount of heat produced depends on the carbon and hydrogen content. Because natural gas, which is mostly CH4, has a high hydrogen content, combustion of natural gas produces less CO2 for the same amount of heat produced from burning other fossil fuels. For example, for the same amount of energy produced, burning natural gas produces about half of the amount of CO2 produced by burning coal.

        Nuclear energy is produced from uranium, a nonrenewable energy source whose atoms are split (through a process called nuclear fission) to create heat and, eventually, electricity.  Unlike fossil fuel-fired power plants, nuclear reactors do not produce air pollution or carbon dioxide while operating. A major environmental concern related to nuclear power is the creation of radioactive wastes such as uranium mill tailings, spent (used) reactor fuel, and other radioactive wastes. These materials can remain radioactive and dangerous to human health for thousands of years. Radioactive wastes are subject to special regulations that govern their handling, transportation, storage, and disposal to protect human health and the environment. 

        A large area surrounding a nuclear power plant is restricted and guarded by armed security teams.  An uncontrolled nuclear reaction in a nuclear reactor could result in widespread contamination of air and water. The risk of this happening at nuclear power plants in the United States is small because of the diverse and redundant barriers and safety systems in place at nuclear power plants, the training and skills of the reactor operators, testing and maintenance activities, and the regulatory requirements and oversight of the U.S. Nuclear Regulatory Commission. 

        Did you know that some renewable energy sources emit greenhouse gases during the generation of electricity?  

        Biomass, and biofuels made from biomass, are renewable energy sources that are alternatives to fossil fuels. Burning either fossil fuels or biomass releases carbon dioxide (CO2), a greenhouse gas. However the plants that are the source of biomass for energy, capture almost the same amount of CO2 through photosynthesis while growing as is released when biomass is burned, This makes biomass a carbon-neutral energy source unlike fossil fuels.

        Glossary:


        Hydroelectric power:  The use of flowing water to produce electrical energy.

        Pumped-storage hydropower facilities are a type of hydroelectric storage system where water is pumped from a water source up to a storage reservoir at a higher elevation and is released from the upper reservoir to power hydro turbines located below the upper reservoir. The electricity for pumping may be supplied by hydro turbines or by other types of power plants including fossil fuel or nuclear power plants. They usually pump water to storage when electricity demand and generation costs, and/or when wholesale electricity prices are relatively low and release the stored water to generate electricity during peak electricity demand periods when wholesale electricity prices are relatively high. Pumped-storage hydroelectric systems generally use more electricity to pump water to the upper water storage reservoirs than they produce with the stored water. Therefore, pumped-storage facilities have net negative electricity generation balances.

        Wind energy:  Kinetic energy present in wind motion that can be converted to mechanical energy for driving pumps, mills, and electric power generators.

      </p>
    </div>
  );
}

export default FAQ;
