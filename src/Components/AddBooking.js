import React, { useState } from "react";
import AddBookingForm from "./Bookings/AddBookingForm";

const AddBooking = ({ bookings, setBookings, initialBookings }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [removeInputValue, setRemoveInputValue] = useState("");

  function removeBooking(surname) {
    var filteredBooking = bookings.filter(
      booking => booking.surname.toLowerCase() !== surname.toLowerCase()
    );
    setBookings(filteredBooking);

    setRemoveInputValue("");
  }

  function handleChange(e) {
    setRemoveInputValue(e.target.value);
  }

  return (
    <div className="add-booking">
      <h4 className="text-left">Add a Booking</h4>
      <hr />
      <div className="title-add-booking">
        <div className="btn-remove">
          <button
            className="btn btn-primary"
            onClick={() => {
              removeBooking(removeInputValue);
            }}
          >
            Remove a booking
          </button>

          <input onChange={handleChange} placeholder="remove by surname" />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            setShowAddForm(!showAddForm);
          }}
        >
          Add a booking
        </button>
      </div>

      <div
        className={
          showAddForm ? "show-AddBookingForm" : "not-show-AddBookingForm"
        }
      >
        <AddBookingForm bookings={bookings} setBookings={setBookings} />
      </div>
    </div>
  );
};

export default AddBooking;
