import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <heading/>
      <TouristInfoCards/>
      <Bookings/>
      <footer/>
    </div>
  );
};

export default App;
