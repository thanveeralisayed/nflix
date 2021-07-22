import React from 'react'
import "./NavBar.css"
import {Link, useLocation} from 'react-router-dom'



function NavBar() {

    const location = useLocation();

    const path = location.pathname;
    let backbtn;

    if(path == '/more')
    {
        backbtn =  <Link className="mv-nav" to='/' >BACK</Link>; 
    }
    

    return (
        <div className="navbar">
            <h1 className="logo">NECKFLIX</h1>

            

            <Link className="tv-nav" to='/more' >MORE SHOWS</Link>

           
            {backbtn? backbtn : ''}
      
        </div>
    )
}

export default NavBar
