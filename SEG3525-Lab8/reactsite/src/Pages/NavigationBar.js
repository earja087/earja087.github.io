import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/barca.png';

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="warning" variant="light"><img src={logo} alt="logo" width="35px" height="35px"/>
        <Navbar.Brand href="Main">Culers in Ottawa</Navbar.Brand>
        <Nav className="mr-right">
          <Nav.Link href="Team">Team</Nav.Link>
          <Nav.Link href="History">History</Nav.Link>
          <Nav.Link href="Booking">Booking</Nav.Link>
          <Nav.Link href="AboutUs">About Us</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavigationBar
