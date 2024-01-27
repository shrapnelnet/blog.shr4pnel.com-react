import React from "react"
import "../style/Index.css"
import IndexPosts from "../components/IndexPosts.jsx"
import { Link } from "react-router-dom"
import Lain from "../components/Lain.jsx"
import Friends from "../components/Friends.jsx"
import Socials from "../components/Socials.jsx"

const quotebank = [
    "jesus don't want me for a sunbeam!",
    "is the man who sold the world",
    "choose life, choose a job",
    "chuffing back a fat dart",
    "still not goth",
    "может правда все закончится вот так!",
    "active cigarette lobby member",
    "remembers space cake's requiem",
    "yet another shit in the sandpit",
    "this user is mortal",
    "the internet is serious business",
    "beer respects me",
    "on the internet, nobody knows you're a dog",
    "good grief!",
    "bow to me!",
    "stuffed with love fluff",
    "tip your waiter",
    "on a plain",
    "UK DUTY PAID",
    "let children breathe your smoke!",
    "my back hurts!!",
    "happy new year 2003!",
    "meows at passing cars",
    "are you okay, dude?",
    "axolotl fan",
    "this user enjoys smirnoff",
    "this user enjoys chekhov"
]

function getQuote() {
    const len = quotebank.length
    return quotebank[Math.floor(Math.random() * len)]
}

export default function Index() {
    return (
        <React.Fragment>
            <header>
                <div className="container title-container">
                    <h1 className="logo">shrapnelnet</h1>
                    <p>&ldquo;{getQuote()}&rdquo;</p>
                </div>
            </header>
            <main>
                <div className="container">
                    <IndexPosts />
                    <p>or uhh just play <Link to="/minesweeper">minesweeper</Link> :3</p>
                    <img src="/graphics/cutiecat.gif" alt="line of cats dancing"/>
                    <footer>
                        <div id="socials">
                            <h2 className="highlighted">socials</h2>
                            <Socials />
                        </div>
                        <div id="friends">
                            <h2 className="highlighted">friends</h2>
                            <Friends />
                            <h2 className="highlighted">lainchan</h2>
                            <Lain />
                        </div>
                    </footer>
                </div>
            </main>
        </React.Fragment>
    )
}