import "./App.css";
import React, { useState } from "react";
import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import { nanoid } from "nanoid";
import BookingForm from "./BookingForm";

const App = () => {
  const [newBookingData, setBookingData] = useState([]);
  const [addBooking, setAddBooking] = useState({
    Title: "",
    FirstName: "",
    Surname: "",
    Email: "",
    RoomID: "",
    CheckInDate: "",
    CheckOutDate: ""
  });

  function handleChange(event) {
    const formFiled = event.target.getAttribute("name");
    const fieldData = event.target.value;
    const newAddBooking = { ...addBooking };
    newAddBooking[formFiled] = fieldData;
    setAddBooking(newAddBooking);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setBookingData(
      newBookingData.concat({
        id: nanoid(),
        title: addBooking.Title,
        firstName: addBooking.FirstName,
        surname: addBooking.Surname,
        email: addBooking.Email,
        roomId: addBooking.RoomID,
        checkInDate: addBooking.CheckInDate,
        checkOutDate: addBooking.CheckOutDate
      })
    );

    event.target.reset();
  }

  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <BookingForm handleSubmit={handleSubmit} handleChange={handleChange} />
      <Bookings newBookingData={newBookingData} />
      <Restaurant />
      <Footer
        array={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
