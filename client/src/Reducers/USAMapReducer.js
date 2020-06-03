import InitialStates from "../components/USAMap/InitialStates";

export const USAMapReducer = (state, action) => {
    switch (action.type) {
        case "ADD_CHOSEN_STATE": 
        return {
            ...state,
            mapColors: { 
                ...state.mapColors, 
                    [action.stateKey]: {
                ...state.mapColors[action.stateKey], 
                fill:  "#FFFF00", 
                clicked: true,
            } }
        };
        case "REMOVE_CHOSEN_STATE":
            return {
                ...state,
                mapColors: {
                    ...state.mapColors, 
                    [action.stateKey]: {
                        ...state.mapColors[action.stateKey],
                        fill: state.mapColors[action.stateKey].originalFill,
                        clicked: false
                    }
                }
            };
        case "SET_TOPTEN_STATES":
            return {
                ...state,
                mapColors: action.mapColors
                
            };
        case "RESET":
            return {
                ...state,
                mapColors: InitialStates(),
            }
        default: return state
    }
};