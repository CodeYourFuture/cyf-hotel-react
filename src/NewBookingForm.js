import React, { useCallback, useEffect, useState } from "react";

const NewBookingForm = ({ bookingsList, addNewBooking }) => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [minDate, setMinDate] = useState("");

  const updateFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const updateSurname = (event) => {
    setSurname(event.target.value);
  };
  const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const updateTitle = (event) => {
    setTitle(event.target.value);
  };
  const updateCheckInDate = (event) => {
    setCheckInDate(event.target.value);
  };
  const updateCheckOutDate = (event) => {
    setCheckOutDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = {};
    obj.id = generateRandomID();
    obj.title = title;
    obj.firstName = firstName;
    obj.surname = surname;
    obj.email = email;
    obj.roomId = generateRandomRoomID();
    obj.checkInDate = checkInDate.toString();
    obj.checkOutDate = checkOutDate.toString();

    addNewBooking([...bookingsList, obj]);
  };
  const generateRandomID = () => {
    let randId = Math.trunc(Math.random() * 50) + 1;

    // check if generated ID exists in bookingsList
    while (bookingsList.some((guest) => guest.id === randId)) {
      randId = Math.trunc(Math.random() * 50) + 1;
    }

    return randId;
  };

  const generateRandomRoomID = () => {
    let randId = Math.trunc(Math.random() * 50) + 1;

    // check if generated ID exists in bookingsList
    while (bookingsList.some((guest) => guest.roomId === randId)) {
      randId = Math.trunc(Math.random() * 50) + 1;
    }

    return randId;
  };
  //function for formatting date to set min date
  function formatDate(date) {
    let now = date;
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    //adding 0 to day if the number is less than 10
    let newDay = ("0" + day).slice(-2);
    let newMonth = ("0" + month).slice(-2);
    let myDate = `${year}-${newMonth}-${newDay}`;

    return myDate;
  }
  useEffect(() => {
    setMinDate(formatDate(new Date()));
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name:</label>
      <input
        type="text"
        name="first_name"
        placeholder="enter your first name"
        onChange={updateFirstName}
        required
      />

      <label>Surname:</label>
      <input
        type="text"
        name="surname"
        placeholder="enter your surname"
        onChange={updateSurname}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        placeholder="enter your email"
        onChange={updateEmail}
        required
      />

      <label>Title:</label>
      <input
        type="text"
        name="title"
        placeholder="enter your title"
        onChange={updateTitle}
        required
      />

      <label>Check-in Date:</label>
      <input
        type="date"
        min={minDate}
        name="check_in_date"
        placeholder="enter the Check-in Date"
        onChange={updateCheckInDate}
        required
      />

      <label>Check-out Date:</label>
      <input
        type="date"
        min={minDate}
        name="check_out_date"
        placeholder="enter the Check-out Date"
        onChange={updateCheckOutDate}
        required
      />

      <input type="submit" value="Submit" />
    </form>
  );
};


    export default NewBookingForm;