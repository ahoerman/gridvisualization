import React, { useState, useReducer } from 'react';
import ChartContext from "../../../Context/ChartContext";
import { USAMApReducer, USAMapReducer } from "../../../Reducers/USAMapReducer"
import initialStates from "../../USAMap/InitialStates"

const ChartContextProvider = ({ children }) => {
    const [chosenStates, setChosenStates] = useState({});
    const [ mapState, mapDispatch ] = useReducer( USAMapReducer, {mapColors: initialStates()});
    return (
        <ChartContext.Provider value={{chosenStates, setChosenStates, mapState, mapDispatch }}>
             {children}
        </ChartContext.Provider>
    )
}

export default ChartContextProvider;