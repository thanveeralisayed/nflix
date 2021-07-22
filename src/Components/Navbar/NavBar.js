import React from 'react'
import "./NavBar.css"
import {Link, useLocation} from 'react-router-dom'



function NavBar() {

    const location = useLocation();

    const path = location.pathname;
    let btn;

    if(path == '/more')
    {
        btn =  <Link className="mv-nav" to='/' >BACK</Link>; 
    }
    if(path =='/')
    {
        btn = <Link className="mv-nav" to='/more' >MORE SHOWS</Link>
    }
    

    return (
        <div className="navbar">
            <h1 className="logo">NECKFLIX</h1>

            
            {btn? btn : ''}
      
        </div>
    )
}

export default NavBar
