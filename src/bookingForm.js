import React, { useState } from "react";

function BookingForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");
  const [title, setTitle] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [newUsers, setNewUsers] = useState({});

  const handleFirstName = event => {
    event.preventDefault();
    setFirstName(event.target.value);
  };
  const handleLastName = event => {
    event.preventDefault();
    setLastName(event.target.value);
  };
  const handleEmail = event => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const handleRoomId = event => {
    event.preventDefault();
    setRoomId(event.target.value);
  };
  const handleCheckInDate = event => {
    event.preventDefault();
    setCheckInDate(event.target.value);
  };
  const handleHandleCheckOutDate = event => {
    event.preventDefault();
    setCheckOutDate(event.target.value);
  };
  const handleTitle = event => {
    setTitle(event.target.value);
  };
  function addNewUser() {
    setNewUsers({
      firstName: firstName,
      surname: lastName,
      email: email,
      title: title,
      roomId: roomId,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate
    });
    addUser(newUsers);
    console.log(newUsers);
  }

  return (
    <form className="register-form">
      <h3 className="tc">Registration Form</h3>
      <input placeholder="enter your first name" onChange={handleFirstName} />
      <br />
      <input placeholder="enter your last name" onChange={handleLastName} />
      <br />
      <input placeholder="enter your title" onChange={handleTitle} />
      <br />
      <input placeholder="enter your email" onChange={handleEmail} />
      <br />
      <input placeholder="enter your room id" onChange={handleRoomId} />
      <input
        placeholder="enter your check in date"
        onChange={handleCheckInDate}
      />
      <br />
      <input placeholder="check out date" onChange={handleHandleCheckOutDate} />
      <br />

      <button>Submit</button>
    </form>
  );
}

export default BookingForm;
