// written by Letty Bedard to display data in a multitab table

import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import SingleTable from "../SingleTable";


function MultiTabTable(stateData) {
let groupedPlants = [];

stateData.plants.forEach((plant) => {	
  let placed = false;	
  // source match	
  for (let i = 0; i < groupedPlants.length; i++) {	
    if (groupedPlants[i][0]["fuelCategory"] === plant["fuelCategory"]) {
      groupedPlants[i].push(plant);	
      placed = true;	
      break;	
    }	
  };	
  //if we get out of the for without matching add a new one	
  if (!placed) {	
    groupedPlants.push([plant]);	
  }	
});	

// console.log(groupedPlants);

const tabPlant = [];

for (const plantArray of groupedPlants) {
  tabPlant.push({
    type: plantArray[0]["fuelCategory"],
    plants: plantArray
  });
}

// console.log(tabPlant);

const tabsList = tabPlant.map((powerType) => {
  return (
    <Tab eventKey={powerType.type} title={powerType.type}>
      <SingleTable {...powerType} />
    </Tab>
  )
});


  return (
    <>
      {
      <Tabs defaultActiveKey="All">
        <Tab eventKey="All" title="All">
          <SingleTable {...stateData} />
        </Tab>
        { tabsList }
      </Tabs>
      }
    </>
  );
}

export default MultiTabTable;