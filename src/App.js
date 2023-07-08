import React from "react";
import Heading from "./Heading"
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="CityDives">
        <TouristInfoCards cityId={0} />
        <TouristInfoCards cityId={1} />
        <TouristInfoCards cityId={2} />
      </div>
      <Bookings />
      <Footer />
    </div>
  );
};

export default App;
