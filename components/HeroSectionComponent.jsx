import React, { Fragment } from 'react'
import ButtonComponent from './ButtonComponent'

export default function HeroSectionComponent() {
    return (
        <Fragment>
        <div className="hero-container">
                <section id="hero-section">
                <div className="hero-text">
                    <h2>Lo mejor en esmaltado que te puedas encontrar en Tucumán.</h2>
                    <h3>Más de 5 años de experiencia trabajando con las últimas tendencias.</h3>
                    <ButtonComponent text="Sacar Turno" backgroundColor="#0078FF" textColor="white" border="none"/>
                </div>
                <div className="hero-image">
                    <img src="img/hero-image.png" />
                </div>
            </section>
        </div>
        <style jsx>{`
            .hero-container{
                background-color: #EDF8FF;
            }   
            #hero-section{
                width:80%;
                margin:auto;
                display:flex;
                align-items:center;
                justify-content:space-between;
                height:90vh
            }
            #hero-section div{
                flex:1
            }
            .hero-text h3{
                color: #515151;
                margin: 2rem 0rem;
            }
            .hero-text h2{
                color: #09215D;
            }
            .hero-image {
                display: flex;
                align-items:center;
                justify-content:flex-end;
            }

        `}</style>
        </Fragment>
    )
}
