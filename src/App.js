import React from 'react'
import './App.css';
import Banner from './Components/Banner/Banner';
import CarouselComponent from './Components/Carousel/CarouselComponent';
import NavBar from './Components/Navbar/NavBar';
import Rowpost from './Components/Rowpost/Rowpost';
import { more, originals } from './urls';
import Reviews from './Components/Reviews/Reviews';
import {Route,Switch,useHistory} from 'react-router-dom'




function App() {

  

  return (
    <div className="App">

         
           <div className="Navbar">
           <NavBar/>   
           </div>

          

           <div className="Main">
           
            <Switch>

              <Route exact path='/'>
              <Banner/>
              <Rowpost  title="Neckflix Originals" ctype = {more(1)}  ctype = {originals} original />
              <Rowpost  title="More Originals" ctype = {more(2)}  more   />
              </Route>


              <Route exact path='/more'>
                <Rowpost  title="" ptype="poster_path" ctype = {more(3)}  more />
                <Rowpost  title="" ptype="poster_path" ctype = {more(6)}  more />
                <Rowpost  title="" ptype="poster_path" ctype = {more(5)}  more />
                <Rowpost  title="" ptype="poster_path" ctype = {more(7)}  more />
              </Route>
              
              <Route exact path='/reviews'>
                  <Reviews/>
              </Route>


            </Switch>
            

          </div> 



         
          
        
    </div>
  );
}

export default App;
