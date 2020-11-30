import React, { Fragment } from 'react'
import ButtonComponent from './ButtonComponent'
import Link from 'next/link'

export default function NavBarComponent({backgroundColor}) {
    return (
        <Fragment>
            <header>
            <nav>
                <div className="logo-container">
                    <Link href="/"><h1>My Logo</h1></Link>
                </div>
                <ul className="nav-links">
                    <li className="nav-link">Nav Link</li>
                    <li className="nav-link">Nav Link</li>
                    <li className="nav-link">Nav Link</li>
                    <ButtonComponent text="Sacar Turno" textColor="#0078FF" border="solid 2px #0078FF" backgroundColor="transparent" />
                </ul>
            </nav>
        </header>
        <style jsx>
            {`
                header {
                    width:100%;
                    min-height:10vh;
                    padding:1rem 0rem;
                    display:flex;
                    align-items:center;
                    background-color: ${backgroundColor}
                }
                nav{
                    width:80%;
                    margin: auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .nav-links{
                    flex:1;
                    display:flex;
                    align-items: center;
                    justify-content:space-between;
                    cursor:pointer;
                }
                .logo-container{
                    flex:1
                }
            `}
        </style>
        </Fragment>
    )
}
