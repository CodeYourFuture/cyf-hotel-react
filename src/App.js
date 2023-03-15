import "./App.css";
import React, { useEffect, useState } from "react";
import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import { nanoid } from "nanoid";
import AddedBookingForm from "./AddedBookingForm";

const App = () => {
  const [newBookingData, setBookingData] = useState([]);
  const [addedBooking, setAddedBooking] = useState({
    Title: "",
    FirstName: "",
    Surname: "",
    Email: "",
    RoomID: "",
    CheckInDate: "",
    CheckOutDate: ""
  });

  const [errors, setErrors] = useState({});
  const [field, setField] = useState(null);
  function handleChange(event) {
    const { name, value } = event.target;
    setAddedBooking(addedBooking => ({
      ...addedBooking,
      [name]: value
    }));
    setField(name);
  }

  useEffect(() => {
    const newErrors = { ...errors };
    if (field === "Title") {
      if (addedBooking.Title.length === 0) {
        newErrors.Title = "X Title must not be empty";
      } else {
        newErrors.Title = "OK";
      }
    }

    if (field === "FirstName") {
      if (addedBooking.FirstName.length === 0) {
        newErrors.FirstName = "X FirstName must not be empty";
      } else {
        newErrors.FirstName = "OK";
      }
    }

    if (field === "Surname") {
      if (addedBooking.Surname.length === 0) {
        newErrors.Surname = "X Surname must not be empty";
      } else {
        newErrors.Surname = "OK";
      }
    }

    if (field === "Email") {
      if (!/.+@.+\..+/.test(addedBooking.Email)) {
        newErrors.Email = "Email is invalid";
      } else {
        newErrors.Email = "OK";
      }
    }

    if (field === "RoomID") {
      if (!(addedBooking.RoomID > 0 && addedBooking.RoomID < 100)) {
        newErrors.RoomID = "RoomID must must be a number between 0 and 100";
      } else {
        newErrors.RoomID = "OK";
      }
    }

    setErrors(newErrors);
  }, [addedBooking]);

  function handleSubmit(event) {
    event.preventDefault();

    setBookingData(
      newBookingData.concat({
        id: nanoid(),
        title: addedBooking.Title,
        firstName: addedBooking.FirstName,
        surname: addedBooking.Surname,
        email: addedBooking.Email,
        roomId: addedBooking.RoomID,
        checkInDate: addedBooking.CheckInDate,
        checkOutDate: addedBooking.CheckOutDate
      })
    );

    event.target.reset();
  }

  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <AddedBookingForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
      />
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
