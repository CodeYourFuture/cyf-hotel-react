import React, { useState } from "react";

function BookingForm(props) {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  function handleTitleChange(event) {
    console.log(event.target.value);
    setTitle(event.target.value);
  }
  function handleFirstChange(event) {
    setFirstName(event.target.value);
  }
  function handleSurnameChange(event) {
    setSurname(event.target.value);
  }
  function handleRoomChange(event) {
    setRoomId(event.target.value);
  }
  function handleCheckInChange(event) {
    setCheckInDate(event.target.value);
  }
  function handleCheckOutChange(event) {
    setCheckOutDate(event.target.value);
  }

  // function handleChange(event) {
  //   if (event.target.name === "title") {
  //     console.log(event.target.value);
  //     setTitle(event.target.value);
  //   } else if (event.target.name === "firstName") {
  //     setFirstName(event.target.value);
  //   } else if (event.target.name === "surname") {
  //     setSurname(event.target.value);
  //   } else if (event.target.name === "roomId") {
  //     setRoomId(event.target.value);
  //   } else if (event.target.name === "checkInDate") {
  //     setCheckInDate(event.target.value);
  //   } else if (event.target.name === "checkOutDate") {
  //     setCheckOutDate(event.target.value);
  //   }
  // }

  function handleSubmit(event) {
    event.preventDefault();
    const newBooking = {
      title: title,
      firstName: firstName,
      surname: surname,
      roomId: roomId,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      id: 7
    };
    props.handleAddPerson(newBooking);
    setTitle("");
    setFirstName("");
    setSurname("");
    setRoomId("");
    setCheckInDate("");
    setCheckOutDate("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="title"
        placeholder="Title"
        type="text"
        // className="form-control"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        id="first"
        placeholder="Enter first name"
        type="text"
        // className="form-control"
        value={firstName}
        onChange={handleFirstChange}
      />
      <input
        id="last"
        placeholder="Enter surname"
        type="text"
        // className="form-control"
        value={surname}
        onChange={handleSurnameChange}
      />
      <input
        id="room-id"
        placeholder="Enter Room ID"
        type="number"
        // className="form-control"
        value={roomId}
        onChange={handleRoomChange}
      />
      <input
        id="check-in"
        placeholder="Check-in date"
        type="date"
        // className="form-control"
        value={checkInDate}
        onChange={handleCheckInChange}
      />
      <input
        id="check-out"
        placeholder="Check-out date"
        type="date"
        // className="form-control"
        value={checkOutDate}
        onChange={handleCheckOutChange}
      />
      <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default BookingForm;
