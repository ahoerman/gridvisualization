import React from 'react';
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


function PowerPlantStateChooser() {

  const stateForPlant = event => {
    const value = event;
    console.log(value)
  };

    return (
    <Container fluid>
      <Container>
        <DropdownButton 
        as = {ButtonGroup}
        variant="success"
        size="lg"
        className="ButtonDropdown" 
        title="Click on a State to see the Power Plants">
          <Dropdown.Item as="button" eventKey="AK" className="buttonA" onSelect={stateForPlant}>Alaska</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="AL" className="buttonA" onSelect={stateForPlant}>Alabama</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="AR" className="buttonA" onSelect={stateForPlant}>Arkansas</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="AZ" className="buttonA" onSelect={stateForPlant}>Arizona</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="CA" className="buttonA" onSelect={stateForPlant}>California</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="CO" className="buttonA" onSelect={stateForPlant}>Colorado</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="CT" className="buttonA" onSelect={stateForPlant}>Connecticut</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="DE" className="buttonA" onSelect={stateForPlant}>Delaware</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="FL" className="buttonA" onSelect={stateForPlant}>Florida</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="GA" className="buttonA" onSelect={stateForPlant}>Georgia</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="HI" className="buttonA" onSelect={stateForPlant}>Hawaii</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="IA" className="buttonA" onSelect={stateForPlant}>Iowa</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="ID" className="buttonA" onSelect={stateForPlant}>Idaho</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="IL" className="buttonA" onSelect={stateForPlant}>Illinois</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="IN" className="buttonA" onSelect={stateForPlant}>Indiana</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="KS" className="buttonA" onSelect={stateForPlant}>Kansas</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="KY" className="buttonA" onSelect={stateForPlant}>Kentucky</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="LA" className="buttonA" onSelect={stateForPlant}>Louisiana</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="MA" className="buttonA" onSelect={stateForPlant}>Massachussetts</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="MD" className="buttonA" onSelect={stateForPlant}>Maryland</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="ME" className="buttonA" onSelect={stateForPlant}>Maine</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="MI" className="buttonA" onSelect={stateForPlant}>Michigan</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="MN" className="buttonA" onSelect={stateForPlant}>Minnesota</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="MO" className="buttonA" onSelect={stateForPlant}>Missouri</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="MS" className="buttonA" onSelect={stateForPlant}>Mississippi</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="MT" className="buttonA" onSelect={stateForPlant}>Montana</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="NC" className="buttonA" onSelect={stateForPlant}>North Carolina</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="ND" className="buttonA" onSelect={stateForPlant}>North Dakota</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="NE" className="buttonA" onSelect={stateForPlant}>Nebraska</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="NH" className="buttonA" onSelect={stateForPlant}>New Hampshire</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="NJ" className="buttonA" onSelect={stateForPlant}>New Jersey</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="NM" className="buttonA" onSelect={stateForPlant}>New Mexico</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="NV" className="buttonA" onSelect={stateForPlant}>Nevada</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="NY" className="buttonA" onSelect={stateForPlant}>New York</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="OH" className="buttonA" onSelect={stateForPlant}>Ohio</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="OK" className="buttonA" onSelect={stateForPlant}>Oklahoma</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="OR" className="buttonA" onSelect={stateForPlant}>Oregon</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="PA" className="buttonA" onSelect={stateForPlant}>Pennsylvania</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="RI" className="buttonA" onSelect={stateForPlant}>Rhode Island</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="SC" className="buttonA" onSelect={stateForPlant}>South Carolina</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="SD" className="buttonA" onSelect={stateForPlant}>South Dakota</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="TN" className="buttonA" onSelect={stateForPlant}>Tennessee</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="TX" className="buttonA" onSelect={stateForPlant}>Texas</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="UT" className="buttonA" onSelect={stateForPlant}>Utah</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="VA" className="buttonA" onSelect={stateForPlant}>Virgina</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="VT" className="buttonA" onSelect={stateForPlant}>Vermont</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="WA" className="buttonA" onSelect={stateForPlant}>Washington</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="WI" className="buttonA" onSelect={stateForPlant}>Wisconsin</Dropdown.Item>
          <Dropdown.Item as="button" eventKey="WV" className="buttonA" onSelect={stateForPlant}>West Virgina</Dropdown.Item>        
          <Dropdown.Item as="button" eventKey="WY" className="buttonA" onSelect={stateForPlant}>Wyoming</Dropdown.Item>
      </DropdownButton>
        </Container>
    </Container>
    );
  }
  
  export default PowerPlantStateChooser;