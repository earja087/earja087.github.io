import React, { Component } from 'react';
import { Button, ButtonGroup, Form, Col } from 'react-bootstrap';
import HelpDatePicker from './HelpDatePicker';

export class GameDay extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
      e.preventDefault();
      this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
          <div className="container">
          <br />
          <h1>2. Matchday Selection </h1>
          <p>Wednesdays consist of Champions League games.</p>
          <p>Sundays consist of La Liga games.</p>
          <HelpDatePicker />
          <br />
          <h1>3. Payment Information </h1>
          <Form.Row>
            <Col>
              <Form.Control placeholder="Credit Card Number" onChange={inputChange('creditcard')} value={values.creditcard} />
            </Col>
          </Form.Row>
          <br />
          <ButtonGroup className="mr-2"><Button variant="danger" onClick={this.back}>Back</Button></ButtonGroup>
          <ButtonGroup className="mr-2"><Button variant="success" onClick={this.continue}>Submit</Button>{' '}</ButtonGroup>
          </div>
        )
    }
}

export default GameDay
