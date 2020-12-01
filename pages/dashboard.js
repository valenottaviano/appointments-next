import React, { Component, Fragment } from "react";
import axios from "axios";
import DayDashboard from "../components/DayDashboard";
import { startOfWeek, add } from "date-fns";

export default class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedWeek: [],
      turnosWeek: [],
      fisrtDayOfWeek: startOfWeek(new Date()),
      preRender: null,
    };

    this.monday = add(this.state.fisrtDayOfWeek, { days: 1 });
    this.tuesday = add(this.state.fisrtDayOfWeek, { days: 2 });
    this.wednesday = add(this.state.fisrtDayOfWeek, { days: 3 });
    this.thusrday = add(this.state.fisrtDayOfWeek, { days: 4 });
    this.friday = add(this.state.fisrtDayOfWeek, { days: 5 });
    this.saturday = add(this.state.fisrtDayOfWeek, { days: 6 });

    this.week = [
      this.state.fisrtDayOfWeek,
      this.monday,
      this.tuesday,
      this.wednesday,
      this.thusrday,
      this.friday,
      this.saturday,
    ];
  }

  handleOnNextWeek() {
    this.setState({
      fisrtDayOfWeek: add(this.state.fisrtDayOfWeek, { days: 7 }),
      preRender: null,
      renderedWeek: [],
    });
    this.week = [
      add(this.state.fisrtDayOfWeek, { days: 7 }),
      add(this.monday, { days: 7 }),
      add(this.tuesday, { days: 7 }),
      add(this.wednesday, { days: 7 }),
      add(this.thusrday, { days: 7 }),
      add(this.friday, { days: 7 }),
      add(this.saturday, { days: 7 }),
    ];
  }

  async handleOnPreRender() {
    let promiseRender = await Promise.all(
      this.week.map(async (day) => {
        let query = day.toLocaleDateString().replaceAll("/", "");
        const res = await axios.get(`/api/turno/${query}`);
        return res.data.data;
      })
    );
    this.setState({ preRender: promiseRender });
    this.handleOnRenderList();
  }

  handleOnRenderList() {
    let renderedList = this.state.preRender.map((day, index) => {
      if (day.length === 0) {
        return <DayDashboard turnos={false} index={index} />;
      } else {
        return <DayDashboard turnos={day} index={index} />;
      }
    });
    this.setState({ renderedWeek: renderedList });
  }

  render() {
    if (this.state.preRender === null) {
      this.handleOnPreRender();
    }
    console.log(this.state.fisrtDayOfWeek);

    return (
      <Fragment>
        <section id="dashboard-section">
          <header>
            <span className="next-week" onClick={() => this.handleOnNextWeek()}>
              Próxima semana
            </span>
            <span className="prev-week" onClick={() => this.handleOnNextWeek()}>
              Semana Anterior
            </span>
            <h2>Mi Agenda</h2>
            <h3>
              Semana del: {this.state.fisrtDayOfWeek.toLocaleDateString()}
            </h3>
          </header>
          <div className="weeks-dashboard">{this.state.renderedWeek}</div>
        </section>
        <style jsx>
          {`
            #dashboard-section {
              min-height: 100vh;
              width: 90%;
              margin: auto;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
            }
            #dashboard-section header {
              min-height: 10vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            #dashboard-section header h2 {
              font-size: 2rem;
              margin-right: 3rem;
            }
            #dashboard-section header h3 {
              font-size: 1.5rem;
            }
            #dashboard-section div {
              min-height: 90vh;
              width: 90%;
              margin: auto;
              display: flex;
              align-items: flex-start;
              justify-content: space-between;
            }
            .next-week {
              position: absolute;
              top: 1rem;
              background-color: gray;
              font-weight: 600;
              color: white;
              right: 10%;
              cursor: pointer;
              padding: 1rem 2rem;
            }
            .prev-week {
              position: absolute;
              top: 1rem;
              background-color: gray;
              font-weight: 600;
              color: white;
              left: 10%;
              cursor: pointer;
              padding: 1rem 2rem;
            }
            .weeks-dashboard {
              border-top: 1px solid;
              padding-top: 3rem;
            }
          `}
        </style>
      </Fragment>
    );
  }
}
