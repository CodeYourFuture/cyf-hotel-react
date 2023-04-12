import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TourisInfoCards";

import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import "./App.css";
//
import { contactDetails, places } from "./cardData";

const App = () => {
  console.log(places);
  return (
    <div className="App">
      <Heading />

      <TouristInfoCards cards={places} />
      <Bookings />
      <Restaurant />
      <Footer contactDetails={contactDetails} />
    </div>
  );
};

export default App;
