import React, { useState } from "react";

//import Bookings from "./Bookings";

/////////////////////////////////////////////

////////////////////////////////////////////////
const AddBookings = props => {
  //  let [bookings, setBookings] = useState([]);
  const [addBooking, setAddBooking] = useState({
    id: "",
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });
  let newArr = props.bookings.slice(0);
  const [bookingList, setBookingList] = useState(newArr);

  console.log(bookingList);
  function handleChange(event) {
    const updatedBooking = {
      ...addBooking,
      [event.target.name]: event.target.value,
      id: bookingList.length + 1
    };
    setAddBooking(updatedBooking);
    console.log(addBooking);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setBookingList(bookingList.concat(addBooking));
    setAddBooking({
      id: "",
      title: "",
      firstName: "",
      surname: "",
      email: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: ""
    });
  }
  console.log("addbook", addBooking);
  console.log(bookingList);

  return (
    <div>
      <div>
        <form>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={addBooking.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={addBooking.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={addBooking.surname}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={addBooking.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="roomId"
              placeholder="Room ID"
              value={addBooking.roomId}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="date"
              name="checkInDate"
              placeholder="checkInDate"
              value={addBooking.checkInDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="date"
              name="checkOutDate"
              placeholder="checkOutDate"
              value={addBooking.checkOutDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" onClick={handleSubmit}>
              Add booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBookings;
