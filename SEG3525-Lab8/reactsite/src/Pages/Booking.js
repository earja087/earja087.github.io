import React, { Component } from 'react';
import Intro from './Intro';
import PersonalInfo from './PersonalInfo';
import GameDay from './GameDay';
import Success from './Success';

export class Booking extends Component {
    state = {
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        creditcard: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const { step } = this.state;
        const { firstname, lastname, email, phone, creditcard, date } = this.state;
        const values = { firstname, lastname, email, phone, creditcard, date };

        switch (step) {
          case 1:
              return (
                  <Intro
                      nextStep={this.nextStep}
                      inputChange={this.inputChange}
                      values={values}
                  />
              );
            case 2:
                return (
                    <PersonalInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <GameDay
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Success />
                );
        }
    }
}

export default Booking
