import React from 'react'
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/Navbar/NavBar';
import Rowpost from './Rowpost/Rowpost';
import axios from 'axios';




function App() {
  return (
    <div className="App">
           
              <NavBar/> 
              <Banner/>
              <Rowpost/>
            
    </div>
  );
}

export default App;
