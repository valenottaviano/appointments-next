import React, { Fragment } from 'react';
import Head from 'next/head'
import axios from 'axios'


const TurnoDashboardComponent = ({turno, handleOnCloseClick, index}) => {
    const handleOnDelete = async ()=>{
        await axios.delete(`/api/turno/${turno._id}`)
        window.location.reload();
    } 

    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
            </Head>
            <div className="turno-dashboard">
                <h2>{turno.time}</h2>
                <h3>{turno.name} {turno.surname}</h3>
                <h4>{turno.phoneNumber}</h4>
                <span>Ver más.</span>
                <i className="fas fa-times-circle" onClick={handleOnDelete}></i>
            </div>
            <style jsx>
                {`
                    .turno-dashboard{
                        position:relative;
                        width: 232px;
                        height: 130px;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 6px;
                        padding:1rem;
                        margin:1rem 0rem;
                    }
                    .turno-dashboard h2{
                        font-size: 1rem;
                    }
                    .turno-dashboard h3{
                        font-size: 1rem;
                    }
                    .turno-dashboard h4{
                        font-size: 1rem;
                    }
                    .turno-dashboard span{
                        font-size: 1rem;
                        position:absolute;
                        bottom:0.5rem;
                        right:1rem;
                        cursor:pointer;
                    }
                    .fa-times-circle{
                        color:gray;
                        position:absolute;
                        top:1rem;
                        right:1rem;
                        cursor: pointer;
                    }
                `}
            </style>
        </Fragment>
    );
}

export default TurnoDashboardComponent;
