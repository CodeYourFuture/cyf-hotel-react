import React, { useState } from "react";
// Import js-datepicker
import datepicker from "js-datepicker";

const NewBookingForm = ({ onSubmit }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [nightStay, setNightStay] = useState("");
  const [isValidForm, setIsValidForm] = useState(false);
  const [error, setError] = useState("");

  //set validation error
  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (firstName === "") {
      setError("X first name must not be empty");
      return;
    }
    if (surname === "") {
      setError("X surname must not be empty");
      return;
    }
    if (
      !email.includes("@") ||
      !email.includes(".") ||
      email.indexOf("@") !== email.lastIndexOf("@")
    ) {
      setError("Please enter a valid email address!");
      return;
    }
    if (roomId < 0 || roomId > 100 || isNaN(roomId)) {
      setError("Please enter a valid room number (0-100)!");
      return;
    }

    // What do you think would happen if you were asked to remove a booking for room number '81', but the user had typed 'eightyOne' or 'EIGHTY ONE'?
    // Answer:
    // The validation process will detect that the input for the room ID is not a number between 0 and 100, and an error message will be displayed prompting the user to enter a valid room number (0-100).

    onSubmit({
      id,
      title,
      firstName,
      surname,
      email,
      roomId,
      checkInDate,
      checkOutDate,
      nightStay,
    });
  };
  return (
    <form>
      <label for="id">ID:</label>
      <input
        value={id}
        onChange={(event) => setId(event.target.value)}
        type="text"
        id="id"
        name="id"
      />
      <br />
      {error}
      <label for="title">Title:</label>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        id="title"
        name="title"
      />
      <br />
      {error}
      <label for="first-name">First name:</label>
      <input
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        type="text"
        id="first-name"
        name="first-name"
      ></input>
      <br />
      {error}
      <label for="surname">Surname:</label>
      <input
        value={surname}
        onChange={(event) => setSurname(event.target.value)}
        type="text"
        id="surname"
        name="surname"
      ></input>
      <br />
      {error}
      <label for="email">Email:</label>
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="text"
        id="email"
        name="email"
      ></input>
      <br />
      <label for="room-id">Room ID:</label>
      <input
        value={roomId}
        onChange={(event) => setRoomId(event.target.value)}
        type="text"
        id="room-id"
        name="room-id"
      ></input>
      <br />
      <label for="check-in-date">check In Date:</label>
      <input
        value={checkInDate}
        onChange={(event) => setCheckInDate(event.target.value)}
        type="text"
        id="check-in-date"
        name="check-in-date"
      ></input>
      <br />
      <label for="check-out-date">check Out Date:</label>
      <input
        value={checkOutDate}
        onChange={(event) => setCheckOutDate(event.target.value)}
        type="text"
        id="check-out-date"
        name="check-out-date"
      ></input>
      <br />
      <label for="nightStay">Night Stay:</label>
      <input
        value={nightStay}
        onChange={(event) => setNightStay(event.target.value)}
        type="text"
        id="nightStay"
        name="nightStay"
      />
      <br />
      <button onClick={handleOnSubmit}>Submit</button>
    </form>
  );
};

export default NewBookingForm;
