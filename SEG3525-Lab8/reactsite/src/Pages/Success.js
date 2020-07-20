import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import MSN from '../images/msn.jpg';

export class Success extends Component {
  render() {
    const alertStyle = {
      margin: '40px 200px 40px 200px',
      border: '5px solid black'
    };
      return (
          <div>
          <center><Alert variant="success" style={alertStyle}>
            <Alert.Heading>Your booking has been confirmed!</Alert.Heading>
            <p>
              You will shortly receive an email containing your booking information. We can't wait to see you!
            </p>
            <hr />
            <img src={MSN} alt="MSN" width="100%"/>
          </Alert></center>
          </div>
      )
  }
}

export default Success
