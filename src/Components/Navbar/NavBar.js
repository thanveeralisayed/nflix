import React from 'react'
import "./NavBar.css"

function NavBar() {
    return (
        <div className="navbar">
            <h1 className="logo">NECKFLIX</h1>

            <a className="tv-nav">TV SHOWS</a>
            <a className="mv-nav">MOVIES</a>
        </div>
    )
}

export default NavBar
