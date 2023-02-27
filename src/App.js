import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Search from "./Search";
import Heading from "./Heading";
import TouristCardData from "./TouristCardData";
import cities from "./data/TouristInfoCards.json";




const App = () => {
  return (
    <div className="App">
   <Heading />
   <TouristCardData cities={cities} />
   <Bookings />
    </div>
  );
};

export default App;
