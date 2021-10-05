import React from "react";
import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import ManchesterImg from "./Manchester.jpeg";
import LondonImg from "./London.jpeg";
import GlasgowImg from "./Glasgow.jpeg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards
        city="Manchester"
        url="https://www.visitmanchester.com/"
        img={ManchesterImg}
      />
      <TouristInfoCards
        city="London"
        url="https://visitlondon.com/"
        img={LondonImg}
      />
      <TouristInfoCards
        city="Glasgow"
        url="https://peoplemakeglasgow.com/"
        img={GlasgowImg}
      />
      <Bookings />
    </div>
  );
};

export default App;
