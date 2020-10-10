import React, { useState } from "react";

const NewForm = () => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();

  // function handleChange(event) {
  //   const { value, name } = event.target;
  //   switch (name) {
  //     case name === "title":
  //       setTitle(value);
  //       break;
  //     case name === "firstName":
  //       setFirstName(value);
  //       break;
  //     case name === "surName":
  //       setSurName(value);
  //       break;
  //     case name === "roomId":
  //       setRoomId(value);
  //       break;
  //     case name === "email":
  //       setEmail(value);
  //       break;
  //     case name === "checkIn":
  //       setCheckIn(value);
  //       break;
  //     case name === "checkOut":
  //       setCheckOut(value);
  //       break;
  //     default:
  //       console.log(`Sorry`);
  //   }
  // }

  async function handleSubmit(event) {
    event.preventDefault();

    fetch("https://hotel-server.herokuapp.com/bookings/newBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        firstName: firstName,
        surName: surName,
        email: email,
        roomId: roomId,
        checkIn: checkIn,
        checkOut: checkOut
      })
    })
      .then(res => res.json())
      .then(res => console.log("Res", res))
      .then(data => {
        console.log(data);
        console.log(event);
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
          // handleChange={handleChange}
          onChange={event => {
            event.persist();
            setTitle(event.target.value);
          }}
        />
      </div>
      <div className="form-group mb-2 mx-2">
        <label className="col-form-label mr-1">First Name:</label>
        <input
          type="text"
          name="firstName"
          className="form-group mt-2 mr-1 mb-2"
          value={firstName}
          // handleChange={handleChange}
          onChange={event => {
            event.persist();
            setFirstName(event.target.value);
          }}
        />
      </div>
      <div className="form-group mb-2">
        <label className="col-form-label mr-1">SurName:</label>
        <input
          type="text"
          name="surName"
          className="form-group mt-2 mb-2"
          value={surName}
          // handleChange={handleChange}
          onChange={event => {
            event.persist();
            setSurName(event.target.value);
            console.log(surName.trim());
          }}
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
          // handleChange={handleChange}
          onChange={event => {
            event.persist();
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className="form-group mb-2">
        <label className="col-form-label mx-2">roomId:</label>
        <input
          type="text"
          name="roomId"
          className="form-group mt-2 mb-2"
          value={roomId}
          // handleChange={handleChange}
          onChange={event => {
            event.persist();
            setRoomId(event.target.value);
          }}
        />
      </div>
      <div className="form-group mb-2">
        <label className="col-form-label mx-1">Check in date:</label>
        <input
          type="date"
          name="checkIn"
          className="form-group mt-2 mb-2"
          value={checkIn}
          // handleChange={handleChange}
          onChange={event => {
            event.persist();
            setCheckIn(event.target.value);
            console.log(event.target.value);
          }}
        />
      </div>
      <div className="form-group mb-2">
        <label className="col-form-label mx-2">Check out date:</label>
        <input
          type="date"
          name="checkOut"
          className="form-group mt-2 mb-2 mr-1"
          value={checkOut}
          // handleChange={handleChange}
          onChange={event => {
            event.persist();
            setCheckOut(event.target.value);
          }}
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
