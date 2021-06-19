import React from "react";

const NewBooking = () => {
  return (
    <form onSubmit={event => event.preventDefault()}>
      <label for="firstName">First Name:</label>
      <input type="text" placeholder="Enter name here..." id="firstName" />
      <label for="surname">Surname:</label>
      <input type="text" id="surname" placeholder="Enter surname here..." />
      <label for="title">Title:</label>
      <input type="text" id="title" placeholder="Enter title here..." />
      <label for="roomId">Room id:</label>
      <input type="number" id="roomId" placeholder="Enter room id here..." />
      <label for="checkIn">Check-in:</label>
      <input type="date" id="checkIn" placeholder="Check-in" />
      <label for="checkOut">Check-out:</label>
      <input type="date" id="checkOut" placeholder="Check-out" />
      <button onClick={() => console.log("Clicked")}>Submit</button>
    </form>
  );
};

export default NewBooking;
