import React from "react";

const NewBooking = () => {
  return (
    <div id="form-container">
      <h3>Add New Booking:</h3>
      <form id="new-booking">
        <label>Title:</label>
        <input type="text" />
        <br />
        <label>First Name:</label>
        <input type="text" />
        <br />
        <label>Surname:</label>
        <input type="text" />
        <br />
        <label>Room ID:</label>
        <input type="number" />
        <br />
        <label>Check in Date:</label>
        <input type="date" />
        <br />
        <label>Check out Date:</label>
        <input type="date" />
      </form>
    </div>
  );
};

export default NewBooking;