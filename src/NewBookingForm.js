import React, { useState } from "react";

function NewBookingForm(props) {
  const [bookingForm, setBookingForm] = useState("");
  const [title, setTitle] = useState("");
  const [firstName, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomID] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [totalnumOfNights,setTotalnumOfNights] = useState("")

  function handleBookingForm(event) {
      if (event.target.name === "title") {
      setTitle(event.target.value);
      }else if (event.target.name === "firstName") {
      setFirstname(event.target.value);
    } else if (event.target.name === "surname") {
      setSurname(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "roomId") {
      setRoomID(event.target.value);
    } else if (event.target.name === "checkInDate") {
      setCheckInDate(event.target.value);
    }else if (event.target.name === "checkOutDate") {
      setCheckOutDate(event.target.value);
    }
}

  function handleSubmitButton(event) {
    event.preventDefault();
    const newBooking = {
      title: title,
      firstName: firstName,
      surname: surname,
      email: email,
      roomId: Math.floor(Math.random() * 100),
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      id: props.bookings.length + 1,
    };
    props.addNewBooking(newBooking);

    setTitle("");
    setFirstname("");
    setSurname("");
    setEmail("");
    setRoomID("");
    setCheckInDate("");
    setCheckOutDate("");
  }

  return (
    <div className="registration-form">
      <p>Book-In Here</p>
      <div className="input-area">
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleBookingForm}
          value={title}
        />
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          onChange={handleBookingForm}
          value={firstName}
        />
        <input
          type="text"
          name="surname"
          placeholder="surname"
          onChange={handleBookingForm}
          value={surname}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleBookingForm}
          value={email}
        />
        {/* <input
          type="text"
          name="roomId"
          placeholder="roomId"
          onChange={handleBookingForm}
          value={roomId}
        /> */}
        <input
          type="date"
          name="checkInDate"
          placeholder="checkInDate"
          onChange={handleBookingForm}
          value={checkInDate}
        />

        <input
          type="date"
          name="checkOutDate"
          placeholder="checkOutDate"
          onChange={handleBookingForm}
          value={checkOutDate}
        />
{/* 
        <input
          type="text"
          name="totalNumOfNights"
          placeholder="totalNumOfNights"
          onChange={handleBookingForm}
          value={totalnumOfNights}
        /> */}

        <button className="btn btn-primary" onClick={handleSubmitButton}>
          Click to Submit Form
        </button>
      </div>
    </div>
  );
}

export default NewBookingForm;
