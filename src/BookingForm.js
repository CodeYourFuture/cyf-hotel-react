import React from "react";
import "./BookingForm.css";

const BookingForm = ({ addCustomer, newBooking, setNewBooking }) => {
  console.log(addCustomer);

  const handleChange = e => {
    const updatedBooking = { ...newBooking, [e.target.id]: e.target.value };
    console.log(updatedBooking);
    console.log(e.target.id, e.target.name);
    setNewBooking(updatedBooking);
  };

  const onSubmitHandle = e => {
    e.preventDefault();

    addCustomer(newBooking);
    setNewBooking({
      title: "",
      firstName: "",
      surname: "",
      email: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: ""
    });
  };

  // let titles = [
  //   "Mr",
  //   "Mrs",
  //   "Ms",
  //   "Miss",
  //   "Madam",
  //   "Doctor",
  //   "Prince,",
  //   "Dame",
  //   "Professor",
  //   "Sir"
  // ];
  return (
    <div className="New-Booking">
      <div className="page-header">
        <h4>Add New Booking</h4>
      </div>
      <div className="col">
        <form onSubmit={onSubmitHandle}>
          <div className="booking-row">
            {/* <select className="booking-form" placeholder="Title">
              <option>Select a Tiltle</option>
              {titles.map((title, index) => (
                <option key={index}>{title}</option>
              ))}
            </select> */}

            <input
              onChange={handleChange}
              className="booking-form"
              type="text"
              id="title"
              placeholder="title"
              value={newBooking.title}
            />
            <input
              onChange={handleChange}
              className="booking-form"
              type="text"
              id="firstName"
              placeholder="First Name"
              value={newBooking.firstName}
            />
            <input
              onChange={handleChange}
              className="booking-form"
              type="text"
              id="surname"
              placeholder="Surname"
              value={newBooking.surname}
            />
            <input
              onChange={handleChange}
              className="booking-form"
              type="text"
              id="email"
              placeholder="Email"
              value={newBooking.email}
            />
            <input
              onChange={handleChange}
              className="booking-form"
              type="number"
              id="roomId"
              placeholder="Room ID"
              value={newBooking.roomId}
            />
            <input
              onChange={handleChange}
              className="booking-form"
              type="date"
              id="checkInDate"
              placeholder="Check in Date"
              value={newBooking.checkInDate}
            />
            <input
              onChange={handleChange}
              className="booking-form"
              type="date"
              id="checkOutDate"
              placeholder="Check Out Date"
              value={newBooking.checkOutDate}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default BookingForm;
