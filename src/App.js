import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Search from "./Search";
import Heading from "./Heading";
import TouristCardData from "./TouristCardData";
import TouristInfoCards from "./TouristInfoCards";


const App = () => {
  return (
    <div className="App">
   <Heading />
   <TouristInfoCards />
   <Bookings />
    </div>
  );
};

export default App;
