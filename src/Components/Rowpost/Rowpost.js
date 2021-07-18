import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import {Api_Key,fhdImage_url,smImage_url} from '../../Constants/Constants'
import './Rowpost.css'

function Rowpost(props) {
    const poster = props.poster_type;
    

    const [movies, setMovies] = useState([])
    const [more, setMore] = useState([])
    


    useEffect(() => {

        console.log(props);
        

        if (props.nOriginals) 
        {
            axios.get(`discover/movie?api_key=${Api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_providers=Netflix&with_watch_monetization_types=flatrate`).then((Response)=>{
                setMovies(Response.data.results)  
            })
        }

        else if (props.more) 
        {
            axios.get(`discover/movie?api_key=${Api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${props.pgnum}&with_watch_providers=Amazon&with_watch_monetization_types=flatrate`).then((Response)=>{
                setMore(Response.data.results)  
                console.log(Response.data.results);
                
            })
        }

        

        
        

    }, []);


    


    return (
        <div className="row" >
            <h2>{props.title}</h2>
            <div className="posters">

                {
                   movies? props.ptype == 'backdrop_path'?  movies.map((movie,pos)=>
                   <div className="poster-box"><img key={pos} src={smImage_url+movie.backdrop_path} alt="" className="poster" /> <h3 className="b-title">{movie.title}</h3> <p className="movie-desc">{movie.overview}</p> </div> 
                   )  : more.map((act,pos)=>
                   <div><img key={pos} src={smImage_url+act.poster_path} alt="" className="poster" /> <h3 className="m-title" >{act.title}</h3> </div>
                   ) 
                    : ''
                }
                
                    
            </div>
        </div>
    )
}

export default Rowpost
