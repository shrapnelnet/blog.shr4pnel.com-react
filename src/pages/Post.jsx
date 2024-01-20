import React, { useEffect, useState } from "react"
import "../style/Post.css"
import Markdown from "react-markdown"
import matter from "gray-matter"
import rehypeRaw from "rehype-raw"
import emoji from "remark-emoji"
import { Link } from "react-router-dom"
export default function Post() {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [content, setContent] = useState("")

    useEffect(() => {
        const headers = new Headers()
        headers.set("Accept", "text/markdown")
        // todo hacky change l8r pls
        const name = document.location.pathname.split("/")[2]
        fetch(`/posts/${name}.md`, {headers})
            .then((res) => res.text())
            .then((res) => matter(res))
            .then((post) => {
                setTitle(post.data.title)
                setDate(post.data.date)
                setContent(post.content)
            })
    }, [])
    return (
        <React.Fragment>
            <header>
                <div className="container title-container">
                    <h1 className="logo">shrapnelnet</h1>
                </div>
            </header>
            <main>
                <div className="container">
                    <article>
                        <div id="content" className="use-ibm">
                            <div id="title">
                                <h1>{title}</h1>
                            </div>
                            <div id="date">
                                <p>{new Date(date).toUTCString()}</p>
                            </div>
                            <sub>by tyler, yes, the tyler!</sub>
                            <div className="flex-newline"></div>
                            <img src="/graphics/duckzone.gif" alt="waddling animated ducks" className={"ducks"}/>
                            <Markdown disallowedElements={["script", "meta", "iframe", "object", "embed"]}
                                      rehypePlugins={[rehypeRaw]}
                                      remarkPlugins={[emoji]}>
                                {content}
                            </Markdown>
                        </div>
                    </article>
                    <footer>
                        <Link to={"/"}>back home!</Link>
                    </footer>
                </div>
            </main>
        </React.Fragment>
    )
}