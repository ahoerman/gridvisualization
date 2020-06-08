//Written by Letty Bedard to display the power plant data 

import React from "react";
import SingleTabTable from "../SingleTabTable";

function PowerPlantTable(stateData) {

  return (
    <>
      <h2>{stateData.stateName}</h2>
      <SingleTabTable {...stateData} />
    </>
  );
}

export default PowerPlantTable;
