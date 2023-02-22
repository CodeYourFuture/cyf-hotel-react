import React from "react";
import Heading from "./Heading";

import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Heading />
      <TouristInfoCards
        img="https://thumbs.dreamstime.com/b/glasgow-37720502.jpg"
        cityName="Glasgow"
        link="peoplemakeglasgow.com"
        alt="Glasgow"
      />

      <TouristInfoCards
        img="https://thumbs.dreamstime.com/b/city-rowing-regatta-manchester-england-22741318.jpg"
        cityName="Manchester"
        link="visitmanchester.com"
        alt="Manchester"
      />

      <TouristInfoCards
        img="https://thumbs.dreamstime.com/b/london-tower-bridge-sunrise-sunny-summer-day-shot-against-blue-clear-sky-shining-sun-118438573.jpg"
        cityName="London"
        link="visitlondon.com"
        alt="London"
      />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
