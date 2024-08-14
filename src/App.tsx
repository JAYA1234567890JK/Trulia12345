import React from "react";

import Navbar from "./componets/screens/navbar/Navbar";
import Home from "./componets/screens/bgHome/Home";
import ScrollableCards from "./componets/screens/exploreHomes/Explore";
import NewHomes from "./componets/screens/newHomes/NewHomes";
import HelpSection from "./componets/screens/helpSection/HelpSection";

function App() {
  return (
    <div>
      <Navbar />
       <Home/>
      <ScrollableCards/>
      <NewHomes/>
      <HelpSection/>

    </div>
  );
}

export default App;
