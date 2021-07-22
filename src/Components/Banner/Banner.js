import React,{useEffect, useState} from 'react'
import {Api_Key,fhdImage_url} from '../../Constants/Constants'
import axios from '../../axios'
import "./Banner.css"


function Banner() {
    const [movie, setMovie] = useState();


    useEffect(() => {
        axios.get(`trending/all/day?api_key=${Api_Key}`).then((Response)=>{
            // console.log(Response.data.results[0]);
            setMovie(Response.data.results[1])
        })
    }, []);

    let cover = movie ? fhdImage_url+movie.backdrop_path : '' ;
    // console.log(cover)

    return (
        <div style={{backgroundImage: `url(${cover})`}} className="banner">
            <div className="content">

                <h1 className="title">{movie? movie.original_title : ''}</h1>
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">Watchlist</button>
                </div>
                <h4 className="description"> {movie? movie.overview : ''}</h4>
            </div>
            <div className="fade-bottom"></div>
        </div>
    )
}

export default Banner
