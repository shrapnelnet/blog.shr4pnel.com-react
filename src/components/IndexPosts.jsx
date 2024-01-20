import React, { useEffect, useState } from "react"
import matter from "gray-matter"
import { Link } from "react-router-dom"

export default function IndexPosts() {
    const sort = (a, b) => {
        if (a.data.date < b.data.date) {
            return 1
        }
        return -1
    }

    const [posts, setPosts] = useState([])

    // monstrous effect.... sorry!
    useEffect(() => {
        // get all posts that are available and serialize them
        fetch("/posts/masterlist.json")
            .then((res) => res.json())
            // get all of the urls to fetch in one array
            .then((posts) => {
                return posts.map((post) => (`/posts/${post}`))
            })
            // Return one big promise with all of the markdown
            .then((postURLArray) => {
                const headers = new Headers()
                headers.set("Accept", "text/markdown")
                return Promise.all(
                    postURLArray.map((post) => (
                        fetch(post, {headers})
                            .then((res) => res.text())
                    )))
            })
            // we recieve a promise containing raw front-matter yaml
            // you then return a new array with the parsed front-matter
            .then((postsNonParsed) => {
                // pull out the tasty yaml goodness
                return postsNonParsed
                    .map((post) => matter(post))
            })
            .then((storedPosts) => {
                storedPosts.sort(sort)
                setPosts([...posts, ...storedPosts])
            })
    }, [])
    return (
        <React.Fragment>
            <h2 className="highlighted">articles</h2>
            <div id="articles">
                {
                    posts.map((post, index) => (
                        <article key={index}>
                            <div className="card">
                                <img src="/graphics/anon.png" alt="tumblr anonymous grey face with sunglasses" height={80} width={80} />
                                <Link to={`/posts/${post.data.name}`}>{post.data.title}</Link>
                                <p>{new Date(post.data.date).toLocaleDateString()}</p>
                            </div>
                        </article>
                    ))
                }
            </div>
        </React.Fragment>
    )
}