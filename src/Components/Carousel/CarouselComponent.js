import React,{useEffect,useState} from 'react'
import "./CarouselComponent.css"
import { Carousel } from 'react-responsive-carousel'
import axios from '../../axios'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Api_Key,fhdImage_url} from '../../Constants/Constants'


function CarouselComponent() {

    const [movieCarousel, setMovieCarousel] = useState();


    useEffect(() => {
        axios.get(`trending/all/day?api_key=${Api_Key}`).then((Response)=>{
            console.log(Response.data.results);
            setMovieCarousel(Response.data.results)
        })
    }, []);


    return (
        <div className="carousel-wrapper">

            <Carousel>

                {
                    movieCarousel? movieCarousel.map((cover)=>{
                        return(
                            <div>
                                <img src={fhdImage_url+cover.backdrop_path} alt="" />
                            </div>
                        )
                        }) : ''
                }
            </Carousel>
        </div>
        
    )
}

export default CarouselComponent
