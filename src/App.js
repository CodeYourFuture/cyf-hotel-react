import React from "react";
import glasgow from "./images/glasgow.jpeg";
import manchester from "./images/manchester.jpeg";
import london from "./images/london.jpeg";

// Components:
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <div className="cities">
        <TouristInfoCards
          imageUrl={glasgow}
          cityName="Glasgow"
          description="Lovely City"
          link="https://peoplemakeglasgow.com/"
        />
        <TouristInfoCards
          imageUrl={manchester}
          cityName="Manchester"
          description="Lovely City Too"
          link="https://www.visitmanchester.com/"
        />
        <TouristInfoCards
          imageUrl={london}
          cityName="London"
          description="Lovely City Too Too"
          link="https://visitlondon.com/"
        />
      </div>
    </div>
  );
};

export default App;
