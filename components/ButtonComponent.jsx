import React, { Fragment } from 'react'
import Link from 'next/link'

export default function ButtonComponent({text, backgroundColor, textColor,border, type}) {
    return (
        <Fragment>
                <Link href="/turno"><button type={type}>{text}</button></Link>
                <style jsx>{`
                    button{
                        padding: 0.8rem 2rem;
                        color:${textColor};
                        background-color: ${backgroundColor};
                        border:${border};
                        cursor:pointer;
                        font-family: 'Nunito';
                        font-weight: 600;
                        font-size: 1rem;
                    }
                `}</style>
        </Fragment>
    )
}
