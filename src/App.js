import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import { citiesInfo } from "./data/citiesInfo";
import { hotelInfo } from "./data/hotelInfo";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="cards-wrapper">
        {citiesInfo.map((city, index) => {
          return <TouristInfoCards city={city} key={index} />;
        })}
      </div>
      <Bookings />
      <Restaurant />
      <Footer list={hotelInfo} />
    </div>
  );
};

export default App;
