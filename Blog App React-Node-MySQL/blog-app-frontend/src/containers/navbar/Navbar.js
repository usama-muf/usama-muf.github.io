import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand text-center" to="/" >Post Poster</Link>
                    <Link to="/post/new" >
                        <button className="btn btn-outline-success" >Create New Post</button>
                    </Link>
                </div>
            </nav >
        </div >
    )
}
