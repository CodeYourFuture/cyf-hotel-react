import React from "react";
import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards
        city="Manchester"
        url="https://www.visitmanchester.com/"
        ManchesterImg="ManchesterImg"
      />
      <TouristInfoCards city="London" url="https://visitlondon.com/" />
      <TouristInfoCards city="Glasgow" url="https://peoplemakeglasgow.com/" />
      <Bookings />
    </div>
  );
};

export default App;
