import React from "react";

import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />

      <div className="infoCards">
        <TouristInfoCards
          imgSrc={"https://pbs.twimg.com/media/DytwMAKXcAAx63A.jpg"}
          link={"https://peoplemakeglasgow.com/"}
          cityName={"Glasgow"}
        />

        <TouristInfoCards
          imgSrc={"https://i1.trekearth.com/photos/93713/mchtr_1.jpg"}
          link={"https://www.visitmanchester.com/"}
          cityName={"Manchester"}
        />

        <TouristInfoCards
          imgSrc={"https://i.ytimg.com/vi/vCKNJKQ7X_M/maxresdefault.jpg"}
          link={"https://visitlondon.com/"}
          cityName={"London"}
        />
      </div>

      <Bookings />
    </div>
  );
};

export default App;
