import React, { useState } from "react";

function BookingForm(props) {
  const initialState = {
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  };
  const [formData, setFormData] = useState(initialState);
  const [handleError, setHandleError] = useState(null);

  // const [title, setTitle] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [roomId, setRoomId] = useState("");
  // const [checkInDate, setCheckInDate] = useState("");
  // const [checkOutDate, setCheckOutDate] = useState("");
  // const [email, setEmail] = useState("");

  // function handleChange(event) {
  //   if (event.target.name === "title") {
  //     console.log(event.target.value);
  //     setTitle(event.target.value);
  //   } else if (event.target.name === "firstName") {
  //     setFirstName(event.target.value);
  //   } else if (event.target.name === "surname") {
  //     setSurname(event.target.value);
  //   } else if (event.target.name === "email") {
  //     setEmail(event.target.value);
  //   } else if (event.target.name === "roomId") {
  //     setRoomId(event.target.value);
  //   } else if (event.target.name === "checkInDate") {
  //     setCheckInDate(event.target.value);
  //   } else if (event.target.name === "checkOutDate") {
  //     setCheckOutDate(event.target.value);
  //   }
  // }

  const handleSubmit = (event, props) => {
    event.preventDefault();
    fetch("http://localhost:3003/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: formData.title,
        firstName: formData.firstName,
        surname: formData.surname,
        email: formData.email,
        roomId: formData.roomId,
        checkInDate: formData.checkInDate,
        checkOutDate: formData.checkOutDate
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          // console.log(data.message);
          setHandleError(data.message);
        } else {
          console.log("Success:", data);
          props.refreshingList(true);
          setFormData(initialState);
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  function handleInputChange(event) {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  // console.log(props.results);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   let randomID = props.results.length + 1;
  //   const newBooking = {
  //     title: title,
  //     firstName: firstName,
  //     surname: surname,
  //     roomId: roomId,
  //     checkInDate: checkInDate,
  //     checkOutDate: checkOutDate,
  //     id: randomID,
  //   };

  //   props.handleAddPerson(newBooking);
  //   setTitle("");
  //   setFirstName("");
  //   setSurname("");
  //   setEmail("");
  //   setRoomId("");
  //   setCheckInDate("");
  //   setCheckOutDate("");
  // }

  return (
    <div>
      {handleError ? (
        <div>
          <p>{handleError}</p>
          <div className="container">
            <form onSubmit={handleSubmit} className="booking-form">
              <input
                id="title"
                placeholder="Title"
                type="text"
                className="form-control"
                value={formData.title}
                name="title"
                onChange={handleInputChange}
              />
              <input
                id="first"
                placeholder="Enter first name"
                type="text"
                className="form-control"
                value={formData.firstName}
                name="firstName"
                onChange={handleInputChange}
              />
              <input
                id="last"
                placeholder="Enter surname"
                type="text"
                className="form-control"
                value={formData.surname}
                name="surname"
                onChange={handleInputChange}
              />
              <input
                id="email"
                placeholder="Enter email"
                type="email"
                className="form-control"
                value={formData.email}
                name="email"
                onChange={handleInputChange}
              />
              <input
                id="room-id"
                placeholder="Enter Room ID"
                type="number"
                className="form-control"
                value={formData.roomId}
                name="roomId"
                onChange={handleInputChange}
              />
              <input
                id="check-in"
                placeholder="Check-in date"
                type="date"
                className="form-control"
                value={formData.checkInDate}
                name="checkInDate"
                onChange={handleInputChange}
              />
              <input
                id="check-out"
                placeholder="Check-out date"
                type="date"
                className="form-control"
                value={formData.checkOutDate}
                name="checkOutDate"
                onChange={handleInputChange}
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
        </div>
      ) : (
        <div className="container">
          <form onSubmit={handleSubmit} className="booking-form">
            <input
              id="title"
              placeholder="Title"
              type="text"
              className="form-control"
              value={formData.title}
              name="title"
              onChange={handleInputChange}
            />
            <input
              id="first"
              placeholder="Enter first name"
              type="text"
              className="form-control"
              value={formData.firstName}
              name="firstName"
              onChange={handleInputChange}
            />
            <input
              id="last"
              placeholder="Enter surname"
              type="text"
              className="form-control"
              value={formData.surname}
              name="surname"
              onChange={handleInputChange}
            />
            <input
              id="email"
              placeholder="Enter email"
              type="email"
              className="form-control"
              value={formData.email}
              name="email"
              onChange={handleInputChange}
            />
            <input
              id="room-id"
              placeholder="Enter Room ID"
              type="number"
              className="form-control"
              value={formData.roomId}
              name="roomId"
              onChange={handleInputChange}
            />
            <input
              id="check-in"
              placeholder="Check-in date"
              type="date"
              className="form-control"
              value={formData.checkInDate}
              name="checkInDate"
              onChange={handleInputChange}
            />
            <input
              id="check-out"
              placeholder="Check-out date"
              type="date"
              className="form-control"
              value={formData.checkOutDate}
              name="checkOutDate"
              onChange={handleInputChange}
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
      )}
    </div>
  );
}

export default BookingForm;
