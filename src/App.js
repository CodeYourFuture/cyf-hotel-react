import React from "react";
import CardCities from "./data/cardCities.json";
import HotelContactInfo from "./data/hotelContactInfo.json";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";

// Initiates App, called from `index.html` by the ReactDOM.render.
const App = () => {
  return (
    <div className="App-content">
      <Heading />
      <TouristInfoCards cities={CardCities} />
      <Bookings />
      <Restaurant />
      <Footer contactInfo={HotelContactInfo} />
    </div>
  );
};

export default App;
