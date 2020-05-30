import "./mobileInput.css";
import React from 'react';
import { ButtonGroup, Button, Row, Col, Container } from 'react-bootstrap';
// import API from "../../util/API";
// import ChartContext from '../../Context/ChartContext';
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MobileInputStateDropdown(eventKey) {

  const handleStateClick2 = event => {
    console.log(eventKey)
  }

    return (
    <>
      <h3>Chose a State Intput</h3>
      <ButtonGroup vertical>
        <Button>Alaska</Button>
        <Button>Alabama</Button>        
        <Button>Arkansas</Button>
        <Button>Arizona</Button>        
        <Button>California</Button>
        <Button>Colorado</Button>        
        <Button>Connecticut</Button>
        <Button>Delaware</Button>        
        <Button>Florida</Button>
        <Button>Georgia</Button>
      </ButtonGroup>
      <ButtonGroup vertical>
        <Button>Hawaii</Button>
        <Button>Iowa</Button>        
        <Button>Idaho</Button>
        <Button>Illinois</Button>        
        <Button>Indiana</Button>
        <Button>Kansas</Button>        
        <Button>Kentucky</Button>
        <Button>Louisiana</Button>        
        <Button>Massachussetts</Button>
        <Button>Maryland</Button>
      </ButtonGroup>      
      <ButtonGroup vertical>
        <Button>Maine</Button>
        <Button>Michigan</Button>        
        <Button>Minnesota</Button>
        <Button>Missouri</Button>        
        <Button>Mississippi</Button>
        <Button>Montana</Button>        
        <Button>North Carolina</Button>
        <Button>North Dakota</Button>        
        <Button>New Hampshire</Button>
        <Button>New Jersey</Button>
      </ButtonGroup>
      <ButtonGroup vertical>
        <Button>Button</Button>
        <Button>Button</Button>        
        <Button>Button</Button>
        <Button>Button</Button>        
        <Button>Button</Button>
        <Button>Button</Button>        
        <Button>Button</Button>
        <Button>Button</Button>        
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
      <ButtonGroup vertical>
        <Button>Button</Button>
        <Button>Button</Button>        
        <Button>Button</Button>
        <Button>Button</Button>        
        <Button>Button</Button>
        <Button>Button</Button>        
        <Button>Button</Button>
        <Button>Button</Button>        
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
      
    </>
    );
  }
  
  export default MobileInputStateDropdown;