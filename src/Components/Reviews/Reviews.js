import React,{useEffect} from 'react'
import "./Reviews.css"
import {Firebase} from '../../firebase/config'

function Reviews() {

    


    return (
        <div className='reviews'>
            <h1>reviews here</h1>

            <button onClick={()=>{
                console.log('clicked');
                
                 Firebase.firestore().collection('watchlist').get().then(snapshot=>{
                    snapshot.forEach((obj)=>{
                        console.log(obj.data());
                        
                    })
                })
            }}>click me</button>
        </div>
    )
}

export default Reviews
