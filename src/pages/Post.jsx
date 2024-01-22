import React from "react"
import "../style/Post.css"
import Markdown from "react-markdown"
import matter from "gray-matter"
import rehypeRaw from "rehype-raw"
import emoji from "remark-emoji"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

export default function Post() {
    const name = document.location.pathname.split("/")[2]

    const { data, isPending, isError, error } = useQuery({
        queryKey: [name],
        queryFn: () => {
            const headers = new Headers()
            headers.set("Accept", "text/markdown")
            return fetch(`/posts/${name}.md`)
                .then((res) => res.text())
                .then((res) => matter(res))
        }
    })

    if (isPending) {
        return <></>
    }

    if (isError) {
        return <h4>{error.message}</h4>
    }

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
                                <h1>{data.data.title}</h1>
                            </div>
                            <div id="date">
                                <p>{new Date(data.data.date).toUTCString()}</p>
                            </div>
                            <sub>by tyler, yes, the tyler!</sub>
                            <div className="flex-newline"></div>
                            <img src="/graphics/duckzone.gif" alt="waddling animated ducks" className={"ducks"}/>
                            <Markdown disallowedElements={["script", "meta", "iframe", "object", "embed"]}
                                      rehypePlugins={[rehypeRaw]}
                                      remarkPlugins={[emoji]}>
                                {data.content}
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