import React, { Component } from 'react';
import Fans from '../images/fans.jpg';
import { Button } from 'react-bootstrap';

export class Intro extends Component{
  continue = e => {
      e.preventDefault();
      this.props.nextStep();
  };

  render() {
    return (
      <div className="container">
        <br />
        <center>
        <h1>Booking a Gaame</h1>
        <br />
        <p>Here you can book a table to watch upcoming FC Barcelona games with us.</p>
        <img src={Fans} alt="Fans" height="50%" width="50%"/>
        <br /><br />
        <Button variant="success" onClick={this.continue}>Continue</Button>{' '}</center>
      </div>
    )
  }
}

export default Intro
