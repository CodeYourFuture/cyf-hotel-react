import React, { useState } from "react";

const BookingForm = ({ addBooking }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    title: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBooking(formData);
    setFormData({
      firstName: "",
      surname: "",
      email: "",
      title: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: "",
    });
  };

  return (
    <form name="Booking Form" className="booking-form" onSubmit={handleSubmit}>
      <h2>Booking Form</h2>
      <label>
        Title:
        <select
          id="title"
          name="title"
          required
          value={formData.title}
          onChange={handleChange}
        >
          <option value="">Please select</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Ms">Ms</option>
          <option value="Dr">Dr</option>
        </select>
      </label>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="form-field"
        />
      </label>
      <label>
        Surname:
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          className="form-field"
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-field"
        />
      </label>
      <label>
        Room ID:
        <input
          type="text"
          name="roomId"
          value={formData.roomId}
          onChange={handleChange}
          className="form-field"
        />
      </label>
      <label>
        Check-In Date:
        <input
          type="date"
          name="checkInDate"
          value={formData.checkInDate}
          onChange={handleChange}
          className="form-field"
          required
        />
      </label>
      <label>
        Check-Out Date:
        <input
          type="date"
          name="checkOutDate"
          value={formData.checkOutDate}
          onChange={handleChange}
          className="form-field"
          required
        />
      </label>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default BookingForm;
