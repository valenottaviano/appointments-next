import React, { Fragment, useEffect } from "react";
import { useState, Component } from "react";
import CalendarComponent from "../components/calendarComponent";
import FormTurnoComponent from "../components/FormTurnoComponent";
import NavBarComponent from "../components/NavBarComponent";

export default class turno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSelected: "",
      timeSelected: "",
    };
  }

  handleSelectedDate = (date) => {
    this.setState({ dateSelected: date });
  };

  handleSelectedTime = (time) => {
    this.setState({ timeSelected: time });
  };

  handleFormData = (data) => {
    this.setState(data);
  };

  render() {
    return (
      <Fragment>
        <NavBarComponent backgroundColor="white" />
        <section id="turno-section">
          <FormTurnoComponent
            handleFormData={this.handleFormData}
            dateSelected={this.state.dateSelected}
            timeSelected={this.state.timeSelected}
          />
          <CalendarComponent
            handleSelectedDate={this.handleSelectedDate}
            handleSelectedTime={this.handleSelectedTime}
          />
        </section>
        <style jsx>{`
          #turno-section {
            width: 70%;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: space-around;
            min-height: 90vh;
          }
        `}</style>
      </Fragment>
    );
  }
}
