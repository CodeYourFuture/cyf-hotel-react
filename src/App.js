import React from "react";
import TouristInfoCard from "./TouristInfoCards";
import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel DJMS</header>
      <Bookings />
      <TouristInfoCard />
    </div>
  );
};

export default App;
