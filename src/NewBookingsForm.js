import React, { useState } from "react";

function NewBookingsForm(props) {
  const [newBooking, setNewBooking] = useState("");

  const [id, setId] = useState(6);
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [title, setTitle] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  function handleChange(event) {
    if (event.target.name === "first-name") {
      setFirstName(event.target.value);
    } else if (event.target.name === "surname") {
      setSurname(event.target.value);
    } else if (event.target.name === "title") {
      setTitle(event.target.value);
    } else if (event.target.name === "room-id") {
      setRoomId(event.target.value);
    } else if (event.target.name === "check-in-date") {
      setCheckInDate(event.target.value);
    } else if (event.target.name === "check-out-date") {
      setCheckOutDate(event.target.value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    setId(id + 1);

    setNewBooking({
      id: id,
      firstName: firstName,
      surname: surname,
      title: title,
      roomId: roomId,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate
    });
  }

  props.getBooking(newBooking);

  return (
    <section className="text-center my-5">
      <h3>Add a booking: </h3>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-row mx-0">
          <div className="form-group col-12 col-sm-3 offset-sm-3">
            <input
              className="form-control"
              type="text"
              name="first-name"
              required
              placeholder="First Name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-12 col-sm-3">
            <input
              className="form-control"
              type="text"
              name="surname"
              required
              placeholder="Surname"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-12 col-sm-3 offset-sm-3">
            <input
              className="form-control"
              type="text"
              name="title"
              required
              placeholder="Title"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-12 col-sm-3">
            <input
              className="form-control"
              type="text"
              name="room-id"
              required
              placeholder="Room ID"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-12 col-sm-3 offset-sm-3">
            <label>Check In Date</label>
            <input
              className="form-control"
              type="date"
              name="check-in-date"
              required
              placeholder="Check In Date"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-12 col-sm-3">
            <label>Check Out Date </label>
            <input
              className="form-control"
              type="date"
              name="check-out-date"
              required
              placeholder="Check Out Date"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button className="btn btn-primary submit-button">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default NewBookingsForm;
