import React from 'react'
import './App.css';
import Banner from './Components/Banner/Banner';
import CarouselComponent from './Components/Carousel/CarouselComponent';
import NavBar from './Components/Navbar/NavBar';
import Rowpost from './Components/Rowpost/Rowpost';





function App() {
  return (
    <div className="App">
           
           <div className="Navbar">
           <NavBar/>   
           </div>

           <div className="Main">
              
              {/* <CarouselComponent/> */}
              <Banner/>
              <Rowpost  title="Neckflix Originals" ptype="backdrop_path" nOriginals />
              <Rowpost  title="More Originals" ptype="poster_path"  more pgnum = "2"  />
              <Rowpost  title="" ptype="poster_path"  more pgnum = "3"  />
              <Rowpost  title="" ptype="poster_path"  more pgnum = "4"  />
              <Rowpost  title="" ptype="poster_path"  more pgnum = "5"  />
              <Rowpost  title="" ptype="poster_path"  more pgnum = "6"  />
              

          </div>   
            
    </div>
  );
}

export default App;
