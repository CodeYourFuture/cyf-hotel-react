import React from "react";
import moment from "moment";

//Components
import TouristInfoCards from "../src/Components/TouristInfoCards/TouristInfoCards";
import Heading from "../src/Components/Heading/Heading";
import Bookings from "./Bookings";
import Footer from "./Components/Footer/Footer";
import Restaurant from "./Restaurant";
//DATA
import dataToTouristInfoCardArr from "./data/dataRequiredByTouristInfoCards.json";
import contactDetailsOfHotelArr from "./data/contactDetailsOfHotel.json";
import fakeBookingsArr from "./data/fakeBookings.json";

import "./App.css";

// //brutal solution to keep entire logic in one place "only one smart element"
const fakeBookings = fakeBookingsArr.map(item => {
  const a = moment(item.checkOutDate);
  const b = moment(item.checkInDate);
  const noOfNights = a.diff(b, "day");

  return (item = {
    id: item.id,
    title: item.title,
    firstName: item.firstName,
    surname: item.surname,
    email: item.email,
    roomId: item.roomId,
    checkInDate: item.checkInDate,
    checkOutDate: item.checkOutDate,
    numberOfNights: noOfNights
  });
});

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards touristInfoArray={dataToTouristInfoCardArr} />
      <Bookings bookingData={fakeBookings} />
      <Restaurant />

      <Footer addressArray={contactDetailsOfHotelArr} />
    </div>
  );
};

export default App;
