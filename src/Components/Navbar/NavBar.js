import React from 'react'
import "./NavBar.css"
import {Link, useLocation} from 'react-router-dom'



function NavBar() {

    const location = useLocation();

    const path = location.pathname;
    let btn,reviews;

    if(path === '/more' || path === '/reviews')
    {
        btn =  <Link className="mv-nav" to='/' >BACK</Link>; 
        reviews = <Link className="tv-nav" to='/reviews' >USER REVIEWS</Link>
    }
    if(path === '/reviews')
    {
        reviews = <Link className="mv-nav" to='/' >BACK</Link>; 
    }

    if(path ==='/')
    {
        btn = <Link className="mv-nav" to='/more' >MORE SHOWS</Link>
        reviews = <Link className="tv-nav" to='/reviews' >USER REVIEWS</Link>
    }
    
    

    return (
        <div className="navbar">
            <h1 className="logo">NECKFLIX</h1>

            
            {btn? btn : ''}
            {reviews}
      
        </div>
    )
}

export default NavBar
