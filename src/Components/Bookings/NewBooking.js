import React from "react";

const NewBooking = () => {
  return (
    <form
      onSubmit={event => event.preventDefault()}
      style={{ display: "flex" }}
    >
      <label>First Name:</label>
      <input
        type="text"
        placeholder="Enter name here..."
        id="firstName"
        onChange={event => console.log(event.target.value)}
      />
      <label>Surname:</label>
      <input type="text" id="surname" placeholder="Enter surname here..." />
      <label>Title:</label>
      <input type="text" id="title" placeholder="Enter title here..." />
      <label>Room id:</label>
      <input type="number" id="roomId" placeholder="Enter room id here..." />
      <label>Check-in:</label>
      <input type="date" id="checkIn" placeholder="Check-in" />
      <label>Check-out:</label>
      <input type="date" id="checkOut" placeholder="Check-out" />
      <button onClick={event => console.log(event.target.value)}>Submit</button>
    </form>
  );
};

export default NewBooking;
