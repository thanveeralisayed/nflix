import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import {Api_Key,fhdImage_url} from '../../Constants/Constants'
import './Rowpost.css'

function Rowpost() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(`discover/movie?api_key=${Api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_providers=Netflix&with_watch_monetization_types=flatrate`).then((Response)=>{
            setMovies(Response.data.results)
        }).catch((e)=>{
            console.log(e)
        })
    }, []);


    
    


    return (
        <div className="row" >
            <h2>NECKFLICK ORIGINALS</h2>
            <div className="posters">

                {
                    movies? movies.map((movie,pos)=>
                    <img key={pos} src={fhdImage_url+movie.poster_path} alt="" className="poster" />
                    ) :  ''
                }
                
                
                
            </div>
        </div>
    )
}

export default Rowpost
