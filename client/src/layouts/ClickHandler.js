import '../App.css';


let pickedStates = [];



function MapClickHandler(currentState, state) {

    console.log("In clickhandler, here is the statethat was clicked")
    console.log(currentState);
    console.log("In clickhandler, here is the the whole state")
    console.log(state);
    console.log("In clickhandler, this shows I can drill down to an individual state's data")
    console.log(state.CA)
    // this.setState(state, props) => {
    //     setState{currentState: fill: "#FFFF00"}
    // }
    
       
    if (pickedStates.includes(currentState)) {
        console.log ("already picked, so not added again");
    } else {
        pickedStates.push(currentState);
    }

    console.log("In clickhandler, this shows the array of clicked states")
    console.log(pickedStates);
    

  return MapClickHandler;
}

export default MapClickHandler;