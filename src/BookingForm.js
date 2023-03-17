import React, { useState } from "react";

function BookingForm(props) {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [email, setEmail] = useState("");

  function handleChange(event) {
    if (event.target.name === "title") {
      console.log(event.target.value);
      setTitle(event.target.value);
    } else if (event.target.name === "firstName") {
      setFirstName(event.target.value);
    } else if (event.target.name === "surname") {
      setSurname(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "roomId") {
      setRoomId(event.target.value);
    } else if (event.target.name === "checkInDate") {
      setCheckInDate(event.target.value);
    } else if (event.target.name === "checkOutDate") {
      setCheckOutDate(event.target.value);
    }
  }

  // console.log(props.results);

  function handleSubmit(event) {
    event.preventDefault();
    let randomID = props.results.length + 1;
    const newBooking = {
      title: title,
      firstName: firstName,
      surname: surname,
      roomId: roomId,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      id: randomID
    };

    props.handleAddPerson(newBooking);
    setTitle("");
    setFirstName("");
    setSurname("");
    setEmail("");
    setRoomId("");
    setCheckInDate("");
    setCheckOutDate("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="booking-form">
        <input
          id="title"
          placeholder="Title"
          type="text"
          className="form-control"
          value={title}
          name="title"
          onChange={handleChange}
        />
        <input
          id="first"
          placeholder="Enter first name"
          type="text"
          className="form-control"
          value={firstName}
          name="firstName"
          onChange={handleChange}
        />
        <input
          id="last"
          placeholder="Enter surname"
          type="text"
          className="form-control"
          value={surname}
          name="surname"
          onChange={handleChange}
        />
        <input
          id="email"
          placeholder="Enter email"
          type="email"
          className="form-control"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <input
          id="room-id"
          placeholder="Enter Room ID"
          type="number"
          className="form-control"
          value={roomId}
          name="roomId"
          onChange={handleChange}
        />
        <input
          id="check-in"
          placeholder="Check-in date"
          type="date"
          className="form-control"
          value={checkInDate}
          name="checkInDate"
          onChange={handleChange}
        />
        <input
          id="check-out"
          placeholder="Check-out date"
          type="date"
          className="form-control"
          value={checkOutDate}
          name="checkOutDate"
          onChange={handleChange}
        />
      </form>
      <button
        id="submit-form"
        className="btn btn-primary"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default BookingForm;
