import React, { useState } from "react";
// import axios from "axios";
import moment from "moment";
// import FormData from "form-data"
const BookingForm = props => {
  const [addBooking, setAddBooking] = useState({
    title: "",
    firstname: "",
    surname: "",
    email: "",
    roomid: "",
    checkindate: moment("").format("YYYY-MM-DD"),
    checkoutdate: moment("").format("YYYY-MM-DD")
  });

  const handleSearchInput = event => {
    const newBooking = { ...addBooking, [event.target.id]: event.target.value };
    console.log(newBooking);
    setAddBooking(newBooking);
  };
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   props.addBooking(addBooking);
  //   setAddBooking({
  //     title: "",
  //     firstName: "",
  //     surname: "",
  //     email: "",
  //     roomId: "",
  //     checkInDate: "",
  //     checkOutDate: ""
  //   });
  // };

  const handleSubmit = event => {
    event.preventDefault();
    // const form_data = new FormData();
    // form_data.append(addBooking);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addBooking)
    };
    console.log(addBooking);
    fetch(
      "https://cyf-yunusfirat-hotelserver.herokuapp.com/bookings",
      requestOptions
    )
      .then(response => response.json())
      .then(data => {
        props.addBooking(data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    setAddBooking({
      title: "",
      firstname: "",
      surname: "",
      email: "",
      roomid: "",
      checkindate: "",
      checkoutdate: ""
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
          id="firstname"
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
          value={addBooking.roomid}
          onChange={handleSearchInput}
          type="number"
          id="roomid"
          className="form-control"
          placeholder="Room id"
        />
        <input
          value={addBooking.checkindate}
          onChange={handleSearchInput}
          type="date"
          id="checkindate"
          className="form-control"
          placeholder="check in date"
        />
        <input
          value={addBooking.checkoutdate}
          onChange={handleSearchInput}
          type="date"
          id="checkoutdate"
          className="form-control"
          placeholder="check out date"
        />
        <button className="btn btn-primary">Add new Booking</button>
      </div>
    </form>
  );
};

export default BookingForm;
