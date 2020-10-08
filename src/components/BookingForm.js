import React, { useState } from "react";
import "./BookingForm.css";
import Input from "./Input.js";

const BookingForm = ({ addNewBooking }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });

  const handleChange = event => {
    const updatedFormValues = {
      ...formValues,
      [event.target.name]: event.target.value
    };

    setFormValues(updatedFormValues);
  };

  const handleSubmit = event => {
    event.preventDefault();

    addNewBooking(formValues);
    setFormValues({
      title: "",
      firstName: "",
      surname: "",
      email: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: ""
    });
  };

  return (
    <div className="booking-form">
      <h3>Book a room</h3>
      <form onSubmit={handleSubmit}>
        <Input
          label="Title"
          type="text"
          name="title"
          value={formValues.title}
          onChange={handleChange}
        />
        <Input
          label="First name"
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
        />
        <Input
          label="Surname"
          type="text"
          name="surname"
          value={formValues.surname}
          onChange={handleChange}
        />
        <Input
          label="Email address"
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <Input
          label="Room ID"
          type="number"
          name="roomId"
          value={formValues.roomId}
          onChange={handleChange}
        />
        <Input
          label="Check in date"
          type="date"
          name="checkInDate"
          value={formValues.checkInDate}
          onChange={handleChange}
        />
        <Input
          label="Check out date"
          type="date"
          name="checkOutDate"
          value={formValues.checkOutDate}
          onChange={handleChange}
        />
        <input type="submit" className="btn btn-primary booking-btn" />
      </form>
    </div>
  );
};

export default BookingForm;
