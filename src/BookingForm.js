import React, { useState } from "react";
import SearchResults from "./SearchResults";

const BookingForm = props => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [newBookings, setNewBookings] = useState(props.bookings);

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Sending data to server");

    let newRow = {
      title: title,
      firstName: firstName,
      surname: surname,
      email: email,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate
    };
    setNewBookings([...newBookings, newRow]);
    console.log(newBookings);
  }
  console.log(newBookings);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="text"
          name="firstName"
          placeholder="FirstName"
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={surname}
          onChange={event => setSurname(event.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="date"
          name="checkInDate"
          placeholder="Check-In-Date"
          value={checkInDate}
          onChange={event => setCheckInDate(event.target.value)}
        />
        <input
          type="date"
          name="checkOutDate"
          placeholder="Check-Out-Date"
          value={checkOutDate}
          onChange={event => setCheckOutDate(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <SearchResults booking={newBookings} />
    </div>
  );
};
export default BookingForm;
