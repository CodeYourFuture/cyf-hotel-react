import React, { useState } from "react";
import SearchResults from "./SearchResults.js";
import "./BookingForm.css";
const BookingForm = props => {
  const [newBooking, setNewBooking] = useState({
    id: null,
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: null,
    checkInDate: "",
    checkOutDate: ""
  });
  const handleChange = e => {
    const updatedBooking = { ...newBooking, [e.target.id]: e.target.value };
    setNewBooking(updatedBooking);
  };

  function onSubmitForm(e) {
    e.preventDefault();
    let form = document.getElementById("form");
    console.log(newBooking);
    if (
      newBooking.firstName &&
      newBooking.surname &&
      newBooking.email &&
      newBooking.roomId &&
      newBooking.checkInDate &&
      newBooking.checkOutDate
    ) {
      handleChange(e, props.addCustomer(newBooking));
      form.reset();
    } else {
      alert("Please Fill in The Form");
    }
  }

  let titles = [
    "Mr",
    "Mrs",
    "Miss",
    "Madam",
    "Doctor",
    "Prince",
    "Dame",
    "Professor",
    "Sir"
  ];
  return (
    <div className="New-Booking">
      <div className="page-header">
        <h4>Add New Booking</h4>
      </div>
      <div className="col">
        <form id="form" onSubmit={onSubmitForm}>
          <div className="booking-row">
            <select id="title" onChange={handleChange} className="booking-form">
              <option>Select a Tiltle</option>
              {titles.map((title, index) => (
                <option key={index}>{title}</option>
              ))}
            </select>
            <input
              onChange={handleChange}
              className="booking-form"
              type="text"
              id="firstName"
              placeholder="First Name"
            />
            <input
              onChange={handleChange}
              className="booking-form"
              type="text"
              id="surname"
              placeholder="Surname"
            />
            <input
              onChange={handleChange}
              className="booking-form"
              type="text"
              id="email"
              placeholder="Email"
            />
            <input
              onChange={handleChange}
              className="booking-form"
              type="number"
              id="roomId"
              placeholder="Room ID"
            />
            <input
              onChange={handleChange}
              className="booking-form"
              type="date"
              id="checkInDate"
              placeholder="Check in Date"
            />
            <input
              onChange={handleChange}
              className="booking-form"
              type="date"
              id="checkOutDate"
              placeholder="Check Out Date"
            />
            <button onClick={onSubmitForm} className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
