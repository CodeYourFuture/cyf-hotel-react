import React from "react";
import Header from "./Heading"
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards"
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header className="App-header"/>
      <TouristInfoCards />
      <Bookings />
    </div>
  );
};

export default App;




