import React from "react";

import Bookings from "./components/Bookings";
import "./App.css";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import touristInfo from "./components/touristInfo";

//Created Tourist Card

const CreateTouristCard = city => {
  return <TouristInfoCards image={city.image} link={city.url} />;
};

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      {touristInfo.map(CreateTouristCard)}
    </div>
  );
};

export default App;
