import React, { useContext, useEffect } from 'react';
import ReactMap from "react-usa-map";
import ChartContext from '../../Context/ChartContext';
import API from "../../util/API";


const USAMap = () => {

  const { setChosenStates, chosenStates, mapState, mapDispatch } = useContext(ChartContext);
  useEffect(() => {}, [chosenStates]);
  useEffect(() => {}, [mapState]);

  const handleStateClick = event => {

    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();

    // Update the appropriate state
    const value = event.target.dataset.name;

    // deselecting a State
    if (chosenStates[value]) {
      
      const newChosenStates = { ...chosenStates };
      delete newChosenStates[value];
      setChosenStates(newChosenStates);

      mapDispatch({
        type: "REMOVE_CHOSEN_STATE",
        stateKey: value,
      })
    } else {
      API.getStateInfo(value)
        .then(res => {
          mapDispatch({
            type: "ADD_CHOSEN_STATE", 
            stateKey: value,
          })

        setChosenStates({
          ...chosenStates,
          [value]: res.data
        })
      })
        .catch(err => console.log(err));
    };
  };
  return (
    <div>
      <ReactMap customize={mapState.mapColors} onClick={handleStateClick} />
    </div>
  )
}

export default USAMap;