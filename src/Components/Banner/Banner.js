import React from 'react'
import "./Banner.css"


function Banner() {
    return (
        <div className="banner">
            <div className="content">
                <h1 className="title">VINCENZO</h1>
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">Mylist</button>
                </div>
                <h1 className="description"> Coming on February 31st</h1>
            </div>
            <div className="fade-bottom"></div>
        </div>
    )
}

export default Banner
