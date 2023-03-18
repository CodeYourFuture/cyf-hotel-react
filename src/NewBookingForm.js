import react, { useState } from "react";

const NewBookingForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const [error, setError] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (firstName === "") {
      setError("first name is empty");
      return;
    }
    if (surname === "") {
      setError("surname is empty");
      return;
    }

    onSubmit({
      title,
      firstName,
      surname,
      email,
      roomId,
      checkInDate,
      checkOutDate,
    });
  };
  return (
    <div>
      <form>
        {error}
        <label for="title">Title:</label>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          id="title"
          name="title"
        />
        {error}
        <label for="first-name">First name:</label>
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          type="text"
          id="first-name"
          name="first-name"
        ></input>

        <label for="surname">Surname:</label>
        <input
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
          type="text"
          id="surname"
          name="surname"
        ></input>

        <label for="email">Email:</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          id="email"
          name="email"
        ></input>

        <label for="room-id">Room ID:</label>
        <input
          value={roomId}
          onChange={(event) => setRoomId(event.target.value)}
          type="text"
          id="room-id"
          name="room-id"
        ></input>

        <label for="check-in-date">check In Date:</label>
        <input
          value={checkInDate}
          onChange={(event) => setCheckInDate(event.target.value)}
          type="text"
          id="check-in-date"
          name="check-in-date"
        ></input>

        <label for="check-out-date">check Out Date:</label>
        <input
          value={checkOutDate}
          onChange={(event) => setCheckOutDate(event.target.value)}
          type="text"
          id="check-out-date"
          name="check-out-date"
        ></input>
        <button onClick={handleOnSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default NewBookingForm;
