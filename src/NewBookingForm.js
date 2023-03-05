import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const NewBookingForm = ({ bookingsList, addNewBooking }) => {
  const [formInputs, setFormInputs] = useState({
    title: "",
    firstName: "",
    surname: "",
    email: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    title: "",
    firstName: "",
    surname: "",
    email: "",
  });

  //creating stated for min max value in calendar
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date("2023/03/15"));

  const handleChange = (event) => {
    const { name, value } = event.target;
    let errors = { ...validationErrors };

    switch (name) {
      case "title":
        errors.name = !value.trim()
          ? "X Title is required"
          : value.length < 3
          ? "X Title must be at least 2 characters"
          : "";
        break;
      case "firstName":
        errors.firstName = !value.trim()
          ? "X First name is required"
          : value.length < 4
          ? "X First name must be at least 3 characters"
          : "";
        break;
      case "surname":
        errors.surname = !value.trim()
          ? "X Surname is required"
          : value.length < 4
          ? "X Surname must be at least 3 characters"
          : "";
        break;
      case "email":
        errors.email = /^w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/.test(value)
          ? "X Email is invalid"
          : value.length < 6
          ? "X Email must be at least 6 characters"
          : "";
        break;
      default:
        break;
    }

    setValidationErrors(errors);
    setFormInputs({ ...formInputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let obj = {};
    obj.id = generateRandomID();
    obj.title = formInputs.title;
    obj.firstName = formInputs.firstName;
    obj.surname = formInputs.surname;
    obj.email = formInputs.email;
    obj.roomId = generateRandomRoomID();
    obj.checkInDate = formatDate(startDate);
    obj.checkOutDate = formatDate(endDate);

    addNewBooking([...bookingsList, obj]);
  };

  //creating random number for id
  const generateRandomID = () => {
    let randId = Math.trunc(Math.random() * 50) + 1;

    // check if generated ID exists in bookingsList
    while (bookingsList.some((guest) => guest.id === randId)) {
      randId = Math.trunc(Math.random() * 50) + 1;
    }

    return randId;
  };

  //creating random number for room id
  const generateRandomRoomID = () => {
    let randId = Math.trunc(Math.random() * 50) + 1;

    // check if generated ID exists in bookingsList
    while (bookingsList.some((guest) => guest.roomId === randId)) {
      randId = Math.trunc(Math.random() * 50) + 1;
    }

    return randId;
  };

  //function for formatting date
  function formatDate(date) {
    let now = date;
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    //adding 0 to day and month if the number is less than 10
    let newDay = ("0" + day).slice(-2);
    let newMonth = ("0" + month).slice(-2);
    let myDate = `${year}-${newMonth}-${newDay}`;

    return myDate;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        placeholder="enter your first name"
        onChange={handleChange}
        pattern="[A-Za-z0-9]{1,20}"
        required
      />
      <p>{validationErrors.firstName}</p>

      <label>Surname:</label>
      <input
        type="text"
        name="surname"
        placeholder="enter your surname"
        onChange={handleChange}
        pattern="[A-Za-z0-9]{1,20}"
        required
      />
      <p>{validationErrors.surname}</p>

      <label>Email:</label>
      <input
        type="email"
        name="email"
        placeholder="enter your email"
        onChange={handleChange}
        required
        pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
      />
      <p>{validationErrors.email}</p>

      <label>Title:</label>
      <input
        type="text"
        name="title"
        placeholder="enter your title"
        onChange={handleChange}
        required
      />
      <p>{validationErrors.title}</p>

      <label>Check-in Date:</label>
      <DatePicker
        showIcon
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        required
      />

      <label>Check-out Date:</label>
      <DatePicker
        showIcon
        dateFormat="yyyy/MM/dd"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        required
      />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default NewBookingForm;
