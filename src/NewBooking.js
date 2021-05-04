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
        <div className="form-group">
          <label>Type the title:</label>
          <input
            className="form-control"
            type="text"
            name="title"
            value={userData.title}
            onChange={handleChange}
            required
          />
          <label>Type first name:</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            required
          />
          <label>Type surname:</label>
          <input
            className="form-control"
            type="text"
            name="surname"
            value={userData.surname}
            onChange={handleChange}
            required
          />
          <label>Type the email:</label>
          <input
            className="form-control"
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <label>Select room id:</label>
          <input
            className="form-control"
            type="number"
            name="roomId"
            value={userData.roomId}
            onChange={handleChange}
            required
          />
          <label>Select check in date:</label>

          <input
            className="form-control"
            type="date"
            name="checkInDate"
            value={userData.checkInDate}
            onChange={handleChange}
            required
          />
          <label>Select check out date:</label>
          <input
            className="form-control"
            type="date"
            name="checkOutDate"
            value={userData.checkOutDate}
            onChange={handleChange}
            required
          />
          <input type="submit" className="btn btn-primary booking-btn" />
        </div>
      </form>
    </div>
  );
}
