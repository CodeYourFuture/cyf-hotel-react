import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Header";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <TouristInfoCards />

      {/* <Heading /> */}

      <Bookings />
    </div>
  );
};

export default App;
