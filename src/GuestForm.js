import React, { useState } from "react";

function GuestForm(props) {
  const [formData, setFormdata] = useState({
    id: Math.floor(Math.random() * 50),
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    roomId: 0,
    checkInDate: "",
    checkOutDate: ""
  });
  function handleChange(event) {
    setFormdata({ ...formData, [event.target.name]: event.target.value });
  }
  return (
    <div className="mt-4 bg-success">
      <h2 className="text-white text-center bg-success mt-3 p-3">
        {" "}
        Add Guest Form
      </h2>
      <form
        className="formBody d-flex flex-column bg-success text-white p-4"
        onSubmit={event => props.onSubmit(event, formData)}
      >
        <label> Title :</label>
        <input
          className="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label> First Name :</label>
        <input
          className="Fname"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label> Last Name :</label>
        <input
          className="Lname"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label> Email:</label>
        <input
          className="email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label> Room ID:</label>
        <input
          className="roomId"
          type="number"
          name="roomId"
          value={formData.roomId}
          onChange={handleChange}
        />
        <label> Check-in Date:</label>
        <input
          className="checkIn"
          type="date"
          name="checkInDate"
          value={formData.checkInDate}
          onChange={handleChange}
        />
        <label> Check-out Date:</label>
        <input
          className="checkOut"
          type="date"
          name="checkOutDate"
          value={formData.checkOutDate}
          onChange={handleChange}
        />
        <input
          className="mt-4 bg-warning text-dark"
          type="submit"
          value="Add guess"
        />
      </form>
    </div>
  );
}

export default GuestForm;
