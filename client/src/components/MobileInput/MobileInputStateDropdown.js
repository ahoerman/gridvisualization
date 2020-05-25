import "./mobileInput.css";

import { ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';

function MobileInputStateDropdown() {
    return (
<>
        <DropdownButton
          as={ButtonGroup}
          key={variant}
          id={`dropdown-variants-${variant}`}
          variant={variant.toLowerCase()}
          title={variant}
        >
            <Dropdown.Item eventKey="AL">Alabama</Dropdown.Item>
            <Dropdown.Item eventKey="AK">Alaska</Dropdown.Item>
            <Dropdown.Item eventKey="AZ">Arizona</Dropdown.Item>
            <Dropdown.Item eventKey="AR">Arkansas</Dropdown.Item>
            <Dropdown.Item eventKey="CA">California</Dropdown.Item>
            <Dropdown.Item eventKey="CO">Colorado</Dropdown.Item>
            <Dropdown.Item eventKey="CT">Connecticut</Dropdown.Item>
            <Dropdown.Item eventKey="DE">Delaware</Dropdown.Item>
            <Dropdown.Item eventKey="DC">District of Columbia</Dropdown.Item>
            <Dropdown.Item eventKey="FL">Florida</Dropdown.Item>
            <Dropdown.Item eventKey="GA">Georgia</Dropdown.Item>
            <Dropdown.Item eventKey="HI">Hawaii</Dropdown.Item>
            <Dropdown.Item eventKey="ID">Idaho</Dropdown.Item>
            <Dropdown.Item eventKey="IL">Illinois</Dropdown.Item>
            <Dropdown.Item eventKey="IN">Indiana</Dropdown.Item>
            <Dropdown.Item eventKey="IA">Iowa</Dropdown.Item>
            <Dropdown.Item eventKey="KS">Kansas</Dropdown.Item>
            <Dropdown.Item eventKey="KY">Kentucky</Dropdown.Item>
            <Dropdown.Item eventKey="LA">Louisiana</Dropdown.Item>
            <Dropdown.Item eventKey="ME">Maine</Dropdown.Item>
            <Dropdown.Item eventKey="MD">Maryland</Dropdown.Item>
            <Dropdown.Item eventKey="MA">Massachusetts</Dropdown.Item>
            <Dropdown.Item eventKey="MI">Michigan</Dropdown.Item>
            <Dropdown.Item eventKey="MN">Minnesota</Dropdown.Item>
            <Dropdown.Item eventKey="MS">Mississippi</Dropdown.Item>
            <Dropdown.Item eventKey="MO">Missouri</Dropdown.Item>
            <Dropdown.Item eventKey="MT">Montana</Dropdown.Item>
            <Dropdown.Item eventKey="NE">Nebraska</Dropdown.Item>
            <Dropdown.Item eventKey="NV">Nevada</Dropdown.Item>
            <Dropdown.Item eventKey="NH">New Hampshire</Dropdown.Item>
            <Dropdown.Item eventKey="NJ">New Jersey</Dropdown.Item>
            <Dropdown.Item eventKey="NM">New Mexico</Dropdown.Item>
            <Dropdown.Item eventKey="NY">New York</Dropdown.Item>
            <Dropdown.Item eventKey="NC">North Carolina</Dropdown.Item>
            <Dropdown.Item eventKey="ND">North Dakota</Dropdown.Item>
            <Dropdown.Item eventKey="OH">Ohio</Dropdown.Item>
            <Dropdown.Item eventKey="OK">Oklahoma</Dropdown.Item>
            <Dropdown.Item eventKey="OR">Oregon</Dropdown.Item>
            <Dropdown.Item eventKey="PA">Pennsylvania</Dropdown.Item>
            <Dropdown.Item eventKey="RI">Rhode Island</Dropdown.Item>
            <Dropdown.Item eventKey="SC">South Carolina</Dropdown.Item>
            <Dropdown.Item eventKey="SD">South Dakota</Dropdown.Item>
            <Dropdown.Item eventKey="TN">Tennessee</Dropdown.Item>
            <Dropdown.Item eventKey="TX">Texas</Dropdown.Item>
            <Dropdown.Item eventKey="UT">Utah</Dropdown.Item>
            <Dropdown.Item eventKey="VT">Vermont</Dropdown.Item>
            <Dropdown.Item eventKey="VA">Virginia</Dropdown.Item>
            <Dropdown.Item eventKey="WA">Washington</Dropdown.Item>
            <Dropdown.Item eventKey="WV">West Virginia</Dropdown.Item>
            <Dropdown.Item eventKey="WI">Wisconsin</Dropdown.Item>
            <Dropdown.Item eventKey="WY">Wyoming</Dropdown.Item>
        </DropdownButton>{' '}
      </>
    );
  }
  
  export default MobileInputStateDropdown;