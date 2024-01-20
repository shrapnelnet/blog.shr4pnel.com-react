import React from "react"
import { Link } from "react-router-dom"
import "../style/Minesweeper.css"
import "../style/Index.css"
import "../legacy-js/minesweeper.js"

export default function Minesweeper() {

    return (
        <React.Fragment>
            <header>
                <div className="title-container container">
                    <h1 className="logo">shrapnelnet</h1>
                </div>
            </header>
            <main>
                <div className="container">
                    <h2>i shall return! i just need to be rewritten in react 😵</h2>
                    <Link to={"/"}>back home!</Link>
                </div>
            </main>
        </React.Fragment>
    )
}