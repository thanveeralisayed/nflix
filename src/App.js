import React from 'react'
import './App.css';
import Banner from './Components/Banner/Banner';
import CarouselComponent from './Components/Carousel/CarouselComponent';
import NavBar from './Components/Navbar/NavBar';
import Rowpost from './Components/Rowpost/Rowpost';
import { more, originals } from './urls';





function App() {
  return (
    <div className="App">
           
           <div className="Navbar">
           <NavBar/>   
           </div>

           <div className="Main">
              
              {/* <CarouselComponent/> */}
              <Banner/>
              <Rowpost  title="Neckflix Originals" ctype = {originals} original />
              <Rowpost  title="More Originals" ctype = {more(2)}  more   />
              <Rowpost  title="" ptype="poster_path" ctype = {more(3)}  more />
              <Rowpost  title="" ptype="poster_path" ctype = {more(4)}  more />
              <Rowpost  title="" ptype="poster_path" ctype = {more(5)}  more />
              <Rowpost  title="" ptype="poster_path" ctype = {more(6)}  more />
              

          </div>   
            
    </div>
  );
}

export default App;
