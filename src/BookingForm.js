import React from "react";

const BookingForm = ({ bookings, setBookings }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const newBooking = {
      title: e.target.title.value,
      firstName: e.target.firstName.value,
      surname: e.target.surname.value,
      email: e.target.email.value,
      roomId: e.target.roomId.value,
      checkInDate: e.target.checkInDate.value,
      checkOutDate: e.target.checkOutDate.value
    };

    fetch("https://cbaggini-hotel-server.glitch.me/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBooking)
    })
      .then(response => {
        if (response.status !== 200) {
          alert("all fields are mandatory");
        }
        return response.json();
      })
      .then(data => setBookings(data));
    // if (
    //   e.target.title.value &&
    //   e.target.firstName.value &&
    //   e.target.surname.value &&
    //   e.target.email.value &&
    //   e.target.roomId.value &&
    //   e.target.checkInDate.value &&
    //   e.target.checkOutDate.value
    // ) {
    //   const maxId = bookings.length + 1;
    //   const newBooking = {
    //     id: maxId,
    //     title: e.target.title.value,
    //     firstName: e.target.firstName.value,
    //     surname: e.target.surname.value,
    //     email: e.target.email.value,
    //     roomId: e.target.roomId.value,
    //     checkInDate: e.target.checkInDate.value,
    //     checkOutDate: e.target.checkOutDate.value
    //   };
    //   setBookings(bookings.concat(newBooking));
    //   e.target.title.value = "";
    //   e.target.firstName.value = "";
    //   e.target.surname.value = "";
    //   e.target.email.value = "";
    //   e.target.roomId.value = "";
    //   e.target.checkInDate.value = "";
    //   e.target.checkOutDate.value = "";
    // } else {
    //   alert("all fields are mandatory");
    // }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="firstName" placeholder="First name" />
      <input type="text" name="surname" placeholder="Surname" />
      <input type="text" name="email" placeholder="Email" />
      <input type="text" name="roomId" placeholder="Room Id" />
      <input type="text" name="checkInDate" placeholder="Check in date" />
      <input type="text" name="checkOutDate" placeholder="Check out date" />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default BookingForm;
