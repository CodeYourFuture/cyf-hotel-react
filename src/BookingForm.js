import React, { useState } from "react";

const BookingForm = props => {
  console.log(props);
  const [addBooking, setAddBooking] = useState({
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });

  const handleSearchInput = event => {
    const newBooking = { ...addBooking, [event.target.id]: event.target.value };
    setAddBooking(newBooking);
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.addBooking(addBooking);
    setAddBooking({
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
    <form className="form-group search-box" onSubmit={handleSubmit}>
      <label htmlFor="customerName">New Booking Form</label>
      <div className="search-row">
        <input
          value={addBooking.title}
          onChange={handleSearchInput}
          type="text"
          id="title"
          className="form-control"
          placeholder="Customer title"
        />
        <input
          value={addBooking.firstName}
          onChange={handleSearchInput}
          type="text"
          id="firstName"
          className="form-control"
          placeholder="Customer name"
        />
        <input
          value={addBooking.surname}
          onChange={handleSearchInput}
          type="text"
          id="surname"
          className="form-control"
          placeholder="Customer surname"
        />
        <input
          value={addBooking.email}
          onChange={handleSearchInput}
          type="email"
          id="email"
          className="form-control"
          placeholder="Customer surname"
        />
        <input
          value={addBooking.roomId}
          onChange={handleSearchInput}
          type="number"
          id="roomId"
          className="form-control"
          placeholder="Room id"
        />
        <input
          value={addBooking.checkInDate}
          onChange={handleSearchInput}
          type="date"
          id="checkInDate"
          className="form-control"
          placeholder="check in date"
        />
        <input
          value={addBooking.checkOutDate}
          onChange={handleSearchInput}
          type="date"
          id="checkOutDate"
          className="form-control"
          placeholder="check out date"
        />
        <button className="btn btn-primary">Add new Booking</button>
      </div>
    </form>
  );
};

export default BookingForm;
