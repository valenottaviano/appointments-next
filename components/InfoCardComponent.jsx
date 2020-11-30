import React, { Fragment } from 'react'
import ButtonComponent from './ButtonComponent'

export default function InfoCardComponent({primary}) {
    let buttonBackgroundColor
    let buttonBorder
    let buttonTextColor
    let cardBackgroundColor
    let cardTextColor
    let height

    if(primary){
        buttonBackgroundColor = "white"
        buttonBorder = "none"
        buttonTextColor = "#0078FF"
        cardBackgroundColor = "#0078FF"
        cardTextColor = "white"
        height="600px"
    }else{
        buttonBackgroundColor = "#0078FF"
        buttonBorder = "none"
        buttonTextColor = "white"
        cardBackgroundColor = "#EDF8FF"
        cardTextColor = "#09215D"
        height="550px"
    }

    return (
        <Fragment>
            <div className="info-card-component">
                <h3>ESMALTADO SEMIPERMANENTE</h3>
                <span>$PRECIO</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ea cupiditate quas sit praesentium ut provident magni maxime culpa officiis.</p>
                <ButtonComponent textColor={buttonTextColor} backgroundColor={buttonBackgroundColor} border={buttonBorder} text="Sacar Turno"/>    
            </div>
            <style jsx>{`
                .info-card-component{
                    padding:5rem 2rem 2rem 2rem;
                    display:flex;
                    justify-content: space-between;
                    flex-direction: column;
                    margin:2rem;
                    box-shadow: 0px 0px 20px rgba(9, 33, 93, 0.2) ;
                    width: 400px;
                    min-height: ${height};
                    border-radius: 10px;
                    background-color:${cardBackgroundColor};
                }
                .info-card-component button{
                    border-radius: 10px;
                    width:100%
                }
                .info-card-component h3{
                    color:${cardTextColor};
                    font-size:2rem;
                    font-weight:700;
                }
                .info-card-component span{
                    color:${cardTextColor};
                    font-size:2rem;
                    font-weight:700;
                }
                .info-card-component p {
                    color:${cardTextColor};
                }
            `}</style>
        </Fragment>
        
    )
}
