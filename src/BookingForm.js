import React, { useState } from "react";
import SearchResults from "./SearchResults";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./BookingForm.css";
import Search from "./Search";

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

    if (firstName.trim() === "") {
      error = "Please enter your first name .";
      setErrorMessage(error);
    } else if (surname.trim() === "") {
      error = "Please enter your surname .";
      setErrorMessage(error);
    } else if (
      email.indexOf("@") < 1 ||
      email.lastIndexOf(".") < email.indexOf("@") + 2 ||
      email.lastIndexOf(".") + 2 >= email.length
    ) {
      error = "Please enter a valid email address.";
      setErrorMessage(error);
    } //else if (!checkInDate) {
    //const today = new Date();
    // setCheckInDate(today.toLocaleDateString("en-GB"));
    //}
    else {
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

      setTitle("");
      setFirstName("");
      setSurname("");
      setEmail("");
      setId("");
      setCheckInDate("");
      setCheckOutDate("");
    }
    console.log(newBookings);
  }
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setNewBookings(
      newBookings.filter(
        booking =>
          booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };

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
        <div className="firstName">
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
        </div>
        <div className="surname">
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
        </div>
        <div className="email">
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
        </div>
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

        <button type="submit" className="submit">
          Submit
        </button>
        {errorMessage && <div className="error">{errorMessage}</div>}
      </form>

      <SearchResults booking={newBookings} />
      <Search search={search} />
    </div>
  );
};
export default BookingForm;
