import React from "react"
import "../style/Index.css"
import IndexPosts from "../components/IndexPosts.jsx"
import { Link } from "react-router-dom"
const Lain = React.lazy(() => import("../components/Lain"))
const Friends = React.lazy(() => import("../components/Friends"))
const Socials = React.lazy(() => import("../components/Socials"))
export default function Index() {
    return (
        <React.Fragment>
            <header>
                <div className="container title-container">
                    <h1 className="logo">shrapnelnet</h1>
                </div>
            </header>
            <main>
                <div className="container">
                    <IndexPosts/>
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