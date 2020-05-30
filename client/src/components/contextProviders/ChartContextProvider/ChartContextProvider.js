import React, { useState } from 'react';
import ChartContext from "../../../Context/ChartContext";

const ChartContextProvider = ({ children }) => {
    const [chosenStates, setChosenStates] = useState({});
    return (
        <ChartContext.Provider value={{chosenStates, setChosenStates}}>
             {children}
        </ChartContext.Provider>
    )
}

export default ChartContextProvider;