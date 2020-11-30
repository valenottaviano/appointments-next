import React, { Fragment, Component } from 'react'
import "@date-io/date-fns";
import format from 'date-fns/format'
import { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { getMonth } from 'date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import axios from 'axios'
import { useRouter } from "next/router";


let today = {
  day: new Date().getDate(),
  month: new Date().getMonth() +1,
  year: new Date().getFullYear()
}

class calendarComponent extends Component {
  constructor(props){    
    super(props)
    this.state = {
      selectedDate: new Date(),
      selectedTime: "",
      statusDate: false,
      errorMessage: "",
      renderedTimeTable: []
    }
  }
  
  handleDateChange = (date) => {
    console.log()

    if(date.getMonth() + 1 < today.month &&  date.getFullYear() === today.year){
      return this.setState({statusDate: false,errorMessage: "Por favor selecciona una fecha válida.",selectedDate: new Date})
    } // Works well
    if(date.getFullYear() < today.year ){
      return this.setState({statusDate: false,errorMessage: "Por favor selecciona una fecha válida.",selectedDate: new Date})
    } // Works well
    if(date.getMonth() + 1 === today.month && date.getDate() < today.day && date.getFullYear() === today.year ){
      return this.setState({statusDate: false,errorMessage: "Por favor selecciona una fecha válida.",selectedDate: new Date})
    }// Works well

    this.props.handleSelectedDate(date)
    this.setState({statusDate: true, errorMessage: "", selectedDate: date})
  };

  render() {

    const findTodayTurnos = async () => {
  
      let query = `${this.state.selectedDate.getMonth()+1}${this.state.selectedDate.getDate()}${this.state.selectedDate.getFullYear()}` 
  
      let todayTurnos = await axios.get(`/api/turno/${query}`)
  
      const timetable = ["8:00","8:30","9:00","9:30","10:00","10:30","11:00","11:30","12:00"]
      
      let renderedTimeTable = timetable.map(time => {
        if(todayTurnos.data.data.length === 0){
          return <div 
          key={time} 
          className={`horario`}
          onClick={(e)=>{
            this.props.handleSelectedTime(time)
            this.setState({selectedTime: time})}
          }
          >{time}</div>
        }else{
          for(let i = 0; i < todayTurnos.data.data.length; i++){
            if(todayTurnos.data.data[i].time === time){
              break 
            }
            else{
              return <div 
              key={time} 
              className={`horario`}
              onClick={(e)=>{
                this.props.handleSelectedTime(time)
                this.setState({selectedTime: time})}
              }
              >{time}</div>
            }
          }
        }
      })
      
      this.setState({renderedTimeTable: renderedTimeTable})
    }

   
    return (
      <div className="calendar-container">
          <div className="time-table">
            {this.state.renderedTimeTable}
          </div>
          <h2>{this.state.selectedTime ? `Horario seleccionado: ${this.state.selectedTime}` : ''}</h2>
            <span>{this.state.errorMessage}</span>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                variant="inline"
                margin="normal"
                format="dd/MM/yyy"
                id="date-picker"
                label="Seleccionar una fecha"
                value={this.state.selectedDate}
                onChange={this.handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change-date",
                }}
              />
          </MuiPickersUtilsProvider>
          <button onClick={findTodayTurnos}>Buscar Horarios</button>
              <style jsx>{`
                .calendar-container{
                  display:flex;
                  flex-direction:column;
                  margin-left: 3rem;
                }
                .calendar-container span {
                  color: red
                }
                .calendar-container h2 {
                  margin-top: 2rem;
                  font-size:2rem;
                }
                .time-table{
                  display:flex;
                  flex-direction: column;
                  flex-wrap:wrap;
                  justify-content:center;
                  align-items:center;
                  max-height:50vh;
                }
                button{
                  padding: 0.8rem 2rem;
                  color:white;
                  background-color: gray;
                  border: none;
                  cursor:pointer;
                  font-family: 'Nunito';
                  font-weight: 600;
                  font-size: 1rem;
                }
              `}</style>
          </div>
    );
  }
}

export default calendarComponent;
