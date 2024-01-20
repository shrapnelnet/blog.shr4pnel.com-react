// eslint-disable-next-line no-unused-vars
import React from "react"
import Index from "./pages/Index.jsx"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Error from "./pages/Error.jsx"
import Post from "./pages/Post.jsx"
import Minesweeper from "./pages/Minesweeper.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        errorElement: <Error />
    },
    {
        path: "/posts/:postid",
        element: <Post />,
        errorElement: <Error />
    },
    {
        path: "/minesweeper",
        element: <Minesweeper />,
    }
])

const root = createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)