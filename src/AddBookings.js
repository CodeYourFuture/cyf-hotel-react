import React, { useState } from "react";
import "./App.css";

const AddBookings = props => {
  const [userData, setUserData] = useState({
    title: "",
    firstName: "",
    surname: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });

  const handleChange = e => {
    const updatedUserData = {
      ...userData,
      [e.target.name]: [e.target.value]
    };

    setUserData(updatedUserData);
  };

  const submit = e => {
    e.preventDefault();
    props.addNewAccount(userData);
    console.log("Do something with the form values...");
    console.log(`Title = ${userData.title}`);
    console.log(`FirstName = ${userData.firstName}`);
    console.log(`Surname= ${userData.surname}`);
  };

  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={userData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="firstName"
        placeholder="first name"
        value={userData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="surname"
        placeholder="surname"
        value={userData.surname}
        onChange={handleChange}
      />
      <input
        type="text"
        name="roomId"
        placeholder="room id"
        value={userData.roomId}
        onChange={handleChange}
      />
      <input
        type="date"
        name="checkInDate"
        placeholder="check in date"
        value={userData.checkInDate}
        onChange={handleChange}
      />
      <input
        type="date"
        name="checkOutDate"
        placeholder="check out data"
        value={userData.checkOutDate}
        onChange={handleChange}
      />
      <button type="submit" onClick={submit}>
        Add Booking
      </button>
    </form>
  );
};

export default AddBookings;
