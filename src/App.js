import React from "react";
import moment, { diff } from "moment";

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

//brutal solution to keep entire logic in one place "only one smart element"
fakeBookings = fakeBookings.map(item => {
  const a = new Date(item.checkOutDate.moment);
  const b = new Date(item.checkInDate);
  console.log(a);
  // const noOfNights = a.diff(b, "days");

  return (item = {
    id: item.id,
    title: item.title,
    firstName: item.firstName,
    surname: item.surname,
    email: item.email,
    roomId: item.roomId,
    checkInDate: item.checkInDate,
    checkOutDate: item.checkOutDate,
    numberOfNights: moment.duration(b.diff(a)).get("days")
  });
});

const tableTitle = [
  "ID",
  "Title",
  "First Name",
  "Surname",
  "Email",
  "Room ID",
  "Check in date",
  "Check out date",
  "No. of nights"
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
