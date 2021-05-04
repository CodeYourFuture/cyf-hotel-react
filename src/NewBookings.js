import React, { useState } from "react";
import "./NewBooking.css";
export default function NewBooking({ getNewBooking }) {
  const [userData, setUserData] = useState({
    title: "",
    FirstName: "",
    surname: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });

  function handleChange(event) {
    const updateUserData = {
      ...userData,
      [event.target.name]: event.target.value
    };

    setUserData(updateUserData);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.value);
    if (event.target.value === "") {
      alert("Please fill the form");
    } else {
      getNewBooking(userData);
    }
    setUserData({
      title: "",
      firstName: "",
      surname: "",
      email: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: ""
    });
  }
  return (
    <div className="new-booking">
      <form onSubmit={handleSubmit}>
        <p>Type the title:</p>
        <input
          type="text"
          name="title"
          value={userData.title}
          onChange={handleChange}
          required
        />
        <p>Type first name:</p>
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
          required
        />
        <p>Type surname:</p>
        <input
          type="text"
          name="surname"
          value={userData.surname}
          onChange={handleChange}
          required
        />
        <p> Type the email:</p>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <p>Select room id:</p>
        <input
          type="number"
          name="roomId"
          value={userData.roomId}
          onChange={handleChange}
          required
        />
        <p>Select check in date:</p>

        <input
          type="date"
          name="checkInDate"
          value={userData.checkInDate}
          onChange={handleChange}
          required
        />

        <p>Select check out date:</p>
        <input
          type="date"
          name="checkOutDate"
          value={userData.checkOutDate}
          onChange={handleChange}
          required
        />
        <input type="submit" className="btn btn-primary booking-btn" />
      </form>
    </div>
  );
}
