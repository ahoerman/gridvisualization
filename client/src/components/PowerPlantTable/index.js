//Written by Letty Bedard to display the power plant data 

import React from "react";
import SingleTable from "../SingleTable";
import MultiTabTable from "../MultiTabTable";
import useWindowSize from "../../hooks/useWindowSize";

function PowerPlantTable(stateData) {
  const { width } = useWindowSize();

  return (
    <>
      <h2>{stateData.stateName}</h2>
      { width > 750 ? 
        <MultiTabTable {...stateData} />
        : <SingleTable {...stateData} />
      } 
    </>
  );
}

export default PowerPlantTable;
