import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap';

export class PersonalInfo extends Component {
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
          <h1>1. Personal Information </h1>
          <br />
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="First name" onChange={inputChange('firstname')} value={values.firstname} />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" onChange={inputChange('lastname')} value={values.lastname} />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="email" placeholder="Enter email" onChange={inputChange('email')} value={values.email}/>
              </Form.Group>
              </Form.Row>
              <Form.Row>
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Control type="phone" placeholder="Enter phone number" onChange={inputChange('phone')} value={values.phone}/>
              </Form.Group>
              </Form.Row>
            </Form>
            <ButtonGroup className="mr-2"><Button variant="danger" onClick={this.back}>Back</Button></ButtonGroup>
            <ButtonGroup className="mr-2"><Button variant="success" onClick={this.continue}>Continue</Button>{' '}</ButtonGroup>
          </div>
        )
    }
}

export default PersonalInfo
