import React from 'react';
import Navbar from './navbar/Navbar';
import HelpSection from './helpSection/HelpSection';
import NewHomes from './newHomes/NewHomes';
import Home from './bgHome/Home';
import Explore from './exploreHomes/Explore';

const HomeScreens = () => {
    return(
        <div>
        <Navbar />
         <Home/>
        <Explore/>
        <NewHomes/>
        <HelpSection/>
  
      </div>
            
        
    )
}
export default HomeScreens;