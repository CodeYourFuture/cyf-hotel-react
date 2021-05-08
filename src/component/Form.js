import React, { useState } from "react";

const Form = ({ bookings, setBookings }) => {
  const [bookingForm, setBookingForm] = useState({
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });
  const handleChange = e => {
    setBookingForm({ ...bookingForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();

    fetch(`https://chizim-hotel-server.herokuapp.com/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookingForm)
    })
      .then(response => {
        if (response.status !== 200) {
          alert("Invalid input");
        }
        return response.json();
      })
      .then(data => {
        setBookings(bookings => bookings.concat(data));
        setBookingForm({
          title: "",
          firstName: "",
          surname: "",
          email: "",
          roomId: "",
          checkInDate: "",
          checkOutDate: ""
        });
      });
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={bookingForm.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="firstName"
          value={bookingForm.firstName}
          onChange={handleChange}
          placeholder="First name"
        />
        <input
          type="text"
          name="surname"
          value={bookingForm.surname}
          onChange={handleChange}
          placeholder="Surname"
        />
        <input
          type="text"
          name="email"
          value={bookingForm.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="roomId"
          value={bookingForm.roomId}
          onChange={handleChange}
          placeholder="Room Id"
        />
        <input
          type="text"
          name="checkInDate"
          value={bookingForm.checkInDate}
          onChange={handleChange}
          placeholder="Check in date"
        />
        <input
          type="text"
          name="checkOutDate"
          value={bookingForm.checkOutDate}
          onChange={handleChange}
          placeholder="Check out date"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
