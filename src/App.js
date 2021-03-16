import React from "react";

//Components
import TouristInfoCards from "../src/Components/TouristInfoCards/TouristInfoCards";
import Heading from "../src/Components/Heading/Heading";
import Bookings from "./Bookings";
import Footer from "./Components/Footer/Footer";
//DATA
import dataToTouristInfoCardArr from "./data/dataRequiredByTouristInfoCards.json";
import contactDetailsOfHotelArr from "./data/contactDetailsOfHotel.json";

import "./App.css";

const contactArr = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
// console.log(contactDetailsOfHotelArr);
const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards touristInfoArray={dataToTouristInfoCardArr} />
      <Bookings />
      <Footer addressArray={contactDetailsOfHotelArr} />
    </div>
  );
};

export default App;
