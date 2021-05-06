import React, { useState } from "react";
function BookingForm({ bookings, setBookings }) {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  function handleFormChange(event) {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    } else if (event.target.name === "firstName") {
      setFirstName(event.target.value);
    } else if (event.target.name === "surname") {
      setSurname(event.target.value);
    } else if (event.target.name === "roomId") {
      setRoomId(event.target.value);
    } else if (event.target.name === "checkInDate") {
      setCheckInDate(event.target.value);
    } else if (event.target.name === "checkOutDate") {
      setCheckOutDate(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    let id = bookings.length + 1;
    let newBook = {
      id,
      title,
      firstName,
      surname,
      email,
      roomId,
      checkInDate,
      checkOutDate
    };
    let newBookings = [...bookings, newBook];
    setBookings(newBookings);
  }
  return (
    <form className="customer-booking-form" onSubmit={submitHandler}>
      <div className="form-element">
        <h3>Add a new book</h3>
      </div>
      <div className="form-element">
        <input
          type="text"
          required
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleFormChange}
        />
      </div>
      <div className="form-element">
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          value={firstName}
          onChange={handleFormChange}
          required
        />
      </div>
      <div className="form-element">
        <input
          type="text"
          name="surname"
          placeholder="surname"
          value={surname}
          onChange={handleFormChange}
          required
        />
      </div>
      <div className="form-element">
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleFormChange}
          required
        />
      </div>
      <div className="form-element">
        <input
          type="number"
          name="roomId"
          placeholder="Room Id"
          value={roomId}
          onChange={handleFormChange}
          required
        />
      </div>
      <div className="form-element">
        <input
          type="date"
          name="checkInDate"
          placeholder="Check in date"
          value={checkInDate}
          onChange={handleFormChange}
          required
        />
      </div>
      <div className="form-element">
        <input
          type="date"
          name="checkOutDate"
          placeholder="Check out date"
          value={checkOutDate}
          onChange={handleFormChange}
          required
        />
      </div>
      <div>
        <button type="submit">Add Booking</button>
      </div>
    </form>
  );
}

export default BookingForm;
