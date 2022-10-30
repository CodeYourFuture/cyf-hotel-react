import React from "react";

import Bookings from "./components/Bookings";
import "./App.css";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import touristInfo from "./components/touristInfo";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
};

export default App;
