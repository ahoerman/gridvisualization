import React, { useState } from 'react';
import ChartContext from "../../../util/ChartContext";

const ChartContextProvider = ({ children }) => {
    const [chosenStates, setChosenStates] = useState([]);
    return (
        <ChartContext.Provider value={{chosenStates, setChosenStates}}>
             {children}
        </ChartContext.Provider>
    )
}

export default ChartContextProvider;