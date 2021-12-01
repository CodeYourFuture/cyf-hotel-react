import React, { useState } from "react";

const Form = props => {
  const [firstName, setFirstName] = useState("-");
  const [surname, setSurname] = useState("-");
  const [title, setTitle] = useState("-");
  const [roomId, setRoomId] = useState("-");
  const [checkInDate, setCheckInDate] = useState("-");
  const [checkOutDate, setCheckOutDate] = useState("-");

  const handleFirstNameVal = event => {
    setFirstName(event.target.value);
  };

  const handleSurnameVal = event => {
    setSurname(event.target.value);
  };

  const handleTitleVal = event => {
    setTitle(event.target.value);
  };

  const handleRoomIdVal = event => {
    setRoomId(event.target.value);
  };
  const handleCheckInVal = event => {
    setCheckInDate(event.target.value);
  };
  const handleCheckOutVal = event => {
    setCheckOutDate(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newBooking = {
      id: "",
      title: title,
      firstName: firstName,
      surname: surname,
      email: "",
      roomId: roomId,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate
    };

    props.getNewBooking(newBooking);
  };

  return (
    <div className="FormContainer">
      <h1 className="HeadingNewBooking Caption">Create a New Booking</h1>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Your first name.."
          onChange={handleFirstNameVal}
        ></input>

        <label htmlFor="surname">Last Name</label>
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder="Your surname.."
          onChange={handleSurnameVal}
        ></input>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Your title.."
          onChange={handleTitleVal}
        ></input>

        <label htmlFor="roomId">Room ID</label>
        <input
          type="number"
          id="roomId"
          name="roomId"
          placeholder="Your room id.."
          onChange={handleRoomIdVal}
        ></input>

        <label htmlFor="CheckInDate">Check-in Date</label>
        <input
          type="date"
          id="CheckInDate"
          name="CheckInDate"
          placeholder="Your Check-In Date.."
          onChange={handleCheckInVal}
        ></input>

        <label htmlFor="CheckOutDate">Check-out Date</label>
        <input
          type="date"
          id="CheckOutDate"
          name="CheckOutDate"
          placeholder="Your Check-Out Date.."
          onChange={handleCheckOutVal}
        ></input>

        <input
          className="SubmitButton btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        ></input>
      </form>
    </div>
  );
};

export default Form;
