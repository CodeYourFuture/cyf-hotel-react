import React, { useState } from "react";

const BookingForm = ({ bookings, setBookings }) => {
  const [formBooking, setFormBooking] = useState({
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });

  const handleChange = e => {
    setFormBooking({ ...formBooking, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch("https://cbaggini-hotel-server.glitch.me/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formBooking)
    })
      .then(response => {
        if (response.status !== 200) {
          alert("Invalid input");
        }
        return response.json();
      })
      .then(data => {
        setBookings(bookings => bookings.concat(data));
        setFormBooking({
          title: "",
          firstName: "",
          surname: "",
          email: "",
          roomId: "",
          checkInDate: "",
          checkOutDate: ""
        });
      });

    // This is code to use the static bookings file, the app now works with a glitch backend
    // if (
    //   e.target.title.value &&
    //   e.target.firstName.value &&
    //   e.target.surname.value &&
    //   e.target.email.value &&
    //   e.target.roomId.value &&
    //   e.target.checkInDate.value &&
    //   e.target.checkOutDate.value
    // ) {
    //   const maxId = bookings.length + 1;
    //   const newBooking = {
    //     id: maxId,
    //     title: e.target.title.value,
    //     firstName: e.target.firstName.value,
    //     surname: e.target.surname.value,
    //     email: e.target.email.value,
    //     roomId: e.target.roomId.value,
    //     checkInDate: e.target.checkInDate.value,
    //     checkOutDate: e.target.checkOutDate.value
    //   };
    //   setBookings(bookings.concat(newBooking));
    //   e.target.title.value = "";
    //   e.target.firstName.value = "";
    //   e.target.surname.value = "";
    //   e.target.email.value = "";
    //   e.target.roomId.value = "";
    //   e.target.checkInDate.value = "";
    //   e.target.checkOutDate.value = "";
    // } else {
    //   alert("all fields are mandatory");
    // }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formBooking.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="firstName"
        value={formBooking.firstName}
        onChange={handleChange}
        placeholder="First name"
      />
      <input
        type="text"
        name="surname"
        value={formBooking.surname}
        onChange={handleChange}
        placeholder="Surname"
      />
      <input
        type="text"
        name="email"
        value={formBooking.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="roomId"
        value={formBooking.roomId}
        onChange={handleChange}
        placeholder="Room Id"
      />
      <input
        type="text"
        name="checkInDate"
        value={formBooking.checkInDate}
        onChange={handleChange}
        placeholder="Check in date"
      />
      <input
        type="text"
        name="checkOutDate"
        value={formBooking.checkOutDate}
        onChange={handleChange}
        placeholder="Check out date"
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default BookingForm;
