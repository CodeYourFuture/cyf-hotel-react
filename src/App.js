import React from "react";
import Heading from "./Heading";

import Bookings from "./Bookings";
import "./App.css";
import Restaurant from "./Restaurant";
import RestaurantButton from "./RestaurantButton";

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel</header> */}
      <Heading />
      <Bookings />
      <Restaurant /> 
    
    </div>
  );
};

export default App;
