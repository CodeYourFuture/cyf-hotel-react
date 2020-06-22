import React, { useState } from "react";

const AddBookingForm = ({
  bookings,
  setBookings,
  showAddForm,
  setShowAddForm
}) => {
  const [userBooking, setUserBooking] = useState({
    id: "",
    title: "",
    firstName: "",
    surname: "",
    roomId: "",
    email: "",
    checkInDate: "",
    checkOutDate: ""
  });

  function handleChange(e) {
    const updateUserBooking = {
      ...userBooking,
      [e.target.name]: e.target.value
    };
    setUserBooking(updateUserBooking);
  }

  function submit(e) {
    e.preventDefault();
    const updateBookings = [...bookings, userBooking];
    setBookings(updateBookings);
    setShowAddForm(!showAddForm);
  }

  return (
    <form className="add-book-form " onSubmit={submit}>
      <div>
        <input
          name="id"
          placeholder="Id"
          type="number"
          value={userBooking.id}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="title"
          placeholder="Title"
          type="text"
          value={userBooking.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="firstName"
          placeholder="First name"
          type="text"
          value={userBooking.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="surname"
          placeholder="Surname"
          type="text"
          value={userBooking.surname}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="roomId"
          placeholder="Room id"
          type="number"
          value={userBooking.roomId}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="email"
          placeholder="e-mail"
          type="text"
          value={userBooking.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="checkInDate"
          placeholder="Check in"
          type="date"
          value={userBooking.checkInDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="checkOutDate"
          placeholder="Check out"
          type="date"
          value={userBooking.checkOutDate}
          onChange={handleChange}
        />
      </div>
      <div className="booking-submit-btn">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default AddBookingForm;
