import React, { useState } from "react";

const InputForm = ({ addBooking }) => {
  const [inputValues, setInputValues] = useState({
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });

  function handleChange(event) {
    const newValues = {
      ...inputValues,
      [event.target.name]: event.target.value
    };
    setInputValues(newValues);
    event.preventDefault();
  }

  const handleSubmit = e => {
    addBooking(inputValues);
    setInputValues({
      title: "",
      firstName: "",
      surname: "",
      email: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: ""
    });
    e.preventDefault();
  };

  return (
    <div
      className="d-flex-column text-center bg-info text-white p-2 mt-3"
      style={{ width: 16 + "rem" }}
    >
      <p className="lead">Enter New Booking</p>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={inputValues.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={inputValues.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="surname"
        placeholder="Surname"
        value={inputValues.surname}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={inputValues.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="roomId"
        placeholder="Room No"
        value={inputValues.roomId}
        onChange={handleChange}
      />
      <input
        type="text"
        name="checkInDate"
        placeholder="Check-in Date"
        value={inputValues.checkInDate}
        onChange={handleChange}
      />
      <input
        type="text"
        name="checkOutDate"
        placeholder="Check-out Date"
        value={inputValues.checkOutDate}
        onChange={handleChange}
      />
      <div className="form-submit">
        <button
          className="btn btn-dark booking-btn m-2"
          type="submit"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default InputForm;
