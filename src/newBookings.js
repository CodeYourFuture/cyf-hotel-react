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

  const handleSubmit = event => {
    event.preventDefault();
    addNewBookings({
      title,
      firstName,
      surName,
      roomId,
      email,
      checkIn,
      checkOut
    });
    setTitle("");
    setFirstName("");
    setSurName("");
    setEmail("");
    setRoomId("");
    setCheckOut("");
    setCheckIn("");
  };

  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <div class="form-group mb-2">
        <label for="title" className="col-sm-2 col-form-label">
          Title:
        </label>
        <input
          type="text"
          name="title"
          className="form-group my-2"
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div class="form-group mb-2">
        <label for="firstname" className="col-sm-2 col-form-label">
          First Name:
        </label>
        <input
          type="text"
          name="firstname"
          className="form-group mx-sm-3 mb-2"
          value={firstName}
          onChange={handleFirstName}
        />
      </div>
      <div class="form-group mb-2">
        <label for="surname" className="col-sm-2 col-form-label">
          SurName :
        </label>
        <input
          type="text"
          name="surname"
          className="form-group mx-sm-3 mb-2"
          value={surName}
          onChange={handleSurName}
        />
      </div>
      <div class="form-group mb-2">
        <label for="email" className="col-sm-2 col-form-label">
          Email:
        </label>
        <input
          type="email"
          placeholder="name@example.com"
          className="form-group mx-sm-3 mb-2"
          name="email"
          value={roomId}
          onChange={handleRoomId}
        />
      </div>
      <div class="form-group mb-2">
        <label for="roomId" className="col-sm-2 col-form-label">
          roomId:
        </label>
        <input
          type="text"
          name="roomId"
          className="form-group mx-sm-3 mb-2"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div class="form-group mb-2">
        <label for="check-in" className="col-sm-2 col-form-label">
          Check in date:
        </label>
        <input
          type="text"
          name="check-in"
          className="form-group mx-sm-3 mb-2"
          value={checkIn}
          onChange={handleCheckIn}
        />
      </div>
      <div class="form-group mb-2">
        <label for="check-out" className="col-sm-2 col-form-label">
          Check out date:
        </label>
        <input
          type="text"
          name="check-out"
          className="form-group mx-sm-3 mb-2"
          value={checkOut}
          onChange={handleCheckOut}
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default NewForm;
