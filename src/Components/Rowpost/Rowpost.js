import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import {Api_Key,baseUrl,smImage_url} from '../../Constants/Constants'
import './Rowpost.css'
import YouTube from 'react-youtube'


function Rowpost(props) {
    const poster = props.poster_type;
    let trailerUrl = '';

    const [movies, setMovies] = useState([])
    
    


    useEffect(() => {

        console.log(props);
             
            axios.get(props.ctype).then((Response)=>{
                setMovies(Response.data.results)
                  
            })
         

    }, []);

    const handleMovieClick = (id) => {
       
        const url = baseUrl + `movie/${id}/videos?api_key=${Api_Key}&language=en-US`;
        axios.get(url).then((Response)=>{
            const vids = Response.data.results[0]; 
            if(vids)
            {
                console.log(vids.key);
                
            }
        })
         
    }
    


    return (
        <div className="row" >
            <h2>{props.title}</h2>
            <div className="posters">

                {
                   props.original? movies.map((movie,pos)=>
                   <div onClick={()=>handleMovieClick(movie.id)} className="poster-box"><img key={pos} 
                   src={smImage_url+movie.backdrop_path} alt="" className="poster" /> 
                   <h3 className="b-title">{movie.title}</h3> 
                   <p className="movie-desc">{movie.overview.split(" ").splice(0,40).join(" ") + '..'} <br/>
                   </p>                  
                  </div> 
                   ) : movies.map((movie,pos)=>
                   <div onClick={()=>handleMovieClick(movie.id)} className="poster-box">
                       <img key={pos} src={smImage_url+movie.poster_path} alt="" className="poster" /> 
                       <h3 className="b-title">{movie.title.split(" ").splice(0,4).join(" ") }</h3> 
                       <p className="movie-desc">{movie.overview.split(" ").splice(0,20).join(" ") + '..'}
                       </p> 
                       </div> 
                   )                     
                   
                }
                
                    
            </div>
        </div>
    )
}

export default Rowpost
