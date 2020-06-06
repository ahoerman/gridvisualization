import React, { useContext, useEffect } from 'react';
import ChartContext from '../../Context/ChartContext';
import API from "../../util/API";

import "./mobileInput.css";
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'


function MobileInputStateDropdown() {

  const { setChosenStates, chosenStates } = useContext(ChartContext);
  useEffect(() => { console.log(chosenStates) }, [chosenStates]);

  const clearStates = event => {
    const clearChosenStates = {};
    setChosenStates(clearChosenStates);
  }

  const handleStateClick2 = event => {
    const value = event;
    if (chosenStates[value]) {
      const newChosenStates = { ...chosenStates };
      delete newChosenStates[value];
      setChosenStates(newChosenStates);
    } else {
      API.getStateInfo(value)
        .then(res => setChosenStates({
          ...chosenStates,
          [value]: res.data
        }))
        .catch(err => console.log(err));
    };
  };

    return (
    <Container fluid>
        <DropdownButton 
        as = {ButtonGroup}
        variant="success"
        size="lg"
        className="ButtonDropdown" 
        title="Click on a State to see the data">
           <div className="DropdownMenu">
          <Dropdown.Item as="button" eventKey="US" className="buttonA" onSelect={handleStateClick2}>Total for US</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="AK" className="buttonA" onSelect={handleStateClick2}>Alaska</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="AL" className="buttonA" onSelect={handleStateClick2}>Alabama</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="AR" className="buttonA" onSelect={handleStateClick2}>Arkansas</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="AZ" className="buttonA" onSelect={handleStateClick2}>Arizona</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="CA" className="buttonA" onSelect={handleStateClick2}>California</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="CO" className="buttonA" onSelect={handleStateClick2}>Colorado</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="CT" className="buttonA" onSelect={handleStateClick2}>Connecticut</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="DE" className="buttonA" onSelect={handleStateClick2}>Delaware</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="FL" className="buttonA" onSelect={handleStateClick2}>Florida</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="GA" className="buttonA" onSelect={handleStateClick2}>Georgia</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="HI" className="buttonA" onSelect={handleStateClick2}>Hawaii</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="IA" className="buttonA" onSelect={handleStateClick2}>Iowa</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="ID" className="buttonA" onSelect={handleStateClick2}>Idaho</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="IL" className="buttonA" onSelect={handleStateClick2}>Illinois</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="IN" className="buttonA" onSelect={handleStateClick2}>Indiana</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="KS" className="buttonA" onSelect={handleStateClick2}>Kansas</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="KY" className="buttonA" onSelect={handleStateClick2}>Kentucky</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="LA" className="buttonA" onSelect={handleStateClick2}>Louisiana</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="MA" className="buttonA" onSelect={handleStateClick2}>Massachussetts</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="MD" className="buttonA" onSelect={handleStateClick2}>Maryland</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="ME" className="buttonA" onSelect={handleStateClick2}>Maine</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="MI" className="buttonA" onSelect={handleStateClick2}>Michigan</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="MN" className="buttonA" onSelect={handleStateClick2}>Minnesota</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="MO" className="buttonA" onSelect={handleStateClick2}>Missouri</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="MS" className="buttonA" onSelect={handleStateClick2}>Mississippi</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="MT" className="buttonA" onSelect={handleStateClick2}>Montana</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="NC" className="buttonA" onSelect={handleStateClick2}>North Carolina</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="ND" className="buttonA" onSelect={handleStateClick2}>North Dakota</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="NE" className="buttonA" onSelect={handleStateClick2}>Nebraska</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="NH" className="buttonA" onSelect={handleStateClick2}>New Hampshire</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="NJ" className="buttonA" onSelect={handleStateClick2}>New Jersey</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="NM" className="buttonA" onSelect={handleStateClick2}>New Mexico</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="NV" className="buttonA" onSelect={handleStateClick2}>Nevada</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="NY" className="buttonA" onSelect={handleStateClick2}>New York</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="OH" className="buttonA" onSelect={handleStateClick2}>Ohio</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="OK" className="buttonA" onSelect={handleStateClick2}>Oklahoma</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="OR" className="buttonA" onSelect={handleStateClick2}>Oregon</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="PA" className="buttonA" onSelect={handleStateClick2}>Pennsylvania</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="RI" className="buttonA" onSelect={handleStateClick2}>Rhode Island</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="SC" className="buttonA" onSelect={handleStateClick2}>South Carolina</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="SD" className="buttonA" onSelect={handleStateClick2}>South Dakota</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="TN" className="buttonA" onSelect={handleStateClick2}>Tennessee</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="TX" className="buttonA" onSelect={handleStateClick2}>Texas</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="UT" className="buttonA" onSelect={handleStateClick2}>Utah</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="VA" className="buttonA" onSelect={handleStateClick2}>Virgina</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="VT" className="buttonA" onSelect={handleStateClick2}>Vermont</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="WA" className="buttonA" onSelect={handleStateClick2}>Washington</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="WI" className="buttonA" onSelect={handleStateClick2}>Wisconsin</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="WV" className="buttonA" onSelect={handleStateClick2}>West Virgina</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="WY" className="buttonA" onSelect={handleStateClick2}>Wyoming</Dropdown.Item>
          </div>
      </DropdownButton>
      <Button 
        variant="success" size="lg" block as="button" key="XX" className="buttonClear" onClick={clearStates}>Clear the Data</Button>
    </Container>
    );
  }
  
  export default MobileInputStateDropdown;