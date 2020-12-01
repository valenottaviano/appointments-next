import React, { Fragment , useState, useEffect} from 'react';
import TurnoDashboardComponent from "../components/TurnoDashboardComponent";


const DayDashboard = ({turnos, index}) => { 
    let renderedPreTurnos
    
    if(turnos){
        renderedPreTurnos = turnos.map(turno=>{
            return <TurnoDashboardComponent turno={turno} index={index}/>
        })
    }
   

    let dia
    if(index === 0 ){dia = 'Domingo'}
    if(index === 1 ){dia = 'Lunes'}
    if(index === 2 ){dia = 'Martes'}
    if(index === 3 ){dia = 'Miércoles'}
    if(index === 4 ){dia = 'Jueves'}
    if(index === 5 ){dia = 'Viernes'}
    if(index === 6 ){dia = 'Sábado'}

    return (
        <Fragment>
            <div className="day-component">
            <h3>{dia}</h3>
            {renderedPreTurnos}
        </div>
        <style jsx>
            {`
                .day-component{
                    margin: 0rem 1rem;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                }
            `}
        </style>
        </Fragment>
    );
}

export default DayDashboard;
