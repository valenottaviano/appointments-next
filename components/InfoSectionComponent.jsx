import React from 'react'
import InfoCardComponent from './InfoCardComponent'

export default function InfoSectionComponent() {
    return (
        <section id="info-section">
            <InfoCardComponent primary={false}/>
            <InfoCardComponent primary={true}/>
            <InfoCardComponent primary={false}/>
            <style jsx>{`
            #info-section{
                display: flex;
                align-items:center;
                justify-content:center;
                min-height:100vh;
                width:100%;
            }
            `}</style>
        </section>
    )
}
