import React from "react";

//Components
import TouristInfoCards from "../src/Components/TouristInfoCards/TouristInfoCards";
import Heading from "../src/Components/Heading/Heading";
import Bookings from "./Bookings";
import Footer from "./Components/Footer/Footer";
//DATA
import dataToTouristInfoCardArr from "./data/dataRequiredByTouristInfoCards.json";
import contactDetailsOfHotelArr from "./data/contactDetailsOfHotel.json";
import fakeBookings from "./data/fakeBookings.json";
import SearchResults from "../src/Components/SearchResults/SearchResults";

import "./App.css";

const tableTitle = [
  "ID",
  "Title",
  "First Name",
  "Surname",
  "Email",
  "Room ID",
  "Check in date",
  "Check out date"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards touristInfoArray={dataToTouristInfoCardArr} />
      <Bookings />
      <SearchResults fakeBooking={fakeBookings} tableHeader={tableTitle} />
      <Footer addressArray={contactDetailsOfHotelArr} />
    </div>
  );
};

export default App;
