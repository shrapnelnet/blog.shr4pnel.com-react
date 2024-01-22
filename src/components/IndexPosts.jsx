import React from "react"
import matter from "gray-matter"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

const sort = (a, b) => {
    if (a.data.date < b.data.date) {
        return 1
    }
    return -1
}

async function getPosts() {
    try {
        let masterlist = await fetch("/posts/masterlist.json")
        const masterlistJSON = await masterlist.json()
        const posts = masterlistJSON.map((post) => `/posts/${post}`)
        const headers = new Headers()
        headers.set("Accept", "text/markdown")
        const postURLArrayMap = await Promise.all(
            posts.map((post) => (
                fetch(post, {headers})
                    .then((res) => res.text())
            ))
        )
        const parsedPosts = postURLArrayMap.map((post) => matter(post))
        parsedPosts.sort(sort)
        return parsedPosts
    } catch (err) {
        console.error(err)
        return err
    }
}

export default function IndexPosts() {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            return await getPosts()
        },
    })

    if (isPending) {
        console.log("pending!", isPending, isError, data)
        return <></>
    }

    if (isError) {
        return <h4>{error.message}</h4>
    }

    return (
        <React.Fragment>
            <h2 className="highlighted">articles</h2>
            <div id="articles">
                {
                    data.map((post, index) => (
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