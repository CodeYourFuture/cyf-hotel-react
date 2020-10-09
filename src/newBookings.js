import React, { useState } from "react";

const NewForm = ({ addNewBookings }) => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  function handleTitle(event) {
    setTitle(event.target.value);
  }
  function handleFirstName(event) {
    setFirstName(event.target.value);
  }
  function handleSurName(event) {
    setSurName(event.target.value);
  }
  function handleRoomId(event) {
    setRoomId(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handleCheckIn(event) {
    setCheckIn(event.target.value);
  }
  function handleCheckOut(event) {
    setCheckOut(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("https://hotel-server.herokuapp.com/bookings/newBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        firstName: firstName,
        surName: surName,
        roomId: roomId,
        email: email,
        checkIn: checkIn,
        checkOut: checkOut
      })
    })
      .then(res => res.json())
      .then(res => console.log("Res", res))
      .then(data => {
        console.log(data);
        window.location.reload();
      });
  }

  return (
    <form
      className="form-inline d-flex bg-danger text-white p-2 mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="form-group mb-2">
        <label className="col-form-label">Title:</label>
        <input
          type="text"
          name="title"
          className="form-group my-2"
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div className="form-group mb-2 mx-2">
        <label className="col-form-label mr-1">First Name:</label>
        <input
          type="text"
          name="firstname"
          className="form-group mt-2 mr-1 mb-2"
          value={firstName}
          onChange={handleFirstName}
        />
      </div>
      <div className="form-group mb-2">
        <label className="col-form-label mr-1">SurName:</label>
        <input
          type="text"
          name="surname"
          className="form-group mt-2 mb-2"
          value={surName}
          onChange={handleSurName}
        />
      </div>
      <div className="form-group mb-2">
        <label className="col-form-label mx-2">Email:</label>
        <input
          type="email"
          placeholder="name@example.com"
          className="form-group mt-2 mb-2"
          name="email"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div className="form-group mb-2">
        <label className="col-form-label mx-2">roomId:</label>
        <input
          type="text"
          name="roomId"
          className="form-group mt-2 mb-2"
          value={roomId}
          onChange={handleRoomId}
        />
      </div>
      <div className="form-group mb-2">
        <label className="col-form-label mx-1">Check in date:</label>
        <input
          type="date"
          name="check-in"
          className="form-group mt-2 mb-2"
          value={checkIn}
          onChange={handleCheckIn}
        />
      </div>
      <div className="form-group mb-2">
        <label className="col-form-label mx-2">Check out date:</label>
        <input
          type="date"
          name="check-out"
          className="form-group mt-2 mb-2 mr-1"
          value={checkOut}
          onChange={handleCheckOut}
        />
      </div>
      <input
        type="submit"
        value="Submit"
        className="col-form-label mx-2 mb-1"
      />
    </form>
  );
};

export default NewForm;
