import React from "react";
import Table from "react-bootstrap/Table";

function SingleTabTable({ plants}) {
  console.log(plants);
  return (
    <>
      <Table responsive striped bordered hover size="sm" className="PowerplantTable">
      <thead>
        <tr>
          <th>Plant Name</th>
          <th>Fuel Category</th>
          <th>Primary Fuel Source</th>
          <th>Annual Net Generation (mWh)</th>
          <th>Annual CO2 Emission (tons)</th>
          <th>Annual CO2 Emission/mWh (lbs/mWh)</th>
          <th>Click To See Plant Location</th>
        </tr>
      </thead>
      <tbody>
        {plants.map((eachPlant, i) => (
          <tr key={eachPlant.plantName+i}>
            <td>{eachPlant.plantName}</td>
            <td>{eachPlant.fuelCategory}</td>
            <td>{eachPlant.primaryFuel}</td>
            <td>{eachPlant.annualGeneration}</td>
            <td>{eachPlant.annualCO2}</td>
            <td>{eachPlant.annualCO2perMWH}</td>
            <td><a href={`https://maps.google.com/?q=${eachPlant.latitude},${eachPlant.longitude}`} target="_blank" rel="noopener noreferrer" alt="powerplant location">Location</a></td>
          </tr>
        ))}
      </tbody>
      </Table>
    </>
  );
}
export default SingleTabTable;