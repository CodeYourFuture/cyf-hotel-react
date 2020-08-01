import React, { useState } from "react";

const AddBookingForm = ({
  bookings,
  setBookings,
  showAddForm,
  setShowAddForm
}) => {
  const [userBooking, setUserBooking] = useState({
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
    fetch("https://cyf-alexandru-hotel-server.herokuapp.com/bookings", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userBooking)
    }).then(alert("booking created!"));
    setShowAddForm(!showAddForm);

    window.location.reload();
  }

  return (
    <form className="add-book-form " onSubmit={submit}>
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
