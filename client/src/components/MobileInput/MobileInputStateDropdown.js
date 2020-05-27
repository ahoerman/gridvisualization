import "./mobileInput.css";
import React from 'react';
import { Dropdown, Row, Col, Container } from 'react-bootstrap';
// import API from "../../util/API";
// import ChartContext from '../../Context/ChartContext';
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MobileInputStateDropdown(eventKey) {

  // const { setChosenStates, chosenStates } = useContext(ChartContext);
  // useEffect(() => { console.log(chosenStates) }, [chosenStates]);
  // const handleStateClick = event => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   event.preventDefault();
  //   // Update the appropriate state
  //   const value = event.target.dataset.name;
  //   if (chosenStates[value]) {
  //     const newChosenStates = { ...chosenStates };
  //     delete newChosenStates[value];
  //     setChosenStates(newChosenStates);
  //   } else {
  //     API.getStateInfo(value)
  //       .then(res => setChosenStates({
  //         ...chosenStates,
  //         [value]: res.data
  //       }))
  //       .catch(err => console.log(err));
  //   };
  // };
  const handleStateClick2 = event => {
    console.log(eventKey)
  }

    return (
<>
<Container fluid>
<Row>
        <h3 className="HeadText2States"><FontAwesomeIcon icon={faCheckSquare} /> Pick State A to see the energy profile. Pick State B to compare it to another State.</h3>
        </Row>
        <Row>
          <Col s={12}>
          <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Pick State A
          </Dropdown.Toggle>
          <Dropdown.Menu>
          <Dropdown.Item eventKey="AL">Alabama</Dropdown.Item>
            <Dropdown.Item eventKey="AK" onSelect={handleStateClick2(eventKey)}>"Alaska</Dropdown.Item>,
            <Dropdown.Item eventKey="AZ" onSelect={handleStateClick2(eventKey)}>"Arizona</Dropdown.Item>,
            <Dropdown.Item eventKey="AR" onSelect={handleStateClick2(eventKey)}>"Arkansas</Dropdown.Item>,
            <Dropdown.Item eventKey="CA" onSelect={handleStateClick2(eventKey)}>"California</Dropdown.Item>,
            <Dropdown.Item eventKey="CO" onSelect={handleStateClick2(eventKey)}>"Colorado</Dropdown.Item>,
            <Dropdown.Item eventKey="CT" onSelect={handleStateClick2(eventKey)}>"Connecticut</Dropdown.Item>,
            <Dropdown.Item eventKey="DE" onSelect={handleStateClick2(eventKey)}>"Delaware</Dropdown.Item>,
            <Dropdown.Item eventKey="DC" onSelect={handleStateClick2(eventKey)}>"District of Columbia</Dropdown.Item>,
            <Dropdown.Item eventKey="FL" onSelect={handleStateClick2(eventKey)}>"Florida</Dropdown.Item>,
            <Dropdown.Item eventKey="GA" onSelect={handleStateClick2(eventKey)}>"Georgia</Dropdown.Item>,
            <Dropdown.Item eventKey="HI" onSelect={handleStateClick2(eventKey)}>"Hawaii</Dropdown.Item>,
            <Dropdown.Item eventKey="ID" onSelect={handleStateClick2(eventKey)}>"Idaho</Dropdown.Item>,
            <Dropdown.Item eventKey="IL" onSelect={handleStateClick2(eventKey)}>"Illinois</Dropdown.Item>,
            <Dropdown.Item eventKey="IN" onSelect={handleStateClick2(eventKey)}>"Indiana</Dropdown.Item>,
            <Dropdown.Item eventKey="IA" onSelect={handleStateClick2(eventKey)}>"Iowa</Dropdown.Item>,
            <Dropdown.Item eventKey="KS" onSelect={handleStateClick2(eventKey)}>"Kansas</Dropdown.Item>,
            <Dropdown.Item eventKey="KY" onSelect={handleStateClick2(eventKey)}>"Kentucky</Dropdown.Item>,
            <Dropdown.Item eventKey="LA" onSelect={handleStateClick2(eventKey)}>"Louisiana</Dropdown.Item>,
            <Dropdown.Item eventKey="ME" onSelect={handleStateClick2(eventKey)}>"Maine</Dropdown.Item>,
            <Dropdown.Item eventKey="MD" onSelect={handleStateClick2(eventKey)}>"Maryland</Dropdown.Item>,
            <Dropdown.Item eventKey="MA" onSelect={handleStateClick2(eventKey)}>"Massachusetts</Dropdown.Item>,
            <Dropdown.Item eventKey="MI" onSelect={handleStateClick2(eventKey)}>"Michigan</Dropdown.Item>,
            <Dropdown.Item eventKey="MN" onSelect={handleStateClick2(eventKey)}>"Minnesota</Dropdown.Item>,
            <Dropdown.Item eventKey="MS" onSelect={handleStateClick2(eventKey)}>"Mississippi</Dropdown.Item>,
            <Dropdown.Item eventKey="MO" onSelect={handleStateClick2(eventKey)}>"Missouri</Dropdown.Item>,
            <Dropdown.Item eventKey="MT" onSelect={handleStateClick2(eventKey)}>"Montana</Dropdown.Item>,
            <Dropdown.Item eventKey="NE" onSelect={handleStateClick2(eventKey)}>"Nebraska</Dropdown.Item>,
            <Dropdown.Item eventKey="NV" onSelect={handleStateClick2(eventKey)}>"Nevada</Dropdown.Item>,
            <Dropdown.Item eventKey="NH" onSelect={handleStateClick2(eventKey)}>"New Hampshire</Dropdown.Item>,
            <Dropdown.Item eventKey="NJ" onSelect={handleStateClick2(eventKey)}>"New Jersey</Dropdown.Item>,
            <Dropdown.Item eventKey="NM" onSelect={handleStateClick2(eventKey)}>"New Mexico</Dropdown.Item>,
            <Dropdown.Item eventKey="NY" onSelect={handleStateClick2(eventKey)}>"New York</Dropdown.Item>,
            <Dropdown.Item eventKey="NC" onSelect={handleStateClick2(eventKey)}>"North Carolina</Dropdown.Item>,
            <Dropdown.Item eventKey="ND" onSelect={handleStateClick2(eventKey)}>"North Dakota</Dropdown.Item>,
            <Dropdown.Item eventKey="OH" onSelect={handleStateClick2(eventKey)}>"Ohio</Dropdown.Item>,
            <Dropdown.Item eventKey="OK" onSelect={handleStateClick2(eventKey)}>"Oklahoma</Dropdown.Item>,
            <Dropdown.Item eventKey="OR" onSelect={handleStateClick2(eventKey)}>"Oregon</Dropdown.Item>,
            <Dropdown.Item eventKey="PA" onSelect={handleStateClick2(eventKey)}>"Pennsylvania</Dropdown.Item>,
            <Dropdown.Item eventKey="RI" onSelect={handleStateClick2(eventKey)}>"Rhode Island</Dropdown.Item>,
            <Dropdown.Item eventKey="SC" onSelect={handleStateClick2(eventKey)}>"South Carolina</Dropdown.Item>,
            <Dropdown.Item eventKey="SD" onSelect={handleStateClick2(eventKey)}>"South Dakota</Dropdown.Item>,
            <Dropdown.Item eventKey="TN" onSelect={handleStateClick2(eventKey)}>"Tennessee</Dropdown.Item>,
            <Dropdown.Item eventKey="TX" onSelect={handleStateClick2(eventKey)}>"Texas</Dropdown.Item>,
            <Dropdown.Item eventKey="UT" onSelect={handleStateClick2(eventKey)}>"Utah</Dropdown.Item>,
            <Dropdown.Item eventKey="VT" onSelect={handleStateClick2(eventKey)}>"Vermont</Dropdown.Item>,
            <Dropdown.Item eventKey="VA" onSelect={handleStateClick2(eventKey)}>"Virginia</Dropdown.Item>,
            <Dropdown.Item eventKey="WA" onSelect={handleStateClick2(eventKey)}>"Washington</Dropdown.Item>,
            <Dropdown.Item eventKey="WV" onSelect={handleStateClick2(eventKey)}>"West Virginia</Dropdown.Item>,
            <Dropdown.Item eventKey="WI" onSelect={handleStateClick2(eventKey)}>"Wisconsin</Dropdown.Item>,
            <Dropdown.Item eventKey="WY" onSelect={handleStateClick2(eventKey)}>"Wyoming</Dropdown.Item>,
  </Dropdown.Menu>
</Dropdown>  
          </Col>
          <Col>
          <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic" onSelect={handleStateClick2(eventKey)}>"
    Pick State B
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <Dropdown.Item eventKey="AL" onSelect={handleStateClick2(eventKey)}>"Alabama</Dropdown.Item>
            <Dropdown.Item eventKey="AK" onSelect={handleStateClick2(eventKey)}>"Alaska</Dropdown.Item>,
            <Dropdown.Item eventKey="AZ" onSelect={handleStateClick2(eventKey)}>"Arizona</Dropdown.Item>,
            <Dropdown.Item eventKey="AR" onSelect={handleStateClick2(eventKey)}>"Arkansas</Dropdown.Item>,
            <Dropdown.Item eventKey="CA" onSelect={handleStateClick2(eventKey)}>"California</Dropdown.Item>,
            <Dropdown.Item eventKey="CO" onSelect={handleStateClick2(eventKey)}>"Colorado</Dropdown.Item>,
            <Dropdown.Item eventKey="CT" onSelect={handleStateClick2(eventKey)}>"Connecticut</Dropdown.Item>,
            <Dropdown.Item eventKey="DE" onSelect={handleStateClick2(eventKey)}>"Delaware</Dropdown.Item>,
            <Dropdown.Item eventKey="DC" onSelect={handleStateClick2(eventKey)}>"District of Columbia</Dropdown.Item>,
            <Dropdown.Item eventKey="FL" onSelect={handleStateClick2(eventKey)}>"Florida</Dropdown.Item>,
            <Dropdown.Item eventKey="GA" onSelect={handleStateClick2(eventKey)}>"Georgia</Dropdown.Item>,
            <Dropdown.Item eventKey="HI" onSelect={handleStateClick2(eventKey)}>"Hawaii</Dropdown.Item>,
            <Dropdown.Item eventKey="ID" onSelect={handleStateClick2(eventKey)}>"Idaho</Dropdown.Item>,
            <Dropdown.Item eventKey="IL" onSelect={handleStateClick2(eventKey)}>"Illinois</Dropdown.Item>,
            <Dropdown.Item eventKey="IN" onSelect={handleStateClick2(eventKey)}>"Indiana</Dropdown.Item>,
            <Dropdown.Item eventKey="IA" onSelect={handleStateClick2(eventKey)}>"Iowa</Dropdown.Item>,
            <Dropdown.Item eventKey="KS" onSelect={handleStateClick2(eventKey)}>"Kansas</Dropdown.Item>,
            <Dropdown.Item eventKey="KY" onSelect={handleStateClick2(eventKey)}>"Kentucky</Dropdown.Item>,
            <Dropdown.Item eventKey="LA" onSelect={handleStateClick2(eventKey)}>"Louisiana</Dropdown.Item>,
            <Dropdown.Item eventKey="ME" onSelect={handleStateClick2(eventKey)}>"Maine</Dropdown.Item>,
            <Dropdown.Item eventKey="MD" onSelect={handleStateClick2(eventKey)}>"Maryland</Dropdown.Item>,
            <Dropdown.Item eventKey="MA" onSelect={handleStateClick2(eventKey)}>"Massachusetts</Dropdown.Item>,
            <Dropdown.Item eventKey="MI" onSelect={handleStateClick2(eventKey)}>"Michigan</Dropdown.Item>,
            <Dropdown.Item eventKey="MN" onSelect={handleStateClick2(eventKey)}>"Minnesota</Dropdown.Item>,
            <Dropdown.Item eventKey="MS" onSelect={handleStateClick2(eventKey)}>"Mississippi</Dropdown.Item>,
            <Dropdown.Item eventKey="MO" onSelect={handleStateClick2(eventKey)}>"Missouri</Dropdown.Item>,
            <Dropdown.Item eventKey="MT" onSelect={handleStateClick2(eventKey)}>"Montana</Dropdown.Item>,
            <Dropdown.Item eventKey="NE" onSelect={handleStateClick2(eventKey)}>"Nebraska</Dropdown.Item>,
            <Dropdown.Item eventKey="NV" onSelect={handleStateClick2(eventKey)}>"Nevada</Dropdown.Item>,
            <Dropdown.Item eventKey="NH" onSelect={handleStateClick2(eventKey)}>"New Hampshire</Dropdown.Item>,
            <Dropdown.Item eventKey="NJ" onSelect={handleStateClick2(eventKey)}>"New Jersey</Dropdown.Item>,
            <Dropdown.Item eventKey="NM" onSelect={handleStateClick2(eventKey)}>"New Mexico</Dropdown.Item>,
            <Dropdown.Item eventKey="NY" onSelect={handleStateClick2(eventKey)}>"New York</Dropdown.Item>,
            <Dropdown.Item eventKey="NC" onSelect={handleStateClick2(eventKey)}>"North Carolina</Dropdown.Item>,
            <Dropdown.Item eventKey="ND" onSelect={handleStateClick2(eventKey)}>"North Dakota</Dropdown.Item>,
            <Dropdown.Item eventKey="OH" onSelect={handleStateClick2(eventKey)}>"Ohio</Dropdown.Item>,
            <Dropdown.Item eventKey="OK" onSelect={handleStateClick2(eventKey)}>"Oklahoma</Dropdown.Item>,
            <Dropdown.Item eventKey="OR" onSelect={handleStateClick2(eventKey)}>"Oregon</Dropdown.Item>,
            <Dropdown.Item eventKey="PA" onSelect={handleStateClick2(eventKey)}>"Pennsylvania</Dropdown.Item>,
            <Dropdown.Item eventKey="RI" onSelect={handleStateClick2(eventKey)}>"Rhode Island</Dropdown.Item>,
            <Dropdown.Item eventKey="SC" onSelect={handleStateClick2(eventKey)}>"South Carolina</Dropdown.Item>,
            <Dropdown.Item eventKey="SD" onSelect={handleStateClick2(eventKey)}>"South Dakota</Dropdown.Item>,
            <Dropdown.Item eventKey="TN" onSelect={handleStateClick2(eventKey)}>"Tennessee</Dropdown.Item>,
            <Dropdown.Item eventKey="TX" onSelect={handleStateClick2(eventKey)}>"Texas</Dropdown.Item>,
            <Dropdown.Item eventKey="UT" onSelect={handleStateClick2(eventKey)}>"Utah</Dropdown.Item>,
            <Dropdown.Item eventKey="VT" onSelect={handleStateClick2(eventKey)}>"Vermont</Dropdown.Item>,
            <Dropdown.Item eventKey="VA" onSelect={handleStateClick2(eventKey)}>"Virginia</Dropdown.Item>,
            <Dropdown.Item eventKey="WA" onSelect={handleStateClick2(eventKey)}>"Washington</Dropdown.Item>,
            <Dropdown.Item eventKey="WV" onSelect={handleStateClick2(eventKey)}>"West Virginia</Dropdown.Item>,
            <Dropdown.Item eventKey="WI" onSelect={handleStateClick2(eventKey)}>"Wisconsin</Dropdown.Item>,
            <Dropdown.Item eventKey="WY" onSelect={handleStateClick2(eventKey)}>"Wyoming</Dropdown.Item>,
  </Dropdown.Menu>
</Dropdown>  
            </Col>


</Row>
</Container>
      </>
    );
  }
  
  export default MobileInputStateDropdown;