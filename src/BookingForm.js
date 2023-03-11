import React, { useState } from "react";
import SearchResults from "./SearchResults";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const BookingForm = props => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [newBookings, setNewBookings] = useState(props.bookings);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let error = "";

    // if (firstName.trim() === "" || surname.trim() === "") {
    //   error = "Please enter your first name and last name.";
    // } else if (
    //   email.indexOf("@") < 1 ||
    //   email.lastIndexOf(".") < email.indexOf("@") + 2 ||
    //   email.lastIndexOf(".") + 2 >= email.length
    // ) {
    //   error = "Please enter a valid email address.";
    // } else if (isNaN(id) || id < 0 || id > 100) {
    //   error = "Please enter a room ID between 0 and 100.";
    // }

    // setErrorMessage(error);

    // if (!error) {
    //   console.log("Form submitted:", { firstName, surname, email, id });
    //   setFirstName("");
    //   setSurname("");
    //   setEmail("");
    //   setId("");
    // }

    let newRow = {
      id: id,
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
          type="number"
          name="id"
          placeholder="id"
          value={id}
          onChange={event => setId(event.target.value)}
        />
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
        {!firstName.trim() && <span>X first name must not be empty</span>}
        {firstName.trim() && (
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} />
        )}
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={surname}
          onChange={event => setSurname(event.target.value)}
        />
        {!surname.trim() && <span>X first name must not be empty</span>}
        {surname.trim() && (
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} />
        )}
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        {email.indexOf("@") < 1 ||
        email.lastIndexOf(".") < email.indexOf("@") + 2 ||
        email.lastIndexOf(".") + 2 >= email.length ? (
          <span>Please enter a valid email address.</span>
        ) : (
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} />
        )}

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
      <SearchResults bookings={newBookings} />
    </div>
  );
};
export default BookingForm;
