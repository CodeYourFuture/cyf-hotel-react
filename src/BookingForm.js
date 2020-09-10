import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = ({ addCustomer, newBooking, setNewBooking }) => {
  console.log(addCustomer);

  const handleChange = e => {
    const updatedBooking = { ...newBooking, [e.target.id]: e.target.value };
    console.log(updatedBooking);
    console.log(e.target.id, e.target.name);
    setNewBooking(updatedBooking);
  };

  const onSubmitHandle = e => {
    e.preventDefault();
    handleChange(e, addCustomer(newBooking));
  };

  let titles = [
    "Mr",
    "Mrs",
    "Ms",
    "Miss",
    "Madam",
    "Doctor",
    "Prince,",
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
        <form>
          <div className="booking-row">
            <select className="booking-form" placeholder="Title">
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
              defaultValue=""
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
            <button onClick={onSubmitHandle} className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default BookingForm;
