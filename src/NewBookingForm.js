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
  const [endDate, setEndDate] = useState(addTenDaysToDate(new Date()));

  const handleChange = (event) => {
    const { name, value } = event.target;
    let errors = { ...validationErrors };

    switch (name) {
      case "title":
        errors.title = !value.trim()
          ? "X Title is required"
          : value.length < 3
          ? "X Title must be at least 2 characters"
          : "";
        break;
      case "firstName":
        errors.firstName = !value.trim()
          ? "X First name is required"
          : value.length < 3
          ? "X First name must be at least 3 characters"
          : "";
        break;
      case "surname":
        errors.surname = !value.trim()
          ? "X Surname is required"
          : value.length < 3
          ? "X Surname must be at least 3 characters"
          : "";
        break;
      case "email":
        errors.email = !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)
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

    //adding new guest to the main list
    addNewBooking([...bookingsList, obj]);

    //clearing all input fields in form
    setFormInputs({
      title: "",
      firstName: "",
      surname: "",
      email: "",
    });
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
    console.log(date);
    console.log(typeof date);

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

  function addTenDaysToDate(date) {
    const newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() + 10);
    return newDate;
  }

  return (
    <form className="new-booking-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputFirstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="inputFirstName"
            className="form-control"
            placeholder="Your first name"
            onChange={handleChange}
            pattern="[A-Za-z0-9]{1,20}"
            value={formInputs.firstName}
            required
          />
          <p>{validationErrors.firstName}</p>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputSurname">Surname:</label>
          <input
            type="text"
            name="surname"
            id="inputSurname"
            className="form-control"
            placeholder="Your surname"
            onChange={handleChange}
            pattern="[A-Za-z0-9]{1,20}"
            value={formInputs.surname}
            required
          />
          <p>{validationErrors.surname}</p>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail">Email:</label>
          <input
            type="email"
            name="email"
            id="inputEmail"
            className="form-control"
            placeholder="Your email"
            onChange={handleChange}
            pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
            value={formInputs.email}
            required
          />
          <p>{validationErrors.email}</p>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputTitle">Title:</label>
          <input
            type="text"
            name="title"
            id="inputTitle"
            className="form-control"
            placeholder="Your title"
            onChange={handleChange}
            value={formInputs.title}
            required
          />
          <p>{validationErrors.title}</p>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Check-in Date:</label>
          <DatePicker
            showIcon
            className="form-control"
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            required
          />
        </div>
        <div className="form-group col-md-6">
          <label>Check-out Date:</label>
          <DatePicker
            showIcon
            className="form-control"
            dateFormat="yyyy/MM/dd"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            required
          />
        </div>
      </div>

      <input className="button" type="submit" value="Submit" />
    </form>
  );
};

export default NewBookingForm;
