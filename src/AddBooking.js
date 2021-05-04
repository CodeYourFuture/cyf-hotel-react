import React, { useState } from "react";

function AddBooking({ handlarAddBooking }) {
  const [userData, setUserData] = useState({
    title: "",
    firstName: "",
    surname: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });
  function handlerAddNewBooking(event) {
    const updateUserData = {
      ...userData,
      [event.target.name]: event.target.value
    };
    setUserData(updateUserData);
  }

  function handlerAddOnSubmit() {
    if (userData) {
      handlarAddBooking(userData);
    }
  }

  return (
    <div className="d-flex flex-column bg-info justify-content-center">
      <input
        className="m-2"
        type="text"
        placeholder="title"
        name="title"
        value={userData.title}
        onChange={handlerAddNewBooking}
      />

      <input
        className="m-2"
        type="text"
        placeholder="first name"
        name="firstName"
        value={userData.firstName}
        onChange={handlerAddNewBooking}
      />
      <input
        className="m-2"
        type="text"
        placeholder="surname"
        name="surname"
        value={userData.surname}
        onChange={handlerAddNewBooking}
      />
      <input
        className="m-2"
        type="text"
        placeholder="roomId"
        name="roomId"
        value={userData.roomId}
        onChange={handlerAddNewBooking}
      />
      <input
        className="m-2"
        type="date"
        placeholder="checkInDate"
        name="checkInDate"
        value={userData.checkInDate}
        onChange={handlerAddNewBooking}
      />
      <input
        className="m-2"
        type="date"
        placeholder="checkOutDate"
        name="checkOutDate"
        value={userData.checkOutDate}
        onChange={handlerAddNewBooking}
      />
      <button className="bg-primary text-white" onClick={handlerAddOnSubmit}>
        Submit
      </button>
    </div>
  );
}
export default AddBooking;
